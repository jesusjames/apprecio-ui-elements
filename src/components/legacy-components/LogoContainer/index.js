/**
 *
 * LogoContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LogoContainerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 190px;
    margin-bottom: 40px;
  }
`;

function LogoContainer({ children }) {
  return <LogoContainerContainer>{children}</LogoContainerContainer>;
}

LogoContainer.propTypes = {
  /**
   * The children components to be rendered.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default LogoContainer;
