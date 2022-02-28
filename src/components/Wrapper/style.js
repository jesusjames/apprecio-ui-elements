import styled from 'styled-components';

import theme, { spacingMapping } from 'utils/theme';

export const WrapperStyled = styled.div`
align-items: ${props => (props.flex ? props.flex.alignItems : '')};
background-color: ${props => {
  switch (props.variant) {
    case 'dark':
      return theme.palette.background.dark;
    case 'offWhite':
      return theme.palette.background.offWhite;
    default:
      return theme.palette.background.white;
  }
}};
display: ${props => (props.flex ? 'flex' : 'block')};
flex-direction: ${props => (props.flex ? props.flex.flexDirection : '')};
min-height: 100vh;
justify-content: ${props => (props.flex ? props.flex.justifyContent : '')};
padding: ${props => spacingMapping(props.padding)};
padding-top: ${props =>
  props.paddingTop
    ? spacingMapping(props.paddingTop)
    : spacingMapping(props.padding)};
padding-bottom: ${props =>
  props.paddingBottom
    ? spacingMapping(props.paddingBottom)
    : spacingMapping(props.padding)};

overflow: hidden;
`;