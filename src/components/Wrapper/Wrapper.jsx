/**
 *
 * Wrapper
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import {
  WrapperStyled
} from './style'

function Wrapper({
  children,
  flex,
  padding,
  paddingBottom,
  paddingTop,
  variant,
  ...rest
}) {
  return (
    <WrapperStyled
    flex={flex}
      padding={padding}
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
      variant={variant}
      {...rest}
    >
      {children}
    </WrapperStyled>
  );
}

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  flex: PropTypes.shape({
    direction: PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
    alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
    justifyContent: (['start', 'end', 'center', 'space-between', 'space-around'])
  }),
  padding: PropTypes.oneOf(['1', '2', '3', '4', '5']),
  paddingBottom: PropTypes.oneOf(['1', '2', '3', '4', '5']),
  paddingTop: PropTypes.oneOf(['1', '2', '3', '4', '5']),
  variant: PropTypes.oneOF(['dark', 'apprecio-white', 'pure-white']),
};

export default Wrapper;
