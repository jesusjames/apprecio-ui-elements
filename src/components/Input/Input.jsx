import PropTypes, { oneOfType } from 'prop-types';
import {
  InputContainerStyled,
  InputStyled,
} from './style';
import Email from '../image/Email.svg';

const Input = ({
  disabled,
  error,
  placeholder,
  type,
  value,
  ...rest
}) => {
  return (
    <InputContainerStyled>
      {
        type === 'email' ?
        <img
          alt="email-symbol"
          className="email-symbol"
          src={Email}
        /> :
        null
      }
      <InputStyled
        disabled={disabled}
        error={error}
        placeholder={placeholder}
        type={type}
        value={value}
        {...rest}
      />
    </InputContainerStyled>
  );
}

Input.defaultProps = {
  disabled: false,
  error: false,
  placeholder: 'Input text',
  type: 'text',
  value: ''
};

Input.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'password',
    'email',
    // 'number', // ¿Se incluye dentro de los casos de uso?
    'tel'
  ]),
  value: oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default Input;