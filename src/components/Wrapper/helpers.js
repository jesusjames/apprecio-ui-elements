export const spacingMapping = (value) => {
  switch (value) {
    case '1': return '.25rem';
    case '2': return '.75rem';
    case '3': return '1rem';
    case '4': return '2rem';
    case '5': return '3rem';
    default: return '0';
  }
};

export default {
  spacingMapping,
};
