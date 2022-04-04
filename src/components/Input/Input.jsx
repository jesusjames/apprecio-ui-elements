import PropTypes from 'prop-types';
import {
  InputContainerStyled,
  InputStyled,
} from './style';
import { GenerateIcon } from './helpers';

const Input = ({
  error,
  iconLeft,
  iconRight,
  color,
  block,
  ...rest
}) => (
  <InputContainerStyled block={block}>
    <GenerateIcon icon={iconLeft} orientation="left" />
    <InputStyled
      error={error}
      iconLeft={!!iconLeft}
      iconRight={!!iconRight}
      color={color}
      block={block}
      {...rest}
    />
    <GenerateIcon icon={iconRight} orientation="right" />
  </InputContainerStyled>
);

Input.defaultProps = {
  error: false,
  iconLeft: '',
  iconRight: '',
  color: 'secondary',
  block: false,
};

Input.propTypes = {
  /** Altera el color del campo para representar un error. */
  error: PropTypes.bool,
  /** Ruta hacia el ícono que se quiere mostrar a la izquierda. */
  iconLeft: PropTypes.string,
  /** Ruta hacia el ícono que se quiere mostrar a la derecha. */
  iconRight: PropTypes.string,
  /** El color de la paleta que se usará para el componente. */
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),
  /** Toma el ancho del contenedor */
  block: PropTypes.bool,
};

export default Input;
