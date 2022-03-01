/**
 *
 * Dialog
 *
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'components/Button';
import Footer from 'components/Footer';

import theme from 'utils/theme';
import Success from 'images/Success.svg';

const DialogContainer = styled.div`
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  min-height: 100vh;
  min-width: 100vw;
  height: 100%;
  width: 100%;

  display: ${props => (props.showOn ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > .messageContainer {
    background-color: ${props => {
    switch (props.variant) {
      case 'primary':
        return theme.palette.primary;
      case 'quinary':
        return theme.palette.quinary;
      default:
        return theme.palette.primary;
    }
  }};
    width: ${theme.width.default};
    border-radius: 30px;
    box-shadow: 0 6px 10px #00000029;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: ${theme.spacing[4]};

    & > h1 {
      margin-top: 30px;

      text-align: center;
      color: ${theme.palette.text.white};
      font-size: 20px;
      font-family: ${theme.typeface.default}, sans-serif;
      letter-spacing: 0;
      line-height: 20px;
      font-weight: 500;
    }

    & > p {
      text-align: center;
      color: ${theme.palette.text.white};
      font-size: 17px;
      font-family: ${theme.typeface.default}, sans-serif;
      letter-spacing: 0;
      line-height: 25px;
      font-weight: 400;
    }
  }
`;

function Dialog({
  header,
  body,
  action,
  type,
  enter,
  showOn,
  showSetter,
  onClickAction,
  variant = 'primary',
}) {
  const dialogRef = useRef(null);

  return (
    <DialogContainer
      ref={dialogRef}
      showOn={showOn}
      onClick={e => {
        if (e.target === dialogRef.current) {
          showSetter(false);
        }
      }}
      variant={variant}
    >
      <div className="messageContainer">
        {type === 'success' ? <img src={Success} alt="Success" /> : null}
        <h1>{header}</h1>
        <p>{body}</p>
      </div>
      {action ? (
        <Footer p5 fixed>
          <Button
            mb4
            p3
            message={action}
            enter={enter}
            onClick={() => {
              showSetter(false);
              if (onClickAction) {
                onClickAction();
              }
            }}
            variant={variant}
          />
        </Footer>
      ) : null}
    </DialogContainer>
  );
}

Dialog.propTypes = {
  /**
   * The message header.
   */
  header: PropTypes.string.isRequired,
  /**
   * The message body.
   */
  body: PropTypes.string.isRequired,
  /**
   * The string displayed on the action button.
   */
  action: PropTypes.string,
  /**
   * Describes the type of the dialog.
   */
  type: PropTypes.oneOf(['success']),
  /**
   * Whether it shows a little white arrow on the right side of the action button.
   */
  enter: PropTypes.string,
  /**
   * Whether the dialog is visible.
   */
  showOn: PropTypes.bool.isRequired,
  /**
   * Callback function to set the visibility of the dialog.
   */
  showSetter: PropTypes.func.isRequired,
  /**
   * Callback function to be executed when the action button is clicked.
   */
  onClickAction: PropTypes.func,
  /**
   * Determines the color of the dialog.
   */
  variant: PropTypes.string,
};

export default Dialog;
