import PropTypes from 'prop-types';

import { SummaryStyled } from './style';

const Summary = ({
  count,
  date,
  expenseTotal,
  incomeTotal,
  ...rest
}) => (
  <SummaryStyled {...rest}>
    <div className="header">
      <span className="date">{date}</span>
      <button className="count" type="button">
        {count}
        {' '}
        Transacciones
      </button>
    </div>
    <div className="income-total">
      <span className="income total">
        $
        {incomeTotal}
      </span>
      <span className="label">Ingresos</span>
    </div>
    <div className="expense-total">
      <span className="expense total">
        $
        {expenseTotal}
      </span>
      <span className="label">Gastos</span>
    </div>
  </SummaryStyled>
);

Summary.defaultProps = {
  count: 0,
  date: 'Hoy',
  expenseTotal: 0,
  incomeTotal: 0,
};

Summary.propTypes = {
  count: PropTypes.number,
  date: PropTypes.string,
  expenseTotal: PropTypes.number,
  incomeTotal: PropTypes.number,
};

export default Summary;
