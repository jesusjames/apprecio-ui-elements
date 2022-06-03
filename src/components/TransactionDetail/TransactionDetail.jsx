import { memo } from 'react';
import { equals } from 'ramda';
import PropTypes from 'prop-types';

import { ReactSVG } from 'react-svg';
import classNames from 'classnames';
import IncomeSVG from '../image/incomeReport.svg';
import ExpenseSVG from '../image/expenseReport.svg';
import Text from '../Text/Text';
import { ArrowStyled, ContainerStyled } from './style';

const TransactionDetail = ({
  type, hour, amount, children, onClick, open, className, ...rest
}) => {
  const isIncome = equals(type, 'income');

  return (
    <ContainerStyled className={classNames('ap-bg-white ap-mx-auto ap-rounded-lg ap-p-3', className)}>
      <button
        type="button"
        className="ap-flex ap-flex-row ap-w-full"
        onClick={onClick}
        {...rest}
      >
        <ReactSVG className="ap-basis-1/12" src={isIncome ? IncomeSVG : ExpenseSVG} alt="detalle transacción" />
        <Text className="ap-basis-4/12 ap-text-right" color="tertiary" fontSize="14px">{hour}</Text>
        <div className="ap-basis-7/12 ap-flex ap-flex-row">
          <Text className="ap-text-right ap-flex-auto" fontSize="16px" fontWeight="600" color={isIncome ? 'secondary' : 'primary'}>{amount}</Text>
          <ArrowStyled
            open={open}
            isIncome={isIncome}
            className="ap-flex-initial"
          />
        </div>
      </button>
      {children}
    </ContainerStyled>
  );
};

TransactionDetail.defaultProps = {
  type: 'income',
  hour: '12:00AM',
  amount: '0.00',
  open: false,
};

TransactionDetail.propTypes = {
  type: PropTypes.string,
  hour: PropTypes.string,
  amount: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  open: PropTypes.bool,
  className: PropTypes.string,
};

export default memo(TransactionDetail);
