import styled from 'styled-components';

export const ReceiptDrawerContentStyled = styled.div`
  * {
    user-select: none;
  }

  overflow-y: scroll;
  margin-bottom: 100px;

  .receipt-drawer-title {
    color: ${(props) => (props.mode === 'expense'
    ? 'var(--mainColor)'
    : 'var(--lightColor)')};
    text-align: center;
    font: normal normal bold 16px/14px 'Poppins', sans-serif;
    letter-spacing: -0.16px;
    margin-top: 1rem;
    margin-bottom: .25rem;
  }

  .product-count-message {
    color: var(--darkColor);
    text-align: center;
    font: normal normal 500 17px/17px 'Poppins', sans-serif;
    letter-spacing: -0.17px;
    opacity: 0.5;
  }

  .checkout-total {
    color: ${(props) => (props.mode === 'expense'
    ? 'var(--mainColor)'
    : 'var(--lightColor)')};
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 40px;
    letter-spacing: -0.62px;
    margin: 2rem 0;
  }

  .checkout-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => (props.mode === 'expense'
    ? 'var(--mainColor)'
    : 'var(--lightColor)')};
    border: none;
    width: 325px;
    height: 55px;
    border-radius: 10px;

    position: relative;

    margin-bottom: 1rem;

    .button-message {
      color: var(--whiteColorPure);
      font: normal normal bold 16px/14px 'Poppins', sans-serif;
      letter-spacing: -0.16px;
    }

    .dollar-sign {
      display: inline-block;

      background-color: var(--whiteColorPure);
      width: 30px;
      height: 30px;

      border-radius: 10px;

      color: ${(props) => (props.mode === 'expense'
    ? 'var(--mainColor)'
    : 'var(--lightColor)')};
      font: normal normal bold 16px/30px 'Poppins', sans-serif;
      letter-spacing: -0.16px;

      position: absolute;
      right: 15px;
    }
  }

  .scroll-down-message,
  .scroll-up-message {
    background-color: transparent;

    color: var(--grayColorOne);
    text-align: center;
    font: normal normal 600 14px/14px 'Poppins', sans-serif;
    letter-spacing: -0.14px;

    margin-bottom: 2rem;

    border: none;

    position: relative;
    left: 50%;
    transform: translateX(-50%);

    cursor: pointer;

    img {
      margin-left: 10px;
    }
  }

  .date-info-1 {
    color: var(--darkColor);
    font: normal normal bold 16px/20px 'Poppins', sans-serif;
    letter-spacing: 0px;
  }

  .date-info-2 {
    color: var(--darkColor);
    font: normal normal normal 16px/20px 'Poppins', sans-serif;
    letter-spacing: 0px;
  }

  .receipt-items-list {
    list-style: none;

    margin-bottom: 2rem;
  }

  .small-checkout-total {
    color: ${(props) => (props.mode === 'expense'
    ? 'var(--mainColor)'
    : 'var(--lightColor)')};
    text-align: center;
    font: normal normal bold 27px/20px 'Poppins', sans-serif;
    letter-spacing: 0px;

    margin-bottom: 2rem;
  }
`;

export default {
  ReceiptDrawerContentStyled,
};
