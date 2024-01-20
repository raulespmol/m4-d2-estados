const Alert = ({error, msg, color}) => {
  const classes = `my-3 alert alert-${color}`
  return(
    <div className={classes}>
      {msg}
    </div>
  )
}

export default Alert