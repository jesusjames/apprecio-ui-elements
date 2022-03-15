/**
 *
 * MemberPicture
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { MemberPictureStyled } from './style';

// Assets
import DefaultMember from '../image/DefaultMember.svg';

const MemberPicture = ({
  onClick,
  src,
}) => (
  <MemberPictureStyled onClick={src ? null : onClick}>
    <img src={src || DefaultMember} alt="M" />
  </MemberPictureStyled>
);

MemberPicture.defaultProps = {
  onClick: () => {},
  src: '',
};

MemberPicture.propTypes = {
  /**
   * Función que se ejeccuta al hacer click en el componente
   */
  onClick: PropTypes.func,
  /**
   * Ruta a la foto de perfil.
   */
  src: PropTypes.string,
};

export default MemberPicture;
