import PropTypes from 'prop-types';
import {
  InputContainerStyled,
  InputStyled,
} from './style';

const Input = ({
  error,
  iconLeft,
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
        {...rest}
      />
    </InputContainerStyled>
  );
}

Input.defaultProps = {
  error: false,
  iconLeft: '',
};

Input.propTypes = {
  error: PropTypes.bool,
  iconLeft: PropTypes.string,
}

export default Input;