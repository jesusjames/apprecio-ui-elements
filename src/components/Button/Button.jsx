import PropTypes from 'prop-types';
import { is, isNil } from 'ramda';
import { BaseButtonStyled, IconWrapperStyled } from './style';

const Button = ({
  children, iconLeft, iconRight, disabled, size, color, outline, ...rest
}) => {
  const hasChildren = !isNil(children);
  return (
    <BaseButtonStyled disabled={disabled} color={color} size={size} outline={outline} {...rest}>
      <div className={(iconLeft || iconRight) && 'ap-flex ap-w-full'}>
        <GenerateIcon className="ap-flex-none" icon={iconLeft} disabled={disabled} size={size} color={color} outline={outline} hasChildren={hasChildren} />
        <span className="ap-flex-grow">{children}</span>
        <GenerateIcon className="ap-flex-none" icon={iconRight} disabled={disabled} size={size} color={color} outline={outline} hasChildren={hasChildren} />
      </div>
    </BaseButtonStyled>
  );
};

const GenerateIcon = ({
  icon: SvgIcon, disabled, size, hasChildren, color, outline,
}) => {
  if (isNil(SvgIcon)) return null;
  const renderIcon = () => (is(Function, SvgIcon) ? <SvgIcon /> : SvgIcon);
  return (
    <IconWrapperStyled
      size={size}
      disabled={disabled}
      hasChildren={hasChildren}
      color={color}
      outline={outline}
    >
      {is(String, SvgIcon) ? <img src={SvgIcon} alt="" /> : renderIcon()}
    </IconWrapperStyled>
  );
};

Button.defaultProps = {
  color: 'primary',
  outline: false,
  size: 'medium',
  disabled: false,
  block: false,
};

Button.propTypes = {
  /** Recibe un elemento o componente como children */
  children: PropTypes.node,
  /** Indica el color del boton (primary, secondary, tertiary, quaternary, facebook ) */
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),
  /** Cambia el estilo del boton por uno de contorno, sin fondo  */
  outline: PropTypes.bool,
  /** Indica el tamaño del boton */
  size: PropTypes.string,
  /** deshabilita el boton */
  disabled: PropTypes.bool,
  /** Icono izquierdo del boton */
  iconLeft: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]),
  /** Icono derecho del boton */
  iconRight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]),
  /** Toma el ancho del contenedor */
  block: PropTypes.bool,
};

export default Button;
