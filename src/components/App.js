import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/userActions";
import User from "./User";
import ManageUser from "./ManageUser";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);

    // Not in state since this never changes.
    this.emptyUser = {
      id: null,
      firstName: "",
      lastName: ""
    };

    this.state = {
      selectedUser: this.emptyUser,
      showManageUser: false
    };
  }

  deleteUser = id => {
    this.props.actions.deleteUser(id);
    this.setState({ showManageUser: false });
  };

  save = user => {
    this.props.actions.saveUser(user);
    this.setState({ selectedUser: this.emptyUser, showManageUser: false });
  };

  handleUserClick = id => {
    const selectedUser = this.props.users.find(u => u.id === id);
    this.setState({ selectedUser, showManageUser: true });
  };

  handleAddUserClick = () => {
    this.setState({ selectedUser: this.emptyUser, showManageUser: true });
  };

  render() {
    const { selectedUser, showManageUser } = this.state;
    const { users } = this.props;

    return (
      <div className="App">
        {users.map(user => {
          return (
            <User
              key={user.id}
              user={user}
              onUserClick={this.handleUserClick}
              deleteUser={this.deleteUser}
            />
          );
        })}

        <button onClick={this.handleAddUserClick}>Add User</button>

        {showManageUser && <ManageUser user={selectedUser} save={this.save} />}
      </div>
    );
  }
}

App.propTypes = {
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
