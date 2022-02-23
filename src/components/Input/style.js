import styled from "styled-components";

export const InputContainerStyled = styled.div`
  input {
    width: 325px;
    height: 40px;

    background-color: var(--whiteColorPure);

    border-radius: 5px;
    border-color: var(--grayColorDisabled);
    border-width: 2px;
    border-style: solid;

    padding: 0 15px;

    ::-webkit-input-placeholder,
    &::placeholder {
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      letter-spacing: 1px;
      font-weight: 500;
      color: var(--grayColorDisabled);
      opacity: 1 !important;
    }
  }
`;