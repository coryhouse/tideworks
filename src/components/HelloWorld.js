import React from "react";
import PropTypes from "prop-types";

class HelloWorld extends React.Component {
  add(x, y) {
    return x + y;
  }

  render() {
    return <div>{`Hello ${this.props.firstName} ${this.props.age}`}</div>;
  }
}

HelloWorld.propTypes = {
  firstName: PropTypes.string.isRequired,
  age: PropTypes.number
};

HelloWorld.defaultProps = {
  firstName: "world"
};

export default HelloWorld;
