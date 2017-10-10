import React from 'react';
import PropTypes from 'prop-types';

function Hello({greeting='Hello', firstName}) {
    return (
        <div>
            {greeting} {firstName}
        </div>
    )
}

Hello.propTypes = {
    greeting: PropTypes.string,
    firstName: PropTypes.string
};

export default Hello;