const SocialButton = ({icon}) => {
  const classes = `fs-3 bi bi-${icon}`
  return (
    <button>
      <i className={classes}></i>
    </button>
  )
}

export default SocialButton