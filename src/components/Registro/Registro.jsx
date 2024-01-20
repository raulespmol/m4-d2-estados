import './Registro.css'
import Formulario from "../Formulario/Formulario"
import SocialButton from "../SocialButton/SocialButton"
import Alert from '../Alert/Alert'

const Registro = () => {
  return (
    <div className="registro">
      <h2>Crea una cuenta</h2>
      <div className="social">
        <SocialButton icon={'facebook'}/>
        <SocialButton icon={'google'}/>
        <SocialButton icon={'github'}/>
      </div>
      <p>o usa tu email para registrarte</p>
      <Formulario />
      <Alert msg={'hola'} color={'danger'}/>
    </div>
  )
}

export default Registro