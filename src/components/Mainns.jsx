import pro1 from "../assets/img/pro1.webp";
import pro2 from "../assets/img/pro2.webp";
import pro3 from "../assets/img/pro3.webp";
import pro4 from "../assets/img/pro4.webp";
import pro5 from "../assets/img/producto5.jpg";
import pro6 from "../assets/img/producto6.jpg";
import '../assets/app.css';

export const Mainns = () => {
  return (
    <>
        <main className="contenido-principal contenedor ">
            <h2 className="text-center">Nuestros Productos</h2>
            
            <div className="listado-productos">
                <div className="producto">   
                    <img src={ pro1 } alt="Imagen Producto" />
                    <div className="texto-producto">
                        <h3>Matrimonial</h3>
                        <p>Baño privado, estacionamiento, entretenimiento, comidas incluidas.</p>
                        <p className="precio">350.00 BS</p>

                        <a className="btn" href="#">Reservar</a>
                    </div>
                </div> 
            

                <div className="producto producto-grid2">
                    <img src= { pro2 } alt="Imagen Producto" />

                    <div className="texto-producto">
                        <h3>Matrimonial Grande</h3>
                        <p>Con mucho espacio, baño privado, con muebles incluidos</p>
                        <p className="precio">500.00 BS</p>

                        <a className="btn" href="#">Reservar</a>
                    </div>
                </div>

                <div className="producto producto-grid3">
                    <img src={ pro3 } alt="Imagen Producto" />

                    <div className="texto-producto">
                        <h3>Duplex Simple</h3>
                        <p>Ideal para viajeros con ducha conpartida, entretenimiento.</p>
                        <p className="precio">800.00 BS</p>

                        <a className="btn" href="#">Reservar</a>
                    </div>
                </div>

                <div className="producto">
                    <img src={ pro4 } alt="Imagen Producto" />

                    <div className="texto-producto">
                        <h3>Simple</h3>
                        <p>Para las personas que les gusta los viajes solos</p>
                        <p className="precio">150 BS</p>

                        <a className="btn" href="#">Reservar</a>
                    </div>
                </div> 

                <div className="producto">
                    <img src={ pro5 } alt="Imagen Producto" />

                    <div className="texto-producto">
                        <h3>Departamento</h3>
                        <p>Hermoso departamento listo para ser ocupado</p>
                        <p className="precio">1500.00 BS</p>

                        <a className="btn" href="#">Reservar</a>
                    </div> 
                </div> 

                <div className="producto">
                    <img src={ pro6 } alt="Imagen Producto" />

                    <div className="texto-producto">
                        <h3>Departamento</h3>
                        <p>Con muebles incluidos, baño privado, sala, comedor</p>
                        <p className="precio">1000.00 BS</p>

                        <a className="btn" href="#">Reservar</a>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}
