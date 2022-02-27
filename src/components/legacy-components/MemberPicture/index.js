/**
 *
 * MemberPicture
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from 'utils/theme';
import DefaultMember from 'images/DefaultMember.svg';

const MemberPictureContainer = styled.button`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  border-width: 2px;
  border-color: ${theme.palette.primary};
  border-style: solid;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.palette.primary};
  margin-right: ${theme.spacing[2]};

  & > img {
    width: 37px;
    height: 37px;
  }
`;

function MemberPicture({ src, onClick }) {
  return (
    <MemberPictureContainer onClick={src ? null : onClick}>
      <img src={src || DefaultMember} alt="M" />
    </MemberPictureContainer>
  );
}

MemberPicture.propTypes = {
  /**
   * Route to the member's picture.
   */
  src: PropTypes.string,
  /**
   * Callback function to be called when the picture is clicked.
   */
  onClick: PropTypes.func,
};

export default MemberPicture;
