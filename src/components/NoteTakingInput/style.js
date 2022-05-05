import styled from 'styled-components';

export const NoteTakingInputStyled = styled.div`
  border: none;
  border-radius: 10px;

  width: ${(props) => (props.elongated ? '100%' : '130px')};
  height: 42px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0;

  position: relative;
  right: 0;

  z-index: ${(props) => props.baseZIndex + 10};

  transition: width 0.2s ease-in-out;

  overflow-x: hidden;

  #note-taking-icon {
    position: absolute;

    height: 50%;
    margin: 0 .75rem;
  }

  input {
    width: 100%;
    height: 100%;

    border: 1px solid white;
    border-radius: 10px;

    color: var(--grayColorOne);
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.16px;
    line-height: 25px;
    outline: none !important;

    padding-left: 45px;
  }

  #done-button {
    position: absolute;
    right: ${(props) => (props.elongated ? '10px' : '-30px')};

    background-color: var(--whiteColorPure);
    border: none;
    border-radius: 30px;

    transition: right 0.2s ease-in-out;
  }
`;

export default {
  NoteTakingInputStyled,
};
