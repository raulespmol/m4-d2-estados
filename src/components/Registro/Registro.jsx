import './Registro.css'
import Formulario from "../Formulario/Formulario"
import SocialButton from "../SocialButton/SocialButtom"

const Registro = () => {
  return (
    <div className="registro">
      <h2>Crea una cuenta</h2>
      <div className="social">
        <SocialButton icon={'Google'}/>
        <SocialButton icon={'Facebook'}/>
        <SocialButton icon={'GitHub'}/>
      </div>
      <p>o usa tu email para registrarte</p>
      <Formulario />
    </div>
  )
}

export default Registro