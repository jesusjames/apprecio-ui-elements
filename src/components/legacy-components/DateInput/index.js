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
import styled from 'styled-components';

import theme, { spacingMapping } from 'utils/theme';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: ${props => {
    switch (props.variant) {
      case 'rowed':
        return 'calc(315px - 60px - .75rem)';
      default:
        return '315px';
    }
  }};

  margin: ${props => spacingMapping(props.margin)};
  margin-top: ${props =>
    props.marginTop
      ? spacingMapping(props.marginTop)
      : spacingMapping(props.margin)};
  margin-bottom: ${props =>
    props.marginBottom
      ? spacingMapping(props.marginBottom)
      : spacingMapping(props.margin)};

  & > label {
    color: ${theme.palette.text.onOffWhite};
    font-family: ${theme.typeface.default}, sans-serif;
    font-weight: 600;
    letter-spacing: -0.14px;
    opacity: 1;
    font-size: 14px;
    margin-bottom: ${spacingMapping('1')};
  }

  & > .inputContainer {
    max-width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > input {
      -webkit-appearance: none;
      height: 48px;
      background-color: ${theme.palette.background.gray};
      border-radius: ${theme.rounding.wedged};
      border-style: none;
      color: ${theme.palette.black};
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      padding: ${theme.spacing[3]} ${theme.spacing[3]};
      width: calc(100% / 3 - ${theme.spacing[2]});
      font-family: ${theme.typeface.default}, sans-serif;
      font-weight: 500;

      box-sizing: border-box;

      &::placeholder {
        color: ${theme.palette.text.onOffWhite};
        font-family: ${theme.typeface.default}, sans-serif;
        font-weight: 600;
        letter-spacing: -0.14px;
        opacity: 1;
        text-align: center;
      }

      &:focus {
        outline: none;
      }
    }
  }
`;

function DateInput({
  margin,
  marginTop,
  marginBottom,
  placeholder,
  value,
  onChange,
}) {
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
    <StyledDiv
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
          onChange={e =>
            onChange({
              target: {
                value: `${e.target.value}-${month}-${day}`,
              },
            })
          }
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
          onChange={e =>
            onChange({
              target: {
                value: `${year}-${e.target.value}-${day}`,
              },
            })
          }
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
          onChange={e =>
            onChange({
              target: {
                value: `${year}-${month}-${e.target.value}`,
              },
            })
          }
          placeholder="DD"
          type="number"
        />
      </div>
    </StyledDiv>
  );
}

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
