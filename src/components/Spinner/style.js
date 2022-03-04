import styled, { keyframes } from 'styled-components';

export const SpinnerStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

export const skCircleBounceDelay = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1);
  }
`;

export const SkCircle = styled.div`
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
`;

export const SkChild = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transform: rotate(${(props) => (props.rotation ? props.rotation : '0')}deg);
  &:before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: var(--mainColor);
    border-radius: 100%;
    animation: ${skCircleBounceDelay} 1.2s infinite ease-in-out both;
    animation-delay: -${(props) => (props.delay ? props.delay : '0')}s;
  }
`;

export default {
  SpinnerStyled,
  SkCircle,
  SkChild,
};
