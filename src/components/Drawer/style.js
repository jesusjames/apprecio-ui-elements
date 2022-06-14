import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';

export const DrawerStyled = styled(motion.div)`
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  position: fixed;
  top: 0;
  left: 0;

  min-height: ${(props) => (props.showOn ? '100vh' : '0px')};
  min-width: ${(props) => (props.showOn ? '100vw' : '0px')};
  height: ${(props) => (props.showOn ? '100%' : '0px')};
  width: ${(props) => (props.showOn ? '100%' : '0px')};

  z-index: ${(props) => (props.showOn ? 30 : -10)};

  & > .drawerContent {
    width: 100%;
    background-color: var(--whiteColorApprecio);

    position: fixed;
    bottom: 0;
    z-index: 30;

    border-top-left-radius: 30px;
    border-top-right-radius: 30px;

    & > .closeButton {
      padding: 0;
      margin: 1rem 2rem;
      border: none;
      cursor: pointer;

      display: flex;
      align-items: center;

      & > img {
        transform: rotate(180deg);
      }

      & > p {
        color: ${(props) => (props.variant === 'primary' ? 'var(--mainColor)' : 'var(--lightColor)')};
        font: normal normal 500 17px/17px 'Poppins', sans-serif;
        letter-spacing: -0.17px;
        margin-top: 3px;
      }
    }

    & > .childrenContainer {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default {
  DrawerStyled,
};
