
import { Footer } from './Footer';
import { Header } from './Header';
import { Mainns } from './Mainns';
import  simple  from '../assets/img/simple.webp';
import  matrimonial  from '../assets/img/matrimonial.webp';
import  duplex  from '../assets/img/duplex.webp';
import { NosotrosHome } from './NosotrosHome';


export const Home = ({ user }) => {
  
  return (
    <>
      < Header /> 
      <div className="hero"></div>
      
      <section className="seccion contenedor">
        <h2 className="text-center">Categorias de Hospedaje</h2>

        <div className="listado-categorias">
            <div className="categoria">
                <img src={ simple } alt="Imagen Categoría" />
                <a href="#">Simple</a>
            </div>

            <div className="categoria">
                <img src={ matrimonial } alt="Imagen Categoría" />
                <a href="#">Matrimonial</a>
            </div>

            <div className="categoria">
                <img src={ duplex } alt="Imagen Categoría" />
                <a href="#">Duplex</a>
            </div>
        </div>


      </section>
      < NosotrosHome />
      < Mainns />
      < Footer />
    </>
  )
}
