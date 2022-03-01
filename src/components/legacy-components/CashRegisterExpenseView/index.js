/**
 *
 * CashRegisterExpenseView
 *
 */

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from 'utils/theme';

// Components
import HalfDrawer from 'components/HalfDrawer';
import CashRegisterInterfaceContainer from 'components/CashRegisterInterfaceContainer';
import Header from 'components/Header';
import CashRegisterDisplay from 'components/CashRegisterDisplay';
import UnitSelectionInterface from 'components/UnitSelectionInterface';
import Dialog from 'components/Dialog';

const StyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  position: relative;

  padding-top: ${props => (props.shortenedEave ? '50px' : '150px')};
  transition: padding-top 0.2s ease-in-out;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  #interface-container {
    width: ${theme.width.default};
    display: flex;
    flex-direction: row;

    overflow: ${props => props.overflow};
  }
`;

function CashRegisterExpenseView({
  heightUnit,
  shortenedEave = false,
  eaveShortener,
  postExpensesArray,
  showDialog,
  hideDialog,
}) {
  const [showHalfDrawer, setShowHalfDrawer] = useState(false);
  const [value, setValue] = useState((0.0).toFixed(2));
  const [units, setUnits] = useState(0);
  const [note, setNote] = useState('');
  const [transactionsArray, setTransactionsArray] = useState([]);

  const containerRef = useRef(null);

  useEffect(() => {
    if (value !== (0).toFixed(2)) {
      eaveShortener(true);
    } else {
      eaveShortener(false);
    }
  }, [value]);

  useEffect(() => {
    containerRef.current.style.paddingTop = shortenedEave ? '50px' : '150px';
  }, [shortenedEave]);

  return (
    <StyledContainer ref={containerRef} shortenedEave={shortenedEave}>
      <Dialog
        header="Transacción registrada correctamente"
        body="Puedes revisar esta y otras transacciones en la sección de reporte"
        action="¡Entendido!"
        showOn={showDialog}
        showSetter={bool => {
          if (!bool) {
            setTransactionsArray([]);
            hideDialog();
          }
        }}
        type="success"
        variant="primary"
      />
      <Header
        variant="h5"
        textAlign="left"
        message="INGRESA EL GASTO TOTAL"
        mt3
      />
      <CashRegisterDisplay
        heightUnit={heightUnit}
        mode="expense"
        value={value}
      />
      <div id="interface-container">
        <CashRegisterInterfaceContainer
          heightUnit={heightUnit}
          value={value}
          setValue={setValue}
          setShowHalfDrawer={setShowHalfDrawer}
          units={units}
          setUnits={setUnits}
          showOn
        />
      </div>
      <HalfDrawer
        defaultHeight={210}
        show={showHalfDrawer}
        setShow={show => {
          setShowHalfDrawer(show);
          if (!show) {
            setValue((0).toFixed(2));
          }
        }}
        zIndex={40}
      >
        <UnitSelectionInterface
          units={units}
          unitsSetter={setUnits}
          note={note}
          noteSetter={setNote}
          baseZIndex={40}
          value={value}
          valueSetter={setValue}
          drawerSetter={setShowHalfDrawer}
          transactionsArray={transactionsArray}
          setTransactionsArray={setTransactionsArray}
          mode="expense"
          postExpensesArray={postExpensesArray}
        />
      </HalfDrawer>
    </StyledContainer>
  );
}

CashRegisterExpenseView.propTypes = {
  /**
   * Height ‘unit’ used along the CashRegister container, used to compress or expand the display itself.
   */
  heightUnit: PropTypes.number.isRequired,
  /**
   * Whether or not the navigation eave should be shortened.
   */
  shortenedEave: PropTypes.bool,
  /**
   * Function that shortens or expands the navigation eave.
   */
  eaveShortener: PropTypes.func,
  /**
   * Callback function to post expenses.
   */
  postExpensesArray: PropTypes.func.isRequired,
  /**
   * Variable that shows the success dialog.
   */
  showDialog: PropTypes.bool.isRequired,
  /**
   * Function that hides the success dialog.
   */
  hideDialog: PropTypes.func.isRequired,
};

export default CashRegisterExpenseView;
