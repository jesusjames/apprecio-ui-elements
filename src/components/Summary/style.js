import styled from 'styled-components';

export const SummaryStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  row-gap: 10px;

  background-color: ${(props) => props.theme?.summary?.default?.backgroundColor || 'var(--whiteColorPure)'};
  border-radius: 15px;

  width: 311px;

  padding: 5px 15px 10px 15px;

  .header {
    grid-column: 1 / 3;
    grid-row: 1 / 2;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .date {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: ${(props) => props.theme?.summary?.default?.textColor || 'var(--darkColor)'};
    }

    .count {
      display: flex;
      flex-direction: row;
      align-items: center;

      p {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: ${(props) => props.theme?.summary?.default?.disabledTextColor || 'var(--grayColorOne)'};
        margin-right: 10px;
        opacity: 0.8;
      }
    }
  }

  .income-total {
    grid-column: 1 / 2;
    grid-row: 2 / 3;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 5px 0;

    border-right-color: ${(props) => props.theme?.summary?.tertiary?.activeColor || 'var(--grayColorOne)'};
    border-right-width: 1px;
    border-right-style: solid;
  }

  .expense-total {
    grid-column: 2 / 3;
    grid-row: 2 / 3;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 5px 0;

    border-left-color: ${(props) => props.theme?.summary?.tertiary?.activeColor || 'var(--grayColorOne)'};
    border-left-width: 1px;
    border-left-style: solid;
  }

  .total {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    text-align: center;
  }

  .expense {
    color: ${(props) => props.theme?.summary?.primary?.mainColor || 'var(--mainColor)'};
  }

  .income {
    color: ${(props) => props.theme?.summary?.secondary?.mainColor || 'var(--mainColor)'};
  }

  .label {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: ${(props) => props.theme?.summary?.default?.textColor || 'var(--darkColor)'};
  }
`;

export default {
  SummaryStyled,
};
