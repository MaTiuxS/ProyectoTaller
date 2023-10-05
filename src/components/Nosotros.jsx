import { Header } from './Header';
import { Footer } from './Footer';

export const Nosotros = () => {
  return (
    <>
        < Header />
        <section className="sobre-nosotros">
            <div className="contenedor sobre-nosotros-grid">
                <div className="texto-nosotros">
                    <h2>Sobre Nosotros</h2>
                    <p>Las mejores reservaciones al mejor precio posible, con una grandiosa experiencia para el amante de la aventura con comodidad y lujo.</p>
                </div>
            </div>
        </section>

        < Footer />
    </>
  )
}
