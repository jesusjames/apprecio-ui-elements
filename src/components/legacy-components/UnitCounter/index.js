/**
 *
 * UnitCounter
 *
 */

import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from 'utils/theme';

// Assets
import Trash from 'images/Trash.svg';

const StyledContainer = styled.div`
  border: 1px solid #103c54;
  border-radius: ${theme.rounding.wedged};

  width: ${props => (props.mini ? '94px' : '144px')};
  height: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0;

  position: relative;

  z-index: ${props => props.baseZIndex};

  overflow-x: hidden;

  #deletion-button {
    position: absolute;

    width: 100%;
    height: 100%;

    margin: 0;

    z-index: ${props => props.baseZIndex + 1};

    border: none;
    border-radius: ${theme.rounding.wedged};

    background-color: ${theme.palette.primary};

    color: ${theme.palette.text.offWhite};
    font-family: ${theme.typeface.default};
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 30px;

    padding-right: 40px;

    img {
      background-color: ${theme.palette.primary};
    }
  }

  *:not(#deletion-button) {
    border-style: none;
    background-color: ${theme.palette.background.white};

    height: 100%;

    text-align: center;

    color: ${theme.palette.secondary} !important;
    -webkit-text-fill-color: ${theme.palette.secondary};
    opacity: 1 !important;
    font-family: ${theme.typeface.default};
    font-weight: 600;
    font-size: 23px;

    border-radius: ${theme.rounding.wedged};

    transition: all 0.2s ease-in-out;
  }

  input:not(#deletion-button) {
    width: ${props => (props.showDeletionButton ? '40px' : '100%')};

    position: absolute;

    right: 0;

    z-index: ${props => props.baseZIndex + 2};
  }

  button:not(#deletion-button) {
    width: 40px;

    position: absolute;

    z-index: ${props => props.baseZIndex + 3};
  }

  #decrease-value-button {
    right: ${props => (props.showDeletionButton ? '0px' : 'calc(100% - 40px)')};
  }

  #increase-value-button {
    right: 0;
  }
`;

function UnitCounter({
  mini,
  units,
  unitsSetter,
  baseZIndex = 0,
  valueSetter,
  drawerSetter,
}) {
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
    <StyledContainer
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
    </StyledContainer>
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
