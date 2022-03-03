/**
 *
 * TransactionStatus
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { TransactionStatusStyled } from './style';

// Assets
import ItemCountContainer from '../image/ItemCountContainer.svg';

const TransactionStatus = ({
  amount,
  itemCount,
  mode,
  setShowReceiptDrawer,
}) => {
  const header = (() => {
    switch (mode) {
      case 'income':
        return 'Venta en curso';
      case 'expense':
        return 'Gastos registrados';
      default:
        return 'Venta en curso';
    }
  })();

  const footer = (() => {
    switch (mode) {
      case 'income':
        return 'Cobrar';
      case 'expense':
        return 'Registrar';
      default:
        return 'Cobrar';
    }
  })();

  return (
    <TransactionStatusStyled
      itemCount={itemCount}
      onClick={() => setShowReceiptDrawer(true)}
    >
      <span className="header">
        <p className="item-count-container">
          <img src={ItemCountContainer} alt="Counter" />
          <p>{itemCount}</p>
        </p>
        <p className="header-container">{header}</p>
      </span>
      <span className="body">
        $
        {amount.toFixed(2)}
      </span>
      <span className="footer">{footer}</span>
    </TransactionStatusStyled>
  );
};

TransactionStatus.defaultProps = {
  amount: 0,
  itemCount: 0,
  setShowReceiptDrawer: () => {},
  mode: 'income',
};

TransactionStatus.propTypes = {
  /**
   * La suma del valor de todas las transacciones.
   */
  amount: PropTypes.number,
  /**
   * El número de unidades totales (v.g., transacciones * unidades-por-transacción).
   */
  itemCount: PropTypes.number,
  /**
   * Alterna los copies respectivos para cada caso.
   */
  mode: PropTypes.oneOf(['expense', 'income']),
  /**
   * Función que abre el drawer de recibo.
   */
  setShowReceiptDrawer: PropTypes.func,
};

export default TransactionStatus;
