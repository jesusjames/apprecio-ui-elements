/**
 *
 * TenderosMxBadge
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TenderosMX from 'images/TenderosMX.png';

const ImgContainer = styled.div`
  position: absolute;
  top: ${props => `calc(${props.top}px - 10px)`};
  left: ${props => `calc(${props.left}px + 100px)`};

  & > img {
    width: 59px;
  }
`;

function TenderosMxBadge({ top, left }) {
  return (
    <ImgContainer top={top} left={left}>
      <img src={TenderosMX} alt="TenderosMX" />
    </ImgContainer>
  );
}

TenderosMxBadge.propTypes = {
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
};

export default TenderosMxBadge;
