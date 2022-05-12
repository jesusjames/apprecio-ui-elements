import styled from 'styled-components';

export const ArrowDownIcon = styled.span`
  margin: auto;
  display: inline-block;
  width: 10px;
  height: 10px;
  background: transparent;
  border-top: 2px solid var(--mainColor);
  border-left: 2px solid var(--mainColor);
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
  line-height: 20px;
  color: var(--mainColor);
`;
