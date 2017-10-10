import React from 'react';
import PropTypes from 'prop-types';

class User extends React.Component {
    render() {
        const {firstName, lastName, id} = this.props.user;
        const {deleteUser} = this.props;

        return (
            <div>
                <button onClick={() => deleteUser(id)}>Delete</button>
                First name: {firstName}
                Last name: {lastName}
            </div>
        )
    }
}

User.propTypes = {
    user: PropTypes.object.isRequired,
    deleteUser: PropTypes.func.isRequired
};

export default User;