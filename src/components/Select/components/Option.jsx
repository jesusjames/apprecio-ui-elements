import React from 'react';
import { Option as RcOption } from 'rc-select';

const Option = ({ children, ...restProps }) => (
  <RcOption {...restProps}>
    { children }
  </RcOption>
);

export default Option;
