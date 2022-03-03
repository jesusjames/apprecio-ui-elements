/**
 *
 * UnitSelectionInterface
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { UnitSelectionInterfaceStyled } from './style';

// Components
import UnitCounter from '../UnitCounter/UnitCounter';
import NoteTakingInput from '../NoteTakingInput/NoteTakingInput';

const UnitSelectionInterface = ({
  baseZIndex = 0,
  drawerSetter,
  interfaceShowing = 0,
  mode = 'income',
  note = '',
  noteSetter,
  postExpensesArray,
  productInfo = {},
  transactionsArray,
  units,
  unitsSetter,
  value,
  valueSetter,
}) => {
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
    <UnitSelectionInterfaceStyled mode={mode}>
      <span className="header">{header}</span>
      {productInfo.id ? (
        <>
          <h1 className="product-name">
            {productInfo.name}
            {' '}
            (
            {productInfo.net_content}
            {' '}
            {productInfo.unit.name}
            )
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
        <NoteTakingInput
          note={note}
          noteSetter={noteSetter}
          baseZIndex={baseZIndex}
          forceElongation={mode === 'expense'}
        />
      </div>
      <div id="checkout-container">
        <div id="checkout-info-container">
          <span>
            $
            {(value * units).toFixed(2)}
          </span>
          <span>Total</span>
        </div>
        <button id="add-button" type="button" onClick={handleTransaction}>
          {mode === 'expense' ? 'Pagar' : 'Agregar'}
        </button>
      </div>
    </UnitSelectionInterfaceStyled>
  );
};

UnitSelectionInterface.propTypes = {
  baseZIndex: PropTypes.number,
  drawerSetter: PropTypes.func.isRequired,
  interfaceShowing: PropTypes.number,
  mode: PropTypes.string,
  note: PropTypes.string,
  noteSetter: PropTypes.func.isRequired,
  postExpensesArray: PropTypes.func,
  productInfo: PropTypes.shape({
    id: PropTypes.number,
    brand: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    name: PropTypes.string,
    net_content: PropTypes.number,
    unit: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    average_purchase_price: PropTypes.number,
    min_purchase_price: PropTypes.number,
    max_purchase_price: PropTypes.number,
    average_sale_price: PropTypes.number,
    min_sale_price: PropTypes.number,
    max_sale_price: PropTypes.number,
    price_count: PropTypes.number,
    last_sale_price: PropTypes.number,
  }),
  transactionsArray: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      units: PropTypes.number.isRequired,
      note: PropTypes.string,
    }),
  ).isRequired,
  units: PropTypes.number.isRequired,
  unitsSetter: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  valueSetter: PropTypes.func.isRequired,
};

export default UnitSelectionInterface;
