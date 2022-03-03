/**
 *
 * NoteTakingInput
 *
 */

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { NoteTakingInputStyled } from './style';

// Assets
import NoteTakingIcon from '../image/NoteTakingIcon.svg';
import NoteTakingDone from '../image/NoteTakingDone.svg';
import NoteTakingDoneActive from '../image/NoteTakingDoneActive.svg';

const NoteTakingInput = ({
  baseZIndex = 0,
  forceElongation,
  note,
  noteSetter,
}) => {
  const [elongated, setElongated] = useState(forceElongation);

  const doneButtonRef = useRef(null);
  const inputRef = useRef(null);

  return (
    <NoteTakingInputStyled baseZIndex={baseZIndex} elongated={elongated}>
      <img id="note-taking-icon" src={NoteTakingIcon} alt="Notes" />
      <input
        id="value-input"
        ref={inputRef}
        value={note}
        onChange={(e) => noteSetter(e.target.value)}
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
            doneButtonRef.current.style.transform = 'scale(0.9)';
          }
        }}
        onTouchEnd={() => {
          if (note) {
            doneButtonRef.current.style.transform = 'scale(1)';
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
        <img src={!note ? NoteTakingDone : NoteTakingDoneActive} alt="Done" />
      </button>
    </NoteTakingInputStyled>
  );
};

NoteTakingInput.defaultProps = {
  baseZIndex: 0,
  forceElongation: false,
};

NoteTakingInput.propTypes = {
  /**
   * El valor de z-index inicial, útil cuando se manejan varios Drawers.
   */
  baseZIndex: PropTypes.number,
  /**
   * Determina si el campo se mantiene extendido aun cuando no está enfocado.
   */
  forceElongation: PropTypes.bool,
  /**
   * Variable que almacena el valor del campo.
   */
  note: PropTypes.string.isRequired,
  /**
   * Función que altera el valor del campo.
   */
  noteSetter: PropTypes.func.isRequired,
};

export default NoteTakingInput;
