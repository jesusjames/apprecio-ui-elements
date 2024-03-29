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
  baseZIndex,
  drawerSetter,
  interfaceShowing,
  mode,
  note,
  noteSetter,
  postExpensesArray,
  productInfo,
  transactionsArray,
  setTransactionsArray,
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

    setTransactionsArray([...transactionsArray, newTransaction]);

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
      <div className="ap-w-full ap-text-center">
        <span className="header">{header}</span>
      </div>
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
        {mode !== 'expense' && (
        <UnitCounter
          units={units}
          unitsSetter={unitsSetter}
          baseZIndex={baseZIndex}
          valueSetter={valueSetter}
          drawerSetter={drawerSetter}
        />
        )}
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

UnitSelectionInterface.defaultProps = {
  baseZIndex: 0,
  interfaceShowing: 0,
  mode: 'income',
  postExpensesArray: () => {},
  productInfo: {},
};

UnitSelectionInterface.propTypes = {
  /**
   * El valor de z-index inicial, útil cuando se manejan varios Drawers.
   */
  baseZIndex: PropTypes.number,
  /**
   * Función que cierra el Drawer cuando se hace click en el botón de eliminar.
   */
  drawerSetter: PropTypes.func.isRequired,
  /**
   * Selecciona qué interface de la caja registradora se está mostrando.
   */
  interfaceShowing: PropTypes.number,
  /**
   * Determina si se está tratando con ingresos o gastos.
   */
  mode: PropTypes.oneOf(['expense', 'income']),
  /**
   * Variable que almacena el valor de la nota.
   */
  note: PropTypes.string.isRequired,
  /**
   * Función que altera el valor de la nota.
   */
  noteSetter: PropTypes.func.isRequired,
  /**
   * Función que envía los gastos a la API.
   */
  postExpensesArray: PropTypes.func,
  /**
   * Objeto que contiene la información del producto.
   */
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
  /**
   * Arreglo que contiene las transacciones.
   */
  transactionsArray: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      units: PropTypes.number.isRequired,
      note: PropTypes.string,
    }),
  ).isRequired,
  /** Función para cambiar el estado transactionsArray. */
  setTransactionsArray: PropTypes.func.isRequired,
  /**
   * Variable que almacena el número de unidades en la transacción.
   */
  units: PropTypes.number.isRequired,
  /**
   * Función que altera el número de unidades en la transacción.
   */
  unitsSetter: PropTypes.func.isRequired,
  /**
   * Variable que almacena el valor de cada unidad en la transacción.
   */
  value: PropTypes.number.isRequired,
  /**
   * Función que altera el valor de cada unidad en la transacción.
   */
  valueSetter: PropTypes.func.isRequired,
};

export default UnitSelectionInterface;
