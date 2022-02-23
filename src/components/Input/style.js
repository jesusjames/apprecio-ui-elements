import styled from "styled-components";

export const InputContainerStyled = styled.div`
`;

export const InputStyled = styled.input`
  width: 311px;
  height: 48px;

  background-color: ${props => {
    if (props.disabled) return 'var(--grayColorBorder) !important';
    if (props.error && props.value) return '#FF486020';
    return 'var(--whiteColorPure)';
  }};

  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => {
    if (props.error) return 'var(--mainColor)';
    return 'var(--grayColorOne)';
  }};
  
  padding: 8px 16px 8px 16px;

  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 500;
  color: ${props => {
    if (props.error) return 'var(--mainColor)';
    return 'var(--darkColor)';
  }};

  ::-webkit-input-placeholder,
  &::placeholder {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 500;
    color: var(--grayColorDisabled);
    opacity: 1 !important;
  }
`;