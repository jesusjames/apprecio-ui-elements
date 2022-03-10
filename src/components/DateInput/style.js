import styled from 'styled-components';

export const DateInputStyled = styled.div`
  display: flex;
  flex-direction: column;

  width: ${(props) => {
    switch (props.variant) {
      case 'rowed':
        return 'calc(315px - 60px - .75rem)';
      default:
        return '315px';
    }
  }};

  & > label {
    color: #A68CD0;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    letter-spacing: -0.14px;
    opacity: 1;
    font-size: 14px;
  }

  & > .inputContainer {
    max-width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > input {
      -webkit-appearance: none;
      height: 48px;
      background-color: #F0F4F8;
      border-radius: 10px;
      border-style: none;
      color: var(--blackColor);
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      padding: 1rem 1rem;
      width: calc(100% / 3 - .75rem);
      font-family: 'Poppins', sans-serif;
      font-weight: 500;

      box-sizing: border-box;

      &::placeholder {
        color: #A68CD0;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        letter-spacing: -0.14px;
        opacity: 1;
        text-align: center;
      }

      &:focus {
        outline: none;
      }
    }
  }
`;

export default {
  DateInputStyled,
};
