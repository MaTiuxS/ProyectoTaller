
export const Mainns = () => {
  return (
    <>
        <main className="contenido-principal contenedor ">
            <h2 className="text-center">Nuestros Productos</h2>
            <div className="listado-productos">
                <div className="producto">   
                    <img src="./assets/img/categoria1.jpg" alt="Imagen Producto" />
                    <div className="texto-producto">
                        <h3>Matrimonial</h3>
                        <p>Baño privado, estacionamiento, entretenimiento, comidas incluidas.</p>
                        <p className="precio">350.00 BS</p>

                        <a className="btn" href="#">Reservar</a>
                    </div>
                </div> 
            </div>
        </main>
    </>
  )
}
