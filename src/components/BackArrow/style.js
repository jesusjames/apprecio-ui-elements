import styled from 'styled-components';
import { path } from 'ramda';

export const ArrowDownIcon = styled.span`
  margin: auto;
  display: inline-block;
  width: ${({ fontSize }) => (fontSize ? `calc(${fontSize} - (${fontSize}/2))` : '0.625rem')};
  height: ${({ fontSize }) => (fontSize ? `calc(${fontSize} - (${fontSize}/2))` : '0.625rem')};
  background: transparent;
  border-top: 2px solid ${({ color, theme }) => path(['color', color, 'mainColor'], theme)};
  border-left: 2px solid ${({ color, theme }) => path(['color', color, 'mainColor'], theme)};
  text-decoration: none;
  color: transparent;
  transform: rotate(-45deg);
`;

export const TextStyled = styled.p`
  margin-left: 5px;
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  line-height: ${({ fontSize }) => fontSize || '1rem'};;
  color: ${({ color, theme }) => path(['color', color, 'mainColor'], theme)};
`;
