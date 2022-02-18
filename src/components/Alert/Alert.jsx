const Alert = (props) => {
  const {children, color} = props;
  return(
    <div style={{backgroundColor: color}}>
      <h1>{children}</h1>
    </div>
  )
}

export default Alert;
