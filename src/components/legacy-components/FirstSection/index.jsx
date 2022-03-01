import React from 'react';
import styled from 'styled-components';

import Phone from '../../img/phone.png';
import ApprecioCoin from '../../img/apprecio-coin.png';
import OrangeArrow from '../../svg/orange-arrow-2.svg';
import ScrollDown from '../../svg/scroll-down.svg';
import ScrollDownMobile from '../../svg/scroll-down-mobile.svg';

const StyledFirstSection = styled.section`
  @media (max-width: 1023px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto 70px auto;

    & > .phoneProp {
      max-width: 100vw;

      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 2;

      & > img {
        width: 90vw;
      }
    }

    & > .header {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 2;
      grid-row-end: 3;

      & > h1 {
        text-align: center;
        font-size: 2rem;
        padding: 0 5vw;
      }
    }

    & > .discover {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 3;
      grid-row-end: 4;

      h3 {
        display: none;
      }

      .scroll-down {
        display: none;
      }
    }

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
  }

  @media (min-width: 1024px) {
    grid-template-columns: 45% auto;
    grid-template-rows: 120px 220px auto auto;

    margin: 0px 14.5vw;
    height: 650px;

    & > .phoneProp {
      height: 650px;

      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 5;

      & > img {
        height: 650px;
      }
    }

    & > .header {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;

      & > h1 {
        font-size: 3rem;
      }
    }

    & > .discover {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 4;
      grid-row-end: 5;

      .scroll-down-mobile {
        display: none;
      }
    }

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
        height: 70px;
        width: 400px;

        padding: 20px 30px;

        & > h2 {
          font-size: 1.25rem;
        }
      }
    }
  }

  display: grid;
  grid-gap: 0;

  & > .phoneProp {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > .header {
    & > h1 {
      font-family: Poppins;
      line-height: 1;
      font-weight: 700;
      background: linear-gradient(
        245deg,
        #ff485f 0%,
        #ff485f 39%,
        #ff992d 100%
      );
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
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

  & > .discover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > h3 {
      color: #ff4860;
      font-family: Poppins;
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 1.2;
      margin-bottom: 1rem;
    }

    & > img {
      max-height: 50px;
    }
  }

  #mce-EMAIL {
    height: 50px;
    width: 100%;
    padding: 1rem 3rem;
    box-sizing: border-box;

    border: none;
    border-bottom: 2px solid #ff992d;

    font-family: Poppins;
    font-size: 1.25rem;
    font-weight: 400;

    &::placeholder {
      color: #00000029;
      font-family: Poppins;
      font-size: 1.25rem;
      font-weight: 400;
    }

    &:focus {
      outline: none;
    }
  }

  .blue-mail {
    position: absolute;
    bottom: 5px;
    left: 0;

    height: 40px;
  }

  .orange-arrow {
    position: absolute;
    bottom: 5px;
    right: 0;

    height: 40px;
  }
`;

const FirstSection = () => (
  <StyledFirstSection>
    <div className="phoneProp">
      <img src={Phone} alt="Phone" />
    </div>
    <div className="header">
      <h1>Maneja tu tiendita con una sola mano.</h1>
    </div>
    <div className="register">
      <a href="/app/signup">
        <div>
          <img className="coin" src={ApprecioCoin} alt="Coin" />
          <h2>¡Regístrate aquí!</h2>
          <img className="arrow" src={OrangeArrow} alt="Go" />
        </div>
      </a>
    </div>
    <div className="discover">
      <h3>Descubre más</h3>
      <img className="scroll-down" src={ScrollDown} alt="Scroll" />
      <img className="scroll-down-mobile" src={ScrollDownMobile} alt="Scroll" />
    </div>
  </StyledFirstSection>
);

export default FirstSection;
