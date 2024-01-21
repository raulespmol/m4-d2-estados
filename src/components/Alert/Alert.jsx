import './Alert.css'

const Alert = ({msg, color}) => {
  const classes = `mt-3 alert alert-${color}`
  return(
    <div className={classes}>
      {msg}
    </div>
  )
}

export default Alert