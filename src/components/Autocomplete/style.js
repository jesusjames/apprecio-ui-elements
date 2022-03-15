import styled from 'styled-components';

export const AutocompleteStyled = styled.div`
  width: 315px;

  & > .arrow {
    height: 10px;
    padding: 0;
    margin: 0;
    position: relative;
    left: calc(325px - 35px);
    top: 35px;
    transition-duration: 0.2s;
    cursor: pointer;
  }

  & > .arrow.up {
    top: 45px;
    transform: rotate(-180deg);
    cursor: pointer;
  }
`;

export const InputStyled = styled.input`
  background-color: var(--whiteColorPure);
  border-radius: 10px;
  border-style: solid;
  border-color: var(--darkColor);
  border-width: 1px;
  padding: 1rem 2rem;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;

  &::placeholder {
    color: var(--whiteColorApprecio);
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  &:focus {
    outline: none;
  }

  &.error:not(:hover) {
    box-shadow: red 0 0 2px 2px !important;
  }
`;

export const SuggestionsStyled = styled.ul`
  width: 100%;
  margin: 0;
  list-style: none;
  padding: .75rem 0;
  max-height: 150px;
  overflow-y: scroll;
  transition-duration: 0.2s;
  background-color: var(--whiteColorPure);

  &.hidden {
    max-height: 0;
    padding: 0;
  }

  button {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    padding: .75rem 2rem;
    width: 100%;

    cursor: pointer;
  }

  button:hover {
    background-color: var(--whiteColorApprecio);
  }
`;

export default {
  AutocompleteStyled,
  InputStyled,
  SuggestionsStyled,
};
