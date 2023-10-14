import { Header } from './Header';
import { Footer } from './Footer';

import  nosotros  from '../assets/img/nosotros.jpg';


export const Nosotros = () => {
  return (
    <>
        < Header />
        <main className="contenido-principal contenedor ">
        <h2 className="text-center">Sobre Nosotros</h2>
        
        <div className="contenido-nosotros">
            <div className="imagen">
                <img src={ nosotros } alt="Imagen nosotros" />
            </div>
            <div className="informacion-nosotros">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores debitis quis consectetur animi beatae mollitia itaque ea dicta eos. Totam repellat temporibus autem aspernatur necessitatibus perspiciatis ea iste laborum ipsum!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores debitis quis consectetur animi beatae mollitia itaque ea dicta eos. Totam repellat temporibus autem aspernatur necessitatibus perspiciatis ea iste laborum ipsum!</p>
            </div>
        </div>
        </main>

        < Footer />
    </>
  )
}
