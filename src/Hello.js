import React from 'react';
import PropTypes from 'prop-types';

class Hello extends React.Component {
    render() {
        return (
            <div>
                {this.props.greeting} {this.props.firstName}
            </div>
        )
    }
}

Hello.propTypes = {
    greeting: PropTypes.string,
    firstName: PropTypes.string
};

Hello.defaultProps = {
    greeting: 'Hello'
};

export default Hello;