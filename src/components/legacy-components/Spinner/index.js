/**
 *
 * Spinner
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import theme from '../../utils/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const skCircleBounceDelay = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1);
  }
`;

const SkCircle = styled.div`
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
`;

const SkChild = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transform: rotate(${props => (props.rotation ? props.rotation : '0')}deg);
  &:before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: ${theme.palette.primary};
    border-radius: 100%;
    animation: ${skCircleBounceDelay} 1.2s infinite ease-in-out both;
    animation-delay: -${props => (props.delay ? props.delay : '0')}s;
  }
`;

const skChildProps = [
  {},
  { rotation: 30, delay: 1.1 },
  { rotation: 60, delay: 1 },
  { rotation: 90, delay: 0.9 },
  { rotation: 120, delay: 0.8 },
  { rotation: 150, delay: 0.7 },
  { rotation: 180, delay: 0.6 },
  { rotation: 210, delay: 0.5 },
  { rotation: 240, delay: 0.4 },
  { rotation: 270, delay: 0.3 },
  { rotation: 300, delay: 0.2 },
  { rotation: 330, delay: 0.1 },
];

function Spinner() {
  return (
    <Container>
      <SkCircle>
        {skChildProps.map((childProps, index) => (
          <SkChild key={index} {...childProps} />
        ))}
      </SkCircle>
    </Container>
  );
}

Spinner.propTypes = {};

export default Spinner;
