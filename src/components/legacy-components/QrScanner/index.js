/**
 *
 * QrScanner
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import QrReader from 'react-qr-reader';

const QrScannerContainer = styled.div`
  width: 100vw;
`;

function QrScanner({ onDetectValid }) {
  const regex = /^https:\/\/apprecio.mx\/join\?(([^?=&]*)=([^?=&]*)&)*store=[0-9]*(&([^?=&]*)=([^?=&]*))*/;

  const handleScan = data => {
    if (regex.test(data)) {
      const urlString = data;
      const url = new URL(urlString);
      const store = url.searchParams.get('store');
      onDetectValid(store);
    }
  };

  const handleError = err => {
    console.error(err);
  };

  return (
    <QrScannerContainer>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
    </QrScannerContainer>
  );
}

QrScanner.propTypes = {
  onDetectValid: PropTypes.func.isRequired,
};

export default QrScanner;
