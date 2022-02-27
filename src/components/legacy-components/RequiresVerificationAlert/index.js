/**
 *
 * RequiresVerificationAlert
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Alert from 'images/Alert.svg';
import theme from 'utils/theme';

const RequiresVerificationAlertContainer = styled.div`
  display: flex;
  background-color: ${theme.palette.text.link};
  align-items: center;
  border-radius: 3px;
  position: absolute;
  top: calc(${props => props.top}px + 14px);
  right: calc((100vw - ${theme.width.default}) / 2 + 10px);
  cursor: pointer;

  & > p {
    margin: 0;
    margin-right: 7px;
    color: ${theme.palette.white};
    font-family: ${theme.typeface.default};
    font-weight: 600;
    letter-spacing: -0.14px;
    font-size: 12px;
  }
`;

function RequiresVerificationAlert({ hasValue, isVerified, top, onClick }) {
  if (!isVerified) {
    return (
      <RequiresVerificationAlertContainer top={top} onClick={onClick}>
        <img src={Alert} alt="alert" />
        {hasValue ? <p>Verificar</p> : null}
      </RequiresVerificationAlertContainer>
    );
  }
  return null;
}

RequiresVerificationAlert.propTypes = {
  hasValue: PropTypes.bool,
  isVerified: PropTypes.bool,
  top: PropTypes.number,
  onClick: PropTypes.func,
};

export default RequiresVerificationAlert;
