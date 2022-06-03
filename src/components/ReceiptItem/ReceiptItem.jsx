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
  deleteItem,
  deleteItemDisabled,
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
        onClick={() => !deleteItemDisabled && setShowUnitCounter(!showUnitCounter)}
        style={{ cursor: deleteItemDisabled && 'default' }}
      >
        <p className="title">{title}</p>
        <p className="message">{message}</p>
      </button>
      <button
        type="button"
        className="value-container"
        onClick={() => !deleteItemDisabled && setShowUnitCounter(!showUnitCounter)}
        style={{ cursor: deleteItemDisabled && 'default' }}
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
          valueSetter={deleteItem}
          drawerSetter={setShowUnitCounter}
        />
      </div>
    </ReceiptItemStyled>
  );
};

ReceiptItem.defaultProps = {
  mode: 'income',
  deleteItemDisabled: false,
};

ReceiptItem.propTypes = {
  /**
   * Función que elimina el item cuando se encuentra dentro de ReceiptDrawerContent.
   */
  deleteItem: PropTypes.func.isRequired,
  /** Desactiva la funcion de eliminar item */
  deleteItemDisabled: PropTypes.bool,
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
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default ReceiptItem;
