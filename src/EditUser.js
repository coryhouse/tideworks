import React from 'react';
import PropTypes from 'prop-types';

const emptyUser = {
    id: null,
    firstName: '',
    lastName: '' 
}

class EditUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        };
    }

    handleChange = (event) => {
        const newUser = Object.assign({}, this.state.user);
        newUser[event.target.name] = event.target.value;
        this.setState({ user: newUser });        
    } 

    handleSaveClick = (event) => {
        event.preventDefault();
        this.props.save(this.state.user);
        this.setState({user: Object.assign({}, emptyUser)});
    }

    render() {
        const {firstName, lastName} = this.state.user;
        return (
            <form>
                First Name: <input type="text" name="firstName" onChange={this.handleChange} value={firstName} /><br/>
                Last Name: <input type="text" name="lastName" onChange={this.handleChange} value={lastName} /><br/>
                <input type="submit" value="Save" onClick={this.handleSaveClick}/>
            </form>
        )
    }
}

EditUser.propTypes = {
    user: PropTypes.object,
    save: PropTypes.func.isRequired
};

EditUser.defaultProps = {
    user: emptyUser
}

export default EditUser;