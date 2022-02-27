/**
 *
 * ReceiptDrawerContent
 *
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from 'utils/theme';

// Components
import ReceiptItem from 'components/ReceiptItem';

// Assets
import GreyArrowDown from 'images/GreyArrowDown.svg';
import GreyArrowUp from 'images/GreyArrowUp.svg';

const StyledContainer = styled.div`
  * {
    user-select: none;
  }

  overflow-y: scroll;
  margin-bottom: 100px;

  .receipt-drawer-title {
    color: ${props =>
    props.variant === 'expense'
      ? theme.palette.primary
      : theme.palette.quinary};
    text-align: center;
    font: normal normal bold 16px/14px ${theme.typeface.default};
    letter-spacing: -0.16px;
    text-transform: uppercase;
    margin-top: ${theme.spacing[3]};
    margin-bottom: ${theme.spacing[1]};
  }

  .product-count-message {
    color: ${theme.palette.text.secondary};
    text-align: center;
    font: normal normal 500 17px/17px ${theme.typeface.default};
    letter-spacing: -0.17px;
    opacity: 0.5;
  }

  .checkout-total {
    color: ${props =>
      props.variant === 'expense'
        ? theme.palette.primary
        : theme.palette.quinary};
    text-align: center;
    font: normal normal bold 62px/93px ${theme.typeface.default};
    letter-spacing: -0.62px;
    margin-bottom: ${theme.spacing[4]};
  }

  .checkout-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: ${props =>
    props.variant === 'expense'
      ? theme.palette.primary
      : theme.palette.quinary};
    border: none;
    width: ${theme.width.default};
    height: 55px;
    border-radius: ${theme.rounding.wedged};

    position: relative;

    margin-bottom: ${theme.spacing[3]};

    .button-message {
      color: ${theme.palette.white};
      font: normal normal bold 16px/14px ${theme.typeface.default};
      letter-spacing: -0.16px;
      text-transform: uppercase;
    }

    .dollar-sign {
      display: inline-block;

      background-color: ${theme.palette.white};
      width: 30px;
      height: 30px;

      border-radius: ${theme.rounding.wedged};

      color: ${props =>
        props.variant === 'expense'
          ? theme.palette.primary
          : theme.palette.quinary};
      font: normal normal bold 16px/30px ${theme.typeface.default};
      letter-spacing: -0.16px;

      position: absolute;
      right: 15px;
    }
  }

  .scroll-down-message,
  .scroll-up-message {
    background-color: transparent;

    color: ${theme.palette.tertiary};
    text-align: center;
    font: normal normal 600 14px/14px ${theme.typeface.default};
    letter-spacing: -0.14px;

    margin-bottom: ${theme.spacing[4]};

    border: none;

    position: relative;
    left: 50%;
    transform: translateX(-50%);

    cursor: pointer;

    img {
      margin-left: 10px;
    }
  }

  .date-info-1 {
    color: ${theme.palette.text.secondary};
    font: normal normal bold 16px/20px ${theme.typeface.default};
    letter-spacing: 0px;
  }

  .date-info-2 {
    color: ${theme.palette.text.secondary};
    font: normal normal normal 16px/20px ${theme.typeface.default};
    letter-spacing: 0px;
  }

  .receipt-items-list {
    list-style: none;

    margin-bottom: ${theme.spacing[4]};
  }

  .small-checkout-total {
    color: ${props =>
      props.variant === 'expense'
        ? theme.palette.primary
        : theme.palette.quinary};
    text-align: center;
    font: normal normal bold 27px/20px ${theme.typeface.default};
    letter-spacing: 0px;
    text-transform: uppercase;

    margin-bottom: ${theme.spacing[4]};
  }
`;

function ReceiptDrawerContent({
  transactionsArray,
  transactionsArraySetter,
  variant = 'income',
  setShowReceiptDrawer,
  setShowCheckoutScreen,
}) {
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

  const smoothScroll = ref => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <StyledContainer ref={containerRef} variant={variant}>
      <p
        ref={scrollToTopScrollsTo}
        className="receipt-drawer-title"
      >{`Total a ${variant === 'income' ? 'cobrar' : 'registrar'}`}</p>
      <p className="product-count-message">{`${transactionsArray.reduce(
        (prev, curr) => prev + curr.units,
        0,
      )} ${variant === 'income' ? 'productos' : 'transacciones'}`}</p>
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
          {variant === 'income' ? 'Pasar al cobro' : 'Registrar gastos'}
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
          {variant === 'income' ? 'Resumen de la venta' : 'Listado de gastos'}
          <img src={GreyArrowDown} alt="v" />
        </button>
        <p className="date-info-1">
          {daysofTheWeek[time.getDay()]}, {monthsOfTheYear[time.getMonth()]}{' '}
          {time.getDate()}
        </p>
        <p className="date-info-2">
          {`0${time.getDate()}`.substr(-2)}/
          {`0${time.getMonth() + 1}`.substr(-2)}/{time.getFullYear()},{' '}
          {time.toLocaleString('es-MX', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        </p>
        <ul className="receipt-items-list">
          {transactionsArray.map(transaction => (
            <ReceiptItem
              title={transaction.title}
              units={transaction.units}
              unitsSetter={val => {
                const newTransactionsArray = [...transactionsArray];
                newTransactionsArray[
                  newTransactionsArray.indexOf(transaction)
                ].units = val;
                transactionsArraySetter(newTransactionsArray);
              }}
              deleteItem={val => {
                const newTransactionsArray = [...transactionsArray];
                newTransactionsArray.splice(
                  newTransactionsArray.indexOf(transaction),
                  1,
                );
                transactionsArraySetter(newTransactionsArray);
              }}
              value={transaction.value}
              message={transaction.message}
              variant={variant}
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
    </StyledContainer>
  );
}

ReceiptDrawerContent.propTypes = {
  transactionsArray: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      units: PropTypes.number.isRequired,
      note: PropTypes.string,
    }),
  ).isRequired,
  transactionsArraySetter: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['income', 'expense']),
  setShowReceiptDrawer: PropTypes.func.isRequired,
  setShowCheckoutScreen: PropTypes.func.isRequired,
};

export default ReceiptDrawerContent;
