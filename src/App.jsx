import { useState } from 'react';
import './assets/app.css';
import { Home } from './components/Home';
import { Formulario } from './components/Formulario';

import { Routes, Route } from 'react-router-dom'
import { Enlace } from './components/Enlace';
import { Nosotros } from './components/Nosotros';


export const App = () => {
  // const [user, setUser] = useState([]);
  return (
    <>
      <Routes> 
        <Route path='/' element={ < Home/>} />
        <Route path='login' element={ < Formulario/>} />
        <Route path='nosotros' element={ < Nosotros/>} />
        {/* <Route path='/*' element={ < Navigate to="/" />} /> */}
      </Routes> 
      {/* < Home /> */}
      {/* <div className='contenedor'>
        {
          !user.length > 0
            ? < Formulario setUser={setUser} />
            :  < Home user={user}/>
        }
      </div> */}
    </>
  )
}
