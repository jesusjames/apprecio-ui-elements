import { range, sort } from 'ramda';

export const months = [
  'Enero',
  'Ferebro',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

const rangeYear = () => {
  const max = new Date().getFullYear();
  const min = max - 110;
  const years = range(min, max + 1);
  const diff = (a, b) => b - a;
  return sort(diff, years);
};

export const years = rangeYear();
