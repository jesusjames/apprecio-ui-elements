import styled from 'styled-components';

export const NavigationEaveButtonStyled = styled.div`
  display: flex;
  flex-direction: column;

  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  & > img {
    padding: 6px;

    width: 60px;
    height: 35px;

    border-radius: 10px;

    z-index: 20;

    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  & > span {
    margin-top: .25rem;

    width: 60px;

    color: ${(props) => (props.active ? 'var(--mainColor)' : 'var(--grayColorOne)')};
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
  }
`;

export default {
  NavigationEaveButtonStyled,
};
