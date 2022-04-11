import Select from 'rc-select';
import styled from 'styled-components';
import { isEmpty, path } from 'ramda';

export const RcSelectStyled = styled(Select)`
  position: relative;
  .rc-select-selector {
    height: 48px;
    background: ${(props) => (props.disabled ? '#ECECEC' : '#FFFFFF')};
    border: ${({ bordersize }) => bordersize || '1px'} solid ${({ theme, color, error }) => (!isEmpty(error)
  ? 'var(--mainColorActive)'
  : path(['input', color, 'outlineColor'], theme))};
    border-radius: 8px;
    padding: ${({ icon }) => (isEmpty(icon) ? '10px 40px 10px 16px' : '10px 40px 10px 40px')};
    text-align: left;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    transition: border .2s;

    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
  }

  .rc-select-item-option-active {
    background: linear-gradient(to top, rgb(255 255 255 / 80%), rgb(255 255 255 / 80%)) ${({ theme, color }) => path(['input', color, 'mainColor'], theme)};
  }
  
  .rc-select-selection-search-input {
    width: 100%;
    position: absolute;
    height: 48px;
    caret-color: transparent;
    top: 0;
    left: 0;
    margin: 0;
    padding: 10px 35px 10px 10px;
    background: 0 0;
    border: none;
    outline: none;
    appearance: none;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    &::-webkit-search-cancel-button {
      position:relative;
      display: none;
      -webkit-appearance: none;
    }
  }
  .rc-select-selection-item {
    position: absolute;
    height: 48px;
    line-height: 24px;
    top: 1px;
    left: 0;
    pointer-events: none;
    padding: inherit;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    right: 0;
    color: ${(props) => (props.disabled ? '#AAA9A9' : 'var(--darkColor)')};
  }
  .rc-select-arrow {
    position: absolute;
    top: 53%;
    right: 11px;
    width: 24px;
    height: 24px;
    margin-top: -12px;
    transform: rotate(0deg);
    transition: transform .4s;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.rc-select-open {
    .rc-select-arrow {
      transform: rotate(180deg) !important;
    }
    .rc-select-dropdown {
      border: ${({ bordersize }) => bordersize || '1px'} solid rgba(105,97,88,0.4);
    }
  }
  &.rc-select-focused {
    .rc-select-selector {
      border: ${({ bordersize }) => bordersize || '1px'} solid ${(props) => path(['input', props.color, 'mainColor'], props.theme)};
      box-shadow: 0px 0px 0px 2px ${(props) => path(['input', props.color, 'boxShadow'], props.theme)};
    }
  }
`;

export const SelectWrapper = styled.div`
    position: relative;
    user-select: none;
    padding-top: 20px;
    padding-bottom: 18px;

    .rc-select-selection-placeholder {
        opacity: ${(props) => ((!props.isFocused && !props.hasValue) ? '1' : '0')};
        top: 14px;
        color: #B4B4B4;
        top: 36px;
    }
    .rc-select-selection-placeholder {
      position: absolute;
      font-family: Poppins, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      height: 15px;
      left: 10px;
      transition: all .2s;
      pointer-events: none;
    }
 
  .select-error-message {
    color: var(--mainColorActive);
    position: absolute;
    bottom: 0px;
    font-size: 14px;
    line-height: 16px;
  }

  .select-icon {
    position: absolute;
    top: 53%;
    left: 11px;
    width: 24px;
    height: 24px;
    margin-top: -12px;
    transform: rotate(0deg);
    transition: transform .4s;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
