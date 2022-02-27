/**
 *
 * UnitSelectionInterface
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from 'utils/theme';

// Components
import UnitCounter from 'components/UnitCounter';
import NotetakingInput from 'components/NotetakingInput';

const StyledContainer = styled.div`
  .header {
    color: ${theme.palette.tertiary};
    font-family: ${theme.typeface.default};
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0px;
    line-height: 25px;
  }

  #inputs-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    position: relative;

    padding: 0 1px;
  }

  #checkout-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: ${theme.spacing[3]} 1px;
  }

  #checkout-info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    span:first-child {
      color: ${theme.palette.secondary};
      font-family: ${theme.typeface.default};
      font-size: 27px;
      font-weight: 700;
      letter-spacing: 0px;
      line-height: 20px;

      margin-bottom: ${theme.spacing[1]};
    }

    span:last-child {
      color: ${theme.palette.tertiary};
      font-family: ${theme.typeface.default};
      font-size: 14px;
      font-weight: 300;
      letter-spacing: 0px;
      line-height: 21px;
      text-transform: uppercase;
    }
  }

  #add-button {
    background-color: ${props =>
    props.mode === 'expense' ? theme.palette.primary : theme.palette.quinary};
    border: none;
    border-radius: ${theme.rounding.wedged};

    height: 45px;
    width: 140px;

    color: ${theme.palette.white};
    font-family: ${theme.typeface.default};
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 27px;
  }

  .product-name {
    color: ${theme.palette.secondary};
    font: normal normal 600 18px/27px ${theme.typeface.default};
    margin-bottom: ${theme.spacing[0]};
  }

  .product-brand {
    color: ${theme.palette.secondary};
    font: normal normal 600 16px/25px ${theme.typeface.default};
    margin-bottom: ${theme.spacing[3]};
  }
`;

function UnitSelectionInterface({
  units,
  unitsSetter,
  note = '',
  noteSetter,
  baseZIndex = 0,
  value,
  valueSetter,
  drawerSetter,
  transactionsArray,
  interfaceShowing = 0,
  productInfo = {},
  mode = 'income',
  postExpensesArray,
}) {
  const handleTransaction = () => {
    const newTransaction = {
      productId: productInfo.id || null,
      units,
      note,
      value,
      title: productInfo.id
        ? `${productInfo.name} ${productInfo.net_content} ${
          productInfo.unit.name
        }`
        : note,
      message: interfaceShowing === 1 ? 'Escan. Cód. Barras' : 'Ingreso Manual',
    };

    transactionsArray.push(newTransaction);

    if (mode === 'expense') {
      postExpensesArray(transactionsArray);
    }

    unitsSetter(0);
    noteSetter('');
    valueSetter((0).toFixed(2));
    drawerSetter(false);
  };

  const header = (() => {
    if (mode === 'income') {
      if (productInfo.id) {
        return 'RESULTADO';
      }
      return '¿Cuántas unidades?';
    }
    return '¿A qué concepto corresponde?';
  })();

  return (
    <StyledContainer mode={mode}>
      <span className="header">{header}</span>
      {productInfo.id ? (
        <>
          <h1 className="product-name">
            {productInfo.name} ({productInfo.net_content}{' '}
            {productInfo.unit.name})
          </h1>
          <h2 className="product-brand">{productInfo.brand.name}</h2>
        </>
      ) : null}
      <div id="inputs-container">
        <UnitCounter
          units={units}
          unitsSetter={unitsSetter}
          baseZIndex={baseZIndex}
          valueSetter={valueSetter}
          drawerSetter={drawerSetter}
        />
        <NotetakingInput
          note={note}
          noteSetter={noteSetter}
          baseZIndex={baseZIndex}
          forceElongation={mode === 'expense'}
        />
      </div>
      <div id="checkout-container">
        <div id="checkout-info-container">
          <span>${(value * units).toFixed(2)}</span>
          <span>Total</span>
        </div>
        <button id="add-button" type="button" onClick={handleTransaction}>
          {mode === 'expense' ? 'Pagar' : 'Agregar'}
        </button>
      </div>
    </StyledContainer>
  );
}

UnitSelectionInterface.propTypes = {
  units: PropTypes.number.isRequired,
  unitsSetter: PropTypes.func.isRequired,
  baseZIndex: PropTypes.number,
  value: PropTypes.number.isRequired,
  valueSetter: PropTypes.func.isRequired,
  drawerSetter: PropTypes.func.isRequired,
  note: PropTypes.string,
  noteSetter: PropTypes.func.isRequired,
  transactionsArray: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      units: PropTypes.number.isRequired,
      note: PropTypes.string,
    }),
  ).isRequired,
  interfaceShowing: PropTypes.number,
  productInfo: PropTypes.object,
  mode: PropTypes.string,
  postExpensesArray: PropTypes.func,
};

export default UnitSelectionInterface;
