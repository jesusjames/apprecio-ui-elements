import styled from 'styled-components';

export const TooltipStyled = styled.div`
  z-index: 10;
  top: 140px;
  right: 20px;

  width: 250px;
  height: auto;
  overflow: ${(props) => (props.showOn ? 'visible' : 'hidden')};

  transform: ${(props) => (props.showOn ? 'scale(1, 1)' : 'scale(0, 0)')};

  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

  background-color: var(--blueColor);
  border-radius: 30px;

  cursor: pointer;

  &::before {
    content: '';

    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 10px solid var(--blueColor);

    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
  }

  p {
    margin: 5px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.8rem;
    line-height: 1.4;
    text-align: center;
    color: var(--whiteColorPure);
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export default {
  TooltipStyled,
};
