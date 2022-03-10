import styled from 'styled-components';

export const ChangeCalculatorStyled = styled.div`
  height: 200px;
  width: 325px;

  box-shadow: 0px 3px 20px #00000029;

  border-radius: 30px;

  margin: 3rem 0;
  padding: 2rem;

  position: relative;

  .change-calculator-message {
    color: var(--lightColor);
    font: normal normal 500 18px/22px 'Poppins', sans-serif;
    letter-spacing: -0px;

    span {
      color: var(--grayColorOne);
      font: normal normal 500 16px/22px 'Poppins', sans-serif;
      opacity: 0.5;
    }
  }

  .input-container {
    display: flex;

    position: relative;
  }

  .change-calculator-input {
    height: 50px;
    box-sizing: border-box;
    width: 100%;

    margin: 2rem 0;
    padding: 1rem;

    border: 2px solid var(--grayColorOne);
    border-radius: 10px;

    &::placeholder {
      color: var(--grayColorOne);
      font: normal normal 500 16px/14px 'Poppins', sans-serif;
      letter-spacing: -0.16px;
    }
  }

  #done-button {
    position: absolute;
    top: 43px;
    right: 10px;

    background-color: var(--whiteColorPure);
    border: none;
    border-radius: 30px;

    transition: right 0.2s ease-in-out;
  }

  .change-display {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 100%;

    position: relative;
  }

  .change-display-left-side {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    height: 100%;

    flex: 1;
  }

  .checkout-value-display {
    p {
      font: normal normal 500 14px/22px 'Poppins', sans-serif;
      color: var(--lightColor);
      letter-spacing: -0.14px;
      text-align: center;
      margin-bottom: .25rem;
    }

    h2 {
      font: normal normal 500 25px/22px 'Poppins', sans-serif;
      color: var(--lightColor);
      letter-spacing: -0.25px;
      text-align: center;
      margin-bottom: .75rem;
    }
  }

  .value-display {
    p {
      font: normal normal 500 14px/22px 'Poppins', sans-serif;
      color: var(--grayColorOne);
      letter-spacing: -0.14px;
      text-align: center;
      margin-bottom: .25rem;
    }

    h2 {
      font: normal normal 500 25px/22px 'Poppins', sans-serif;
      color: var(--grayColorOne);
      letter-spacing: -0.25px;
      text-align: center;
      margin-bottom: .75rem;
    }
  }

  .change-display-right-side {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    height: 100%;

    flex: 2;

    h1 {
      font: normal normal 500 40px/40px 'Poppins', sans-serif;
      color: var(--mainColor);
      letter-spacing: -0.25px;
      margin: 0;
      text-align: center;
      margin-bottom: .75rem;
    }

    p {
      font: normal normal 500 28px/28px 'Poppins', sans-serif;
      color: var(--mainColor);
      letter-spacing: -0.14px;
      text-align: center;
    }
  }

  .close-button {
    position: absolute;
    top: -20px;
    right: -20px;

    background-color: transparent;
    border: none;
  }
`;

export default {
  ChangeCalculatorStyled,
};
