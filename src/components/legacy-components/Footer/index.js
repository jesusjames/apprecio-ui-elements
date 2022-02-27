/**
 *
 * Footer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import theme, { spacingMapping } from '../../utils/theme';

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  bottom: 0;
  padding: ${props => spacingMapping(props.padding)};
  background-color: ${props => {
    switch (props.background) {
      case 'black':
        return `${theme.palette.background.black}55`;
      case 'white':
        return `${theme.palette.background.white}`;
      default:
        return 'transparent';
    }
  }};
  width: 100%;
  position: ${props => props.position};
  z-index: 20;
`;

function Footer({ p1, p2, p3, p4, p5, children, fixed, black, white }) {
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
      position={(() => {
        if (fixed) return 'fixed';
        return 'static';
      })()}
      background={(() => {
        if (black) return 'black';
        if (white) return 'white';
        return 'transparent';
      })()}
    >
      {children}
    </Container>
  );
}

Footer.propTypes = {
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
   * Children to render.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /**
   * Whether the component should be fixed to the bottom of the page.
   */
  fixed: PropTypes.bool,
  /**
   * Renders the black background variant.
   */
  black: PropTypes.bool,
  /**
   * Renders the white background variant.
   */
  white: PropTypes.bool,
};

export default Footer;
