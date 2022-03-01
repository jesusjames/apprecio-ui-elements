import React from 'react';
import styled from 'styled-components';

import ApprecioLogo from '../../svg/apprecio-logo-2.svg';

import FB from '../../svg/footer-fb.svg';
import IG from '../../svg/footer-ig.svg';
import TW from '../../svg/footer-tw.svg';
import TT from '../../svg/footer-tt.svg';

const StyledFooter = styled.footer`
  @media (max-width: 1023px) {
    grid-template-rows: auto auto;
    grid-column-gap: 0vw;

    margin: 100px 10vw;

    & > div {
      & > h1 {
        text-align: left !important;
      }
    }

    .social-networks {
      margin: 50px 0 30px 0;
    }

    .pagina {
      display: none;
    }

    .logo-container {
      flex-direction: column;
      align-items: start !important;
      justify-content: center !important;

      & > p {
        text-align: left !important;
      }
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-column-gap: 0vw;

    margin: 0px 14.5vw;

    .social-networks {
      margin: 30px -20px;
    }
  }

  .social-networks {
    display: flex;

    & > a {
      margin: 0 12.5px 0 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & > a > img {
      max-height: 25px;
      max-width: 25px;
    }
  }

  display: grid;

  & > div {
    padding: 3vw;

    & > h1 {
      color: #ff4860;
      width: 100%;
      text-align: center;
      font-family: Poppins;
      font-size: 17pt;
      margin-bottom: 40px;
    }

    & > ul {
      list-style: none;
    }

    & > ul > li,
    & > p {
      font-family: Poppins;
      color: #133c55;
      font-weight: 500;
      font-size: 10pt;
      letter-spacing: 0;
      margin-bottom: 15px;
    }

    &.logo-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
    }

    & > img {
      width: 140px;
      margin-bottom: 15px;
    }

    & > p {
      width: 100%;
      text-align: center;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <div className="pagina">
      <h1>Página</h1>
      <ul>
        <li>Funciones y Beneficios</li>
        <li>Nosotros</li>
        <li>Comunidad</li>
        <li>Blog</li>
        <li>Regístrate</li>
      </ul>
    </div>
    <div className="soporte">
      <h1>Soporte</h1>
      <ul>
        <li>hola@apprecio.mx</li>
        <li>FAQ</li>
        <li>Reporte de Fallos</li>
      </ul>
      <div className="social-networks">
        <a href="https://instagram.com/soyapprecio">
          <img src={IG} alt="IG" />
        </a>
        <a href="https://twitter.com/apprecio1">
          <img src={TW} alt="TW" />
        </a>
        <a href="https://www.facebook.com/soyapprecio">
          <img src={FB} alt="FB" />
        </a>
        <a href="https://www.tiktok.com/@apprecio">
          <img src={TT} alt="TT" />
        </a>
      </div>
    </div>
    <div className="logo-container">
      <img src={ApprecioLogo} alt="Apprecio" />
      <p>Copyright &copy; apprecio 2021</p>
    </div>
  </StyledFooter>
);

export default Footer;
