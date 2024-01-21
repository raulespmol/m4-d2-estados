import { useState } from "react"
import './Formulario.css'

const Formulario = ({alert}) => {
  const [nombre, setNombre] = useState('') 
  const [correo, setCorreo] = useState('') 
  const [pass, setPass] = useState('') 
  const [confirmPass, setConfirmPass] = useState('') 

  const validateForm = e => {
    e.preventDefault()
    if(nombre === '' ||correo === '' ||pass === '' || confirmPass === ''){
      alert({msg: 'Completa todos los campos', color: 'danger'})
      return
    }

    const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if(!correo.match(mailRegex)){
      alert({msg: 'Formato de correo inválido', color: 'danger'})
      return
    }

    if(pass != confirmPass){
      alert({msg: 'Las contraseñas no coinciden', color: 'danger'})
      return
    }

    if(pass.length < 4){
      alert({msg: 'Contraseña demasiado corta', color: 'danger'})
      return
    }
    
    alert({msg: 'Registro exitoso!', color: 'success'})
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
        type="text" 
        name="correo"
        value={correo}
        onChange={e => setCorreo(e.target.value)}
      />
      <input 
        placeholder="Contraseña (min. 4 caracteres)"
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
    </form>
  )
}

export default Formulario