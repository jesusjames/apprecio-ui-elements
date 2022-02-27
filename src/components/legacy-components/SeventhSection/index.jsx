import React from 'react';
import styled from 'styled-components';

const StyledSeventhSection = styled.section`
  @media (max-width: 1023px) {
    margin-top: 60px;

    & > * {
      margin: 0 7.5vw;
      width: 85vw;
    }

    h1 {
      font-size: 1.4rem;
      line-height: 26px;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 0.9rem;
      line-height: 33px;
      margin-bottom: 30px;
    }

    .scroll-container {
      display: flex;
      overflow-x: scroll;

      .scroll-element {
        min-width: 200px;
        max-width: 200px;

        margin-right: 20px;

        & > div {
          margin-bottom: 10px;
          height: 149px;
          background-color: white;
        }

        & > p {
          font-size: 0.9rem;
          font-weight: 700 !important;
          line-height: 18px;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    margin: 0 6vw;

    h1 {
      font-size: 2.3rem;
      line-height: 51px;
      margin-bottom: 30px;
    }

    h2 {
      font-size: 1.5rem;
      line-height: 30px;
      margin-bottom: 20px;
    }

    .scroll-container {
      width: 100%;
      margin: 0;
    }

    .scroll-element {
      min-width: 300px;
      max-width: 300px;

      margin-right: 20px;

      & > div {
        margin-bottom: 20px;
        height: 225px;
        background-color: white;
      }

      & > p {
        font-size: 1rem;
      }
    }
  }

  h1 {
    color: #ff4860;
    font-family: Poppins;
    font-weight: 700;
    letter-spacing: 0;
  }

  h2 {
    color: #133c55;
    font-family: Poppins;
    font-weight: 600;
    letter-spacing: 0;
  }

  .scroll-container {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;

    .scroll-element {
      & > p {
        color: #133c55;
        font-family: Poppins;
        font-weight: 600;
        letter-spacing: 0;
      }
    }
  }
`;

const SeventhSection = () => (
  <StyledSeventhSection>
    <h1>Visita el Blog</h1>
    <h2>Últimas entradas</h2>
    <div className="scroll-container">
      <div className="scroll-element">
        <div />
        <p>¿Para qué sirve el flujo de caja?</p>
      </div>
      <div className="scroll-element">
        <div />
        <p>Mercadeo activo en tu negocio</p>
      </div>
      <div className="scroll-element">
        <div />
        <p>¿Cómo puedes aumentar tus utilidades?</p>
      </div>
      <div className="scroll-element">
        <div />
        <p>Frases para empresarios</p>
      </div>
      <div className="scroll-element">
        <div />
        <p>¿Qué tan importante es tu tienda?</p>
      </div>
      <div className="scroll-element">
        <div />
        <p>Nuestros 3 tipos de clientes</p>
      </div>
    </div>
  </StyledSeventhSection>
);

export default SeventhSection;
