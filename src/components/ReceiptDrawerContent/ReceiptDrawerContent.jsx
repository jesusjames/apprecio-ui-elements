/**
 *
 * ReceiptDrawerContent
 *
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { ReceiptDrawerContentStyled } from './style';

// Components
import ReceiptItem from '../ReceiptItem/ReceiptItem';

// Assets
import GreyArrowDown from '../image/GreyArrowDown.svg';
import GreyArrowUp from '../image/GreyArrowUp.svg';

const ReceiptDrawerContent = ({
  mode,
  setShowCheckoutScreen,
  setShowReceiptDrawer,
  transactionsArray,
  transactionsArraySetter,
}) => {
  const containerRef = useRef(null);
  const scrollToTopScrollsTo = useRef(null);

  const time = new Date();
  const daysofTheWeek = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];
  const monthsOfTheYear = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  const smoothScroll = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <ReceiptDrawerContentStyled ref={containerRef} mode={mode}>
      <p
        ref={scrollToTopScrollsTo}
        className="receipt-drawer-title"
      >
        {`Total a ${mode === 'income' ? 'cobrar' : 'registrar'}`}
      </p>
      <p className="product-count-message">
        {`${transactionsArray.reduce(
          (prev, curr) => prev + curr.units,
          0,
        )} ${mode === 'income' ? 'productos' : 'transacciones'}`}
      </p>
      <p className="checkout-total">
        $
        {transactionsArray
          .reduce((prev, curr) => prev + parseFloat(curr.value) * curr.units, 0)
          .toFixed(2)}
      </p>
      <button
        className="checkout-button"
        type="button"
        onClick={() => {
          if (transactionsArray.length > 0) {
            setShowReceiptDrawer(false);
            setShowCheckoutScreen(true);
          }
        }}
      >
        <span className="button-message">
          {mode === 'income' ? 'Pasar al cobro' : 'Registrar gastos'}
        </span>
        <span className="dollar-sign">$</span>
      </button>
      <div>
        <button
          type="button"
          className="scroll-down-message"
          onClick={() => {
            containerRef.current.scrollBy({
              top: 275,
              behavior: 'smooth',
            });
          }}
        >
          {mode === 'income' ? 'Resumen de la venta' : 'Listado de gastos'}
          <img src={GreyArrowDown} alt="v" />
        </button>
        <p className="date-info-1">
          {daysofTheWeek[time.getDay()]}
          ,
          {monthsOfTheYear[time.getMonth()]}
          {' '}
          {time.getDate()}
        </p>
        <p className="date-info-2">
          {`0${time.getDate()}`.substr(-2)}
          /
          {`0${time.getMonth() + 1}`.substr(-2)}
          /
          {time.getFullYear()}
          ,
          {' '}
          {time.toLocaleString('es-MX', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        </p>
        <ul className="receipt-items-list">
          {transactionsArray.map((transaction) => (
            <ReceiptItem
              // This key needs revision
              key={`${transaction.title} ${transaction.message} ${transaction.value}`}
              title={transaction.title}
              units={transaction.units}
              unitsSetter={(val) => {
                const newTransactionsArray = [...transactionsArray];
                newTransactionsArray[
                  newTransactionsArray.indexOf(transaction)
                ].units = val;
                transactionsArraySetter(newTransactionsArray);
              }}
              deleteItem={() => {
                const newTransactionsArray = [...transactionsArray];
                newTransactionsArray.splice(
                  newTransactionsArray.indexOf(transaction),
                  1,
                );
                transactionsArraySetter(newTransactionsArray);
              }}
              value={transaction.value}
              message={transaction.message}
              mode={mode}
            />
          ))}
        </ul>
        <p className="small-checkout-total">
          Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$
          {transactionsArray
            .reduce(
              (prev, curr) => prev + parseFloat(curr.value) * curr.units,
              0,
            )
            .toFixed(2)}
        </p>
        <button
          type="button"
          className="scroll-up-message"
          onClick={() => smoothScroll(scrollToTopScrollsTo)}
        >
          Volver arriba
          <img src={GreyArrowUp} alt="^" />
        </button>
      </div>
    </ReceiptDrawerContentStyled>
  );
};

ReceiptDrawerContent.defaultProps = {
  mode: 'income',
};

ReceiptDrawerContent.propTypes = {
  /**
   * Define el color y los copies del componente
   */
  mode: PropTypes.oneOf(['income', 'expense']),
  /**
   * Función que muestra la pantalla de checkout.
   */
  setShowCheckoutScreen: PropTypes.func.isRequired,
  /**
   * Función que cierra el Drawer que contiene el resumen de la compra.
   */
  setShowReceiptDrawer: PropTypes.func.isRequired,
  /**
   * Arreglo de las transacciones.
   */
  transactionsArray: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.number,
      units: PropTypes.number.isRequired,
      note: PropTypes.string,
      value: PropTypes.number.isRequired,
      title: PropTypes.string,
      message: PropTypes.string,
    }),
  ).isRequired,
  /**
   * Función que altera el arreglo de transacciones.
   */
  transactionsArraySetter: PropTypes.func.isRequired,
};

export default ReceiptDrawerContent;
