/**
 *
 * TransactionStatus
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from 'utils/theme';

// Assets
import ItemCountContainer from 'images/ItemCountContainer.svg';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;

    margin-bottom: ${theme.spacing[2]};

    p {
      color: ${theme.palette.white};
      font-family: ${theme.typeface.default};
      font-size: 16px;
      font-weight: 600;
      letter-spacing: -0.16px;
      line-height: 25px;
    }

    .item-count-container > img {
      position: absolute;
      left: 0;
      top: 0;
    }

    .item-count-container > p {
      position: absolute;
      left: ${props => {
        if (props.itemCount === 1) {
          return '13px';
        }
        if (props.itemCount < 10) {
          return '11px';
        }
        if (props.itemCount < 20) {
          return '10px';
        }
        return '8px';
      }};
      top: 3px;

      font-size: ${props => (props.itemCount > 9 ? '14px' : '16px')};

      margin: 0;
    }

    .header-container {
      margin-left: 35px;
    }
  }

  .body {
    color: ${theme.palette.white};
    font-family: ${theme.typeface.default};
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 15px;

    margin-bottom: ${theme.spacing[3]};
  }

  .footer {
    color: ${theme.palette.white};
    font-family: ${theme.typeface.default};
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 15px;
    text-transform: uppercase;
  }
`;

function TransactionStatus({
  itemCount = 0,
  variant = 'income',
  ammount = 0,
  setShowReceiptDrawer,
}) {
  const header = (() => {
    switch (variant) {
      case 'income':
        return 'Venta en curso';
      case 'expense':
        return 'Gastos registrados';
      default:
        return 'Venta en curso';
    }
  })();

  const footer = (() => {
    switch (variant) {
      case 'income':
        return 'Cobrar';
      case 'expense':
        return 'Registrar';
      default:
        return 'Cobrar';
    }
  })();

  return (
    <StyledContainer
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
      <span className="body">${ammount.toFixed(2)}</span>
      <span className="footer">{footer}</span>
    </StyledContainer>
  );
}

TransactionStatus.propTypes = {
  itemCount: PropTypes.number,
  variant: PropTypes.string,
  ammount: PropTypes.number,
  setShowReceiptDrawer: PropTypes.func,
};

export default TransactionStatus;
