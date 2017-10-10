import React from 'react';
import PropTypes from 'prop-types';

class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                Hello {this.props.firstName}
            </div>
        )
    }
}

HelloWorld.propTypes = {
    firstName: PropTypes.string.isRequired,
    age: PropTypes.number
};

HelloWorld.defaultProps = {
    firstName: 'world'
};

export default HelloWorld;