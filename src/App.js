import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import ContactForm from './ContactForm';
import User from './User';
import EditUser from './EditUser';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
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
      ]
    }
  }

  deleteUser = (id) => {
    const users = this.state.users.filter(user => user.id !== id);
    this.setState({users});
  }

  save = (user) => {
    if (!user.id) {
      user.id = Math.random();
    };
    const users = [...this.state.users, user];
    this.setState({users});
  }

  render() {
    return (
      <div className="App">
        <HelloWorld age={5} />
        <ContactForm/>
        { this.state.users.map( user => <User key={user.id} user={user} deleteUser={this.deleteUser} />) }
        <h1>Add user</h1>
        <EditUser save={this.save} />
      </div>
    );
  }
}

export default App;
