import styled from 'styled-components';

export const H1Styled = styled.h1`
  color: ${(props) => {
    switch (props.color) {
      case 'white':
        return 'var(--whiteColorPure)';
      default:
        return 'var(--mainColor)';
    }
  }};
  font-family: 'Poppins', sans-serif;
  font-size: 26px;
  line-height: 31px;
  font-weight: bold;
  letter-spacing: 0;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  width: ${(props) => (props.mini ? null : '325px')};
  z-index: 20;

  &::first-letter {
    text-transform: capitalize;
  }
`;

export const H2Styled = styled.h2`
  color: ${(props) => {
    switch (props.color) {
      case 'white':
        return 'var(--whiteColorPure)';
      default:
        return 'var(--mainColor)';
    }
  }};
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
  line-height: 22px;
  font-weight: bold;
  letter-spacing: -0.22px;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  width: 325px;
  z-index: 20;
`;

export const H3Styled = styled.h3`
  color: var(--grayColorOne);
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 17px;
  font-weight: 300;
  letter-spacing: 0;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  width: 325px;
  z-index: 20;

  text-transform: uppercase;
`;

export const H4Styled = styled.h4`
  color: ${(props) => {
    switch (props.color) {
      case 'yellow':
        return 'var(--lightColor)';
      default:
        return 'var(--darkColor)';
    }
  }};
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: -0.16px;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  width: 325px;
  z-index: 20;
`;

export const H5Styled = styled.h5`
  color: var(--darkColor);
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  letter-spacing: 0;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  width: 325px;
  z-index: 20;
`;

export const H6Styled = styled.h6`
  color: var(--blueColor);
  font-family: 'Poppins', sans-serif;
  font-size: 80px;
  line-height: 97px;
  font-weight: bold;
  letter-spacing: 0;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  width: 325px;
  z-index: 20;

  &::first-letter {
    text-transform: capitalize;
  }
`;

export const ErrorStyled = styled.h2`
  color: var(--errorColorText);
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 17px;
  font-weight: bold;
  letter-spacing: 0;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  width: 325px;
  z-index: 20;
`;

export default {
  H1Styled,
  H2Styled,
  H3Styled,
  H4Styled,
  H5Styled,
  H6Styled,
  ErrorStyled,
};
