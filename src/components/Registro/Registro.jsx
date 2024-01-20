import './Registro.css'
import Formulario from "../Formulario/Formulario"
import SocialButton from "../SocialButton/SocialButton"

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
    </div>
  )
}

export default Registro