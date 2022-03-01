/**
 *
 * Error
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import Header from '../Header';

function Error({ error }) {
  if (error) {
    return <Header mt3 mb3 message={error} variant="error" />;
  }
  return null;
}

Error.propTypes = {
  /**
   * The error message to display.
   */
  error: PropTypes.string.isRequired,
};

export default Error;
