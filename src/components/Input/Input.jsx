import PropTypes, { oneOfType } from 'prop-types';

import {
  InputContainerStyled,
  InputStyled,
} from './style';

const Input = ({
  disabled,
  placeholder,
  type,
  value,
  ...rest
}) => {
  return (
    <InputContainerStyled>
      <InputStyled
        disabled={disabled}
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
  placeholder: 'Input text',
  type: 'text',
  value: ''
};

Input.propTypes = {
  disabled: PropTypes.bool,
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