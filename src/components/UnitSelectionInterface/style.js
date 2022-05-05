import styled from 'styled-components';

export const UnitSelectionInterfaceStyled = styled.div`
  .header {
    color: var(--grayColorOne);
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0px;
    line-height: 25px;
  }

  #inputs-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    position: relative;

    padding: 0 1px;
  }

  #checkout-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 1px;
  }

  #checkout-info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    span:first-child {
      color: var(--darkColor);
      font-family: 'Poppins', sans-serif;
      font-size: 27px;
      font-weight: 700;
      letter-spacing: 0px;
      line-height: 20px;

      margin-bottom: .25rem;
    }

    span:last-child {
      color: var(--grayColorOne);
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      font-weight: 300;
      letter-spacing: 0px;
      line-height: 21px;
      text-transform: uppercase;
    }
  }

  #add-button {
    background-color: ${(props) => (props.mode === 'expense' ? 'var(--mainColor)' : 'var(--lightColor)')};
    border: none;
    border-radius: 10px;

    height: 45px;
    width: 140px;

    color: var(--whiteColorPure);
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 27px;
  }

  .product-name {
    color: var(--darkColor);
    font: normal normal 600 18px/27px 'Poppins', sans-serif;
    margin-bottom: 0;
  }

  .product-brand {
    color: var(--darkColor);
    font: normal normal 600 16px/25px 'Poppins', sans-serif;
    margin-bottom: 1rem;
  }
`;

export default {
  UnitSelectionInterfaceStyled,
};
