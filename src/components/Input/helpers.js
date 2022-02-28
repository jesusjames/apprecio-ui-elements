export const GenerateIcon = ({ icon: Icon, orientation }) => {
  if (!Icon) return null;

  switch (typeof Icon) {
    case 'function':
      // eslint-disable-next-line react/jsx-filename-extension
      return <Icon />;
    case 'string':
      return (
        <img
          alt={`icon-${orientation}`}
          className={`icon-${orientation}`}
          src={Icon}
        />
      );
    default: return null;
  }
};

export default GenerateIcon;
