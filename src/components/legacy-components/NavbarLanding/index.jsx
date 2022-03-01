import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ApprecioLogo from '../../svg/apprecio-logo.svg';

import FB from '../../svg/footer-fb.svg';
import IG from '../../svg/footer-ig.svg';
import TW from '../../svg/footer-tw.svg';
import YT from '../../svg/footer-yt.svg';

const StyledNav = styled.nav`
  @media (max-width: 1023px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 20px;
    box-sizing: border-box;

    .collapsible-navbar {
      .social-networks {
        display: flex;

        & > img {
          max-height: 25px;
          max-width: 25px;

          margin: 0 12.5px 0 0;
        }
      }

      display: flex;

      transition-duration: 0.5s;
      transition-timing-function: ease-in-out;

      background-color: #f6f8fd94;
      backdrop-filter: blur(10px);

      position: fixed;
      top: 0;
      right: 0;

      height: 100vh;
      width: ${props => (props.show ? '100vw' : '0vw')};
      overflow: hidden;

      .close-button-container {
        height: 100%;

        .close-button {
          cursor: pointer;
          background-color: #f6f8fd;

          height: 36px;
          width: 38px;

          border-style: solid;
          border-color: #ff4860;
          border-width: 2px;
          border-radius: 15px;

          box-shadow: #ff4860 0px 3px 0px;

          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          padding: 7px 0;

          position: absolute;
          left: 3vw;
          top: 50%;
          transform: translateY(-50%);

          .first-line {
            height: 2.5px;
            width: 60%;
            background-color: #ff4860;
            border-radius: 5px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(45deg);
          }

          .second-line {
            height: 2.5px;
            width: 60%;
            background-color: #ff4860;
            border-radius: 5px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-45deg);
          }

          .inner-circle {
            height: 2.5px;
            width: 2.5px;
            background-color: #f6f8fd;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }

      .collapsible-links-container {
        border-radius: 40px 0 0 40px;
        border-style: solid none solid solid;
        border-width: 2px;
        border-color: #ff4860;
        background-color: #f6f8fd;

        height: 100%;

        width: ${props => (props.show ? '80vw' : '0vw')};
        transition-duration: 0.5s;
        transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);

        position: absolute;
        right: 0;

        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        & > img {
          width: 200px;
        }

        & > ul {
          list-style: none;

          & > li > a {
            text-decoration: none;
            color: #ff4860;
            font-family: Poppins;
            font-size: 1rem;
            line-height: 47px;
            font-weight: 500;
          }

          & > li:last-child {
            margin-top: 30px;
          }

          & > li:last-child > a {
            text-decoration: none;
            color: white;
            font-family: Poppins;
            font-size: 0.8rem;
            line-height: 14px;
            font-weight: 500;
            background-color: #fe9920;
            padding: 10px;
            border-radius: 10px;
          }
        }

        & > p {
          margin-top: 30px;
          margin-bottom: 10px;
          color: #748a9d;
          font-family: Poppins;
          font-size: 0.75rem;
          line-height: 47px;
          font-weight: 400;
        }
      }
    }

    & > .links-container {
      display: none;
    }

    .burger-button {
      cursor: pointer;
      background-color: #f6f8fd;

      height: 36px;
      width: 38px;

      border-style: solid;
      border-color: #ff4860;
      border-width: 2px;
      border-radius: 15px;

      box-shadow: #ff4860 0px 3px 0px;

      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 7px 0;

      div {
        height: 2.5px;
        width: 60%;
        background-color: #ff4860;
        border-radius: 5px;
      }
    }
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: calc(6vw + 170px) auto;
    grid-column-gap: 1.25vw;

    border: 2px solid #ff4860;
    border-radius: 15px;
    margin: 43px 6vw;

    & > .burger-button-container {
      display: none;
    }

    .collapsible-navbar {
      display: none;
    }
  }

  height: 72px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
  background-color: #f6f8fd94;
  backdrop-filter: blur(10px);

  & > .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;

    & > a > img {
      width: 170px;
    }
  }

  & > .links-container {
    & > ul {
      height: 100%;
      display: flex;
      list-style: none;
      justify-content: space-around;
      align-items: center;
      padding: 0 6vw;

      & > li > a {
        text-decoration: none;
        font-family: Poppins;
        font-size: 0.9rem;
        font-weight: 500;
        letter-spacing: 0pt;
        color: #ff4860;
      }

      & > li:last-child > a {
        color: #f6f8fd;
        background-color: #ff4860;
        padding: 8px 12px;
        border-radius: 8px;
        box-shadow: inset 0px 2px 10px #ffffffbe, 0px 3px 6px #00000029;
      }
    }
  }
`;

const Navbar = ({ show, setShow }) => (
  <StyledNav className="navbar" show={show}>
    <div className="collapsible-navbar">
      <div className="close-button-container">
        <button
          className="close-button"
          type="button"
          onClick={() => setShow(false)}
        >
          <div className="first-line" />
          <div className="second-line" />
          <div className="inner-circle" />
        </button>
      </div>
      <div className="collapsible-links-container">
        <a href="#">
          <img src={ApprecioLogo} alt="Apprecio" />
        </a>
        <ul>
          <li>
            <a href="#como-funciona">¿Cómo funciona?</a>
          </li>
          <li>
            <a href="#nosotros">Nosotros</a>
          </li>
          <li>
            <a href="#comunidad">Comunidad</a>
          </li>
          <li>
            <a href="#registrate">¡Regístrate aquí!</a>
          </li>
        </ul>
        <p>Síguenos en nuestras redes</p>
        <div className="social-networks">
          <img src={IG} alt="IG" />
          <img src={TW} alt="TW" />
          <img src={FB} alt="FB" />
          <img src={YT} alt="YT" />
        </div>
      </div>
    </div>

    <div className="logo-container">
      <a href="#">
        <img src={ApprecioLogo} alt="Apprecio" />
      </a>
    </div>

    <div className="links-container">
      <ul>
        <li>
          <a href="#como-funciona">¿Cómo funciona?</a>
        </li>
        <li>
          <a href="#nosotros">Nosotros</a>
        </li>
        <li>
          <a href="#comunidad">Comunidad</a>
        </li>
        <li>
          <a href="#registrate">¡Regístrate aquí!</a>
        </li>
      </ul>
    </div>
    <div className="burger-button-container">
      <button
        className="burger-button"
        type="button"
        onClick={() => setShow(true)}
      >
        <div className="first-line" />
        <div className="second-line" />
        <div className="third-line" />
      </button>
    </div>
  </StyledNav>
);

Navbar.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
};

export default Navbar;
