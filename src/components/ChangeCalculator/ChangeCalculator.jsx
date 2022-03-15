/**
 *
 * ChangeCalculator
 *
 */

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { ChangeCalculatorStyled } from './style';

// Component
import NoteTakingDone from '../image/NoteTakingDone.svg';
import NoteTakingDoneActive from '../image/NoteTakingDoneActive.svg';
import Close from '../image/Close.svg';

const ChangeCalculator = ({ checkoutValue }) => {
  const [value, setValue] = useState('');
  const [showResult, setShowResult] = useState(false);

  const inputRef = useRef(null);
  const doneButtonRef = useRef(null);
  const closeButtonRef = useRef(null);

  return (
    <ChangeCalculatorStyled>
      {showResult ? (
        <div className="change-display">
          <button
            ref={closeButtonRef}
            type="button"
            className="close-button"
            onTouchStart={() => {
              closeButtonRef.current.style.transform = 'scale(0.9)';
            }}
            onTouchEnd={() => {
              closeButtonRef.current.style.transform = 'scale(1)';
              window.navigator.vibrate(50);
            }}
            onClick={() => setShowResult(false)}
          >
            <img src={Close} alt="X" />
          </button>
          <div className="change-display-left-side">
            <div className="checkout-value-display">
              <p>Cobrando</p>
              <h2>{checkoutValue}</h2>
            </div>
            <div className="value-display">
              <p>Recibido</p>
              <h2>{parseFloat(value).toFixed(2)}</h2>
            </div>
          </div>
          <div className="change-display-right-side">
            <h1>
              $
              {(parseFloat(value) - checkoutValue).toFixed(2)}
            </h1>
            <p>Cambio</p>
          </div>
        </div>
      ) : (
        <>
          {' '}
          <p className="change-calculator-message">
            Conoce cuánto cambio debes regresar
            {' '}
            <span>(Opcional)</span>
          </p>
          <div className="input-container">
            <input
              ref={inputRef}
              className="change-calculator-input"
              type="number"
              placeholder="¿Cuánto dinero recibes?"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              ref={doneButtonRef}
              id="done-button"
              type="button"
              onTouchStart={() => {
                if (value) {
                  doneButtonRef.current.style.transform = 'scale(0.9)';
                }
              }}
              onTouchEnd={() => {
                if (value) {
                  doneButtonRef.current.style.transform = 'scale(1)';
                  window.navigator.vibrate(50);
                }
              }}
              onClick={() => {
                if (value) {
                  setShowResult(true);
                } else {
                  inputRef.current.focus();
                }
              }}
            >
              <img
                src={!value ? NoteTakingDone : NoteTakingDoneActive}
                alt="Done"
              />
            </button>
          </div>
        </>
      )}
    </ChangeCalculatorStyled>
  );
};

ChangeCalculator.propTypes = {
  /**
   * Cuánto se le va a cobrar al cliente.
   */
  checkoutValue: PropTypes.number.isRequired,
};

export default ChangeCalculator;
