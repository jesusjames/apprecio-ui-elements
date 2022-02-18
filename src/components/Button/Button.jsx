import styled from "styled-components";
import PropTypes from 'prop-types';

const Button = ({children, onClick, ...rest}) => {
  return (
    <ButtonStyled onClick={onClick} {...rest}>{children}</ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  background-color: ${props => props.theme.button.quaternary.mainColor};
  color: white;
`;

Button.defaultProps = {
  children: 'hola'
}

Button.propTypes = {
  /** text button */
  children: PropTypes.string,
  /** callback function onClick event */
  onClick: PropTypes.func
}

export default Button
