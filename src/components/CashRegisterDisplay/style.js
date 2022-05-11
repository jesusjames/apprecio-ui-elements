import styled from 'styled-components';

export const CashRegisterDisplayStyled = styled.div`
  transition: all 0.2s ease-in-out;

  width: 325px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: ${(props) => `calc((100 * ${props.heightUnit}px - 310px) / 100 * 2)`};
  margin-bottom: ${(props) => `calc((100 * ${props.heightUnit}px - 310px) / 100 * 2)`};

  z-index: 1;

  position: relative;
  top: ${(props) => (props.mode === 'calculator' ? '-35px' : '0')};

  #number-display {
    background-color: transparent;
    border: 2px solid
      ${(props) => {
    switch (props.mode) {
      case 'scanner':
        return 'var(--darkColor)';
      case 'expense':
        return 'var(--darkColor)';
      default:
        return 'white';
    }
  }};
    border-radius: 10px;

    min-height: 40px;
    height: ${(props) => `calc((100*${props.heightUnit}px - 310px) / 100 * 14)`};
    max-height: 60px;

    flex: 1;

    margin: .25rem;
    padding: 0 1rem;

    color: ${(props) => {
    switch (props.mode) {
      case 'scanner':
        return 'var(--darkColor)';
      case 'expense':
        return 'var(--darkColor)';
      default:
        return 'white';
    }
  }} !important;
    -webkit-text-fill-color: ${(props) => {
    switch (props.mode) {
      case 'scanner':
        return 'var(--darkColor)';
      case 'expense':
        return 'var(--darkColor)';
      default:
        return 'white';
    }
  }};
    opacity: 1 !important;
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    font-weight: bold;
    text-align: right;
  }

  #scanner-button,
  #calculator-button {
    background-color: transparent;
    border: 2px solid
      ${(props) => {
    switch (props.mode) {
      case 'scanner':
        return 'var(--darkColor)';
      case 'expense':
        return 'var(--darkColor)';
      default:
        return 'white';
    }
  }};
    border-radius: 10px;

    min-height: 40px;
    height: ${(props) => `calc((100*${props.heightUnit}px - 310px) / 100 * 14)`};
    max-height: 60px;
    width: 60px;

    margin: .25rem 1rem;

    #scanner-icon {
      max-height: 100%;
      margin: auto;
    }

    #calculator-icon {
      max-height: 70%;
    }

    cursor: pointer;
  }
`;

export default {
  CashRegisterDisplayStyled,
};
