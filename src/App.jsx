import { useState } from 'react';
import './assets/app.css';
import { Home } from './components/Home';
import { Formulario } from './components/Formulario';

// import { Routes, Route } from 'react-router-dom'
// import { Enlace } from './components/Enlace';
// import { Nosotros } from './components/Nosotros';
// import { Contacto } from './components/Contacto';
// import { FormRegistro } from './components/FormRegistro';
// import { ProtectedRouter } from './components/ProtectedRouter';


export const App = () => {
  // const [user, setUser] = useState([]);
  return (
    <>
      {/* < Home /> */}
      {/* <Routes> 
        <Route path='/' element={ < Home/>} />
        <Route path='login' element={ < Formulario/>} />
        <Route path='nosotros' element={ < Nosotros/>} />
        <Route path='contacto' element={ < Contacto/>} />
        <Route path='registrarse' element={ < FormRegistro/>} />
        
        
       

      </Routes>  */}


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
