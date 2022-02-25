export const GenerateIcon = ({icon, orientation}) => {
  if (icon === null || icon === undefined) return null;

  switch (typeof icon) {
    case 'function':
      return <icon />;
    case 'string':
      return <img
        alt={`icon-${orientation}`}
        className={`icon-${orientation}`}
        src={icon}
      />
    default: return null;
  }
};