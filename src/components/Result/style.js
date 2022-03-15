import styled from 'styled-components';

export const ResultStyled = styled.div`
  height: 82px;
  width: 341px;

  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;

  .info-container {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    div > h1 {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      text-transform: uppercase;
      color: ${(props) => props.theme?.result?.default?.softTextColor};

      margin: 0;
    }

    div > h2 {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: ${(props) => props.theme?.result?.default?.textColor};

      margin: 0;
    }

    div > h3 {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: ${(props) => props.theme?.result?.default?.softTextColor};

      margin: 0;
    }
  }

  .image-container {
    height: 82px;
    width: 82px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;
  }
`;

export default {
  ResultStyled,
};
