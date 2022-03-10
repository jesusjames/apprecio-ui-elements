import styled from 'styled-components';

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  bottom: 0;
  background-color: ${(props) => {
    switch (props.background) {
      case 'black':
        return '#00000055';
      case 'white':
        return 'var(--whiteColorPure)';
      default:
        return 'transparent';
    }
  }};
  width: 100%;
  position: ${(props) => props.position};
  z-index: 20;
  padding: 20px 0;
`;

export default {
  FooterStyled,
};
