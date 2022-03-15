import styled from 'styled-components';

export const CopyOnSelectStyled = styled.div`
  height: 46px;
  display: flex;

  & > input {
    height: 46px;
    width: calc(325px - 1rem);
    border-style: solid;
    border-width: 1px;
    border-color: var(--mainColor);
    border-radius: 10px;
    background-color: var(--whiteColorApprecio);
    padding: 1rem;

    color: #A6BCD0;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    letter-spacing: -0.12px;
    font-size: 12px;
    line-height: 18;

    box-sizing: border-box;

    cursor: pointer;

    &::placeholder {
      color: #A6BCD0;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      letter-spacing: -0.12px;
      font-size: 12px;
      line-height: 18;
    }
  }

  & > p {
    opacity: ${(props) => (props.showTooltip ? 1 : 0)};
    position: absolute;
    background-color: #00000033;
    top: 51px;
    left: calc((100vw - 325px) /1rem);
    padding: 5px 10px;
    border-radius: 10px;

    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    letter-spacing: -0.12px;
    font-size: 12px;

    transition-timing-function: ease-out;
    transition-duration: 0.1s;
  }

  & > button {
    background-color: transparent;
    border: none;
    padding: 0;
    margin-left: 1rem;
  }
`;

export default {
  CopyOnSelectStyled,
};
