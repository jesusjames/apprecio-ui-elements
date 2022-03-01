/**
 *
 * CashRegisterButton
 *
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from 'utils/theme';

const StyledContainer = styled.button`
  background-color: ${props => theme.palette[props.variant]};

  width: 98px;
  min-height: 40px;
  height: ${props =>
    `calc((100 * ${props.heightUnit}px - 160px - 150px) / 100 * 14)`};
  max-height: 60px;

  margin: ${theme.spacing[1]};

  border: none;
  border-radius: ${theme.rounding.wedged};

  cursor: pointer;

  span {
    color: ${theme.palette.text.offWhite};
    font-family: ${theme.typeface.default}, sans-serif;
    font-size: 29px;
    font-weight: bold;

    user-select: none;
  }
`;

function CashRegisterButton({
  value,
  name,
  variant = 'secondary',
  onClick,
  heightUnit,
}) {
  const buttonRef = useRef(null);

  // Detects if strings refer to an image file, if so, returns the image
  const content = value.startsWith('data:image') ? (
    <img src={value} alt={name} />
  ) : (
    <span>{value}</span>
  );

  const setButtonScale = scale => {
    buttonRef.current.style.transform = `scale(${scale})`;
  };

  return (
    <StyledContainer
      heightUnit={heightUnit}
      ref={buttonRef}
      variant={variant}
      onTouchStart={() => setButtonScale(0.9)}
      onTouchEnd={() => {
        setButtonScale(1);
        window.navigator.vibrate(50);
      }}
      onClick={onClick}
    >
      {content}
    </StyledContainer>
  );
}

CashRegisterButton.propTypes = {
  /**
   * Value to bw shown.
   */
  value: PropTypes.string.isRequired,
  /**
   * Name of the button.
   */
  name: PropTypes.string.isRequired,
  /**
   * Indicates the color of the button as defined in utils/theme
   */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
    'quinary',
  ]),
  /**
   * Function to be called when the button is clicked.
   */
  onClick: PropTypes.func,
  /**
   * Height 'unit' used along the CashRegister container, used to compress or expand the button itself.
   */
  heightUnit: PropTypes.number.isRequired,
};

export default CashRegisterButton;
