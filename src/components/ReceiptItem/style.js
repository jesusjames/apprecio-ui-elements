import styled from 'styled-components';

export const ReceiptItemStyled = styled.li`
  border-bottom-style: solid;
  border-bottom-color: var(--grayColorOne);
  border-bottom-width: 2px;

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
    font: normal normal bold 18px/27px 'Poppins', sans-serif;
    letter-spacing: 0px;
    display: inline-block;
    height: 27px;
  }

  .message {
    color: var(--);
    font: normal normal 500 14px/21px 'Poppins', sans-serif;
    letter-spacing: 0px;
    display: inline-block;
    height: 21px;
  }

  .units-and-value {
    color: ${(props) => (props.mode === 'expense'
    ? 'var(--mainColor)'
    : 'var(--lightColor)')};
    font: normal normal 600 20px/30px 'Poppins', sans-serif;
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
