/**
 *
 * CashRegisterInterfaceContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import CashRegisterButton from 'components/CashRegisterButton';

// Assets
import Backspace from 'images/Backspace.svg';

const StyledContainer = styled.div`
  min-width: 100%;
  max-width: 100%;
  overflow-x: hidden;

  transform: ${({ showOn }) =>
    showOn ? 'translateX(0)' : 'translateX(-100vw)'};
  transition: transform 0.35s ease-in-out;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  z-index: 1;
`;

function CashRegisterInterfaceContainer({
  heightUnit,
  value,
  setValue,
  setShowHalfDrawer,
  units,
  setUnits,
  showOn,
}) {
  return (
    <StyledContainer showOn={showOn}>
      <CashRegisterButton
        heightUnit={heightUnit}
        value="1"
        name="1"
        onClick={() => {
          setValue((value * 10 + 0.01).toFixed(2));
          setShowHalfDrawer(true);
          if (!units) {
            setUnits(1);
          }
        }}
      />
      <CashRegisterButton
        heightUnit={heightUnit}
        value="2"
        name="2"
        onClick={() => {
          setValue((value * 10 + 0.02).toFixed(2));
          setShowHalfDrawer(true);
          if (!units) {
            setUnits(1);
          }
        }}
      />
      <CashRegisterButton
        heightUnit={heightUnit}
        value="3"
        name="3"
        onClick={() => {
          setValue((value * 10 + 0.03).toFixed(2));
          setShowHalfDrawer(true);
          if (!units) {
            setUnits(1);
          }
        }}
      />
      <CashRegisterButton
        heightUnit={heightUnit}
        value="4"
        name="4"
        onClick={() => {
          setValue((value * 10 + 0.04).toFixed(2));
          setShowHalfDrawer(true);
          if (!units) {
            setUnits(1);
          }
        }}
      />
      <CashRegisterButton
        heightUnit={heightUnit}
        value="5"
        name="5"
        onClick={() => {
          setValue((value * 10 + 0.05).toFixed(2));
          setShowHalfDrawer(true);
          if (!units) {
            setUnits(1);
          }
        }}
      />
      <CashRegisterButton
        heightUnit={heightUnit}
        value="6"
        name="6"
        onClick={() => {
          setValue((value * 10 + 0.06).toFixed(2));
          setShowHalfDrawer(true);
          if (!units) {
            setUnits(1);
          }
        }}
      />
      <CashRegisterButton
        heightUnit={heightUnit}
        value="7"
        name="7"
        onClick={() => {
          setValue((value * 10 + 0.07).toFixed(2));
          setShowHalfDrawer(true);
          if (!units) {
            setUnits(1);
          }
        }}
      />
      <CashRegisterButton
        heightUnit={heightUnit}
        value="8"
        name="8"
        onClick={() => {
          setValue((value * 10 + 0.08).toFixed(2));
          setShowHalfDrawer(true);
          if (!units) {
            setUnits(1);
          }
        }}
      />
      <CashRegisterButton
        heightUnit={heightUnit}
        value="9"
        name="9"
        onClick={() => {
          setValue((value * 10 + 0.09).toFixed(2));
          setShowHalfDrawer(true);
          if (!units) {
            setUnits(1);
          }
        }}
      />
      <CashRegisterButton
        heightUnit={heightUnit}
        value="00"
        name="00"
        onClick={() => {
          setValue((value * 100).toFixed(2));
          if (value > 0) {
            setShowHalfDrawer(true);
          } else {
            setShowHalfDrawer(false);
          }
        }}
      />
      <CashRegisterButton
        heightUnit={heightUnit}
        value="0"
        name="0"
        onClick={() => {
          setValue((value * 10).toFixed(2));
          if (value > 0) {
            setShowHalfDrawer(true);
          } else {
            setShowHalfDrawer(false);
          }
        }}
      />
      <CashRegisterButton
        heightUnit={heightUnit}
        value={Backspace}
        name="del"
        variant="quinary"
        onClick={() => {
          const newValue = (Math.floor(value * 10) / 100).toFixed(2);

          setValue(newValue);
          if (newValue > 0) {
            setShowHalfDrawer(true);
          } else {
            setShowHalfDrawer(false);
            setUnits(0);
          }
        }}
      />
    </StyledContainer>
  );
}

CashRegisterInterfaceContainer.propTypes = {
  /**
   * Height ‘unit’ used along the CashRegister container, used to compress or expand the interface itself.
   */
  heightUnit: PropTypes.string.isRequired,
  /**
   * Value displayed on the CashRegister interface.
   */
  value: PropTypes.number.isRequired,
  /**
   * Setter method for value.
   */
  setValue: PropTypes.func.isRequired,
  /**
   * Function that triggers the half drawer to be shown or hidden.
   */
  setShowHalfDrawer: PropTypes.func.isRequired,
  /**
   * Stores how many units of the current transaction are going to be purchased.
   */
  units: PropTypes.number.isRequired,
  /**
   * Setter method for units.
   */
  setUnits: PropTypes.func.isRequired,
  /**
   * Whether or not to show this interface.
   */
  showOn: PropTypes.bool.isRequired,
};

export default CashRegisterInterfaceContainer;
