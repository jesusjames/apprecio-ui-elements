/**
 *
 * BackArrow
 *
 */

import PropTypes from 'prop-types';

import { BackArrowStyled } from './styled';

import RedArrow from '../image/ArrowRightRed.svg';
import WhiteArrow from '../image/ArrowRightWhite.svg';

function BackArrow({ onClick, white }) {
  return (
    <BackArrowStyled type="button" onClick={onClick}>
      <img src={white ? WhiteArrow : RedArrow} alt="<" />
    </BackArrowStyled>
  );
}

BackArrow.propTypes = {
  /**
   * Callback function which executes whenever the component is clicked on.
   */
  onClick: PropTypes.func,
  /**
   * Whether the arrow is white or red.
   */
  white: PropTypes.bool,
};

export default BackArrow;
