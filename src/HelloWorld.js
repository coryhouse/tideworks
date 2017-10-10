import React from 'react';
import PropTypes from 'prop-types';

class HelloWorld extends React.Component {
    // static defaultProps = {
    //     firstName: 'world'
    // };

    static propTypes = {
        firstName: PropTypes.string.isRequired,
        age: PropTypes.number
    };

    render() {
        return <div className="green">Hello {this.props.firstName} {this.props.age}</div>;
    }
}

// HelloWorld.propTypes = {
//     firstName: PropTypes.string.isRequired,
//     age: PropTypes.number
// };

HelloWorld.defaultProps = {
    firstName: 'world'
};

export default HelloWorld;