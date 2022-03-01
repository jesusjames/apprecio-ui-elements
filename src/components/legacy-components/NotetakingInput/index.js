/**
 *
 * NotetakingInput
 *
 */

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from 'utils/theme';

// Assets
import NotetakingIcon from 'images/NotetakingIcon.svg';
import NotetakingDone from 'images/NotetakingDone.svg';
import NotetakingDoneActive from 'images/NotetakingDoneActive.svg';

const StyledContainer = styled.div`
  border: none;
  border-radius: ${theme.rounding.wedged};

  width: ${props => (props.elongated ? '100%' : '130px')};
  height: 42px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0;

  position: absolute;
  right: 0;

  z-index: ${props => props.baseZIndex + 10};

  transition: width 0.2s ease-in-out;

  overflow-x: hidden;

  #notetaking-icon {
    position: absolute;

    height: 50%;
    margin: 0 ${theme.spacing[2]};
  }

  input {
    width: 100%;
    height: 100%;

    border: 1px solid white;
    border-radius: ${theme.rounding.wedged};

    color: ${theme.palette.disabled};
    font-family: ${theme.typeface.default};
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.16px;
    line-height: 25px;
    outline: none !important;

    padding-left: 45px;
  }

  #done-button {
    position: absolute;
    right: ${props => (props.elongated ? '10px' : '-30px')};

    background-color: ${theme.palette.background.white};
    border: none;
    border-radius: ${theme.rounding.rounded};

    transition: right 0.2s ease-in-out;
  }
`;

function NotetakingInput({
  note,
  noteSetter,
  baseZIndex = 0,
  forceElongation,
}) {
  const [elongated, setElongated] = useState(forceElongation);

  const doneButtonRef = useRef(null);
  const inputRef = useRef(null);

  return (
    <StyledContainer baseZIndex={baseZIndex} elongated={elongated}>
      <img id="notetaking-icon" src={NotetakingIcon} alt="Notes" />
      <input
        id="value-input"
        ref={inputRef}
        value={note}
        onChange={e => noteSetter(e.target.value)}
        onFocus={() => setElongated(true)}
        onBlur={() => setElongated(forceElongation)}
        size="1"
        autoComplete="off"
        placeholder={elongated ? 'Agregar una Nota' : 'Nota'}
      />
      <button
        ref={doneButtonRef}
        id="done-button"
        type="button"
        onTouchStart={() => {
          if (note) {
            doneButtonRef.current.style.transform = `scale(0.9)`;
          }
        }}
        onTouchEnd={() => {
          if (note) {
            doneButtonRef.current.style.transform = `scale(1)`;
            window.navigator.vibrate(50);
          }
        }}
        onClick={() => {
          if (note) {
            setElongated(forceElongation);
          } else {
            inputRef.current.focus();
          }
        }}
      >
        <img src={!note ? NotetakingDone : NotetakingDoneActive} alt="Done" />
      </button>
    </StyledContainer>
  );
}

NotetakingInput.propTypes = {
  note: PropTypes.string.isRequired,
  noteSetter: PropTypes.func.isRequired,
  baseZIndex: PropTypes.number,
  forceElongation: PropTypes.bool,
};

export default NotetakingInput;
