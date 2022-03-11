import styled from 'styled-components';

export const SummaryStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  background-color: var(--whiteColorPure);
  border-radius: 8px;

  .header {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }

  .income-total {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  .expense-total {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`;

export default {
  SummaryStyled,
};
