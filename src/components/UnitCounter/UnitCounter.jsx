/**
 *
 * UnitCounter
 *
 */

import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Trash from '../image/Trash.svg';
import { UnitCounterStyled } from './style';

// Assets

const UnitCounter = ({
  baseZIndex,
  drawerSetter,
  mini,
  units,
  unitsSetter,
  valueSetter,
}) => {
  const decreaseButtonRef = useRef(null);
  const increaseButtonRef = useRef(null);
  const deletionButtonRef = useRef(null);

  const [showDeletionButton, setShowDeletionButton] = useState(false);

  useEffect(() => {
    if (units <= 0) {
      setShowDeletionButton(true);
    } else {
      setShowDeletionButton(false);
    }
  }, [units]);

  return (
    <UnitCounterStyled
      mini={mini}
      baseZIndex={baseZIndex}
      showDeletionButton={showDeletionButton}
    >
      <button
        ref={deletionButtonRef}
        id="deletion-button"
        type="button"
        onTouchEnd={() => window.navigator.vibrate(50)}
        onClick={() => {
          valueSetter((0).toFixed(2));
          drawerSetter(false);
        }}
      >
        {mini ? <img src={Trash} alt="Eliminar" /> : 'Eliminar'}
      </button>
      <button
        ref={decreaseButtonRef}
        id="decrease-value-button"
        type="button"
        onTouchStart={() => {
          decreaseButtonRef.current.style.transform = 'scale(0.9)';
        }}
        onTouchEnd={() => {
          decreaseButtonRef.current.style.transform = 'scale(1)';
          window.navigator.vibrate(50);
        }}
        onClick={() => unitsSetter(units - 1)}
      >
        -
      </button>
      <input
        id="value-input"
        value={units}
        onChange={(e) => unitsSetter(e.target.value)}
        size="1"
        disabled
        type="number"
        min="0"
      />
      <button
        ref={increaseButtonRef}
        id="increase-value-button"
        type="button"
        onTouchStart={() => {
          increaseButtonRef.current.style.transform = 'scale(0.9)';
        }}
        onTouchEnd={() => {
          increaseButtonRef.current.style.transform = 'scale(1)';
          window.navigator.vibrate(50);
        }}
        onClick={() => {
          unitsSetter(units + 1);
        }}
      >
        +
      </button>
    </UnitCounterStyled>
  );
};

UnitCounter.defaultProps = {
  baseZIndex: 0,
  mini: false,
};

UnitCounter.propTypes = {
  /**
   * El valor de z-index inicial, útil cuando se manejan varios Drawers.
   */
  baseZIndex: PropTypes.number,
  /**
   * Función que cierra el Drawer cuando se hace click en el botón de eliminar.
   */
  drawerSetter: PropTypes.func.isRequired,
  /**
   * Una versión reducioda del componente, usada en el reporte.
   */
  mini: PropTypes.bool,
  /**
   * La cantidad de unidades que se tienen.
   */
  units: PropTypes.number.isRequired,
  /**
   * Función que modifica la cantidad de unidades.
   */
  unitsSetter: PropTypes.func.isRequired,
  /**
   * Función que modifica el valor del Display de la caja registradora.
   */
  valueSetter: PropTypes.func.isRequired,
};

export default UnitCounter;
