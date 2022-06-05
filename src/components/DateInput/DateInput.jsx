import React, { useCallback, useRef, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import moment from 'moment';
// eslint-disable-next-line import/no-extraneous-dependencies
import es from 'date-fns/locale/es';
import classNames from 'classnames';
import { PropTypes } from 'prop-types';
import { isEmpty } from 'ramda';
import { ReactSVG } from 'react-svg';
import calendarIcon from './images/Calendar.svg';
import DateContainer from './components/DateContainer';

// styles
import './react-datepicker.css';
import {
  Container,
  ErrorMessageStyled,
  StyledSelect,
  WrapperIconStyled,
} from './styles';
import { years, months } from './constants';
import { Option } from '../Select/Select';

registerLocale('es', es);

/**
 * Date input or calendar input
 *
 * @version 1.0
 * @author [Jesús Santiago Tovar](jtovar@soaint.com)
 * @ignore DateContainer
 */
const DateInput = (props) => {
  const {
    id, className, disabled, date, name, dateFormat, placeholder,
    minDate, maxDate, onChange, onFocus, onBlur, theme, error, errorMessage,
    style, fontSizeValue, color, borderWidth, borderRadius, ...rest
  } = props;

  const [isSelected, setIsSelected] = useState(false);
  const datePickerRef = useRef();

  // eslint-disable-next-line no-shadow
  const onChangeMemo = useCallback((date) => {
    onChange({ target: { value: date, id, name } });
    setIsSelected(false);
  }, []);

  const onChangeIsSelected = useCallback((value) => (event) => {
    if (onFocus) onFocus(event);
    if (onBlur) onBlur(event);
    setIsSelected(value);
  }, []);

  // eslint-disable-next-line no-shadow
  const validateDatePicker = useCallback((date) => {
    if (moment(date, 'YYYY-MM-DD', true).isValid()) return moment(date, 'YYYY-MM-DD').toDate();
    return null;
  }, [date]);

  // eslint-disable-next-line no-shadow
  const customHeader = ({ date, changeYear, changeMonth }) => (
    <div className="ap-flex ap-flex-row">
      <div className="ap-w-3/5 ap-pr-0.5">
        <StyledSelect
          placeholder="Seleccionar Mes"
          name="month"
          value={months[date.getMonth()]}
          onChange={(value) => {
            changeMonth(months.indexOf(value));
          }}
          color={color}
        >
          {months.map((option) => (
            <Option key={option} value={option} name="month">
              {option}
            </Option>
          ))}
        </StyledSelect>
      </div>
      <div className="ap-w-2/5">
        <StyledSelect
          placeholder="Seleccionar Mes"
          name="year"
          value={date.getFullYear().toString()}
          onChange={(value) => {
            changeYear(value);
          }}
          color={color}
        >
          {years.map((option) => (
            <Option key={option} value={option} name="year">
              {option}
            </Option>
          ))}
        </StyledSelect>
      </div>
    </div>
  );

  const openDatePicker = () => datePickerRef?.current?.setOpen(true);

  return (
    <Container
      className={classNames(className)}
      id={id}
      style={style}
      fontSizeValue={fontSizeValue}
      isSelected={isSelected}
      error={error}
      color={color}
      borderWidth={borderWidth}
      borderRadius={borderRadius}
    >
      <DatePicker
        ref={datePickerRef}
        renderCustomHeader={customHeader}
        selected={validateDatePicker(date)}
        locale="es"
        dateFormat={dateFormat}
        placeholderText={placeholder}
        minDate={validateDatePicker(minDate)}
        maxDate={validateDatePicker(maxDate)}
        onChange={onChangeMemo}
        onFocus={onChangeIsSelected(true)}
        onBlur={onChangeIsSelected(false)}
        calendarContainer={DateContainer}
        closeOnScroll
        disabled={disabled}
        name={name}
        {...rest}
      />
      <WrapperIconStyled
        isSelected={isSelected}
        error={error}
        hasValue={!isEmpty(date)}
        disabled={disabled}
        color={color}
      >
        <ReactSVG src={calendarIcon} alt="icon date" onClick={openDatePicker} />
      </WrapperIconStyled>
      {error
        && (
          <ErrorMessageStyled>
            {errorMessage}
          </ErrorMessageStyled>
        )}
    </Container>
  );
};

DateInput.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),
  id: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  name: PropTypes.string,
  dateFormat: PropTypes.string,
  placeholder: PropTypes.string,
  minDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  maxDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  /** Custom style only in DateImput Container */
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  /** Font size value */
  fontSizeValue: PropTypes.string,
  autoComplete: PropTypes.string,
  popperClassName: PropTypes.string,
  borderWidth: PropTypes.string,
  borderRadius: PropTypes.string,
};

DateInput.defaultProps = {
  color: 'primary',
  dateFormat: 'dd/MM/yyyy',
  placeholder: 'dd/MM/yyyy',
  disabled: false,
  error: false,
  fontSizeValue: '1rem',
  autoComplete: 'off',
  popperClassName: '!ap-z-10 !ap-pt-2',
  borderWidth: '2px',
  borderRadius: '8px',
};

export default DateInput;
