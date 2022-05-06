import styled from 'styled-components';
import { path } from 'ramda';

export const TagStyled = styled.p`
    color: ${({ color, theme }) => path(['button', color, 'mainColor'], theme)};
    font-size: ${(props) => props.fontSize};
    font-family: ${(props) => props.fontFamily};
    font-weight: ${(props) => props.fontWeight};
    line-height: ${(props) => props.lineHeight};
    text-decoration: ${(props) => props.textDecoration};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};

    @media (min-width: 768px) {
      font-size: ${(props) => props.fontSizeSm};
    }
`;

export default {
  TagStyled,
};
