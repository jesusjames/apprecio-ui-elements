import React from 'react';
import styled from 'styled-components';

import ApprecioLogo from '../../svg/apprecio-logo-3.svg';
import ApprecioCoin from '../../img/apprecio-coin.png';
import OrangeArrow from '../../svg/orange-arrow-2.svg';

import PointingHand from '../../img/pointing-hand.png';
import ApprecioCoin2 from '../../img/apprecio-coin-2.png';
import ApprecioCoin3 from '../../img/apprecio-coin-3.png';

const StyledEighthSection = styled.section`
  @media (max-width: 1023px) {
    margin-top: 100px;
    padding: 0 50px;

    background: linear-gradient(-135deg, #ff485f 0%, #ff485f 50%, #ff992d 100%);

    height: 600px;

    & > .register {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 4;
      grid-row-end: 5;

      & > a > div {
        padding: 20px 15px;
        text-align: center;

        & > h2 {
          font-size: 1.2rem;
        }

        & > img {
          display: none;
        }
      }

      margin: 0 5vw;
    }

    .pointing-hand {
      left: -50px;
      bottom: -45px;

      height: 230px;
    }

    .apprecio-coin-2 {
      top: -100px;
      left: -100px;

      height: 300px;
    }

    .apprecio-coin-3 {
      bottom: -50px;
      right: -100px;

      height: 250px;
    }

    .blue-mail {
      position: absolute;
      left: 5px;
      top: 0;
    }

    .orange-arrow {
      display: none;
    }

    .register-button {
      cursor: pointer;
    }
  }

  @media (min-width: 1024px) {
    margin: 100px 6vw 50px 6vw;

    height: 300px;

    background: linear-gradient(-90deg, #ff485f 0%, #ff485f 50%, #ff992d 100%);
    border-radius: 20px;

    & > .register {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 3;
      grid-row-end: 4;

      display: flex;
      justify-content: center;
      align-items: center;

      & > a > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        width: 350px;

        padding: 10px 15px;

        & > h2 {
          font-size: 1.25rem;
        }
      }
    }

    .pointing-hand {
      left: 100px;
      bottom: -45px;

      height: 250px;
    }

    .apprecio-coin-2 {
      top: -100px;
      left: -100px;

      height: 300px;
    }

    .apprecio-coin-3 {
      bottom: -110px;
      right: -50px;

      height: 250px;
    }

    .register-button {
      display: none;
    }

    .blue-mail {
      position: absolute;
      left: 5px;
      bottom: 0;
    }

    .orange-arrow {
      position: absolute;
      right: 5px;
      bottom: 0;
    }
  }

  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * {
    text-align: center;
  }

  & > h1 {
    color: white;
    font-family: Poppins;
    font-weight: 600;
    letter-spacing: 0;
    margin-top: 30px;
    margin-bottom: 20px;
    max-width: 450px;
  }

  & > p {
    color: #133c55;
    font-family: Poppins;
    font-weight: 600;
    letter-spacing: 0;
    margin-bottom: 30px;
  }

  & > .register {
    & > a {
      text-decoration: none;
    }

    & > a > div {
      background-color: white;

      box-shadow: inset 7px 7px 10px #f6f8fd;
      box-shadow: inset 7px 7px 10px #f6f8fd, -10px 10px 25px #00000029;
      border: 1px solid #ffffff;
      border-radius: 20px;

      & > h2 {
        color: #fe9920;
        font-family: Poppins;
        font-weight: 700;
        line-height: 1.2;

        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 1;
      }

      & > .coin {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 1;

        max-width: 60px;
        max-height: 60px;
      }

      & > .arrow {
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 1;

        max-width: 25px;
        max-height: 25px;
      }

      & > .emailContainer {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;

        position: relative;
      }
    }
  }

  .register-button {
    background-color: #fe9920;
    border: none;
    border-radius: 9px;
    padding: 10px 30px;

    margin-top: 30px;

    color: #f6f8fd;
    font-family: Poppins;
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 0;
    line-height: 20px;
  }

  .pointing-hand,
  .apprecio-coin-2,
  .apprecio-coin-3 {
    position: absolute;
  }

  #mce-EMAIL {
    width: 300px;
    border: none;
    height: 30px;
    border-radius: 50px;
    padding: 0 50px;
    box-sizing: border-box;

    &::placeholder {
      color: #00000029;
      font-family: Poppins;
      font-size: 0.9rem;
      font-weight: 400;
    }
  }

  .blue-mail,
  .orange-arrow {
    height: 30px;
  }
`;

const EighthSection = () => (
  <StyledEighthSection id="registrate">
    <img src={ApprecioLogo} alt="Apprecio Logo" />
    <h1>Súmate a la nueva forma de manejar tu tiendita</h1>
    <div className="register">
      <a href="/app/signup">
        <div>
          <img className="coin" src={ApprecioCoin} alt="Coin" />
          <h2>¡Regístrate aquí!</h2>
          <img className="arrow" src={OrangeArrow} alt="Go" />
        </div>
      </a>
    </div>
    <img src={PointingHand} alt="Pointing Hand" className="pointing-hand" />
    <img src={ApprecioCoin2} alt="Apprecio Coin" className="apprecio-coin-2" />
    <img src={ApprecioCoin3} alt="Apprecio Coin" className="apprecio-coin-3" />
  </StyledEighthSection>
);

export default EighthSection;
