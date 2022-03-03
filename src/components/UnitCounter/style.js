import styled from 'styled-components';

export const UnitCounterStyled = styled.div`
  border: 1px solid #103c54;
  border-radius: 10px;

  width: ${(props) => (props.mini ? '94px' : '144px')};
  height: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0;

  position: relative;

  z-index: ${(props) => props.baseZIndex};

  overflow-x: hidden;

  #deletion-button {
    position: absolute;

    width: 100%;
    height: 100%;
    overflow: hidden;

    margin: 0;

    z-index: ${(props) => props.baseZIndex + 1};

    border: none;
    border-radius: 10px;

    background-color: var(--mainColor);

    color: var(--whiteColorApprecio);
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 30px;

    padding-right: 40px;

    img {
      background-color: var(--mainColor);
    }
  }

  *:not(#deletion-button) {
    border-style: none;
    background-color: var(--whiteColorPure);

    height: 100%;

    text-align: center;

    color: var(--darkColor) !important;
    -webkit-text-fill-color: var(--darkColor);
    opacity: 1 !important;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 23px;

    border-radius: 10px;

    transition: all 0.2s ease-in-out;
  }

  input:not(#deletion-button) {
    width: ${(props) => (props.showDeletionButton ? '40px' : '100%')};
    position: absolute;
    right: 0;
    z-index: ${(props) => props.baseZIndex + 2};
    padding-left: 14px;
  }

  button:not(#deletion-button) {
    width: 40px;
    position: absolute;
    z-index: ${(props) => props.baseZIndex + 3};
  }

  #decrease-value-button {
    right: ${(props) => (props.showDeletionButton ? '0px' : 'calc(100% - 40px)')};
  }

  #increase-value-button {
    right: 0;
  }
`;

export default {
  UnitCounterStyled,
};
