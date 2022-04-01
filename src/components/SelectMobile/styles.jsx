import styled from 'styled-components';
import Select from '../Select/Select';
import Input from '../Input/Input';

// eslint-disable-next-line import/prefer-default-export
export const SelectStyled = styled(Select)`
  padding-top: 0;
  width: 120px;
  .rc-select-selector{
    border-radius: 8px 0px 0px 8px;
  }
`;

export const InputStyled = styled(Input)`
  border-radius: 0px 8px 8px 0px !important;
`;
