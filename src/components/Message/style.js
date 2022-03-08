import styled from 'styled-components';

export const MessageStyled = styled.p`
  display: inline;
  color: ${(props) => {
    switch (props.variant) {
      case 'yellow':
        return 'var(--lightColor)';
      case 'tertiary':
        return 'var(--grayColorOne)';
      case 'smallRed':
        return 'var(--mainColor)';
      default:
        return 'var(--darkColor)';
    }
  }};
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: ${(props) => {
    switch (props.variant) {
      case 'smallRed':
        return '13px';
      default:
        return '13px';
    }
  }};
  line-height: ${(props) => {
    switch (props.variant) {
      case 'smallRed':
        return '20px';
      default:
        return '20px';
    }
  }};
  letter-spacing: ${(props) => {
    switch (props.variant) {
      case 'smallRed':
        return '-0.13px';
      default:
        return '-0.33px';
    }
  }};
  padding: 0;
  text-align: ${(props) => props.textAlign};
  text-transform: ${(props) => props.textTransform};
  width: ${(props) => (props.fullWidth ? '100%' : '325px')};
  z-index: 10;
`;

export default {
  MessageStyled,
};
