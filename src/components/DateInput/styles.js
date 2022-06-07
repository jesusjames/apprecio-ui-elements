import styled from 'styled-components';
import { path } from 'ramda';
import Select from '../Select/Select';

export const Container = styled.div`
  position: relative;
  width: 100%;
  
  .react-datepicker-wrapper {
    width: 100%;
  }
  
  .react-datepicker__input-container {
      width: 100%;
      input {
          display: flex;
          font-size: ${({ fontSizeValue }) => fontSizeValue};
          margin-top: 18px;
          height:45px;
          width: 100%;
          padding: 7px 15px;
          border-radius: ${({ borderRadius }) => borderRadius};
          outline: none;
          background: transparent;
          color: var(--grayColorOne);
          border: ${({ error, borderWidth }) => (error ? `${borderWidth} solid #FF4646;` : `${borderWidth} solid var(--grayColorOne);;`)};
          font-family: Poppins, sans-serif;
          font-style: normal;
          font-weight: normal;

          :focus{
              border: 2px solid ${({ theme, color }) => path(['color', color, 'mainColor'], theme)};
              border-radius: ${({ borderRadius }) => borderRadius};
          }

          ::placeholder {
              font-family: Poppins, sans-serif;
              font-style: normal;
              font-weight: normal;
              font-size: ${({ fontSizeValue }) => fontSizeValue} !important;
              color: ${({ isSelected }) => !isSelected && 'transparent'};
        }

          :disabled {
              cursor: not-allowed;
              background: #ECECEC;
          }
      }
  }
  
  
  .react-datepicker{
      padding: 16px 18px;
      background: #FFFFFF;
      border: 1px solid #AAA9A9;
      box-sizing: border-box;
      box-shadow: 2px 4px 10px 2px #EBEBEB;
      border-radius: 8px;
    
      .react-datepicker__navigation,
      .react-datepicker__navigation--previous {
          outline: none;
      }
  }
  
  .react-datepicker__portal {
    background-color: transparent;
    backdrop-filter: blur(10px);  
  }
  

  .react-datepicker__month-container {
    .react-datepicker__header  {
      padding-top: 0;
      background-color: #FFFFFF;
      border-bottom: 0px solid #aeaeae;
      .react-datepicker__current-month {
        color: #fff;
      }

      .react-datepicker__day-names {
        padding-top: 1rem;
        .react-datepicker__day-name {
          width: 1.7rem;
          color: var(--grayColorText);
          font-family: Poppins, sans-serif;
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 16px;
        }
      }
    }

    .react-datepicker__month {
      color: var(--grayColorText);
      font-family: Poppins, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      margin: 0;
      .react-datepicker__week {
        .react-datepicker__day--selected, .react-datepicker__day--keyboard-selected, .react-datepicker__day--in-range,
        .react-datepicker__day--in-selecting-range {
          border-radius: 50%;
          background-color: ${({ theme, color }) => path(['color', color, 'mainColor'], theme)};
          color: #ffffff !important;
        }
      }

      .react-datepicker__day--selected,
      .react-datepicker__day--in-selecting-range,
      .react-datepicker__day--in-range,
      .react-datepicker__month-text--selected,
      .react-datepicker__month-text--in-selecting-range,
      .react-datepicker__month-text--in-range,
      .react-datepicker__quarter-text--selected,
      .react-datepicker__quarter-text--in-selecting-range,
      .react-datepicker__quarter-text--in-range,
      .react-datepicker__year-text--selected,
      .react-datepicker__year-text--in-selecting-range,
      .react-datepicker__year-text--in-range {
        background-color: ${({ theme, color }) => path(['color', color, 'mainColor'], theme)};
      }
    }
  }
  
  .react-datepicker__triangle {
      border-bottom-color: ${({ theme, color }) => path(['color', color, 'mainColor'], theme)};
  }

  .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
      color: var(--grayColorText);                   
  }

  .react-datepicker__day--disabled, 
  .react-datepicker__month-text--disabled, 
  .react-datepicker__quarter-text--disabled, 
  .react-datepicker__year-text--disabled {
      cursor: default;
      color: #ccc;
  }
  
  .react-datepicker__day {
    display: inline-block;
    width: 1.7rem;
    line-height: 1.7rem;
    text-align: center;
    margin: 0.166rem;
  }
`;

export const ErrorMessageStyled = styled.div`
    display: block;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    height: 18px;
    line-height: 16px;
    color: #FF4646 !important;
    padding: 3px 0 0 3px;
`;

export const WrapperIconStyled = styled.div`
  position: absolute;
  right: 10px;
  top: 30px;
  width: 18px;
  height: 18px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  & div svg path {
    fill: ${({
    theme, error, hasValue, isSelected, disabled, color,
  }) => {
    if (disabled) return '#696158';
    if (isSelected) return path(['color', color, 'mainColor'], theme);
    if (error && hasValue) return '#FF4646';
    return '';
  }
};
    fill-opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  }
`;

export const ChildrenStyled = styled.div`
    position: relative;
`;

export const StyledSelect = styled(Select)`
    padding-top: 0px;
    padding-bottom: 0px;
    .rc-select-selector {
        background: #F6F6F7;
        border-radius: 8px;
        border: 0px solid #AAA9A9;
        font-family: Poppins, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        padding: 8px 36px 8px 8px;
        height: 32px;

        .rc-select-selection-item {
            height: 32px;
            font-family: Poppins, sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
        }
    }

    .rc-select-dropdown {
        border: 1px solid #ECECEC;
        box-sizing: border-box;
        border-radius: 8px;
    }

    .rc-select-item-option-content {
        font-family: Poppins, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: var(--grayColorText);
    }
`;
