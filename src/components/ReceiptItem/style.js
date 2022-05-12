import styled from 'styled-components';

export const ReceiptItemStyled = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  padding: .75rem;

  .info-container {
    border: none;
    background-color: transparent;

    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    max-width: 200px;

    p {
      width: 100%;
      text-align: left;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  .value-container {
    border: none;
    background-color: transparent;

    flex: 1;

    p {
      width: 100%;
      text-align: ${(props) => (props.showUnitCounter ? 'center' : 'right')};
      transition: text-align 0.5s ease-in-out;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  .title {
    color: var(--grayColorOne);
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 1rem;
    line-height: 1rem;
    letter-spacing: 0px;
    display: inline-block;
  }

  .message {
    color: var(--grayColorOne);
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1rem;
    letter-spacing: 0px;
    display: inline-block;
  }

  .units-and-value {
    color: ${(props) => (props.mode === 'expense'
    ? 'var(--mainColor)'
    : 'var(--lightColor)')};
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 20px;
    letter-spacing: -0.2px;
  }

  .unit-counter-container {
    width: ${(props) => (props.showUnitCounter ? '94px' : '0px')};
    transition: width 0.5s ease-in-out;

    overflow-x: hidden;
  }
`;

export default {
  ReceiptItemStyled,
};
