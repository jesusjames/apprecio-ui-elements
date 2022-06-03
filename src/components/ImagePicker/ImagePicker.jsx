/**
 *
 * ImagePicker
 *
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { ImagePickerStyled } from './style';

// Components
import Message from '../Message/Message';

// Assets
import Camera from '../image/Camera.svg';
import Text from '../Text/Text';

const ImagePicker = ({
  setter,
  src,
}) => {
  const input = useRef(null);

  return (
    <ImagePickerStyled>
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
        <img
          className={src ? 'profilePic' : null}
          src={src || Camera}
          alt="Sube tu foto de perfil"
        />
      </button>
      {src ? (
        <Message mt2 mb4 textAlign="center" variant="smallRed">
          Cambiar mi foto de perfil
        </Message>
      ) : (
        <Text tag="h4" className="ap-items-center">Tu foto de perfil *</Text>
      )}
    </ImagePickerStyled>
  );
};

ImagePicker.propTypes = {
  /**
   * Función setter de la imagen.
   */
  setter: PropTypes.func.isRequired,
  /**
   * Ruta hacia la imagen.
   */
  src: PropTypes.string,
};

export default ImagePicker;
