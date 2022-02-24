import styled from 'styled-components';

export const BackArrowStyled = styled.button`
  left: 0;
  top: 0;
  position: relative;
  cursor: pointer;
  padding: 0;
  padding-right: .75rem;
  padding-bottom: .75rem;
  transform: rotate(180deg);
  z-index: 20;
  background-color: transparent;
  border: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }
`;