import PropTypes from 'prop-types';

import { SummaryStyled } from './style';

// Assets
import BlueArrowRight from '../image/BlueArrowRight.svg';

const Summary = ({
  count,
  date,
  expenseTotal,
  incomeTotal,
  onClick,
  ...rest
}) => (
  <SummaryStyled {...rest}>
    <div className="header">
      <span className="date">{date}</span>
      <button className="count" type="button" onClick={onClick}>
        <p>{`${count} Transacciones`}</p>
        <img alt=">" src={BlueArrowRight} />
      </button>
    </div>
    <div className="income-total">
      <span className="income total">
        $
        {parseInt(incomeTotal, 10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </span>
      <span className="label">Ingresos</span>
    </div>
    <div className="expense-total">
      <span className="expense total">
        -$
        {parseInt(expenseTotal, 10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
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
  onClick: () => {},
};

Summary.propTypes = {
  count: PropTypes.number,
  date: PropTypes.string,
  expenseTotal: PropTypes.number,
  incomeTotal: PropTypes.number,
  onClick: PropTypes.func,
};

export default Summary;
