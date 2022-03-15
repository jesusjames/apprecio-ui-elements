import styled from 'styled-components';

export const NotificationCardStyled = styled.div`
  position: relative;

  border-radius: 15px;
  
  width: 311px;
  min-height: 104px;

  padding: 5px 15px 10px 15px;

  background-color: ${(props) => props.theme?.notificationCard?.[props.variant]?.mainColor};
`;

export const NavigationBarStyled = styled.div`
  position: absolute;

  width: calc(100% - 30px);
  bottom: 12px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  z-index: 1;

  .selector {
    width: 24px;
    height: 4px;

    margin: 0px 4px;

    background: rgb(246, 248, 253);
    border-radius: 100px;

    opacity: 0.5;
  }

  .selected {
    opacity: 1 !important;
  }
`;

export const CardBodyStyled = styled.div`
  display: flex;
  flex-direction: row;

  max-height: 104px;

  overflow-y: hidden;

  padding: 10px;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;

  color: ${(props) => props.theme?.notificationCard?.[props.variant]?.textColor};
`;

export default {
  NotificationCardStyled,
  NavigationBarStyled,
  CardBodyStyled,
};
