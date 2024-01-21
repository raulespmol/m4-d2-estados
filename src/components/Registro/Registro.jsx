import './Registro.css'
import { useState } from 'react'
import Formulario from "../Formulario/Formulario"
import SocialButton from "../SocialButton/SocialButton"
import Alert from '../Alert/Alert'

const Registro = () => {
  const [alert, setAlert] = useState({msg: '', color: ''})

  return (
    <div className="registro">
      <h2>Crea una cuenta</h2>
      <div className="social">
        <SocialButton icon={'facebook'}/>
        <SocialButton icon={'google'}/>
        <SocialButton icon={'github'}/>
      </div>
      <p>o usa tu email para registrarte</p>
      <Formulario alert={setAlert}/>
      {alert.msg ? <Alert msg={alert.msg} color={alert.color}/> : null}
    </div>
  )
}

export default Registro