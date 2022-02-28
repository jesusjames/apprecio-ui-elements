const Alert = (props) => {
  // eslint-disable-next-line no-console
  console.log('render alert');
  const { children, color } = props;
  return (
    <div style={{ backgroundColor: color }} className="animate__animated animate__bounce">
      <h6>{children}</h6>
    </div>
  );
};

export default Alert;
