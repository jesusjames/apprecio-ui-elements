/**
 *
 * Wrapper
 *
 */

import PropTypes from 'prop-types';

import {
  WrapperStyled,
} from './style';

const Wrapper = ({
  children,
  flex,
  padding,
  paddingBottom,
  paddingTop,
  variant,
  ...rest
}) => (
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

Wrapper.defaultProps = {
  children: null,
  flex: null,
  padding: '1',
  paddingBottom: null,
  paddingTop: null,
  variant: 'apprecio-white',
};

Wrapper.propTypes = {
  /**
   * Arreglo de nodos hijos.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /**
   * Reglas para el atributo 'flex' que rige dentro del complemento.
   */
  flex: PropTypes.shape({
    direction: PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
    alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
    justifyContent: PropTypes.oneOf(['start', 'end', 'center', 'space-between', 'space-around']),
  }),
  /**
   * Espacio entre los bordes del Wrapper y el contenido.
   */
  padding: PropTypes.oneOf(['1', '2', '3', '4', '5']),
  /**
   * Sobreescribe padding para el espacio inferior.
   */
  paddingBottom: PropTypes.oneOf(['1', '2', '3', '4', '5']),
  /**
   * Sobreeescribe padding para el espacio superior.
   */
  paddingTop: PropTypes.oneOf(['1', '2', '3', '4', '5']),
  /**
   * El color que se usará como fondo del componente.
   */
  variant: PropTypes.oneOf(['dark', 'apprecio-white', 'pure-white']),
};

export default Wrapper;
