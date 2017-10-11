import React from 'react';
import PropTypes from 'prop-types';

class Hello extends React.Component {
  render() {
    const { greeting, firstName } = this.props;
    return (
      <div>
        {greeting} {firstName}
      </div>
    );
  }
}

Hello.propTypes = {
  greeting: PropTypes.string,
  firstName: PropTypes.string.isRequired
};

Hello.defaultProps = {
  greeting: 'Hello'
};

export default Hello;
