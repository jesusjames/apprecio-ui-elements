/**
 *
 * ReporteResumen
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import receiptblack from '../../images/receipt_black_24dp.svg';

import Input from 'components/Input';
import Button from 'components/Button';
// import IconlyBoldCalendar from '../../images/Iconly-Bold-Calendar.svg';

const Container = styled.div`
  width: 270pt;
  margin-top: 37pt;
  font-size: 16pt;
  padding: 150px 10pt 0 10pt;
  p {
    text-align: left;
    font-size: 16pt;
    font-family: Poppins;
    font-weight: bold;
    color: #133c55;
  }
`;
const ContainerFilter = styled.div`
  width: 100%;
  background: transparent;
  margin-top: 20pt;
  .FilterButton,
  .FilterButtonAction {
    padding: 10pt 8pt;
    text-align: center;
    font-size: 10pt;
    font-family: Poppins;
    font-weight: 400;
    border: none;
    border-radius: 10pt;
    margin-left: 3pt;
    &:focus {
      outline: none;
    }
  }
  .FilterButton {
    background: rgba(116, 138, 157, 0.3);
    color: #748a9d;
  }
  .FilterButtonAction {
    background: #133c55 !important;
    color: #f6f8fd !important;
  }
`;

const Center = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DateSelector = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const DataFilter = styled.div`
  margin-top: 16pt;
  text-align: left;
  font-size: 16pt;
  font-family: Poppins;
  font-weight: 400;
  color: #133c55;
`;

const ContainerComparacion = styled.div`
  margin-top: 36pt;
  width: 100%;
  height: 80pt;
  content: '';
  display: table;
  clear: both;
`;

const ItemComparacion = styled.div`
  height: 100%;
  float: left;
  width: 50%;
`;

const Ingresos = styled.div`
  color: #fe9920;
  font-weight: 400;
  font-size: 20pt;
  text-align: center;
`;

const Gastos = styled.div`
  color: #ff4860;
  font-weight: 400;
  font-size: 20pt;
  text-align: center;
`;

const ContainerDiario = styled.div`
  margin-top: 36pt;
`;

const ItemDiario = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 21pt 0;
  border-bottom: solid 1px #748a9d;
`;

const dayOfTheWeekDict = {
  0: 'Domingo',
  1: 'Lunes',
  2: 'Martes',
  3: 'Miércoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sábado',
};

const monthName = {
  0: 'Enero',
  1: 'Febrero',
  2: 'Marzo',
  3: 'Abril',
  4: 'Mayo',
  5: 'Junio',
  6: 'Julio',
  7: 'Agosto',
  8: 'Septiembre',
  9: 'Octubre',
  10: 'Noviembre',
  11: 'Diciembre',
};

function ReporteResumen({
  breakdown,
  breakdownSetter,
  startDate,
  startDateSetter,
  endDate,
  endDateSetter,
  data,
  dataRetriever,
}) {
  const diario = breakdown === 'daily' ? 'FilterButtonAction' : 'FilterButton';
  const semanal =
    breakdown === 'weekly' ? 'FilterButtonAction' : 'FilterButton';
  const mensual =
    breakdown === 'monthly' ? 'FilterButtonAction' : 'FilterButton';
  const anual = breakdown === 'yearly' ? 'FilterButtonAction' : 'FilterButton';
  // const Icono = breakdown === 'Icono' ? 'FilterButtonAction' : 'FilterButton';

  return (
    <Container>
      <p style={{ color: '#FF4860' }}>RESUMEN</p>
      <ContainerFilter>
        <button
          type="button"
          style={{ marginLeft: '0' }}
          onClick={() => breakdownSetter('daily')}
          className={[diario].join()}
        >
          Diario
        </button>
        <button
          type="button"
          onClick={() => breakdownSetter('weekly')}
          className={[semanal].join()}
        >
          Semanal
        </button>
        <button
          type="button"
          onClick={() => breakdownSetter('monthly')}
          className={[mensual].join()}
        >
          Mensual
        </button>
        <button
          type="button"
          onClick={() => breakdownSetter('yearly')}
          className={[anual].join()}
        >
          Anual
        </button>
        {/* <button
          type="button"
          style={{ padding: '6pt' }}
          onClick={() => breakdownSetter('Icono')}
          className={[Icono].join()}
        >
          <img
            src={receiptblack}
            style={{ height: '15pt' }}
            alt="receiptblack"
          />
        </button> */}
      </ContainerFilter>
      <DataFilter>
        <DateSelector>
          <span>De</span>
          <Input
            type="date"
            value={startDate}
            onChange={e => startDateSetter(e.target.value)}
          />
          <span>A</span>
          <Input
            type="date"
            value={endDate}
            onChange={e => endDateSetter(e.target.value)}
          />
          <Button mt3 mb4 p1 message="Actualizar" onClick={dataRetriever} />
        </DateSelector>
        {data.reportData.map(item => {
          switch (data.breakdown) {
            case 'daily': {
              const date = new Date(
                `${Object.keys(item)[0]}T12:00:00.000-05:00`,
              );

              return (
                <>
                  <p>
                    {dayOfTheWeekDict[date.getDay()]},{' '}
                    {monthName[date.getMonth()]} {date.getDate()}
                  </p>
                  {`0${date.getDate()}`.slice(-2)}/
                  {`0${date.getMonth() + 1}`.slice(-2)}/
                  {`${date.getFullYear()}`.slice(-2)}
                  <ContainerComparacion>
                    <ItemComparacion
                      style={{ borderRight: 'solid 1px #133C55' }}
                    >
                      <Center style={{ height: '100%' }}>
                        <div>
                          <Ingresos>
                            $
                            {(
                              Object.values(item)[0].income_stats_total || 0
                            ).toFixed(2)}
                          </Ingresos>
                          <p
                            style={{
                              fontWeight: 'normal',
                              fontSize: '16pt',
                              textAlign: 'center',
                            }}
                          >
                            Ingresos
                          </p>
                        </div>
                      </Center>
                    </ItemComparacion>
                    <ItemComparacion>
                      <Center style={{ height: '100%' }}>
                        <div>
                          <Gastos>
                            -$
                            {(
                              Object.values(item)[0].expense_stats_total || 0
                            ).toFixed(2)}
                          </Gastos>
                          <p
                            style={{
                              fontWeight: 'normal',
                              fontSize: '16pt',
                              textAlign: 'center',
                            }}
                          >
                            Gastos
                          </p>
                        </div>
                      </Center>
                    </ItemComparacion>
                  </ContainerComparacion>
                  <ContainerDiario>
                    {data.reportBreakdown.reverse().map(breakdownItem => (
                      <ItemDiario>
                        <div>
                          <p style={{ color: '#748A9D' }}>
                            {breakdownItem.label}
                          </p>
                          <p
                            style={{
                              color: '#748A9D',
                              fontSize: '14pt',
                              fontWeight: 'normal',
                            }}
                          />
                        </div>
                        <div>
                          {breakdownItem.type === 'income' ? (
                            <Ingresos>${breakdownItem.amount}</Ingresos>
                          ) : (
                            <Gastos>-${breakdownItem.amount}</Gastos>
                          )}
                        </div>
                      </ItemDiario>
                    ))}
                  </ContainerDiario>
                </>
              );
            }
            case 'weekly': {
              const [year, week] = Object.keys(item)[0].split('-');
              const date = new Date(year, 0, 1 + (week - 1) * 7);
              const dow = date.getDay();

              if (dow <= 4) {
                date.setDate(date.getDate() + 1 - dow);
              } else {
                date.setDate(date.getDate() + 8 - dow);
              }

              const endOfWeek = new Date();
              endOfWeek.setDate(date.getDate() + 1);

              return (
                <>
                  <p>
                    Semana, {monthName[date.getMonth()]} {date.getDate()}
                  </p>
                  {`0${date.getDate()}`.slice(-2)}/
                  {`0${date.getMonth() + 1}`.slice(-2)}/
                  {`${date.getFullYear()}`.slice(-2)} -
                  {`0${endOfWeek.getDate()}`.slice(-2)}/
                  {`0${endOfWeek.getMonth() + 1}`.slice(-2)}/
                  {`${endOfWeek.getFullYear()}`.slice(-2)}
                  <ContainerComparacion>
                    <ItemComparacion
                      style={{ borderRight: 'solid 1px #133C55' }}
                    >
                      <Center style={{ height: '100%' }}>
                        <div>
                          <Ingresos>
                            $
                            {(
                              Object.values(item)[0].income_stats_total || 0
                            ).toFixed(2)}
                          </Ingresos>
                          <p
                            style={{
                              fontWeight: 'normal',
                              fontSize: '16pt',
                              textAlign: 'center',
                            }}
                          >
                            Ingresos
                          </p>
                        </div>
                      </Center>
                    </ItemComparacion>
                    <ItemComparacion>
                      <Center style={{ height: '100%' }}>
                        <div>
                          <Gastos>
                            -$
                            {(
                              Object.values(item)[0].expense_stats_total || 0
                            ).toFixed(2)}
                          </Gastos>
                          <p
                            style={{
                              fontWeight: 'normal',
                              fontSize: '16pt',
                              textAlign: 'center',
                            }}
                          >
                            Gastos
                          </p>
                        </div>
                      </Center>
                    </ItemComparacion>
                  </ContainerComparacion>
                </>
              );
            }
            case 'monthly': {
              const [year, month] = Object.keys(item)[0].split('-');
              const date = new Date(year, month - 1);

              return (
                <>
                  <p>{monthName[date.getMonth()]}</p>
                  {`${date.getFullYear()}`}
                  <ContainerComparacion>
                    <ItemComparacion
                      style={{ borderRight: 'solid 1px #133C55' }}
                    >
                      <Center style={{ height: '100%' }}>
                        <div>
                          <Ingresos>
                            $
                            {(
                              Object.values(item)[0].income_stats_total || 0
                            ).toFixed(2)}
                          </Ingresos>
                          <p
                            style={{
                              fontWeight: 'normal',
                              fontSize: '16pt',
                              textAlign: 'center',
                            }}
                          >
                            Ingresos
                          </p>
                        </div>
                      </Center>
                    </ItemComparacion>
                    <ItemComparacion>
                      <Center style={{ height: '100%' }}>
                        <div>
                          <Gastos>
                            -$
                            {(
                              Object.values(item)[0].expense_stats_total || 0
                            ).toFixed(2)}
                          </Gastos>
                          <p
                            style={{
                              fontWeight: 'normal',
                              fontSize: '16pt',
                              textAlign: 'center',
                            }}
                          >
                            Gastos
                          </p>
                        </div>
                      </Center>
                    </ItemComparacion>
                  </ContainerComparacion>
                </>
              );
            }
            case 'yearly': {
              const year = Object.keys(item)[0];
              const date = new Date(year, 0);

              return (
                <>
                  <p>{date.getFullYear()}</p>
                  <ContainerComparacion>
                    <ItemComparacion
                      style={{ borderRight: 'solid 1px #133C55' }}
                    >
                      <Center style={{ height: '100%' }}>
                        <div>
                          <Ingresos>
                            $
                            {(
                              Object.values(item)[0].income_stats_total || 0
                            ).toFixed(2)}
                          </Ingresos>
                          <p
                            style={{
                              fontWeight: 'normal',
                              fontSize: '16pt',
                              textAlign: 'center',
                            }}
                          >
                            Ingresos
                          </p>
                        </div>
                      </Center>
                    </ItemComparacion>
                    <ItemComparacion>
                      <Center style={{ height: '100%' }}>
                        <div>
                          <Gastos>
                            -$
                            {(
                              Object.values(item)[0].expense_stats_total || 0
                            ).toFixed(2)}
                          </Gastos>
                          <p
                            style={{
                              fontWeight: 'normal',
                              fontSize: '16pt',
                              textAlign: 'center',
                            }}
                          >
                            Gastos
                          </p>
                        </div>
                      </Center>
                    </ItemComparacion>
                  </ContainerComparacion>
                </>
              );
            }
            default:
              return <></>;
          }
        })}
      </DataFilter>
    </Container>
  );
}

ReporteResumen.propTypes = {
  breakdown: PropTypes.string.isRequired,
  breakdownSetter: PropTypes.func.isRequired,
  startDate: PropTypes.string.isRequired,
  startDateSetter: PropTypes.func.isRequired,
  endDate: PropTypes.string.isRequired,
  endDateSetter: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  dataRetriever: PropTypes.func.isRequired,
};

export default ReporteResumen;
