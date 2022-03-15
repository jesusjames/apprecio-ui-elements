/**
 *
 * BackArrow
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { BackArrowStyled } from './style';

// Assets
import RedArrow from '../image/RedArrowRight.svg';
import WhiteArrow from '../image/WhiteArrowRight.svg';

const BackArrow = ({ onClick, white }) => (
  <BackArrowStyled type="button" onClick={onClick}>
    <img src={white ? WhiteArrow : RedArrow} alt="<" />
  </BackArrowStyled>
);

BackArrow.propTypes = {
  /**
   * Función que se ejecuta cuando se hace click en el botón.
   */
  onClick: PropTypes.func,
  /**
   * Dictamina si el botón debe ser blanco o rojo.
   */
  white: PropTypes.bool,
};

export default BackArrow;
