/**
 *
 * MiniImagePicker
 *
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Message from 'components/Message';

import ImageIcon from 'images/ImageIcon.svg';

const ImagePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > input[type='file'] {
    display: none;
  }

  & > .buttonContainer {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

function MiniImagePicker({ src, setter }) {
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
    </ImagePickerContainer>
  );
}

MiniImagePicker.propTypes = {
  /**
   * Route to the image.
   */
  src: PropTypes.string,
  /**
   * Image setter.
   */
  setter: PropTypes.func.isRequired,
};

export default MiniImagePicker;
