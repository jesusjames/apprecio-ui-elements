import React from 'react';
import styled from 'styled-components';

import RightHand from '../../img/right-hand.png';

const StyledSecondSection = styled.section`
  @media (max-width: 575px) {
    & > p:last-child {
      & > img {
        left: 61vw !important;
        top: 100px !important;
      }
    }
  }

  @media (min-width: 576px) {
    @media (max-width: 767px) {
      & > p:last-child {
        & > img {
          left: 70vw !important;
          top: 60px !important;
        }
      }
    }
  }

  @media (max-width: 1023px) {
    grid-template-columns: auto;
    grid-template-rows: 50% 50%;

    margin: 50px 5vw;
    border-radius: 20px;

    & > p {
      padding: 30px;
    }

    & > p:first-child {
      text-align: center;
      font-size: 1.25rem;
    }

    & > p:last-child {
      border-radius: 20px;
      font-size: 1.5rem;

      max-width: 95vw;
      margin: 0 -2.5vw;

      & > img {
        width: 125px;

        position: absolute;
        left: 78vw;
        top: 40px;
      }
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;

    margin: 100px 14vw;
    border-radius: 50px;

    & > p:first-child {
      padding: 70px;
      font-size: 1.5rem;
    }

    & > p:last-child {
      padding: 93px 50px;
      border-radius: 50px;
      font-size: 1.75rem;

      & > img {
        width: 200px;

        position: absolute;
        left: 22vw;
        top: 200px;
      }
    }
  }

  display: grid;
  grid-gap: 0;

  background-color: white;

  border: 2px solid #ffffff;
  box-shadow: inset 0px 6px 22px #5a7ba062;

  & > p:first-child {
    color: #133c55;
    font-family: Poppins;
    font-weight: 600;
    line-height: 1.2;
  }

  & > p:last-child {
    position: relative;

    background-color: #ff4860;
    box-shadow: 0px 0px 30px #ff4a61bc;

    text-align: center;

    color: #f6f8fd;
    font-family: Poppins;
    font-weight: 700;
    line-height: 1.2;
  }
`;

const SecondSection = () => (
  <StyledSecondSection>
    <p>
      La herramienta que te ayudará a administrar tu negocio eficientemente y
      sin complicaciones.
    </p>
    <p>
      Somos la mano derecha de los tenderos.
      <img src={RightHand} alt="Right hand" />
    </p>
  </StyledSecondSection>
);

export default SecondSection;
