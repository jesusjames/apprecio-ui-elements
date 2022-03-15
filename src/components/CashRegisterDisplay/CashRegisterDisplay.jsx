/**
 *
 * CashRegisterDisplay
 *
 */

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { CashRegisterDisplayStyled } from './style';

// Assets
import ScannerIcon from '../image/ScannerIcon.svg';
import IconCalculator from '../image/IconCalculator.svg';

const CashRegisterDisplay = ({
  heightUnit,
  mode = 'scanner',
  onButtonClick,
  value,
}) => {
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
        return null;
      default:
        return (
          <button id="calculator-button" type="button" onClick={onButtonClick}>
            <img id="calculator-icon" src={IconCalculator} alt="Calculator" />
          </button>
        );
    }
  })();

  return (
    <CashRegisterDisplayStyled ref={containerRef} heightUnit={heightUnit} mode={mode}>
      <input id="number-display" size="1" value={`$${value}`} disabled />
      {buttonShowing}
    </CashRegisterDisplayStyled>
  );
};

CashRegisterDisplay.propTypes = {
  /**
   * "Unidad" de altura usada a lo largo del container de Caja Registradora.
   * Sirve para expandir o contraer los components.
   */
  heightUnit: PropTypes.number.isRequired,
  /**
   * Indica la forma en la que se muestra el Display.
   */
  mode: PropTypes.oneOf(['scanner', 'calculator', 'expense']),
  /**
   * Esta función se llama cuando se hace click en el botón.
   */
  onButtonClick: PropTypes.func,
  /**
   * El valor mostrado.
   * El motivo por la que es una cadena es para facilitar la manipulación del valor.
   */
  value: PropTypes.string,
};

export default CashRegisterDisplay;
