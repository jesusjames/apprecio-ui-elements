import styled from "styled-components";

export const InputContainerStyled = styled.div`
`;

export const InputStyled = styled.input`
  width: 325px;
  height: 40px;

  background-color: ${props => {
    if (props.disabled) return 'var(--grayColorBorder) !important';
    if (props.error) return 'red';
    return 'var(--whiteColorPure)';
  }};

  border-radius: 5px;
  border-color: var(--grayColorDisabled);
  border-width: 2px;
  border-style: solid;

  padding: 0 15px;

  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 500;
  color: var(--darkColor);

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