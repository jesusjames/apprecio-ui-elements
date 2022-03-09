/**
 *
 * Footer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { FooterStyled } from './style';

const Footer = ({
  children, fixed, black, white,
}) => (
  <FooterStyled
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
  </FooterStyled>
);

Footer.propTypes = {
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
