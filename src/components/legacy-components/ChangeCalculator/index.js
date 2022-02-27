/**
 *
 * ChangeCalculator
 *
 */

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from 'utils/theme';

// Assets
import NotetakingDone from 'images/NotetakingDone.svg';
import NotetakingDoneActive from 'images/NotetakingDoneActive.svg';
import Close from 'images/Close.svg';

const StyledChangeCalculator = styled.div`
  height: 200px;
  width: ${theme.width.default};

  box-shadow: 0px 3px 20px #00000029;

  border-radius: ${theme.rounding.rounded};

  margin: ${theme.spacing[5]} 0;
  padding: ${theme.spacing[4]};

  position: relative;

  .change-calculator-message {
    color: ${theme.palette.text.link};
    font: normal normal 500 18px/22px ${theme.typeface.default}, sans-serif;
    letter-spacing: -0px;

    span {
      color: ${theme.palette.tertiary};
      font: normal normal 500 16px/22px ${theme.typeface.default}, sans-serif;
      opacity: 0.5;
    }
  }

  .input-container {
    display: flex;

    position: relative;
  }

  .change-calculator-input {
    height: 50px;
    box-sizing: border-box;
    width: 100%;

    margin: ${theme.spacing[4]} 0;
    padding: ${theme.spacing[3]};

    border: 2px solid ${theme.palette.tertiary};
    border-radius: ${theme.rounding.wedged};

    &::placeholder {
      color: ${theme.palette.tertiary};
      font: normal normal 500 16px/14px ${theme.typeface.default}, sans-serif;
      letter-spacing: -0.16px;
    }
  }

  #done-button {
    position: absolute;
    top: 43px;
    right: 10px;

    background-color: ${theme.palette.background.white};
    border: none;
    border-radius: ${theme.rounding.rounded};

    transition: right 0.2s ease-in-out;
  }

  .change-display {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 100%;

    position: relative;
  }

  .change-display-left-side {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    height: 100%;

    flex: 1;
  }

  .checkout-value-display {
    p {
      font: normal normal 500 14px/22px ${theme.typeface.default}, sans-serif;
      color: ${theme.palette.text.link};
      letter-spacing: -0.14px;
      text-align: center;
      margin-bottom: ${theme.spacing[1]};
    }

    h2 {
      font: normal normal 500 25px/22px ${theme.typeface.default}, sans-serif;
      color: ${theme.palette.text.link};
      letter-spacing: -0.25px;
      text-align: center;
      margin-bottom: ${theme.spacing[2]};
    }
  }

  .value-display {
    p {
      font: normal normal 500 14px/22px ${theme.typeface.default}, sans-serif;
      color: ${theme.palette.tertiary};
      letter-spacing: -0.14px;
      text-align: center;
      margin-bottom: ${theme.spacing[1]};
    }

    h2 {
      font: normal normal 500 25px/22px ${theme.typeface.default}, sans-serif;
      color: ${theme.palette.tertiary};
      letter-spacing: -0.25px;
      text-align: center;
      margin-bottom: ${theme.spacing[2]};
    }
  }

  .change-display-right-side {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    height: 100%;

    flex: 2;

    h1 {
      font: normal normal 500 40px/40px ${theme.typeface.default}, sans-serif;
      color: ${theme.palette.text.primary};
      letter-spacing: -0.25px;
      margin: 0;
      text-align: center;
      margin-bottom: ${theme.spacing[2]};
    }

    p {
      font: normal normal 500 28px/28px ${theme.typeface.default}, sans-serif;
      color: ${theme.palette.text.primary};
      letter-spacing: -0.14px;
      text-align: center;
    }
  }

  .close-button {
    position: absolute;
    top: -20px;
    right: -20px;

    background-color: transparent;
    border: none;
  }
`;

function ChangeCalculator({ checkoutValue }) {
  const [value, setValue] = useState('');
  const [showResult, setShowResult] = useState(false);

  const inputRef = useRef(null);
  const doneButtonRef = useRef(null);
  const closeButtonRef = useRef(null);

  return (
    <StyledChangeCalculator>
      {showResult ? (
        <div className="change-display">
          <button
            ref={closeButtonRef}
            type="button"
            className="close-button"
            onTouchStart={() => {
              closeButtonRef.current.style.transform = `scale(0.9)`;
            }}
            onTouchEnd={() => {
              closeButtonRef.current.style.transform = `scale(1)`;
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
            <h1>${(parseFloat(value) - checkoutValue).toFixed(2)}</h1>
            <p>Cambio</p>
          </div>
        </div>
      ) : (
        <>
          {' '}
          <p className="change-calculator-message">
            Conoce cuánto cambio debes regresar <span>(Opcional)</span>
          </p>
          <div className="input-container">
            <input
              ref={inputRef}
              className="change-calculator-input"
              type="number"
              placeholder="¿Cuánto dinero recibes?"
              value={value}
              onChange={e => setValue(e.target.value)}
            />
            <button
              ref={doneButtonRef}
              id="done-button"
              type="button"
              onTouchStart={() => {
                if (value) {
                  doneButtonRef.current.style.transform = `scale(0.9)`;
                }
              }}
              onTouchEnd={() => {
                if (value) {
                  doneButtonRef.current.style.transform = `scale(1)`;
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
                src={!value ? NotetakingDone : NotetakingDoneActive}
                alt="Done"
              />
            </button>
          </div>
        </>
      )}
    </StyledChangeCalculator>
  );
}

ChangeCalculator.propTypes = {
  /**
   * How much the costumer is going to be charged.
   */
  checkoutValue: PropTypes.number.isRequired,
};

export default ChangeCalculator;
