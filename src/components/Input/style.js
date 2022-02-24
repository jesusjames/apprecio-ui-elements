import styled from "styled-components";

export const InputContainerStyled = styled.div`
  width: 311px;

  position: relative;

  margin-bottom: 20px;

  .icon-left {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;

    max-height: 15px;
    max-width: 15px;
  }

  .icon-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 16px;

    max-height: 15px;
    max-width: 15px;
  }
`;

export const InputStyled = styled.input`
  width: 311px;
  height: 48px;

  background-color: ${props => {
    if (props.disabled) return 'var(--grayColorBorder) !important';
    if (props.error && props.value) return '#FF486033';
    return 'var(--whiteColorPure)';
  }};

  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => {
    if (props.error) return 'var(--mainColor)';
    return 'var(--grayColorOne)';
  }};
  
  padding: ${props => {
    if (props.iconLeft) return '8px 16px 8px 40px';
    return '8px 16px 8px 16px';
  }};

  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 500;
  color: ${props => {
    if (props.error) return 'var(--mainColor)';
    return 'var(--darkColor)';
  }};

  &::-webkit-input-placeholder,
  &::placeholder {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 500;
    color: var(--grayColorDisabled);
    opacity: 1 !important;
  }

  &:focus {
    outline: none;
    border-color: ${props => {
      if (props.error) return 'var(--mainColor)';
      return 'var(--lightColor)';
    }};
    box-shadow: ${props => {
      if (props.error) return '0px 0px 0px 2px #FF486033 !important';
      return '0px 0px 0px 2px #FE992033 !important';
    }};
  }
`;