import styled, { css } from 'styled-components';
import { isEmpty, path } from 'ramda';
import { ReactSVG } from 'react-svg';
import Select from '../Select/Select';
import Input from '../Input/Input';

export const SelectMobileStyled = styled.div`
  :focus-within {
    input, .rc-select-selector {
      border: 1px solid ${(props) => path(['input', props.color, 'mainColor'], props.theme)};
      box-shadow: 0px 0px 0px 2px ${(props) => path(['input', props.color, 'boxShadow'], props.theme)};
    };
    input {
      border-left: none;
      clip-path: inset(-2px -2px -2px 0px);
    };
    .rc-select-selector {
      border-right: none;
      clip-path: inset(-2px 0px -2px -2px);
      color: transparent;
    }
  };
`;

export const SelectStyled = styled(Select)`
  padding-top: 0;
  width: 120px;
  .rc-select-selector {
    ${(props) => !isEmpty(props.error) && css`
      background-color: var(--errorColorBackground);
      border: 1px solid var(--mainColorActive);
    `}
    border-radius: 8px 0px 0px 8px;
    border-right: none;
  }
  
  .select-error-message {
    width: ${({ dropdownMatchSelectWidth }) => `${dropdownMatchSelectWidth}px` || '100%'};
  }
  
  .rc-select-selection-item {
    > div > span:last-child {
      display: none;
    }
  }
`;

export const InputContainer = styled.div`
  width: calc(100% - 120px);
`;

export const InputStyled = styled(Input)`
  ${(props) => props?.error && css`
      border: 1px solid var(--mainColorActive);
  `}
  border-radius: 0px 8px 8px 0px !important;
  border-left: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  &[type=number] {
    -moz-appearance:textfield; /* Firefox */
  }
`;

export const ReactSVGStyled = styled(ReactSVG)`
  width: 22px; 
  svg{
    width: 100%;
  }
`;
