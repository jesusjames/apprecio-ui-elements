/**
 *
 * BackArrow
 *
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';

import RedArrow from '../image/ArrowRightRed.svg';
import WhiteArrow from '../image/ArrowRightWhite.svg';

const Container = styled.button`
  left: 0;
  top: 0;
  position: relative;
  cursor: pointer;
  padding: 0;
  padding-right: .75rem;
  padding-bottom: .75rem;
  transform: rotate(180deg);
  z-index: 20;
  background-color: transparent;
  border: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }
`;

function BackArrow({ onClick, white }) {
  return (
    <Container type="button" onClick={onClick}>
      <img src={white ? WhiteArrow : RedArrow} alt="<" />
    </Container>
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
