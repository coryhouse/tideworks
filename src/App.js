import React, { Component } from 'react';
import User from './User';
import ManageUser from './ManageUser';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // Not in state since this never changes.
    this.emptyUser = {
      id: null,
      firstName: '',
      lastName: '' 
    }

    this.state = {
      users: [
        { 
          id: 1,
          firstName: 'Cory',
          lastName: 'House'
        },
        { 
          id: 2,
          firstName: 'Bobby',
          lastName: 'Tables'
        },
        { 
          id: 3,
          firstName: 'Jonny',
          lastName: 'Ives'
        }
      ],
      selectedUser: this.emptyUser,
      showManageUser: false
    }
  }

  deleteUser = (id) => {
    const users = this.state.users.filter(user => user.id !== id);
    this.setState({users, showManageUser: false});
  }

  save = (user) => {
    let users = [];
    if (user.id) {
      users = [
        ...this.state.users.filter( u => u.id !== user.id), 
        user
      ];
    } else {
      user.id = Math.random();
      users = [...this.state.users, user];
    }
    this.setState({users, selectedUser: this.emptyUser, showManageUser: false});
  }

  handleUserClick = (id) => {
    const selectedUser = this.state.users.find(u => u.id === id);
    this.setState({ selectedUser, showManageUser: true });
  }

  handleAddUserClick = () => {
    this.setState({selectedUser: this.emptyUser, showManageUser: true});
  }

  render() {
    const {selectedUser, showManageUser} = this.state;

    return (
      <div className="App">
        { this.state.users.map( user => {
          return (
            <User 
              key={user.id} 
              user={user} 
              onUserClick={this.handleUserClick}
              deleteUser={this.deleteUser} />) 
          })
        }

        <button onClick={this.handleAddUserClick}>Add User</button>

        {showManageUser && <ManageUser user={selectedUser} save={this.save} />}
      </div>
    );
  }
}

export default App;
