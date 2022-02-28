import styled from 'styled-components';

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

  background-color: ${(props) => {
    if (props.disabled) return 'var(--grayColorBorder) !important';
    if (props.error) return 'var(--errorColorBackground)';
    return props.theme?.input?.[props.variant]?.backgroundColor || 'var(--whiteColorPure)';
  }};

  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => {
    if (props.error) return 'var(--errorColorBorder)';
    return 'var(--grayColorOne)';
  }};
  
  padding-top: 8px;
  padding-right: ${(props) => {
    if (props.iconRight) return '40px';
    return '16px';
  }};
  padding-bottom: 8px;
  padding-left: ${(props) => {
    if (props.iconLeft) return '40px';
    return '16px';
  }};

  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 500;
  color: ${(props) => {
    if (props.error) return 'var(--errorColorText)';
    return props.theme?.input?.[props.variant]?.color || 'var(--darkColor)';
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
    border-color: ${(props) => {
    if (props.error) return 'var(--errorColorBorder)';
    return props.theme?.input?.[props.variant]?.mainColor || 'var(--lightColor)';
  }};
    box-shadow: ${(props) => {
    if (props.error) return '0px 0px 0px 2px var(--errorColorShadow) !important';
    return `0px 0px 5px 1px ${props.theme?.input?.[props.variant]?.mainColor || 'var(--lightColor)'} !important`;
  }};
  }
`;
