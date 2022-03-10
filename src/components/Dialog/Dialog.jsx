/**
 *
 * Dialog
 *
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { DialogStyled } from './style';

// Components
import Button from '../Button/Button';
import Footer from '../Footer/Footer';

// Assets
import Success from '../image/Success.svg';

const Dialog = ({
  action,
  body,
  header,
  onClickAction,
  showOn,
  showSetter,
  type,
  variant,
}) => {
  const dialogRef = useRef(null);

  return (
    <DialogStyled
      ref={dialogRef}
      showOn={showOn}
      onClick={(e) => {
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
            color={variant}
            onClick={() => {
              showSetter(false);
              if (onClickAction) {
                onClickAction();
              }
            }}
          >
            {action}
          </Button>
        </Footer>
      ) : null}
    </DialogStyled>
  );
};

Dialog.defaultProps = {
  action: '',
  onClickAction: () => {},
  type: 'success',
  variant: 'primary',
};

Dialog.propTypes = {
  /**
   * El mensaje mostrado en el botón de acción.
   */
  action: PropTypes.string,
  /**
   * El cuerpo del mensaje.
   */
  body: PropTypes.string.isRequired,
  /**
   * La cabecera del mensaje.
   */
  header: PropTypes.string.isRequired,
  /**
   * Función que se ejecuta cuando el botón de acción es presionado.
   */
  onClickAction: PropTypes.func,
  /**
   * Dictamina si el diálogo es visible.
   */
  showOn: PropTypes.bool.isRequired,
  /**
   * Función que altera la visibilidad del diálogo.
   */
  showSetter: PropTypes.func.isRequired,
  /**
   * Describe el tipo del diálogo.
   */
  type: PropTypes.oneOf(['success']),
  /**
   * Determina eñ color del diálogo.
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),
};

export default Dialog;
