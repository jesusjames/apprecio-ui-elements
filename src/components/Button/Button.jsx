import PropTypes from 'prop-types';
import {BaseButtomStyled} from "./style";

const Button = ({children, icon, ...rest}) => {
  return (
    <BaseButtomStyled {...rest}>
      {children}
    </BaseButtomStyled>
  )
}

Button.defaultProps = {
  children: 'click',
  color: 'primary',
  outline: false,
  size: 'medium',
  disabled: false,
  icon: null,
  block: false
}

Button.propTypes = {
  /** Recibe un elemento o componente como children */
  children: PropTypes.node,
  /** Indica el color del boton (primary, secondary, tertiary, quaternary, facebook ) */
  color: PropTypes.string.isRequired,
  /** Cambia el estilo del boton por uno de contorno, sin fondo  */
  outline: PropTypes.bool,
  /** Indica el tamaño del boton */
  size: PropTypes.string,
  /** deshabilita el boton */
  disabled: PropTypes.bool,
  /** Icono del boton */
  icon: PropTypes.any,
  /** Recibe un objeto de tipo tema extraido de apprecioTheme */
  theme: PropTypes.object,
  /** Toma el ancho del contenedor */
  block: PropTypes.bool
}

export default Button
