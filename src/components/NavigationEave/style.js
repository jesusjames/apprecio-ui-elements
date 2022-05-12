import styled from 'styled-components';

export const NavigationEaveStyled = styled.div`
  background-color: ${(props) => {
    switch (props.variart) {
      case 'primary':
        return 'var(--mainColor)';
      case 'offWhite':
        return 'var(--whiteColorApprecio)';
      case 'transparent':
        return 'transparent';
      default:
        return 'var(--whiteColorApprecio)';
    }
  }};
  box-shadow: ${(props) => {
    if (props.mode === 'scanner') {
      return 'none';
    }
    return '0px 3px 20px #00000029';
  }};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: ${(props) => (props.shortened ? '50px' : '150px')};

  transition: height 0.2s ease-in-out;

  overflow-y: hidden;

  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;

  position: absolute;
  top: 0;

  z-index: 30;
  
  button {
    left: 0px;
    top: 0px;
    position: absolute;
    z-index: 20;
    padding: 1.5rem;
  }

  .logo {
    margin-top: ${(props) => (props.shortened ? '12px' : '0')};
    width: 25px;
    height: 25px;
  }

  .slider {
    background-color: var(--mainColor);

    width: 60px;
    height: 35px;

    border-radius: 10px;

    position: absolute;
    left: calc((100% - 325px) / 2);
    top: 78px;

    z-index: 10;

    transition-timing-function: cubic-bezier(0.73, 0.25, 0.44, 1.21);
    transition-duration: 0.2s;
  }

  .children-bar {
    width: 325px;
    height: ${(props) => (props.shortened ? '0px' : '60px')};

    transition: height 0.2s ease-in-out;

    overflow-y: hidden;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;

export default {
  NavigationEaveStyled,
};
