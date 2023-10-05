
export const Categorias = () => {
  return (
    <>
        <section className="contenedor categorias">
            <h2 className="text-center">Categorias de Hospedaje</h2>

            <div className="listado-categorias">
                <div className="categoria">
                    <img src="img/simple.webp" alt="Imagen Categoría" />
                    <a href="#">Simple</a>
                </div>

                <div className="categoria">
                    <img src="img/matrimonial.webp" alt="Imagen Categoría" />
                    <a href="#">Matrimonial</a>
                </div>

                <div className="categoria">
                    <img src="img/duplex.webp" alt="Imagen Categoría" />
                    <a href="#">Duplex</a>
                </div>
            </div>
        </section>
    </>
  )
}
