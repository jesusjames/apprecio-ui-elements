/**
 *
 * UnitCounter
 *
 */

import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { UnitCounterStyled } from './style';

// Assets
import Trash from 'images/Trash.svg';

const UnitCounter = ({
  mini,
  units,
  unitsSetter,
  baseZIndex = 0,
  valueSetter,
  drawerSetter,
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
          decreaseButtonRef.current.style.transform = `scale(0.9)`;
        }}
        onTouchEnd={() => {
          decreaseButtonRef.current.style.transform = `scale(1)`;
          window.navigator.vibrate(50);
        }}
        onClick={() => unitsSetter(units - 1)}
      >
        -
      </button>
      <input
        id="value-input"
        value={units}
        onChange={e => unitsSetter(e.target.value)}
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
          increaseButtonRef.current.style.transform = `scale(0.9)`;
        }}
        onTouchEnd={() => {
          increaseButtonRef.current.style.transform = `scale(1)`;
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
}

UnitCounter.propTypes = {
  mini: PropTypes.bool,
  units: PropTypes.number.isRequired,
  unitsSetter: PropTypes.func.isRequired,
  baseZIndex: PropTypes.number,
  valueSetter: PropTypes.func.isRequired,
  drawerSetter: PropTypes.func.isRequired,
};

export default UnitCounter;
