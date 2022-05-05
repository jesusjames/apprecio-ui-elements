import styled from 'styled-components';

export const MiniInputStyled = styled.input`
  width: 47px;
  height: 47px;
  padding: 5px;

  background-color: ${(props) => {
    if (props.disabled) return 'var(--grayColorBorder) !important';
    if (props.error) return 'var(--errorColorBackground)';
    return props.theme?.input?.[props.color]?.backgroundColor || 'var(--whiteColorPure)';
  }};

  border-radius: 12px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => {
    if (props.error) return 'var(--errorColorBorder)';
    return 'var(--grayColorOne)';
  }};
  
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;

  text-align: center;

  color: ${(props) => {
    if (props.error) return 'var(--errorColorText)';
    return props.theme?.input?.[props.color]?.color || 'var(--darkColor)';
  }};

  &::-webkit-input-placeholder,
  &::placeholder {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 500;
    color: var(--grayColorDisabled);
    opacity: 1 !important;
  }

  &:focus {
    outline: none;
    border-color: ${(props) => {
    if (props.error) return 'var(--errorColorBorder)';
    return props.theme?.input?.[props.color]?.mainColor || 'var(--lightColor)';
  }};
    box-shadow: ${(props) => {
    if (props.error) return '0px 0px 0px 2px var(--errorColorShadow) !important';
    return `0px 0px 0px 2px ${props.theme?.input?.[props.color]?.boxShadow || 'var(--lightColor)'} !important`;
  }};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  &[type=number] {
      -moz-appearance:textfield; /* Firefox */
  }
`;

export default {
  MiniInputStyled,
};
