import { useState } from 'react';


import { Navigate, useNavigate } from 'react-router-dom'

// Importacion header y footer
import { Header } from './Header';
import { Footer } from './Footer';

import { NavLink } from "react-router-dom";
import { ProtectedRouter } from './ProtectedRouter';
// import { ProtectedRouter } from './ProtectedRouter';


export function Formulario( ) {
  // const [count, setCount] = useState(0)
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  // const [authForm, setAuthForm] = useState(false)
  const navigate = useNavigate();

 
  const handleSubmit = e => {
    e.preventDefault();
    if (nombre === '' && password === '') {
      
      // navigate('/');
      setError(true);
      // setAuthForm(false);
      return;
    }
    setError(false)
    navigate('dashboard');
    // setUser([nombre]);
    // setAuthForm(true);

  }
  
  return (
    <>
     
      
      < Header />
      <div className='form-box'>
      <form 
            className='formulario' 
            onSubmit={ handleSubmit }
      >
        <fieldset>
          <legend className='text-center'>Iniciar Sesion</legend>        
          
            <div className='campo'>
              <input 
                type="text" 
                placeholder="Correo Electronico"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
              />
            </div>
            <div className='campo'>
              <input 
                type="password" 
                placeholder="Contrasenia"
                // value={password}
                onChange={ e => setPassword(e.target.value)}
              />
            </div>
            
        </fieldset>      
      <div className='text-center'>
              <button className='btn' onClick={ e => handleSubmit(e) }>Ingresar</button>
            </div>
            <div>
              <NavLink to="registrarse">Registrarse</NavLink>

            </div>
          
          { error && <p className='errores'>Todos los campos son obligatorios</p> }
          {/* { authForm && < ProtectedRouter authForm={ authForm } />} */}
          
      </form>
      </div>
      < Footer />
    </>
  )
}
