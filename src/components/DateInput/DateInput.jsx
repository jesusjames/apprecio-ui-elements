/**
 *
 * DateInput
 *
 */

import React, {
  // useRef,
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import { DateInputStyled } from './style';

const DateInput = ({
  onChange,
  placeholder,
  value,
}) => {
  // let yearInput = useRef(null);
  // let monthInput = useRef(null);
  // let dayInput = useRef(null);

  const [year, setYear] = useState(value ? value.split('-')[0] || '' : '');
  const [month, setMonth] = useState(value ? value.split('-')[1] || '' : '');
  const [day, setDay] = useState(value ? value.split('-')[2] || '' : '');

  useEffect(() => {
    setYear(value ? value.split('-')[0] || '' : '');
    setMonth(value ? value.split('-')[1] || '' : '');
    setDay(value ? value.split('-')[2] || '' : '');
  }, [value]);

  return (
    <DateInputStyled>
      <p>{placeholder}</p>
      <div className="inputContainer">
        <input
          // ref={e => {
          //   yearInput = e;
          //   return 0;
          // }}
          maxLength={4}
          value={year}
          onChange={(e) => onChange({
            target: {
              value: `${e.target.value}-${month}-${day}`,
            },
          })}
          placeholder="AAAA"
          type="number"
        />
        <span>/</span>
        <input
          // ref={e => {
          //   monthInput = e;
          //   return 0;
          // }}
          maxLength={2}
          value={month}
          onChange={(e) => onChange({
            target: {
              value: `${year}-${e.target.value}-${day}`,
            },
          })}
          placeholder="MM"
          type="number"
        />
        <span>/</span>
        <input
          // ref={e => {
          //   dayInput = e;
          //   return 0;
          // }}
          maxLength={2}
          value={day}
          onChange={(e) => onChange({
            target: {
              value: `${year}-${month}-${e.target.value}`,
            },
          })}
          placeholder="DD"
          type="number"
        />
      </div>
    </DateInputStyled>
  );
};

DateInput.propTypes = {
  /**
   * Función que se ejecuta cuando el valor cambia.
   */
  onChange: PropTypes.func,
  /**
   * Valor del placeholder.
   */
  placeholder: PropTypes.string,
  /**
   * El valor del input.
   */
  value: PropTypes.string,
};

export default DateInput;
