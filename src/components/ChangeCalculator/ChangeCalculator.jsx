import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import { ChangeCalculatorStyled } from './style';
import Text from '../Text/Text';
import Input from '../Input/Input';
import Button from '../Button/Button';

import UnionSVG from '../image/Union.svg';
import BackArrow from '../BackArrow/BackArrow';

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
        {showResult && (
          <>
            <div className="ap-w-full">
              <BackArrow onClick={() => setShowResult(false)} text="Volver" />
            </div>
            <div className="ap-flex ap-flex-row ap-w-full ap-mt-4">
              <div className="ap-basis-1/2">
                <Text tag="h5" fontWeight="500" className="ap-text-center" color="secondary">Cobrado:</Text>
                <Text tag="h2" className="ap-text-center" color="secondary" margin="8px 0 1rem 0">{`$${totalAmount}`}</Text>
              </div>
              <div className="ap-basis-1/2">
                <Text tag="h5" fontWeight="500" className="ap-text-center" color="secondary">Recibido:</Text>
                <Text tag="h2" className="ap-text-center" color="secondary" margin="8px 0 1rem 0">{`$${parseFloat(moneyReceived).toFixed(2)}`}</Text>
              </div>
            </div>
            <div className="ap-w-2/3 ap-border-t-[3px] ap-border-gray-400" style={{ borderColor: 'var(--mainColor)' }} />
            <div className="ap-w-full ap-mb-10">
              <Text tag="h5" fontWeight="500" className="ap-text-center">Cambio:</Text>
              <Text tag="h1" className="ap-text-center" margin="8px 0 1rem 0">{`$${parseFloat(changeAmount).toFixed(2)}`}</Text>
            </div>
          </>
        )}
        {!showResult && (
          <>
            <div className="ap-w-full ap-text-center">
              <Text tag="h5" margin="0" color="secondary">{title}</Text>
              <Text tag="h1" margin="0" color="secondary">{`$${totalAmount}`}</Text>
              <Text
                tag="h5"
                margin="0"
                color="secondary"
                fontWeight="500"
                style={{ color: 'var(--grayColorOne)' }}
              >
                {`${totalItems} productos`}
              </Text>
            </div>
            <div className="ap-w-full ap-text-center ap-my-6">
              <Text fontWeight="500" color="tertiary">{description}</Text>
            </div>
            <div className="ap-w-full">
              <Text tag="h6" fontWeight="500" color="tertiary">{label}</Text>
            </div>
            <div className="ap-flex ap-flex-row ap-w-full ap-space-x-2">
              <div className="ap-basis-4/5">
                <Input
                  placeholder="$0.00"
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
          </>
        )}
        <div className="ap-w-full">
          <Button block color="secondary" onClick={onFinalize}>{buttonText}</Button>
        </div>
      </div>
    </ChangeCalculatorStyled>
  );
};

ChangeCalculator.defaultProps = {
  title: 'Total a cobrar',
  totalAmount: '',
  totalItems: 0,
  description: 'Conoce cuánto cambio debes regresar (Opcional)',
  label: '¿Cuánto dinero recibes?',
  buttonText: 'Omitir y finalizar',
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
