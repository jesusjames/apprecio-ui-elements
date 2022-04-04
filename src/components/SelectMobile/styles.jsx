import styled from 'styled-components';
import { path } from 'ramda';
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
  .rc-select-selector{
    border-radius: 8px 0px 0px 8px;
    border-right: none;
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
  border-radius: 0px 8px 8px 0px !important;
  border-left: none;
`;

export const ReactSVGStyled = styled(ReactSVG)`
  width: 22px; 
  svg{
    width: 100%;
  }
`;
