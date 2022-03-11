import styled from 'styled-components';

export const SummaryStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  .header {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    background-color: red;
  }

  .income-total {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    background-color: blue;
  }

  .expense-total {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    background-color: green;
  }
`;

export default {
  SummaryStyled,
};
