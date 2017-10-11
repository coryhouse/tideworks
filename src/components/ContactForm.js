import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    message: ''
  };

  static whatever = 4;

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: ''
    };

    this.myVar = 14;

    //this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.myVar++;
    console.log(`name: ${this.state.name}`);
    console.log(`message: ${this.state.message}`);
  };

  render() {
    return (
      <form>
        {this.myVar}
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <label>Message</label>
        <input
          type="text"
          name="message"
          onChange={this.handleChange}
          value={this.state.message}
        />
        <input type="submit" value="submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}

export default ContactForm;
