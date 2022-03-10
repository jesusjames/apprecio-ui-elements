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
  margin,
  marginTop,
  marginBottom,
  placeholder,
  value,
  onChange,
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
    <DateInputStyled
      margin={margin}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <label>{placeholder}</label>
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
   * Steps, as defined in utils/theme.js, to be used for margin.
   */
  margin: PropTypes.string,
  /**
   * Steps, as defined in utils/theme.js, to be used for margin-top. Overrides margin.
   */
  marginTop: PropTypes.string,
  /**
   * Steps, as defined in utils/theme.js, to be used for margin-bottom. Overrides margin.
   */
  marginBottom: PropTypes.string,
  /**
   * Value of the placeholder.
   */
  placeholder: PropTypes.string,
  /**
   * Stores the value of the input.
   */
  value: PropTypes.string,
  /**
   * Callback function to be called when the input value changes.
   */
  onChange: PropTypes.func,
};

export default DateInput;
