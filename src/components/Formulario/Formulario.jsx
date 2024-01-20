import { useState } from "react"
import './Formulario.css'

const Formulario = () => {
  const [nombre, setNombre] = useState('') 
  const [correo, setCorreo] = useState('') 
  const [pass, setPass] = useState('') 
  const [confirmPass, setConfirmPass] = useState('') 

  const [error, setError] = useState(false)

  const validateForm = e => {
    e.preventDefault()
    if(nombre === '' ||correo === '' ||pass === '' || confirmPass === ''){
    setError(true)
    console.log(error);
    return
    }
    
    setError(false)
    setNombre('')
    setCorreo('')
    setPass('')
    setConfirmPass('')
  }

  return (
    <form onSubmit={validateForm}>
      <input 
        placeholder="Nombre de usuario"
        type="text" 
        name="nombre"
        value={nombre}
        autoComplete="false"
        onChange={e => setNombre(e.target.value)}
      />
      <input 
        placeholder="ejemplo@correo.cl"
        type="email" 
        name="correo"
        value={correo}
        onChange={e => setCorreo(e.target.value)}

      />
      <input 
        placeholder="Contraseña"
        type="password"
        name="pass"
        value={pass}
        onChange={e => setPass(e.target.value)}

      />
      <input 
        placeholder="Repite contraseña"
        type="password"
        name="confirmPass"
        value={confirmPass}
        onChange={e => setConfirmPass(e.target.value)}
      />
      <button type="submit">Registrarse</button>
      {error ? <p>error</p> : null}
    </form>
  )
}

export default Formulario