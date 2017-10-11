import React from "react";
import PropTypes from "prop-types";

class ManageUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ user: nextProps.user });
  }

  handleChange = event => {
    const newUser = Object.assign({}, this.state.user);
    newUser[event.target.name] = event.target.value;
    this.setState({ user: newUser });
  };

  handleSaveClick = event => {
    event.preventDefault();
    this.props.save(this.state.user);
  };

  render() {
    const { id, firstName, lastName } = this.state.user;
    return (
      <form>
        <h1>{id ? "Edit" : "Add"} user</h1>
        First Name:{" "}
        <input
          type="text"
          name="firstName"
          onChange={this.handleChange}
          value={firstName}
        />
        <br />
        Last Name:{" "}
        <input
          type="text"
          name="lastName"
          onChange={this.handleChange}
          value={lastName}
        />
        <br />
        <input type="submit" value="Save" onClick={this.handleSaveClick} />
      </form>
    );
  }
}

ManageUser.propTypes = {
  user: PropTypes.object.isRequired,
  save: PropTypes.func.isRequired
};

export default ManageUser;
