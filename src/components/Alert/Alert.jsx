const Alert = (props) => {
  const {children, color} = props;
  return(
    <div style={{backgroundColor: color}}>
      <h6>{children}</h6>
    </div>
  )
}

export default Alert;
