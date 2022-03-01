/**
 *
 * ImagePicker
 *
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from 'components/Header';
import Message from 'components/Message';

import theme from '../../utils/theme';
import Camera from '../../images/Camera.svg';

const ImagePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > input[type='file'] {
    display: none;
  }

  & > .buttonContainer {
    background-color: ${theme.palette.background.white};
    width: 102px;
    height: 102px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    overflow: hidden;

    & > .profilePic {
      width: 102px;
      height: 102px;
      object-fit: cover;
    }
  }
`;

function ImagePicker({ src, setter }) {
  const input = useRef(null);

  return (
    <ImagePickerContainer>
      <input
        ref={input}
        type="file"
        accept=".jpg,.jpeg,.png"
        onChange={e => setter(e.target.files[0])}
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
}

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
