export const GenerateIcon = ({ icon: Icon, orientation, ...rest }) => {
  if (!Icon) return null;

  switch (typeof Icon) {
    case 'function':
      // eslint-disable-next-line react/jsx-filename-extension
      return <Icon {...rest} />;
    case 'string':
      return (
        <img
          alt={`icon-${orientation}`}
          className={`icon-${orientation}`}
          src={Icon}
          {...rest}
        />
      );
    default: return null;
  }
};

export default GenerateIcon;
