import PropTypes, { oneOfType } from 'prop-types';

import { InputContainerStyled } from './style';

const Input = ({
  type,
  placeholder,
  value,
  ...rest
}) => {
  return (
    <InputContainerStyled>
      <input
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </InputContainerStyled>
  );
}

Input.defaultProps = {
  type: 'text',
  placeholder: 'Input text',
};

Input.propTypes = {
  type: PropTypes.oneOf([
    'text',
    'password',
    'email',
    // 'number', // ¿Se incluye dentro de los casos de uso?
    'tel'
  ]),
  placeholder: PropTypes.string,
  value: oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default Input;