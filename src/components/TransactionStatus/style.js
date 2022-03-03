import styled from 'styled-components';

export const TransactionStatusStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;

    margin-bottom: .75rem;

    p {
      color: var(--whiteColorPure);
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: -0.16px;
      line-height: 25px;
    }

    .item-count-container > img {
      position: absolute;
      left: 0;
      top: 0;
    }

    .item-count-container > p {
      position: absolute;
      left: ${(props) => {
    if (props.itemCount === 1) {
      return '14px';
    }
    if (props.itemCount < 10) {
      return '12px';
    }
    if (props.itemCount < 20) {
      return '11px';
    }
    return '9px';
  }};
      top: 3px;

      font-size: ${(props) => (props.itemCount > 9 ? '14px' : '16px')};

      margin: 0;
    }

    .header-container {
      margin-left: 35px;
    }
  }

  .body {
    color: var(--whiteColorPure);
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 15px;

    margin-bottom: 1rem;
  }

  .footer {
    color: var(--whiteColorPure);
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 15px;
    text-transform: uppercase;
  }
`;

export default {
  TransactionStatusStyled,
};
