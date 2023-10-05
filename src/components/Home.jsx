import '../assets/app.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { Mainns } from './Mainns';


export const Home = ({ user }) => {
  
  return (
    <>
      < Header /> 
      < Mainns />
    <section className="seccion contenedor">
      <h2>Hospedaje al mejor precio</h2>
      <div className="contenedor-anuncios">
        <div className="anuncio">
          <picture>
            <source srcset="#" type="image/webp" />
            <source srcset="#" type="image/jpeg" />
            <img loading="lazy" src="" alt="anuncio" />
          </picture>
        </div>
      </div>
      <div className="contenido-anuncio">
        <h3>Matrimonial</h3>
        <p>Cuarto muy amplio ideal para parejas que les gusta la comodidad, cama matrimonial con ducha individual y jacuzzy</p>
        <p className="precio">$3000</p>
        <a href="#" className="#">
          Ver Propiedad
        </a>
      </div>


    </section>
      < Footer />
    </>
  )
}
