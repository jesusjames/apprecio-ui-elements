import React from 'react';
import styled from 'styled-components';

import Tenderos11 from '../../img/tenderos-1-1.png';
import Tenderos21 from '../../img/tenderos-2-1.png';
import Tenderos22 from '../../img/tenderos-2-2.png';
import Tenderos31 from '../../img/tenderos-3-1.png';
import Tenderos32 from '../../img/tenderos-3-2.png';
import Tenderos41 from '../../img/tenderos-4-1.png';

import Redes from '../../svg/redes.svg';

import TenderosMX from '../../img/tenderos-mx.png';
import Facebook from '../../svg/facebook.svg';

const StyledFifthSection = styled.section`
  @media (max-width: 1023px) {
    grid-template-columns: auto;
    grid-template-rows: 100px 260px 350px 50px;

    .background {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 2;
      grid-row-end: 4;
    }

    .tenderos-mx {
      display: none;
    }

    .content {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 2;
      grid-row-end: 4;

      & > h1 {
        font-size: 1rem;
        line-height: 45px;
        margin-bottom: 50px !important;
      }

      & > img {
        margin-bottom: 50px !important;
      }

      & > h2 {
        font-size: 1.2rem;
        line-height: 28px;
        margin-bottom: 50px !important;
      }

      & > .message {
        font-size: 1rem;
        line-height: 22px;
        margin-bottom: 50px !important;
      }

      & > button {
        font-size: 0.9rem;
        line-height: 16px;
      }
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: 15vw 15vw 55vw 15vw 15vw;
    margin-left: -7.5vw;
    grid-template-rows: 4vw 2vw 7vw 13.5vw 12vw 1vw 120px;

    overflow: hidden;

    .background {
      grid-column-start: 1;
      grid-column-end: 6;
      grid-row-start: 2;
      grid-row-end: 8;
    }

    .tenderos-mx {
      max-width: 100%;

      padding: 10px;
      box-sizing: border-box;
    }

    .tenderos-1-1 {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 4;
      grid-row-end: 6;
    }

    .tenderos-2-1 {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 3;
      grid-row-end: 5;
    }

    .tenderos-2-2 {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 5;
      grid-row-end: 7;
    }

    .tenderos-3-1 {
      grid-column-start: 4;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 4;
    }

    .tenderos-3-2 {
      grid-column-start: 4;
      grid-column-end: 5;
      grid-row-start: 4;
      grid-row-end: 6;
    }

    .tenderos-4-1 {
      grid-column-start: 5;
      grid-column-end: 6;
      grid-row-start: 3;
      grid-row-end: 5;
    }

    .content {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 2;
      grid-row-end: 8;

      & > h1 {
        font-size: 1rem;
        line-height: 45px;
      }

      & > h2 {
        font-size: 1.2rem;
        line-height: 28px;
      }

      & > .message {
        font-size: 0.9rem;
        line-height: 22px;
      }

      & > button {
        font-size: 1.1rem;
        line-height: 20px;
      }
    }
  }

  display: grid;

  .background {
    background: linear-gradient(90deg, #f6e0cc 0%, #f5d0d9 60%);
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0 5vw;

    & > h1 {
      text-align: center;
      color: #133c55;
      font-family: Poppins;
      font-weight: bold;
      letter-spacing: 0px;
      margin-bottom: 1vw;
    }

    & > img {
      margin-bottom: 1vw;
    }

    & > h2 {
      text-align: center;
      color: #133c55;
      font-family: Poppins;
      font-weight: 600;
      letter-spacing: 0px;
      margin-bottom: 2vw;
    }

    & > .message {
      text-align: center;
      color: #ff4860;
      font-family: Poppins;
      font-weight: 500;
      letter-spacing: 0px;
      margin-bottom: 3vw;
    }

    & > a {
      text-decoration: none;
      cursor: pointer;
    }

    & > a > button {
      background-color: #133c55;
      border: none;
      border-radius: 10px;
      padding: 10px 30px;

      display: flex;
      align-items: center;
      cursor: pointer;

      & > * {
        max-height: 30px;
        padding: 0 5px;

        color: #f6f8fd;
        font-family: Poppins;
        font-weight: 500;
        letter-spacing: 0px;
      }
    }

    & > .social-container {
      & > .social-apps {
        margin-top: 25px;
        margin-bottom: 0;
      }

      & > .tag {
        margin-top: 0;
        text-align: center;
        color: #ff4860;
        font-family: Poppins;
        font-weight: 500;
        font-size: 1.5rem;
        letter-spacing: 0px;
      }
    }
  }
`;

const FifthSection = () => (
  <StyledFifthSection id="comunidad">
    <div className="background" />
    <img
      className="tenderos-mx tenderos-1-1 "
      src={Tenderos11}
      alt="TenderosMX"
    />
    <img
      className="tenderos-mx tenderos-2-1 "
      src={Tenderos21}
      alt="TenderosMX"
    />
    <img
      className="tenderos-mx tenderos-2-2 "
      src={Tenderos22}
      alt="TenderosMX"
    />
    <img
      className="tenderos-mx tenderos-3-1 "
      src={Tenderos31}
      alt="TenderosMX"
    />
    <img
      className="tenderos-mx tenderos-3-2 "
      src={Tenderos32}
      alt="TenderosMX"
    />
    <img
      className="tenderos-mx tenderos-4-1 "
      src={Tenderos41}
      alt="TenderosMX"
    />
    <div className="content">
      <h1>Comunidad</h1>
      <img src={TenderosMX} alt="TenderosMX" />
      <h2>
        Sé parte de la comunidad de Tenderos MX y ¡hagamos crecer nuestras
        tienditas!
      </h2>
      <p className="message">
        Con esta alianza buscamos darle a los tenderos la visibilidad que se
        merecen.
      </p>
      <a href="https://www.facebook.com/groups/tenderosmx">
        <button type="button">
          <img src={Facebook} alt="F" />
          <p>Únete al grupo de facebook</p>
        </button>
      </a>
      <div className="social-container">
        <img className="social-apps" src={Redes} alt="Redes" />
        <p className="tag">@TenderosMX</p>
      </div>
    </div>
  </StyledFifthSection>
);

export default FifthSection;
