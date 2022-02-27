/**
 *
 * Row
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import { spacingMapping } from '../../utils/theme';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  margin: ${props => spacingMapping(props.margin)};
  margin-top: ${props =>
    props.marginTop
      ? spacingMapping(props.marginTop)
      : spacingMapping(props.margin)};
  margin-bottom: ${props =>
    props.marginBottom
      ? spacingMapping(props.marginBottom)
      : spacingMapping(props.margin)};
  padding: ${props => spacingMapping(props.padding)};
  overflow-x: ${props => props.overflow};
`;

function Row({
  m1,
  m2,
  m3,
  m4,
  m5,
  mt1,
  mt2,
  mt3,
  mt4,
  mt5,
  mb1,
  mb2,
  mb3,
  mb4,
  mb5,
  p1,
  p2,
  p3,
  p4,
  p5,
  children,
  alignItems,
  justifyContent,
  overflow,
}) {
  return (
    <Container
      margin={(() => {
        if (m5) return '5';
        if (m4) return '4';
        if (m3) return '3';
        if (m2) return '2';
        if (m1) return '1';
        return '0';
      })()}
      marginTop={(() => {
        if (mt5) return '5';
        if (mt4) return '4';
        if (mt3) return '3';
        if (mt2) return '2';
        if (mt1) return '1';
        return null;
      })()}
      marginBottom={(() => {
        if (mb5) return '5';
        if (mb4) return '4';
        if (mb3) return '3';
        if (mb2) return '2';
        if (mb1) return '1';
        return null;
      })()}
      padding={(() => {
        if (p5) return '5';
        if (p4) return '4';
        if (p3) return '3';
        if (p2) return '2';
        if (p1) return '1';
        return '0';
      })()}
      alignItems={alignItems}
      justifyContent={justifyContent}
      overflow={overflow}
    >
      {children}
    </Container>
  );
}

Row.propTypes = {
  m1: PropTypes.bool,
  m2: PropTypes.bool,
  m3: PropTypes.bool,
  m4: PropTypes.bool,
  m5: PropTypes.bool,
  mt1: PropTypes.bool,
  mt2: PropTypes.bool,
  mt3: PropTypes.bool,
  mt4: PropTypes.bool,
  mt5: PropTypes.bool,
  mb1: PropTypes.bool,
  mb2: PropTypes.bool,
  mb3: PropTypes.bool,
  mb4: PropTypes.bool,
  mb5: PropTypes.bool,
  p1: PropTypes.bool,
  p2: PropTypes.bool,
  p3: PropTypes.bool,
  p4: PropTypes.bool,
  p5: PropTypes.bool,
  children: PropTypes.any,
  alignItems: PropTypes.string.isRequired,
  justifyContent: PropTypes.string.isRequired,
  overflow: PropTypes.string,
};

export default Row;
