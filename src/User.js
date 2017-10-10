import React from 'react';
import PropTypes from 'prop-types';

class User extends React.Component {
    handleUserClick = (event) => {
        event.preventDefault();
        this.props.onUserClick(this.props.user.id);
    }

    render() {
        const {deleteUser, user} = this.props;
        const {firstName, lastName, id} = user;

        return (
            <div>
                <button onClick={() => deleteUser(id)}>Delete</button>
                <a href="" onClick={this.handleUserClick}>
                    {firstName} {lastName}
                </a>
            </div>
        )
    }
}

User.propTypes = {
    user: PropTypes.object.isRequired,
    deleteUser: PropTypes.func.isRequired,
    onUserClick: PropTypes.func.isRequired
};

export default User;