import { Home } from "./Home"
import { Formulario } from './Formulario'
import { NavLink } from "react-router-dom"


export const Header = () => {
  
  
  return (
    <>
    <header>
        <h1 className="nombre-sitio">Reservas online <span> Hospedaje </span></h1>
    </header>
    
    <div className="contenedor-navegacion">
        <nav className="nav-principal contenedor">
            <a href="/">Inicio</a>
            <NavLink to="/nosotros">Nosotros</NavLink>
            <a href="#">Hospedaje</a>
            <a href="#">Blog</a>
            <a href="#">Galería</a>
            
            <NavLink to="/contacto">Contacto</NavLink>
            <NavLink to="/login">Iniciar Sesion</NavLink>
        </nav>
    </div>
    </>
  )
}
