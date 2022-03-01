import styled from 'styled-components';

import { spacingMapping } from './helpers';

export const WrapperStyled = styled.div`
  align-items: ${(props) => props.flex?.alignItems || 'center'};
  background-color: ${(props) => {
    switch (props.variant) {
      case 'dark': return 'var(--darkColor)';
      case 'offWhite': return 'var(--whiteColorApprecio)';
      default: return 'var(--whiteColorPure)';
    }
  }};
  display: ${(props) => (props.flex ? 'flex' : 'block')};
  flex-direction: ${(props) => props.flex?.direction || 'column'};
  min-height: 100vh;
  justify-content: ${(props) => props.flex?.justifyContent || 'center'};
  padding: ${(props) => spacingMapping(props.padding)};
  padding-top: ${(props) => (props.paddingTop
    ? spacingMapping(props.paddingTop)
    : spacingMapping(props.padding))};
  padding-bottom: ${(props) => (props.paddingBottom
    ? spacingMapping(props.paddingBottom)
    : spacingMapping(props.padding))};

  overflow: hidden;
`;

export default {
  WrapperStyled,
};
