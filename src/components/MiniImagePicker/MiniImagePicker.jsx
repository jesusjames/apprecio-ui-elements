/**
 *
 * MiniImagePicker
 *
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { MiniImagePickerStyled } from './style';

// Components
import Message from '../Message/Message';

// Assets
import ImageIcon from '../image/ImageIcon.svg';

const MiniImagePicker = ({
  setter,
  src,
}) => {
  const input = useRef(null);

  return (
    <MiniImagePickerStyled>
      <input
        ref={input}
        type="file"
        accept=".jpg,.jpeg,.png"
        onChange={(e) => setter(e.target.files[0])}
      />
      <button
        type="button"
        className="buttonContainer"
        onClick={() => input.current.click()}
      >
        <img src={ImageIcon} alt="Icon" />
      </button>
      {src ? (
        <Message mt2 mb4 textAlign="center" variant="smallRed">
          Cambiar mi foto de perfil
        </Message>
      ) : (
        <Message mt2 mb4 textAlign="center" variant="smallRed">
          ¡Sube una foto de tu tiendita como portador!
        </Message>
      )}
    </MiniImagePickerStyled>
  );
};

MiniImagePicker.defaultProps = {
  src: '',
};

MiniImagePicker.propTypes = {
  /**
   * Función que establece la imagen.
   */
  setter: PropTypes.func.isRequired,
  /**
   * Ruta hacia la imagen
   */
  src: PropTypes.string,
};

export default MiniImagePicker;
