import React from 'react';
import styled from 'styled-components';

import VideoTenderos1 from '../../img/tenderos-2-1.png';
import VideoTenderos2 from '../../img/tenderos-4-1.png';

const StyledSixthSection = styled.section`
  @media (max-width: 1023px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;

    & > * {
      margin: 0 7.5vw;
      width: 85vw;
    }

    .header {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 2;

      h1 {
        text-align: center;
        font-size: 1.2rem;
        line-height: 45px;
        margin-bottom: 30px;
      }

      h2 {
        font-size: 1.1rem;
        line-height: 33px;
        margin-bottom: 10px;
      }

      h3 {
        font-size: 1.45rem;
        line-height: 28px;
        margin-bottom: 40px;
      }
    }

    .videos {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 2;
      grid-row-end: 3;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > a {
        margin: 15px;
        text-decoration: none;
        position: relative;

        &::after {
          content: '▶️';
          color: white;
          font-size: 40px;
          background-color: #00000030;
          backdrop-filter: blur(10px);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 50px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          border-radius: 50%;
          letter-spacing: 0;
        }

        & > img {
          width: 85vw;
          height: 42.5vw;
          object-fit: cover;
          border-radius: 10px;
        }
      }
    }

    .content {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 3;
      grid-row-end: 4;

      p {
        font-size: 1rem;
        line-height: 22px;
        margin: 5vw 0;
      }

      button {
        margin-top: 10px;
      }
    }
  }

  @media (min-width: 1024px) {
    margin: 150px 8vw;

    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: 20vw auto;
    grid-column-gap: 10vw;

    .header {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 2;

      margin-top: auto;
      margin-bottom: 50px;

      h1 {
        font-size: 1rem;
        line-height: 45px;
      }

      h2 {
        font-size: 1.4rem;
        line-height: 63px;
      }

      h3 {
        font-size: 2.33rem;
        line-height: 44px;
      }
    }

    .content {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 2;
      grid-row-end: 3;

      p {
        font-size: 1.1rem;
        line-height: 24px;
        margin: 1vw 0;
      }

      button {
        margin-top: 2.5vw;
      }
    }

    .videos {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > a {
        margin: 15px;
        text-decoration: none;
        position: relative;

        &::after {
          content: '▶️';
          color: white;
          font-size: 40px;
          background-color: #00000030;
          backdrop-filter: blur(10px);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 50px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          border-radius: 50%;
          letter-spacing: 0;
        }

        & > img {
          width: 40vw;
          height: 20vw;
          object-fit: cover;
          border-radius: 40px;
        }
      }
    }
  }

  display: grid;

  .header {
    h1 {
      color: #133c55;
      font-family: Poppins;
      font-weight: 700;
      letter-spacing: 0;
    }

    h2 {
      color: #ff4860;
      font-family: Poppins;
      font-weight: 700;
      letter-spacing: 0;
    }

    h3 {
      color: #ff4860;
      font-family: Poppins;
      font-weight: 700;
      letter-spacing: 0;
    }
  }

  .content {
    p {
      color: #133c55;
      font-family: Poppins;
      font-weight: 500;
      letter-spacing: 0;
    }

    button {
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

const SixthSection = () => (
  <StyledSixthSection>
    <div className="header">
      <h1>De tenderos, para tenderos</h1>
      <h2>La ruta de las tienditas</h2>
      <h3>Conoce más historias detrás del mostrador</h3>
    </div>
    <div className="content">
      <p>
        La Ruta de las Tienditas, tiene como principal objetivo conocer más a
        los tenderos a través de sus historias, que te inspirarán con las
        experiencias y consejos que tienen para ti.
      </p>
      <p>
        ¿Quieres participar en el próximo video? Solo tienes que llenar el
        formulario y te contactaremos.
      </p>
      <button type="button">Llena el formulario</button>
    </div>
    <div className="videos">
      <a href="https://www.youtube.com/watch?v=X3DxIBJOXe4">
        <img src={VideoTenderos1} alt="Video Tenderos" />
      </a>
      <a href="https://youtu.be/sPMYMNOCs0M">
        <img src={VideoTenderos2} alt="Video Tenderos" />
      </a>
    </div>
  </StyledSixthSection>
);

export default SixthSection;
