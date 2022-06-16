import styled from 'styled-components';

export const ChangeCalculatorStyled = styled.div`
  background-color: var(--whiteColorApprecio);
  width: 325px;
  padding: 2rem;
  position: relative;
`;

export const PricesCard = styled.div`
  width: 311px;
  background-color: var(--whiteColorPure);
  border-radius: 16px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: var(--lightColor);
    margin: 0;
  }

  h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 60px;
    text-align: center;
    letter-spacing: -0.02em;
    color: var(--lightColor);
    margin: 0;
  }

  h3 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: var(--grayColorOne);
    margin: 0;
  }

  h4 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: var(--mainColor);
    margin: 0;
  }

  h5 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    letter-spacing: -0.02em;
    color: var(--mainColor);
    margin: 0;
  }
`;

export const Separator = styled.div`
  width: 311px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: var(--grayColorOne);
  margin: 40px 0;
`;

export default {
  ChangeCalculatorStyled,
  PricesCard,
  Separator,
};
