/**
 *
 * CashRegisterDisplay
 *
 */

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from 'utils/theme';

// Assets
import ScannerIcon from 'images/ScannerIcon.svg';
import IconCalculator from 'images/IconCalculator.svg';

const StyledContainer = styled.div`
  transition: all 0.2s ease-in-out;

  width: ${theme.width.default};

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: ${props =>
    `calc((100 * ${props.heightUnit}px - 310px) / 100 * 2)`};
  margin-bottom: ${props =>
    `calc((100 * ${props.heightUnit}px - 310px) / 100 * 2)`};

  z-index: 1;

  position: relative;
  top: ${props => (props.mode === 'calculator' ? '-35px' : '0')};

  #number-display {
    background-color: transparent;
    border: 2px solid
      ${props => {
    switch (props.mode) {
      case 'scanner':
            return theme.palette.secondary;
      case 'expense':
            return theme.palette.secondary;
      default:
            return 'white';
    }
  }};
    border-radius: ${theme.rounding.wedged};

    min-height: 40px;
    height: ${props => `calc((100*${props.heightUnit}px - 310px) / 100 * 14)`};
    max-height: 60px;

    flex: 1;

    margin: ${theme.spacing[1]};
    padding: 0 ${theme.spacing[3]};

    color: ${props => {
    switch (props.mode) {
      case 'scanner':
        return theme.palette.secondary;
      case 'expense':
        return theme.palette.secondary;
      default:
        return 'white';
    }
  }} !important;
    -webkit-text-fill-color: ${props => {
      switch (props.mode) {
        case 'scanner':
          return theme.palette.secondary;
        case 'expense':
          return theme.palette.secondary;
        default:
        return 'white';
      }
    }};
    opacity: 1 !important;
    font-family: ${theme.typeface.default}, sans-serif;
    font-size: 30px;
    font-weight: bold;
    text-align: right;
  }

  #scanner-button,
  #calculator-button {
    background-color: transparent;
    border: 2px solid
      ${props => {
    switch (props.mode) {
      case 'scanner':
            return theme.palette.secondary;
      case 'expense':
            return theme.palette.secondary;
      default:
            return 'white';
    }
  }};
    border-radius: ${theme.rounding.wedged};

    min-height: 40px;
    height: ${props => `calc((100*${props.heightUnit}px - 310px) / 100 * 14)`};
    max-height: 60px;
    width: 60px;

    margin: ${theme.spacing[1]};

    #scanner-icon {
      max-height: 100%;
    }

    #calculator-icon {
      max-height: 70%;
    }

    cursor: pointer;
  }
`;

function CashRegisterDisplay({
  mode = 'scanner',
  value,
  heightUnit,
  onButtonClick,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (mode === 'calculator') {
      containerRef.current.style.paddingBottom = '75px';
    } else {
      containerRef.current.style.paddingBottom = '0px';
    }
  }, [mode]);

  const buttonShowing = (() => {
    switch (mode) {
      case 'scanner':
        return (
          <button id="scanner-button" type="button" onClick={onButtonClick}>
            <img id="scanner-icon" src={ScannerIcon} alt="Scanner" />
          </button>
        );
      case 'expense':
        return <></>;
      default:
        return (
          <button id="calculator-button" type="button" onClick={onButtonClick}>
            <img id="calculator-icon" src={IconCalculator} alt="Calculator" />
          </button>
        );
    }
  })();

  return (
    <StyledContainer ref={containerRef} heightUnit={heightUnit} mode={mode}>
      <input id="number-display" size="1" value={`$${value}`} disabled />
      {buttonShowing}
    </StyledContainer>
  );
}

CashRegisterDisplay.propTypes = {
  /**
   * Indicates the display form factor.
   */
  mode: PropTypes.oneOf(['scanner', 'calculator', 'expense']),
  /**
   * The value shown. The reason for it being a string is that it facilitates deletion of digits.
   */
  value: PropTypes.string,
  /**
   * Height ‘unit’ used along the CashRegister container, used to compress or expand the display itself.
   */
  heightUnit: PropTypes.number.isRequired,
  /**
   * The function to be called when the button is clicked.
   */
  onButtonClick: PropTypes.func,
};

export default CashRegisterDisplay;
