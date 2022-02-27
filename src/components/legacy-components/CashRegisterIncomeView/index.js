/**
 *
 * CashRegisterIncomeView
 *
 */

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from 'utils/theme';

// Components
import HalfDrawer from 'components/HalfDrawer';
import CashRegisterInterfaceContainer from 'components/CashRegisterInterfaceContainer';
import CashRegisterScannerContainer from 'components/CashRegisterScannerContainer';
import Header from 'components/Header';
import CashRegisterDisplay from 'components/CashRegisterDisplay';
import TransactionStatus from 'components/TransactionStatus';
import UnitSelectionInterface from 'components/UnitSelectionInterface';
import Drawer from 'components/Drawer';
import ReceiptDrawerContent from 'components/ReceiptDrawerContent';
import CheckoutScreen from 'components/CheckoutScreen';
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

function CashRegisterIncomeView({
  heightUnit,
  shortenedEave = false,
  eaveShortener,
  forceShorten,
  interfaceShowing,
  setInterfaceShowing,
  dispatchProductPrice,
  productInfo,
  clearProductPrice,
  postTransactionsArray,
  showDialog,
  hideDialog,
}) {
  const [showHalfDrawer, setShowHalfDrawer] = useState(false);
  const [value, setValue] = useState((0.0).toFixed(2));
  const [units, setUnits] = useState(0);
  const [note, setNote] = useState('');
  const [transactionsArray, setTransactionsArray] = useState([]);
  const [showReceiptDrawer, setShowReceiptDrawer] = useState(false);
  const [showCheckoutScreen, setShowCheckoutScreen] = useState(false);
  const [scannedCode, setScannedCode] = useState('');

  const containerRef = useRef(null);

  useEffect(() => {
    if (value !== (0).toFixed(2)) {
      eaveShortener(true);
    } else {
      eaveShortener(false);
      clearProductPrice();
      setScannedCode('');
    }
  }, [value]);

  useEffect(() => {
    if (productInfo.last_sale_price) {
      setValue(productInfo.last_sale_price.toFixed(2));
      setShowHalfDrawer(true);
      if (!units) {
        setUnits(1);
      }
    }
  }, [productInfo]);

  useEffect(() => {
    if (interfaceShowing === 1) {
      forceShorten(true);
      containerRef.current.style.paddingTop = '75px';
    } else {
      forceShorten(false);
      containerRef.current.style.paddingTop = shortenedEave ? '50px' : '150px';
    }
  }, [interfaceShowing, shortenedEave]);

  return (
    <StyledContainer
      ref={containerRef}
      shortenedEave={shortenedEave}
      overflow={interfaceShowing === 1 ? 'visible' : 'hidden'}
    >
      <Dialog
        header="Transacción registrada correctamente"
        body="Puedes revisar esta y otras transacciones en la sección de reporte"
        action="¡Entendido!"
        showOn={showDialog}
        showSetter={bool => {
          if (!bool) {
            setTransactionsArray([]);
            setShowCheckoutScreen(false);
            hideDialog();
          }
        }}
        type="success"
        variant="quinary"
      />
      <CheckoutScreen
        transactionsArray={transactionsArray}
        showOn={showCheckoutScreen}
        setShowOn={setShowCheckoutScreen}
        postTransactionsArray={postTransactionsArray}
        showDialog={showDialog}
      />
      {interfaceShowing === 0 ? (
        <Header variant="h5" textAlign="left" message="VALOR UNITARIO" mt3 />
      ) : null}
      <CashRegisterDisplay
        heightUnit={heightUnit}
        mode={interfaceShowing === 0 ? 'scanner' : 'calculator'}
        value={value}
        onButtonClick={() => {
          if (interfaceShowing === 0) {
            setInterfaceShowing(1);
          } else {
            setInterfaceShowing(0);
          }
        }}
      />
      <div id="interface-container">
        <CashRegisterInterfaceContainer
          heightUnit={heightUnit}
          value={value}
          setValue={setValue}
          setShowHalfDrawer={setShowHalfDrawer}
          units={units}
          setUnits={setUnits}
          showOn={interfaceShowing === 0}
        />
        <CashRegisterScannerContainer
          showOn={interfaceShowing === 1}
          dispatchProductPrice={dispatchProductPrice}
          scannedCode={scannedCode}
          setScannedCode={setScannedCode}
        />
      </div>
      <HalfDrawer
        defaultHeight={productInfo.id ? 300 : 210}
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
          interfaceShowing={interfaceShowing}
          productInfo={productInfo}
        />
      </HalfDrawer>
      <HalfDrawer
        defaultHeight={160}
        show
        variant="quinary"
        zIndex={30}
        triggerOnMovement={() => setShowReceiptDrawer(true)}
      >
        <TransactionStatus
          itemCount={transactionsArray.reduce(
            (prev, curr) => prev + curr.units,
            0,
          )}
          ammount={transactionsArray.reduce(
            (prev, curr) => prev + parseFloat(curr.value) * curr.units,
            0,
          )}
          setShowReceiptDrawer={setShowReceiptDrawer}
        />
      </HalfDrawer>
      <Drawer showOn={showReceiptDrawer} showSetter={setShowReceiptDrawer}>
        <ReceiptDrawerContent
          transactionsArray={transactionsArray}
          transactionsArraySetter={setTransactionsArray}
          setShowReceiptDrawer={setShowReceiptDrawer}
          setShowCheckoutScreen={setShowCheckoutScreen}
        />
      </Drawer>
    </StyledContainer>
  );
}

CashRegisterIncomeView.propTypes = {
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
   * Variable that minimizes the navigation eave for smaller screens.
   */
  forceShorten: PropTypes.bool,
  /**
   * Whether to show the calculator view or the scanner view.
   */
  interfaceShowing: PropTypes.number.isRequired,
  /**
   * Function to switch between the calculator and scanner views.
   */
  setInterfaceShowing: PropTypes.func.isRequired,
  /**
   * Function that fetches the scanned product price.
   */
  dispatchProductPrice: PropTypes.func.isRequired,
  /**
   * Object were the product information is stored.
   */
  productInfo: PropTypes.object.isRequired,
  /**
   * Function to clear the product price.
   */
  clearProductPrice: PropTypes.func.isRequired,
  /**
   * Callback function to post transactions.
   */
  postTransactionsArray: PropTypes.func.isRequired,
  /**
   * Variable that shows the success dialog.
   */
  showDialog: PropTypes.bool.isRequired,
  /**
   * Function that hides the success dialog.
   */
  hideDialog: PropTypes.func.isRequired,
};

export default CashRegisterIncomeView;
