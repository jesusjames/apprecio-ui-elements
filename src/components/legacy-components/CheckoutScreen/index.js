/**
 *
 * CheckoutScreen
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from 'utils/theme';

// Components
import ChangeCalculator from 'components/ChangeCalculator';

// Assets
import YellowArrow from 'images/YellowArrowRight.svg';

const StyledContainer = styled.div`
  background-color: ${theme.palette.background.offWhite};

  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: ${props => (props.showOn ? '40' : '-1')};
  opacity: ${props => (props.showOn ? '1' : '0')};

  transition: opacity 1s cubic-bezier(1, -0.07, 1, 0.39);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .closeButton {
    padding: 0;
    margin: ${theme.spacing[3]} ${theme.spacing[4]};
    background-color: transparent;
    border: none;
    cursor: pointer;

    align-self: flex-start;

    & > * {
      display: inline;
    }

    & > img {
      transform: rotate(180deg);
    }

    & > p {
      color: ${theme.palette.text.link};
      font: normal normal 500 17px/17px ${theme.typeface.default};
      letter-spacing: -0.17px;
    }
  }

  .receipt-drawer-title {
    color: ${theme.palette.text.link};
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
    color: ${theme.palette.text.link};
    text-align: center;
    font: normal normal bold 62px/93px ${theme.typeface.default};
    letter-spacing: -0.62px;
    margin-bottom: ${theme.spacing[2]};
  }

  .payment-method {
    color: ${theme.palette.tertiary};
    text-align: center;
    font: normal normal 500 17px/17px ${theme.typeface.default};
    letter-spacing: -0.17px;
    text-transform: uppercase;
  }

  .checkout-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: ${theme.palette.quinary};
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

      color: ${theme.palette.text.link};
      font: normal normal bold 16px/30px ${theme.typeface.default};
      letter-spacing: -0.16px;

      position: absolute;
      right: 15px;
    }
  }
`;

function CheckoutScreen({
  transactionsArray,
  variant = 'income',
  showOn,
  setShowOn,
  postTransactionsArray,
}) {
  const checkoutValue = transactionsArray
    .reduce((prev, curr) => prev + parseFloat(curr.value) * curr.units, 0)
    .toFixed(2);

  return (
    <StyledContainer showOn={showOn}>
      <button
        className="closeButton"
        type="button"
        onClick={() => setShowOn(false)}
      >
        <img src={YellowArrow} alt="<" />
        <p>Volver</p>
      </button>
      <p className="receipt-drawer-title">{`Total a ${
        variant === 'income' ? 'cobrar' : 'registrar'
      }`}</p>
      <p className="product-count-message">{`${transactionsArray.reduce(
        (prev, curr) => prev + curr.units,
        0,
      )} ${variant === 'income' ? 'productos' : 'transacciones'}`}</p>
      <p className="checkout-total">${checkoutValue}</p>
      <p className="payment-method">Pago en efectivo</p>
      <ChangeCalculator checkoutValue={checkoutValue} />
      <button
        className="checkout-button"
        type="button"
        onClick={() => postTransactionsArray(transactionsArray)}
      >
        <span className="button-message">Finalizar</span>
        <span className="dollar-sign">✓</span>
      </button>
    </StyledContainer>
  );
}

CheckoutScreen.propTypes = {
  /**
   * Array where the transactions history has been stored.
   */
  transactionsArray: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.number,
      units: PropTypes.number.isRequired,
      note: PropTypes.string,
      value: PropTypes.number.isRequired,
      title: PropTypes.string,
      message: PropTypes.string.isRequired,
    }),
  ).isRequired,
  /**
   * It determines which style of the component is going to be shown.
   */
  variant: PropTypes.oneOf(['income', 'expense']),
  /**
   * It determines if the component is going to be shown or not.
   */
  showOn: PropTypes.bool.isRequired,
  /**
   * showOn setter.
   */
  setShowOn: PropTypes.func.isRequired,
  /**
   * Function that posts the transactions array to the backend.
   */
  postTransactionsArray: PropTypes.func.isRequired,
};

export default CheckoutScreen;
