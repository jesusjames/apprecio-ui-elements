import styled from 'styled-components';

export const HeroStyled = styled.div`
  background-color: var(--mainColor);
  background-image: url(${(props) => props.src});
  background-size: 100vw;
  background-position: 0px 0px;
  position: relative;
  width: 100%;
  height: 181px;
  border-bottom-right-radius: 50%;
  margin-bottom: 40px;
  box-shadow: 1px 4px 0 var(--mainColorActive);

  & > div {
    background-color: var(--mainColorSemiTransparent);
    border-bottom-right-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  & > div > button {
    position: absolute;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    right: 1rem;
    top: 90px;

    & > p {
      color: var(--whiteColorPure);
      font-family: 'Poppins', sans-serif;
      font-size: 22px;
      font-weight: bold;
      letter-spacing: -0.22px;
      line-height: 22px;
      margin: 0;
    }
  }

  &::before {
    background-color: var(--mainColor);
    background-image: url(${(props) => props.src});
    background-size: 100vw;
    background-position: 0px -181px;
    content: '';
    position: absolute;
    top: 180px;
    width: 90px;
    height: 60px;
    box-shadow: inset 60px 90px 0 var(--mainColorSemiTransparent);
  }

  &::after {
    background-color: var(--whiteColorPure);
    box-shadow: inset 1px 4px 0 var(--mainColorActive);
    content: '';
    position: absolute;
    top: 181px;
    width: 91px;
    height: 61px;
    border-top-left-radius: 90%;
  }
`;

export default {
  HeroStyled,
};
