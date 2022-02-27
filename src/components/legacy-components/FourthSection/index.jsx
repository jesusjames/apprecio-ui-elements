import React from 'react';
import styled from 'styled-components';

import FistBump from '../../img/fist-bump.png';

const StyledFourthSection = styled.section`
  @media (max-width: 1023px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;

    & > * {
      margin: 0 7.5vw;
      width: 85vw;
    }

    & > .header {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 2;

      text-align: center;
      font-size: 1.2rem;
      line-height: 45px;

      margin-top: 30px;
      margin-bottom: 20px;
    }

    & > .mystery-box {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 2;
      grid-row-end: 3;

      margin: 3vw;
      width: 94vw;
      height: 90vw;
    }

    & > .content {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 3;
      grid-row-end: 4;

      & > h2 {
        text-align: center;
        font-size: 1.45rem;
        line-height: 28px;

        margin-top: 30px;
      }

      & > p {
        margin-top: 30px;

        & > b {
          margin-top: 30px;
        }
      }

      & > a > button {
        margin-top: 40px;
      }
    }
  }

  @media (min-width: 1024px) {
    margin: 150px 8vw;

    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: 80px auto;
    grid-column-gap: 10vw;

    & > .header {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 2;

      font-size: 1rem;
      line-height: 45px;
    }

    & > .mystery-box {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 3;

      width: 100%;
      height: 32vw;
    }

    & > .content {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;

      & > h2 {
        font-size: 2.33rem;
        line-height: 44px;
      }

      & > p {
        margin-top: 3vw;

        & > b {
          margin-top: 2.5vw;
        }
      }

      & > a > button {
        margin-top: 2.5vw;
      }
    }
  }

  display: grid;

  & > .header {
    color: #133c55;
    font-family: Poppins;
    font-weight: bold;
    letter-spacing: 0px;
  }

  & > .mystery-box {
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  & > .content {
    & > h2 {
      color: #ff4860;
      font-family: Poppins;
      font-weight: bold;
      letter-spacing: 0;
    }

    & > p {
      color: #133c55;
      font-family: Poppins;
      font-weight: normal;
      letter-spacing: 0;
      font-size: 1rem;
      line-height: 22px;

      & > b {
        display: block;
      }
    }

    & > a > button {
      cursor: pointer;
      background-color: #ff4860;
      border: none;
      border-radius: 9px;
      padding: 10px;

      color: #f6f8fd;
      font-family: Poppins;
      font-weight: 500;
      font-size: 1rem;
      letter-spacing: 0;
      line-height: 20px;
    }
  }
`;

const FourthSection = () => (
  <StyledFourthSection id="nosotros">
    <div className="mystery-box">
      <img src={FistBump} alt="Fist bump" />
    </div>
    <h1 className="header">Nosotros</h1>
    <div className="content">
      <h2>Confiamos en el poder de las tienditas</h2>
      <p>
        Nuestra mayor fortaleza es poner al tendero en primer lugar, y brindarle
        las herramientas necesarias para que su trabajo sea una mejor
        experiencia.
        <b>Sabemos que unidos podremos lograr grandes cosas.</b>
      </p>
      <a href="#registrate">
        <button type="button">¡Únete ahora!</button>
      </a>
    </div>
  </StyledFourthSection>
);

export default FourthSection;
