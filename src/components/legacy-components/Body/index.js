/**
 *
 * Body
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme, { spacingMapping } from 'utils/theme';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  max-width: 375px;
  margin-top: ${theme.spacing[0]};
  padding: ${props => spacingMapping(props.padding)};
  padding-top: ${props =>
    props.paddingTop
      ? spacingMapping(props.paddingTop)
      : spacingMapping(props.padding)};
  padding-bottom: ${props =>
    props.paddingBottom
      ? spacingMapping(props.paddingBottom)
      : spacingMapping(props.padding)};
  padding-left: ${theme.spacing[3]};
  padding-right: ${theme.spacing[3]};
`;

function Body({
  children,
  p1,
  p2,
  p3,
  p4,
  p5,
  pt1,
  pt2,
  pt3,
  pt4,
  pt5,
  pb1,
  pb2,
  pb3,
  pb4,
  pb5,
}) {
  return (
    <Container
      padding={(() => {
        if (p5) return '5';
        if (p4) return '4';
        if (p3) return '3';
        if (p2) return '2';
        if (p1) return '1';
        return '0';
      })()}
      paddingTop={(() => {
        if (pt5) return '5';
        if (pt4) return '4';
        if (pt3) return '3';
        if (pt2) return '2';
        if (pt1) return '1';
        return null;
      })()}
      paddingBottom={(() => {
        if (pb5) return '5';
        if (pb4) return '4';
        if (pb3) return '3';
        if (pb2) return '2';
        if (pb1) return '1';
        return null;
      })()}
    >
      {children}
    </Container>
  );
}

Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /**
   * Whether the padding of the component should be of 1 unit, as specified in utils/theme.js. Has the lowest priority overall.
   */
  p1: PropTypes.bool,
  /**
   * Whether the padding of the component should be of 2 units, as specified in utils/theme.js. Overrides p1.
   */
  p2: PropTypes.bool,
  /**
   * Whether the padding of the component should be of 3 units, as specified in utils/theme.js. Overrides p2.
   */
  p3: PropTypes.bool,
  /**
   * Whether the padding of the component should be of 4 units, as specified in utils/theme.js. Overrides p3.
   */
  p4: PropTypes.bool,
  /**
   * Whether the padding of the component should be of 5 units, as specified in utils/theme.js. Overrides p4.
   */
  p5: PropTypes.bool,
  /**
   * Whether the top padding of the component should be of 1 unit, as specified in utils/theme.js. Overrides any p#.
   */
  pt1: PropTypes.bool,
  /**
   * Whether the top padding of the component should be of 2 units, as specified in utils/theme.js. Overrides pt1.
   */
  pt2: PropTypes.bool,
  /**
   * Whether the top padding of the component should be of 3 units, as specified in utils/theme.js. Overrides pt2.
   */
  pt3: PropTypes.bool,
  /**
   * Whether the top padding of the component should be of 4 units, as specified in utils/theme.js. Overrides pt3.
   */
  pt4: PropTypes.bool,
  /**
   * Whether the top padding of the component should be of 5 units, as specified in utils/theme.js. Alongside pb5 has the highest priority overall.
   */
  pt5: PropTypes.bool,
  /**
   * Whether the bottom padding of the component should be of 1 unit, as specified in utils/theme.js. Overrides any p#.
   */
  pb1: PropTypes.bool,
  /**
   * Whether the bottom padding of the component should be of 2 units, as specified in utils/theme.js. Overrides pb1.
   */
  pb2: PropTypes.bool,
  /**
   * Whether the bottom padding of the component should be of 3 units, as specified in utils/theme.js. Overrides pb2.
   */
  pb3: PropTypes.bool,
  /**
   * Whether the bottom padding of the component should be of 4 units, as specified in utils/theme.js. Overrides pb3.
   */
  pb4: PropTypes.bool,
  /**
   * Whether the bottom padding of the component should be of 5 units, as specified in utils/theme.js. Alongside pt5 has the highest priority overall.
   */
  pb5: PropTypes.bool,
};

export default Body;
