import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import {
  ChangeCalculatorStyled,
  PricesCard,
  Separator,
} from './style';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';
import Text from '../Text/Text';

import RedArrowUpSVG from '../image/RedArrowUp.svg';
import UnionSVG from '../image/Union.svg';

const ChangeCalculator = ({
  className, title, totalAmount, totalItems, description,
  label, buttonText, onFinalize, ...rest
}) => {
  const [changeAmount, setChangeAmount] = useState('');
  const [moneyReceived, setMoneyReceived] = useState('');
  const [showResult, setShowResult] = useState(false);

  const calculateChangeAmount = () => {
    if (parseFloat(moneyReceived) > parseFloat(totalAmount)) {
      const change = parseFloat(moneyReceived) - parseFloat(totalAmount);
      setChangeAmount(change.toString());
      setShowResult(true);
    }
  };

  const calculateButtonDisabled = useMemo(
    () => ((parseFloat(moneyReceived) <= parseFloat(totalAmount)) || !moneyReceived),
    [moneyReceived, totalAmount],
  );

  const handleChangeInput = (e) => {
    const { value } = e.target;
    const regExp = /^[0-9\b]+$/;
    if (value === '' || regExp.test(value)) {
      setMoneyReceived(value);
    }
  };

  return (
    <ChangeCalculatorStyled className={className} {...rest}>
      <div className="ap-flex ap-flex-col ap-items-center">
        <PricesCard>
          <h1>{title}</h1>
          <h2>{`$${totalAmount}`}</h2>
          <h3>{`${totalItems} productos`}</h3>
        </PricesCard>
        <Separator />
        <div className="ap-w-full ap-text-center ap-mb-2">
          <Text fontWeight="600" color="primary">{description}</Text>
        </div>
        <div className="ap-w-full">
          <Text tag="h6" fontWeight="400" color="gray">{label}</Text>
        </div>
        <div className="ap-flex ap-flex-row ap-w-full ap-space-x-2">
          <div className="ap-basis-4/5">
            <Input
              placeholder="Ej. 200.00"
              block
              value={moneyReceived}
              onChange={handleChangeInput}
            />
          </div>
          <div className="ap-basis-1/5">
            <Button
              iconLeft={UnionSVG}
              color="tertiary"
              style={{ minWidth: 'auto', height: '48px', borderColor: 'transparent' }}
              onClick={calculateChangeAmount}
              disabled={calculateButtonDisabled}
            />
          </div>
        </div>
        {showResult && (
          <PricesCard>
            <button type="button" onClick={() => setShowResult(false)}>
              <img src={RedArrowUpSVG} alt="^" />
            </button>
            <h4>Tu cambio debería ser de</h4>
            <h5>{`$${parseFloat(changeAmount).toFixed(2)}`}</h5>
          </PricesCard>
        )}
        <Footer>
          <div className="ap-w-full">
            <Button block color="secondary" onClick={onFinalize}>{buttonText}</Button>
          </div>
        </Footer>
      </div>
    </ChangeCalculatorStyled>
  );
};

ChangeCalculator.defaultProps = {
  title: 'Total a cobrar',
  totalAmount: '',
  totalItems: 0,
  description: '¿Cuánto cambio debo dar?',
  label: 'Ingresa cuánto dinero recibes',
  buttonText: 'Finalizar',
  onFinalize: () => {},
};

ChangeCalculator.propTypes = {
  /** Titulo header del componente */
  title: PropTypes.string,
  /** Clases extras para el componente */
  className: PropTypes.string,
  /** Monto total a mostrar */
  totalAmount: PropTypes.string,
  /** numero total de productos */
  totalItems: PropTypes.number,
  /** Descripción del componente */
  description: PropTypes.string,
  /** Tlabel del input */
  label: PropTypes.string,
  /** Texto del botón */
  buttonText: PropTypes.string,
  /** función callback para finalizar */
  onFinalize: PropTypes.func,
};

export default ChangeCalculator;
