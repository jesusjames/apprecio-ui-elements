/**
 *
 * ImagePicker
 *
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { ImagePickerStyled } from './style';

// Components
import Header from '../Header/Header';
import Message from '../Message/Message';

// Assets
import Camera from '../../images/Camera.svg';

const ImagePicker = ({ src, setter }) => {
  const input = useRef(null);

  return (
    <ImagePickerContainer>
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
        <Header mt2 mb4 message="Tu foto de perfil *" variant="h4" />
      )}
    </ImagePickerContainer>
  );
};

ImagePicker.propTypes = {
  /**
   * Route to the image.
   */
  src: PropTypes.string,
  /**
   * Setter for the image.
   */
  setter: PropTypes.func.isRequired,
};

export default ImagePicker;
