/**
 *
 * Hoodie
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 20;
  opacity: 0.5;

  #top {
    position: absolute;
    top: 0;
    width: 100%;
    height: 20vw;
    background-color: black;
  }

  #left {
    position: absolute;
    left: 0;
    width: 8vw;
    height: 100%;
    background-color: black;
  }

  #right {
    position: absolute;
    right: 0;
    width: 8vw;
    height: 100%;
    background-color: black;
  }

  #bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 90vw;
    background-color: black;
  }
`;

function Hoodie() {
  return (
    <Container>
      <div id="top" />
      <div id="left" />
      <div id="right" />
      <div id="bottom" />
    </Container>
  );
}

Hoodie.propTypes = {};

export default Hoodie;
