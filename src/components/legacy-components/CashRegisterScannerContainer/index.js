/**
 *
 * CashRegisterScannerContainer
 *
 */

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Quagga from 'quagga';

import theme from 'utils/theme';

const StyledContainer = styled.div`
  min-width: ${props => props.viewfinderWidth};
  max-width: ${props => props.viewfinderWidth};
  min-height: ${props => props.viewfinderHeight};
  max-height: ${props => props.viewfinderHeight};

  overflow: ${props => (props.showOn ? 'visible' : 'hidden')};

  transform: ${({ showOn }) =>
    showOn ? 'translateX(-100%)' : 'translateX(0)'};
  transition: transform 0.35s ease-in-out;

  .hoodie.top {
    position: absolute;
    top: 0;
    left: calc(${props => props.viewfinderWidth} / 2 - 50vw);
    width: 100vw;
    height: 0;

    z-index: 1;
    opacity: 0.5;
  }

  .hoodie.bottom {
    position: absolute;
    bottom: 0;
    left: calc(${props => props.viewfinderWidth} / 2 - 50vw);
    width: 100vw;
    height: 0;

    z-index: 1;
    opacity: 0.5;
  }

  .hoodie.left {
    position: absolute;
    top: 0;
    left: calc(${props => props.viewfinderWidth} / 2 - 50vw);
    width: calc(50vw - ${props => props.viewfinderWidth} / 2);
    height: 100%;

    z-index: 1;
    opacity: 0.5;
  }

  .hoodie.right {
    position: absolute;
    top: 0;
    right: calc(${props => props.viewfinderWidth} / 2 - 50vw);
    width: calc(50vw - ${props => props.viewfinderWidth} / 2);
    height: 100%;

    z-index: 1;
    opacity: 0.5;
  }

  .hoodie.layer1 {
    -webkit-backdrop-filter: blur(50px);
    backdrop-filter: blur(50px);
  }

  .hoodie.layer2 {
    background-color: ${theme.palette.disabled};
  }

  .display-message {
    position: absolute;
    top: -80px;

    z-index: 1;

    color: white;
    font: normal normal normal 13px/20px ${theme.typeface.default};
    letter-spacing: 0px;
  }

  .scanner-message {
    position: absolute;
    top: ${props =>
      `calc(180px - ${props.updwardsDisplacementInPx}px + ${props.downwardsDisplacementInVh}vh)`};
    left: 50%;
    transform: translateX(-50%);

    z-index: 1;

    color: white;
    text-align: center;
    font: normal normal bold 16px/22px ${theme.typeface.default};
    letter-spacing: -0.16px;
    width: 280px;
  }

  .code-input {
    position: absolute;
    top: ${props =>
      `calc(250px - ${props.updwardsDisplacementInPx}px + ${props.downwardsDisplacementInVh}vh)`};
    left: 50%;
    transform: translateX(-50%);

    z-index: 1;

    color: #ffffff;
    text-align: center;
    font: normal normal bold 26px/39px ${theme.typeface.default};
    letter-spacing: 0px;
    width: 246px;

    border: 1px solid #ffffff;
    border-radius: 10px;

    background-color: transparent;
  }

  .input-message {
    position: absolute;
    top: ${props =>
      `calc(300px - ${props.updwardsDisplacementInPx}px + ${props.downwardsDisplacementInVh}vh)`};
    left: 50%;
    transform: translateX(-50%);

    z-index: 1;

    color: ${theme.palette.text.offWhite};
    text-align: center;
    font: normal normal bold 15px/23px ${theme.typeface.default};
    letter-spacing: 0px;
    opacity: 0.5;
    width: 251px;
  }
`;

const CameraContainer = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: calc(100vw * 16 / 9);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & > canvas,
  & > video {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    z-index: 1;
  }
`;

function CashRegisterScannerContainer({
  showOn,
  dispatchProductPrice,
  scannedCode,
  setScannedCode,
}) {
  const viewfinderWidth = theme.width.default;
  const viewfinderHeight = '169px';

  const scansPerSecond = 50;
  const scansUntilRequest = 20;

  const containerRef = useRef(null);
  const topHoodieLayer1Ref = useRef(null);
  const topHoodieLayer2Ref = useRef(null);
  const bottomHoodieLayer1Ref = useRef(null);
  const bottomHoodieLayer2Ref = useRef(null);
  let containerVerticalPosition = 0;

  let globalCounter = 0;
  const codesArray = [];

  const updwardsDisplacementInPx = 600;
  const downwardsDisplacementInVh = (updwardsDisplacementInPx * 10) / 75;

  const codeInputRef = useRef(null);

  const pushCode = code => {
    if (globalCounter % scansUntilRequest === 0) {
      codesArray.length = 0;
    }
    const isInArray = codesArray.findIndex(el => el.code === code) !== -1;
    if (!isInArray) {
      codesArray.push({ code, count: 1 });
    } else {
      codesArray.find(el => el.code === code).count += 1;
    }
    codesArray.sort((a, b) => b.count - a.count);
    globalCounter += 1;
  };

  const initializeQuagga = () => {
    Quagga.init(
      {
        inputStream: {
          type: 'LiveStream',
          constraints: {
            aspectRatio: { min: 16 / 9, max: 16 / 9 },
            facingMode: 'environment',
          },
          singleChannel: true,
        },
        locate: true,
        locator: {
          halfSample: true,
          patchSize: 'medium',
        },
        numOfWorkers: 2,
        frequency: scansPerSecond,
        decoder: {
          readers: ['ean_reader', 'ean_8_reader', 'upc_reader'],
        },
      },
      err => {
        if (err) {
          console.log(err);
          return;
        }
        Quagga.start();
      },
    );
  };

  const detected = result => {
    pushCode(result.codeResult.code.replace(/^0+/, ''));
    setScannedCode(codesArray[0].code);
    if (globalCounter % scansUntilRequest === 0) {
      dispatchProductPrice(codesArray[0].code);
    }
  };

  useEffect(() => {
    containerVerticalPosition = containerRef.current.getBoundingClientRect()
      .top;

    topHoodieLayer1Ref.current.style.top = `-${containerVerticalPosition}px`;
    topHoodieLayer2Ref.current.style.top = `-${containerVerticalPosition}px`;
    bottomHoodieLayer1Ref.current.style.bottom = `calc(${containerVerticalPosition}px + ${viewfinderHeight} - 100vh)`;
    bottomHoodieLayer2Ref.current.style.bottom = `calc(${containerVerticalPosition}px + ${viewfinderHeight} - 100vh)`;

    topHoodieLayer1Ref.current.style.height = `${containerVerticalPosition}px`;
    topHoodieLayer2Ref.current.style.height = `${containerVerticalPosition}px`;
    bottomHoodieLayer1Ref.current.style.height = `calc(100vh - ${containerVerticalPosition}px - ${viewfinderHeight})`;
    bottomHoodieLayer2Ref.current.style.height = `calc(100vh - ${containerVerticalPosition}px - ${viewfinderHeight})`;

    initializeQuagga();

    // detecting boxes on stream
    Quagga.onProcessed(result => {
      const drawingCtx = Quagga.canvas.ctx.overlay;
      const drawingCanvas = Quagga.canvas.dom.overlay;

      if (result) {
        if (result.boxes) {
          drawingCtx.clearRect(
            0,
            0,
            Number(drawingCanvas.getAttribute('width')),
            Number(drawingCanvas.getAttribute('height')),
          );
        }

        if (result.codeResult && result.codeResult.code) {
          Quagga.ImageDebug.drawPath(
            result.line,
            { x: 'x', y: 'y' },
            drawingCtx,
            { color: 'red', lineWidth: 3 },
          );
        }
      }
    });

    Quagga.onDetected(detected);

    return () => {
      Quagga.offDetected();
      Quagga.stop();
    };
  }, []);

  return (
    <StyledContainer
      ref={containerRef}
      showOn={showOn}
      apperture="0px"
      viewfinderWidth={viewfinderWidth}
      viewfinderHeight={viewfinderHeight}
      updwardsDisplacementInPx={updwardsDisplacementInPx}
      downwardsDisplacementInVh={downwardsDisplacementInVh}
    >
      <div ref={topHoodieLayer1Ref} className="hoodie top layer1" />
      <div ref={topHoodieLayer2Ref} className="hoodie top layer2" />
      <div ref={bottomHoodieLayer1Ref} className="hoodie bottom layer1" />
      <div ref={bottomHoodieLayer2Ref} className="hoodie bottom layer2" />
      <div className="hoodie left layer1" />
      <div className="hoodie left layer2" />
      <div className="hoodie right layer1" />
      <div className="hoodie right layer2" />
      {/* <p className="display-message">*precio basado en tu ubicación</p> */}
      <CameraContainer id="interactive" className="viewport" />
      <p className="scanner-message">
        Escanea el código de barras del producto que deseas vender
      </p>
      <input
        ref={codeInputRef}
        className="code-input"
        value={scannedCode}
        type="number"
        onChange={e => setScannedCode(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            codeInputRef.current.blur();
            dispatchProductPrice(scannedCode);
          }
        }}
      />
      <p className="input-message">
        Verifica el código de barras o ingrésalo manualmente
      </p>
    </StyledContainer>
  );
}

CashRegisterScannerContainer.propTypes = {
  /**
   * Whether this component should be visible or not.
   */
  showOn: PropTypes.bool.isRequired,
  /**
   * Fetches product information.
   */
  dispatchProductPrice: PropTypes.func.isRequired,
  /**
   * Barcode detected by the scanner.
   */
  scannedCode: PropTypes.string.isRequired,
  /**
   * Setter method for the scannedCode.
   */
  setScannedCode: PropTypes.func.isRequired,
};

export default CashRegisterScannerContainer;
