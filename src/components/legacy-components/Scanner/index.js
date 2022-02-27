/**
 *
 * Scanner
 *
 */

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Quagga from 'quagga';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import theme from 'utils/theme';

import TorchOff from '../../images/TorchOff.svg';
import TorchOn from '../../images/TorchOn.svg';

const Container = styled.div`
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;

  & > canvas,
  & > video {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
`;

const CameraSelector = styled.div`
  height: 32px;
  width: 100%;
  position: fixed;
  bottom: ${window.innerWidth > 360 ? '55vw' : '58vw'};
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 99;

  & > div {
    height: 32px;
    width: 128px;
    overflow-x: scroll;
    overflow-y: hidden;
    z-index: 100;
    display: flex;
    flex-wrap: nowrap;

    &.hidden {
      display: none !important;
    }

    & > button {
      margin-top: 3px;
      min-height: 26px;
      max-height: 26px;
      min-width: 26px;
      max-width: 26px;
      flex-grow: 1;
      flex-shrink: 1;
      border-color: #f6f8fd;
      border-width: 2px;
      border-style: solid;
      border-radius: 50%;
      line-height: 20px;
      font-size: 13px;
      text-align: center;
      font-family: ${theme.typeface.default};
      color: #f6f8fd;
      background-color: transparent;
      font-weight: 500;
      cursor: pointer;
      margin-left: 3px;
      margin-right: 3px;
      user-select: none;
      padding: 0;

      &:first-child {
        margin-left: 51px;
      }

      &:first-child.selected {
        margin-left: 48px;
      }

      &:last-child {
        margin-right: 51px;
      }

      &:last-child.selected {
        margin-right: 48px;
      }

      &.selected {
        margin-top: 0;
        background-color: #f6f8fd;
        color: #748a9d;
        min-height: 32px;
        max-height: 32px;
        min-width: 32px;
        max-width: 32px;
        transition-timing-function: ease-in-out;
        transition-duration: 0.2s;
      }
    }
  }
`;

const TorchSwitch = styled.button`
  height: 44px;
  width: 44px;
  position: fixed;
  bottom: calc(${window.innerWidth > 360 ? '55vw' : '58vw'} - 6px);
  left: 5vw;
  z-index: 100;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  &.hidden {
    display: none !important;
  }
`;

function Scanner({
  onDetected,
  devicesArray,
  selectedDevice,
  torchIsActive,
  setSelectedDevice,
  setTorchIsActive,
  // scanBlock,
}) {
  let cameraSelector = useRef(null);
  const [blockSelector, setBlockSelector] = useState(false);
  const [isOnChrome] = useState(
    window.navigator.userAgent.toLowerCase().indexOf('chrome') > -1 &&
      !!window.chrome,
  );
  let globalCounter = 0;
  const codesArray = [];
  const pushCode = code => {
    if (globalCounter % 50 === 0) {
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
            width: { min: 360, ideal: 1920, max: 4096 },
            height: { min: 480, ideal: 1080, max: 2400 },
            facingMode: devicesArray.length ? null : 'environment',
            aspectRatio: { min: 1, max: 2 },
            deviceId: devicesArray.length
              ? selectedDevice || devicesArray[0].deviceId
              : null,
          },
          singleChannel: true,
          area: {
            top: '20%',
            right: '22.5%',
            left: '22.5%',
            bottom: '60%',
          },
        },
        locate: false,
        // locator: {
        //   halfSample: true,
        //   patchSize: 'medium',
        // },
        numOfWorkers: 2,
        frequency: 50,
        decoder: {
          readers: ['ean_reader', 'ean_8_reader', 'upc_reader'],
        },
      },
      err => {
        if (err) {
          console.error(err);
        }
        Quagga.start();
        setBlockSelector(false);
      },
    );
  };

  useEffect(() => {
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
          result.boxes
            .filter(function(box) {
              return box !== result.box;
            })
            .forEach(function(box) {
              Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                color: 'green',
                lineWidth: 2,
              });
            });
        }

        // if (result.box) {
        //   Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
        //     color: '#00F',
        //     lineWidth: 2,
        //   });
        // }

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

  // useEffect(() => {
  //   if (scanBlock) {
  //     Quagga.stop();
  //   } else {
  //     initializeQuagga();
  //   }
  // }, [scanBlock]);

  const detected = result => {
    pushCode(result.codeResult.code);
    onDetected(codesArray[0].code);
    // Quagga.offDetected();
    // Quagga.stop();
  };

  return (
    <div>
      <Container id="interactive" className="viewport" />
      <TorchSwitch
        className={!isOnChrome || blockSelector ? 'hidden' : ''}
        onClick={() => {
          const activeCamera = Quagga.CameraAccess.getActiveTrack();
          if (torchIsActive) {
            activeCamera.applyConstraints({
              advanced: [{ torch: false }],
            });
          } else {
            activeCamera.applyConstraints({
              advanced: [{ torch: true }],
            });
          }
          setTorchIsActive(!torchIsActive);
        }}
      >
        <img
          src={torchIsActive ? TorchOn : TorchOff}
          alt={torchIsActive ? 'Torch On' : 'Torch Off'}
        />
      </TorchSwitch>
      <CameraSelector>
        <div
          className={devicesArray.length < 2 || blockSelector ? 'hidden' : ''}
          ref={e => {
            cameraSelector = e;
            return 0;
          }}
        >
          {devicesArray.map((device, index) => (
            <button
              type="button"
              className={selectedDevice === device.deviceId ? 'selected' : ''}
              onClick={() => {
                if (selectedDevice !== device.deviceId) {
                  setBlockSelector(true);
                  cameraSelector.scrollLeft = index * 32;
                  setSelectedDevice(device.deviceId);
                  Quagga.stop();
                  initializeQuagga();
                  setTorchIsActive(false);
                  const activeCamera = Quagga.CameraAccess.getActiveTrack();
                  activeCamera.applyConstraints({
                    advanced: [{ torch: torchIsActive }],
                  });
                }
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </CameraSelector>
    </div>
  );
}

Scanner.propTypes = {
  onDetected: PropTypes.func,
  devicesArray: PropTypes.array,
  selectedDevice: PropTypes.object,
  torchIsActive: PropTypes.bool,
  setSelectedDevice: PropTypes.func,
  setTorchIsActive: PropTypes.func,
  // scanBlock: PropTypes.bool,
};

export default Scanner;
