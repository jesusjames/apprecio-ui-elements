const Alert = (props) => {
  const {children, color} = props;
  return(
    <div style={{backgroundColor: color}}>
      {children}
    </div>
  )
}

export default Alert;
