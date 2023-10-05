import { useState } from 'react';

import { FormRegistro } from "./FormRegistro";

// Importacion header y footer
import { Header } from './Header';
import { Footer } from './Footer';


export function Formulario({ setUser }) {
  // const [count, setCount] = useState(0)
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (nombre === '' || password === '') {
      setError(true);
      return;
    }
    setUser([nombre]);
  }

  return (
    <>
      < Header />
      <div className='form-box'>
        <fieldset>
          <legend className='text-center'>Iniciar Sesion</legend>        
          <form 
            className='formulario' 
            onSubmit={ handleSubmit }
          >
            <div>
              <input 
                type="text" 
                placeholder="Correo Electronico"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
              />
            </div>
            <div>
              <input 
                type="password" 
                placeholder="Contrasenia"
                // value={password}
                onChange={ e => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button className='btn'>Ingresar</button>
            </div>
            <div>
              <a href="#" onClick={ e => {
                <FormRegistro />
              } }>Registrase</a>

            </div>
          </form>
          { error && <p>Todos los campos son obligatorios</p> }
        </fieldset>      
      </div>
      < Footer />
    </>
  )
}
