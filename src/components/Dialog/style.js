import styled from 'styled-components';

export const DialogStyled = styled.div`
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  min-height: 100vh;
  min-width: 100vw;
  height: 100%;
  width: 100%;

  display: ${(props) => (props.showOn ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > .messageContainer {
    background-color: ${(props) => {
    switch (props.variant) {
      case 'primary':
        return 'var(--mainColor)';
      case 'secondary':
        return 'var(--lightColor)';
      default:
        return 'var(--mainColor)';
    }
  }};
    width: 325px;
    border-radius: 30px;
    box-shadow: 0 6px 10px #00000029;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 2rem;

    & > h1 {
      margin-top: 30px;

      text-align: center;
      color: var(--whiteColorPure);
      font-size: 20px;
      font-family: 'Poppins', sans-serif;
      letter-spacing: 0;
      line-height: 20px;
      font-weight: 500;
    }

    & > p {
      text-align: center;
      color: var(--whiteColorPure);
      font-size: 17px;
      font-family: 'Poppins', sans-serif;
      letter-spacing: 0;
      line-height: 25px;
      font-weight: 400;
    }
  }
`;

export default {
  DialogStyled,
};
