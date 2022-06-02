import styled from 'styled-components';
import { path } from 'ramda';

export const ContainerStyled = styled.div`
  width: 311px;
  cursor: pointer;
`;

export const ArrowStyled = styled.span`
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  background: transparent;
  border-top: 2px solid ${({ isIncome, theme }) => (isIncome ? path(['color', 'secondary', 'mainColor'], theme) : path(['color', 'primary', 'mainColor'], theme))};
  border-left: 2px solid ${({ isIncome, theme }) => (isIncome ? path(['color', 'secondary', 'mainColor'], theme) : path(['color', 'primary', 'mainColor'], theme))};
  text-decoration: none;
  color: transparent;
  transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(-135deg)')};
  margin-top: ${({ open }) => (open ? '7px' : '4px')};
  margin-left: 8px;
  transition: all ease 0.3s;
`;
