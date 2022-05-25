import styled from 'styled-components';

export const HalfDrawerStyled = styled.div`
  background-color: ${(props) => {
    switch (props.variant) {
      case 'primary':
        return 'var(--mainColor)';
      case 'secondary':
        return 'var(--darkColor)';
      case 'tertiary':
        return 'var(--grayColorOne)';
      case 'quaternary':
        return 'var(--blueColor)';
      case 'quinary':
        return 'var(--lightColor)';
      case 'offWhite':
        return 'var(--whiteColorApprecio)';
      default:
        return 'var(--whiteColorApprecio)';
    }
  }};
  box-shadow: 0px -3px 20px #00000029;

  height: 0px;
  width: 100%;
  position: absolute;
  bottom: 0;
  
  display: flex;
  flex-direction: column;

  overflow-y: hidden;

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  /* transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
  transition-duration: 0.2s; */

  z-index: ${(props) => props.zIndex};

  & > .handle {
    width: 70px;
    height: 3px;
    background-color: ${(props) => (props.variant === 'offWhite'
    ? 'var(--grayColorOne)'
    : 'var(--whiteColorApprecio)')};

    position: relative;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);

    border-radius: 50px;
    border: 12px solid
      ${(props) => {
    switch (props.variant) {
      case 'primary':
        return 'var(--mainColor)';
      case 'secondary':
        return 'var(--darkColor)';
      case 'tertiary':
        return 'var(--grayColorOne)';
      case 'quaternary':
        return 'var(--blueColor)';
      case 'quinary':
        return 'var(--lightColor)';
      case 'offWhite':
        return 'var(--whiteColorApprecio)';
      default:
        return 'var(--whiteColorApprecio)';
    }
  }};
    box-sizing: content-box;
  }

  .content-container {
    width: 100%;
    height: 100%;

    padding: .75rem 2rem;
  }
`;

export default {
  HalfDrawerStyled,
};
