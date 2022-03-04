/**
 *
 * ReceiptItem
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ReceiptItemStyled } from './style';

// Components
import UnitCounter from '../UnitCounter/UnitCounter';

const ReceiptItem = ({
  displayValueSetter,
  message,
  mode,
  title,
  units,
  unitsSetter,
  value,
}) => {
  const [showUnitCounter, setShowUnitCounter] = useState(false);

  return (
    <ReceiptItemStyled showUnitCounter={showUnitCounter} mode={mode}>
      <button
        type="button"
        className="info-container"
        onClick={() => setShowUnitCounter(!showUnitCounter)}
      >
        <p className="title">{title}</p>
        <p className="message">{message}</p>
      </button>
      <button
        type="button"
        className="value-container"
        onClick={() => setShowUnitCounter(!showUnitCounter)}
      >
        <p className="units-and-value">
          $
          {value}
          {showUnitCounter ? '' : `×${units}`}
        </p>
      </button>
      <div className="unit-counter-container">
        <UnitCounter
          mini
          units={units}
          unitsSetter={unitsSetter}
          valueSetter={displayValueSetter}
          drawerSetter={setShowUnitCounter}
        />
      </div>
    </ReceiptItemStyled>
  );
};

ReceiptItem.defaultProps = {
  mode: 'income',
};

ReceiptItem.propTypes = {
  /**
   * Función que modifica el valor del Display de la caja registradora.
   */
  displayValueSetter: PropTypes.func.isRequired,
  /**
   * Mensaje de la transacción.
   */
  message: PropTypes.string.isRequired,
  /**
   * Determina el color a usar.
   */
  mode: PropTypes.oneOf(['income', 'expense']),
  /**
   * Título de la transacción.
   */
  title: PropTypes.string.isRequired,
  /**
   * Cantidad de unidades que se tienen.
   */
  units: PropTypes.number.isRequired,
  /**
   * Función que modifica la cantidad de unidades.
   */
  unitsSetter: PropTypes.func.isRequired,
  /**
   * Valor de la transacción por unidad.
   */
  value: PropTypes.string.isRequired,
};

export default ReceiptItem;
