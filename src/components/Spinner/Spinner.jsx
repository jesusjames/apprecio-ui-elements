/**
 *
 * Spinner
 *
 */

import React from 'react';

import {
  SpinnerStyled,
  SkCircle,
  SkChild,
} from './style';

const skChildProps = [
  { rotation: 0, size: 1.2 },
  { rotation: 30, delay: 1.1 },
  { rotation: 60, delay: 1 },
  { rotation: 90, delay: 0.9 },
  { rotation: 120, delay: 0.8 },
  { rotation: 150, delay: 0.7 },
  { rotation: 180, delay: 0.6 },
  { rotation: 210, delay: 0.5 },
  { rotation: 240, delay: 0.4 },
  { rotation: 270, delay: 0.3 },
  { rotation: 300, delay: 0.2 },
  { rotation: 330, delay: 0.1 },
];

const Spinner = () => (
  <SpinnerStyled>
    <SkCircle>
      {skChildProps.map((childProps) => (
        <SkChild key={childProps.rotation} {...childProps} />
      ))}
    </SkCircle>
  </SpinnerStyled>
);

export default Spinner;
