import React from 'react';
import PropTypes from 'prop-types';

class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                {this.props.greeting} {this.props.firstName}
            </div>
        )
    }
}

HelloWorld.propTypes = {
    greeting: PropTypes.string,
    firstName: PropTypes.string
};

HelloWorld.defaultProps = {
    greeting: 'Hello',
    firstName: 'world'
};

export default HelloWorld;