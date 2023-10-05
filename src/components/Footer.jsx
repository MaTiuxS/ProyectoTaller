
export const Footer = () => {
  return (
    <>        
        <footer className="site-footer">
            <div className="grid-footer contenedor">
                <div>
                    <h3>Categorías</h3>

                    <nav className="footer-menu">
                        <a href="#">Simple</a>
                        <a href="#">Duplex</a>
                        <a href="#">Matrimonial</a>
                    </nav>
                </div>

                <div>
                    <h3>Sobre Nosotros</h3>
                    <nav className="footer-menu">
                        <a href="#">Nuestra Historia</a>
                        <a href="#">Misión, Visión y Valores</a>
                        <a href="#">Política de Privacidad</a>
                        <a href="#">Términos del Servicio</a>
                    </nav>
                </div>

                <div>
                    <h3>Soporte</h3>
                    <nav className="footer-menu">
                        <a href="#">Preguntas Frecuentes</a>
                        <a href="#">Ayuda en línea</a>
                        <a href="#">Confianza y Seguridad</a>
                    </nav>
                </div>

            </div>

            <p className="copyright">Todos los derechos Reservados, HospedajeConfort</p>
        </footer>
    </>
  )
}
