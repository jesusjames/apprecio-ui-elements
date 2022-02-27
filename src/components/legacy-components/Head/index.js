/**
 *
 * Head
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Hero from 'components/Hero';

import RedArrowRight from 'images/RedArrowRight.svg';
import WhiteArrowRight from 'images/WhiteArrowRight.svg';

import theme from '../../utils/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const ProfileInfo = styled.div`
  position: relative;
  top: -30px;
  width: 100%;
  z-index: 10;
  display: grid;
  grid-template-columns:
    auto calc(${theme.width.default} * 0.33)
    calc(${theme.width.default} * 0.67) auto;
  margin-top: ${theme.spacing[2]};
  cursor: pointer;

  & > .progressContainer {
    grid-column-start: 2;
    grid-column-end: 3;

    background: radial-gradient(
      circle,
      ${theme.palette.primary} 0%,
      ${theme.palette.primary} 70%,
      rgba(255, 255, 255, 0) 70%,
      rgba(255, 255, 255, 0) 100%
    );

    height: 82px;
    width: 82px;
    border-radius: 50%;

    & > .halfProgressHider {
      height: 82px;
      width: 82px;
      border-radius: 50%;
      position: absolute;
      z-index: 11;

      background: ${props => {
    if (props.progress <= 50) {
      return `
            linear-gradient(
              90deg,
              ${theme.palette.background.offWhite} 0%,
              ${theme.palette.background.offWhite} 50%,
              rgba(255, 255, 255, 0) 50%,
              rgba(255, 255, 255, 0) 100%
            );
          `;
    }
    return `
      linear-gradient(
          90deg,
          ${theme.palette.primary} 0%,
          ${theme.palette.primary} 50%,
          rgba(255, 255, 255, 0) 50%,
          rgba(255, 255, 255, 0) 100%
        );
    `;
  }};

      transform: ${props => {
    if (props.progress > 50) {
      return `
            rotate(180deg);
      `;
    }
    return null;
  }};
    }

    & > .halfProgressSlider {
      height: 82px;
      width: 82px;
      border-radius: 50%;
      position: absolute;
      z-index: 10;

      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0) 50%,
        ${theme.palette.background.offWhite} 50%,
        ${theme.palette.background.offWhite} 100%
      );

      transform: ${props => `
          rotate(${props.progress * 3.6}deg)
        `};
    }

    & > img {
      position: relative;
      z-index: 12;
      width: 72px;
      height: 72px;
      top: 5px;
      left: 5px;
      border-style: solid;
      border-width: 5px;
      border-color: ${theme.palette.background.offWhite};
      border-radius: 50%;
      object-fit: cover;
      background-color: ${theme.palette.background.offWhite};

      box-sizing: border-box;
    }

    & > p {
      text-align: center;
      margin-top: ${theme.spacing[2]};
      margin-bottom: 0;
      font-family: ${theme.typeface.default}, sans-serif;
      font-weight: bold;
      font-size: 13px;
      letter-spacing: -0.13px;
      line-height: 20px;
      color: ${theme.palette.primary};
    }
  }

  & > .messageContainer {
    grid-column-start: 3;
    grid-column-end: 4;
    margin-top: ${theme.spacing[5]};

    & > h1 {
      font-family: ${theme.typeface.default}, sans-serif;
      font-weight: bold;
      font-size: 22px;
      letter-spacing: -0.22px;
      line-height: 22px;
      color: ${theme.palette.primary};
      margin: 0;
    }

    & > button {
      background: none;
      border: none;
      display: flex;
      align-items: center;
      padding: 0;

      & > p {
        font-family: ${theme.typeface.default}, sans-serif;
        font-weight: 400;
        font-size: 13px;
        color: ${theme.palette.primary};
        margin: 0;
      }
    }
  }
`;

function Head({
  profileName,
  profilePicture,
  profileCompletion,
  onClick,
  onShow,
  src,
  storeName,
}) {
  return (
    <Container>
      <Hero src={src}>
        <button type="button" onClick={onShow}>
          <p>{storeName || 'Agregar Tiendita'}</p>{' '}
          <img src={WhiteArrowRight} alt=">" height="40" />
        </button>
      </Hero>
      <ProfileInfo progress={profileCompletion} onClick={onClick}>
        <div className="progressContainer">
          <div className="halfProgressHider" />
          <div className="halfProgressSlider" />
          <img src={profilePicture} alt={profileName} />
          <p>{profileCompletion}%</p>
        </div>
        <div className="messageContainer">
          <h1>¡Hola {profileName}!</h1>
          <button type="button">
            <p>
              {profileCompletion < 100
                ? 'Completar mi perfil'
                : 'Editar mi perfil'}
            </p>
            <img src={RedArrowRight} alt=">" height="22" />
          </button>
        </div>
      </ProfileInfo>
    </Container>
  );
}

Head.propTypes = {
  /**
   * Profile data to be displayed on the dashboard.
   */
  profileName: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
  profileCompletion: PropTypes.number.isRequired,
  /**
   * Function to be called when the user clicks on the profile picture.
   */
  onClick: PropTypes.func.isRequired,
  /**
   * Function to be called when the user clicks on the head link.
   */
  onShow: PropTypes.func.isRequired,
  /**
   * Image source to be displayed on the hero section.
   */
  src: PropTypes.string,
  /**
   * Store name to be displayed on the hero section.
   */
  storeName: PropTypes.string,
};

export default Head;
