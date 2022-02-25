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
  variant,
  ...rest
}) => {
  return (
    <InputContainerStyled>
      {
        iconLeft ?
        <GenerateIcon icon={iconLeft} orientation="left" /> :
        null
      }
      <InputStyled
        error={error}
        iconLeft={iconLeft ? true : false}
        iconRight={iconRight ? true : false}
        variant={variant}
        {...rest}
      />
      {
        iconRight ?
        <GenerateIcon icon={iconRight} orientation="right" /> :
        null
      }
    </InputContainerStyled>
  );
}

Input.defaultProps = {
  error: false,
  iconLeft: '',
  iconRight: '',
  variant: 'secondary',
};

Input.propTypes = {
  /** Altera el color del campo para representar un error. */
  error: PropTypes.bool,
  /** Ruta hacia el ícono que se quiere mostrar a la izquierda. */
  iconLeft: PropTypes.string,
  /** Ruta hacia el ícono que se quiere mostrar a la derecha. */
  iconRight: PropTypes.string,
  /** El color de la paleta que se usará para el componente. */
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),
}

export default Input;