/**
 *
 * ReceiptItem
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from 'utils/theme';

// Components
import UnitCounter from 'components/UnitCounter';

const StyledReceiptItem = styled.li`
  border-bottom-style: solid;
  border-bottom-color: ${theme.palette.disabled}80;
  border-bottom-width: 2px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  padding: ${theme.spacing[2]};

  .info-container {
    border: none;
    background-color: transparent;

    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    max-width: 200px;

    p {
      width: 100%;
      text-align: left;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  .value-container {
    border: none;
    background-color: transparent;

    flex: 1;

    p {
      width: 100%;
      text-align: ${props => (props.showUnitCounter ? 'center' : 'right')};
      transition: text-align 0.5s ease-in-out;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  .title {
    color: ${theme.palette.tertiary};
    font: normal normal bold 18px/27px ${theme.typeface.default};
    letter-spacing: 0px;
    display: inline-block;
    height: 27px;
  }

  .message {
    color: ${theme.palette.tertiary};
    font: normal normal 500 14px/21px ${theme.typeface.default};
    letter-spacing: 0px;
    display: inline-block;
    height: 21px;
  }

  .units-and-value {
    color: ${props =>
      props.variant === 'expense'
        ? theme.palette.primary
        : theme.palette.quinary};
    font: normal normal 600 20px/30px ${theme.typeface.default};
    letter-spacing: -0.2px;
  }

  .unit-counter-container {
    width: ${props => (props.showUnitCounter ? '94px' : '0px')};
    transition: width 0.5s ease-in-out;

    overflow-x: hidden;
  }
`;

function ReceiptItem({
  title,
  units,
  unitsSetter,
  deleteItem,
  value,
  message,
  variant = 'income',
}) {
  const [showUnitCounter, setShowUnitCounter] = useState(false);

  return (
    <StyledReceiptItem showUnitCounter={showUnitCounter} variant={variant}>
      <button
        type="button"
        className="info-container"
        onClick={() => setShowUnitCounter(!showUnitCounter)}
      >
        <p className="title">{title}</p>
        <p className="message">{message}</p>
      </button>
      <button
        type="button"
        className="value-container"
        onClick={() => setShowUnitCounter(!showUnitCounter)}
      >
        <p className="units-and-value">
          ${value}
          {showUnitCounter ? '' : `×${units}`}
        </p>
      </button>
      <div className="unit-counter-container">
        <UnitCounter
          mini
          units={units}
          unitsSetter={unitsSetter}
          valueSetter={deleteItem}
          drawerSetter={setShowUnitCounter}
        />
      </div>
    </StyledReceiptItem>
  );
}

ReceiptItem.propTypes = {
  title: PropTypes.string.isRequired,
  units: PropTypes.number.isRequired,
  unitsSetter: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

export default ReceiptItem;
