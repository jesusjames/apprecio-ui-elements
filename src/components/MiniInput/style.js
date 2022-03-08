import styled from 'styled-components';

export const MiniInputStyled = styled.input`
  background-color: #F0F4F8;
  border-radius: 10px;
  border-style: none;
  padding: 1rem;
  height: ${(props) => (props.variant === 'big' ? '70px' : 'auto')};
  width: ${(props) => (props.variant === 'big' ? '70px' : '60px')};
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  text-align: center;
  font-size: 14px;

  &::placeholder {
    color: #A6BCD0;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    letter-spacing: -0.14px;
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
