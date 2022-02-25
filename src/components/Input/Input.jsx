import PropTypes from 'prop-types';
import {
  InputContainerStyled,
  InputStyled,
} from './style';

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
        <img
          alt="icon-left"
          className="icon-left"
          src={iconLeft}
        /> :
        null
      }
      <InputStyled
        error={error}
        iconLeft={iconLeft ? true : false}
        iconRight={iconRight ? true : false}
        {...rest}
      />
      {
        iconRight ?
        <img
          alt="icon-right"
          className="icon-right"
          src={iconRight}
        /> :
        null
      }
    </InputContainerStyled>
  );
}

Input.defaultProps = {
  error: false,
  iconLeft: '',
  iconRight: '',
};

Input.propTypes = {
  /** Altera el color del campo para representar un error. */
  error: PropTypes.bool,
  /** Ruta hacia el ícono que se quiere mostrar a la izquierda. */
  iconLeft: PropTypes.string,
  /** Ruta hacia el ícono que se quiere mostrar a la derecha. */
  iconRight: PropTypes.string,
}

export default Input;