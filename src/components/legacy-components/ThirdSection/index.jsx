import React from 'react';
import styled from 'styled-components';

import HigherProfits from '../../img/higher-profits.png';
import ClearAccounts from '../../img/clear-accounts.png';
import AccurateReports from '../../img/accurate-reports.png';

const StyledThirdSection = styled.section`
  @media (max-width: 1023px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto auto auto;

    & > .header {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 2;

      text-align: center;
      font-size: 1.2rem;
      line-height: 45px;

      margin-bottom: -25px;
    }

    & > div {
      margin-top: 50px;
      padding: 30px;

      & > div {
        width: 60vw;
        height: 60vw;
      }

      & > h2 {
        margin: 20px 0;
        font-size: 1.75rem;
      }

      & > p {
        font-weight: 500;
        text-align: center;
      }
    }
  }

  @media (min-width: 1024px) {
    margin: 100px 14vw;

    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: auto auto;
    grid-gap: 100px;

    & > .header {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 2;

      font-size: 1rem;
      line-height: 45px;
    }

    & > div {
      & > h2 {
        margin: 10px 0;
        font-size: 1.45rem;
      }

      & > p {
        font-weight: 500;
      }
    }

    & > div:not(.clear-accounts) {
      & > div {
        margin-top: 3vw;
        width: 17vw;
        height: 17vw;
      }
    }

    & > .clear-accounts {
      & > div {
        width: 20vw;
        height: 20vw;
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

  & > .higher-profits {
    & > div {
      position: relative;
      background: linear-gradient(
        180deg,
        #ff697c 0%,
        #ff485f 50%,
        #fa273f 100%
      );
      box-shadow: 0px 0px 26px #ff485fad;
    }
  }

  & > .clear-accounts {
    & > div {
      position: relative;
      background: linear-gradient(180deg, #1fa0b0 0%, #23355e 100%);
      box-shadow: 0px 0px 26px #0da0afad;
    }
  }

  & > .accurate-reports {
    & > div {
      position: relative;
      background: linear-gradient(180deg, #fe9920 0%, #ff485f 100%);
      box-shadow: 0px 0px 26px #ff992dad;
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > div {
      border-radius: 30px;

      & > img {
        position: absolute;
        height: 110%;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    & > h2 {
      font-family: Poppins;
      font-weight: bold;
      letter-spacing: 0px;
      line-height: 45px;
    }

    & > p {
      color: #133c55;
      font-family: Poppins;
      font-size: 1rem;
      letter-spacing: -0.18px;
      line-height: 22px;
    }

    &:nth-child(even) {
      & > h2 {
        color: #133c55;
      }
    }

    &:nth-child(odd) {
      & > h2 {
        color: #ff4860;
      }
    }
  }
`;

const ThirdSection = () => (
  <StyledThirdSection id="como-funciona">
    <h1 className="header">¿Cómo funciona?</h1>
    <div className="higher-profits">
      <div>
        <img src={HigherProfits} alt="Higher profits" />
      </div>
      <h2>Mayores Ganancias</h2>
      <p>
        Con nuestra aplicación digital, puedes conocer el valor promedio de los
        productos y calcular la ganancia que te deja cada uno en tu negocio,
        para hacer rendir tu inversión.
      </p>
    </div>
    <div className="clear-accounts">
      <div>
        <img src={ClearAccounts} alt="Clear accounts" />
      </div>
      <h2>Cuentas Claras</h2>
      <p>
        Gestiona todas las operaciones de tu negocio en un sólo lugar, con
        saldos y movimientos en tiempo real, anotando tus ingresos y gastos en
        nuestra registradora.
      </p>
    </div>
    <div className="accurate-reports">
      <div>
        <img src={AccurateReports} alt="Accurate reports" />
      </div>
      <h2>Reportes Precisos</h2>
      <p>
        A partir de los movimientos en la registradora, recibe estadísticas con
        las que podrás tomar mejores decisiones en tu tiendita, revisando y
        evaluando su desempeño en cada jornada.
      </p>
    </div>
  </StyledThirdSection>
);

export default ThirdSection;
