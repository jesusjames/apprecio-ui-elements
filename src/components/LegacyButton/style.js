import styled from 'styled-components';

const roundingMapping = value => {
  switch (value) {
    case 'circled':
      return '50px';
    case 'rounded':
      return '30px';
    case 'wedged':
      return '10px';
    default:
      return '0px';
  }
};

const spacingMapping = value => {
  switch (value) {
    case '1':
      return '3rem';
    case '2':
      return '2rem';
    case '3':
      return '1rem';
    case '4':
      return '.75rem';
    case '5':
      return '.25rem';
    default:
      return '0rem';
  }
};

export const LegacyButtonStyled = styled.button`
  background-color: ${props => {
    if (props.disabled) {
      return '#748A9D';
    }
    switch (props.variant) {
      case 'facebook':
        return 'transparent';
      case 'transparent':
        return 'transparent';
      case 'primary':
        return '#FF4860';
      case 'quinary':
        return '#FE9920';
      default:
        return '#FF4860';
    }
  }};
  border-color: ${props => {
    if (props.disabled) {
      return '#748A9D';
    }
    switch (props.variant) {
      case 'facebook':
        return '#1877F2';
      case 'transparent':
        return 'transparent';
      case 'primary':
        return '#FF4860';
      case 'quinary':
        return '#FE9920';
      default:
        return '#FF4860';
    }
  }};
  border-radius: ${props => roundingMapping(props.rounding)};
  border-style: solid;
  border-width: 2px;
  color: ${props => {
    switch (props.variant) {
      case 'facebook':
        return '#1877F2';
      case 'transparent':
        if (props.mini) {
          return '#133C55';
        }
        return '#FF4860';
      default:
        return '#FFFFFF';
    }
  }};
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: ${props => {
    switch (props.variant) {
      case 'facebook':
        return 600;
      default:
        return 700;
    }
  }};
  line-height: 21px;
  letter-spacing: -0.14px;
  text-transform: ${props => (props.mini ? 'none' : 'uppercase')};
  margin: ${props => spacingMapping(props.margin)};
  margin-top: ${props =>
    props.marginTop
      ? spacingMapping(props.marginTop)
      : spacingMapping(props.margin)};
  margin-bottom: ${props =>
    props.marginBottom
      ? spacingMapping(props.marginBottom)
      : spacingMapping(props.margin)};
  padding: ${props => spacingMapping(props.padding)};
  width: '325px';
  z-index: 20;

  opacity: ${props => (props.disabled ? 0.5 : 1)};

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  & > img.fb {
    margin-right: '.75rem';
  }

  & > img.arrow {
    position: fixed;
    transform: translate(60px, -10px);
  }
`;