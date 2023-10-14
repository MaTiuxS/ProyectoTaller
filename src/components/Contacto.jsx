import { Footer } from "./Footer"
import { Header } from "./Header"

export const Contacto = () => {
  return (
    <>
        < Header />  
        <main className="contenido-principal contenedor ">
            <h2 className="text-center">Contacto</h2>

            <form className="formulario">
                <fieldset>
                    <legend>Tus Datos</legend>
                    
                    <div className="campo">
                        <label htmlFor="nombre">Nombre: </label>
                        <input  id="nombre" type="text" placeholder="Tu Nombre" required />
                    </div>

                    <div className="campo">
                        <label htmlFor="asunto">Asunto:</label>
                        <input id="asunto" type="text" placeholder="Tu Asunto"  required />
                    </div>

                    <div className="campo">
                        <label htmlFor="email">E-mail:</label>
                        <input id="email" type="email" placeholder="Tu Email" />
                    </div>

                    <div className="campo">
                        <label htmlFor="tel">Teléfono:</label>
                        <input id="tel" type="tel" placeholder="Tu Teléfono" />
                    </div>

                    <div className="campo">
                        <label htmlFor="tel">Mensaje:</label>
                        <textarea rows="10" cols="20"></textarea>
                    </div>

                </fieldset>

                <fieldset>
                    <legend>Departamento</legend>

                    <div className="campo">
                        <label htmlFor="pais">Seleccione:</label>
                        <select id="pais">
                            <option value="">-- Seleccione -- </option>
                            <option value="LP">La Paz</option>
                            <option value="BN">Beni</option>
                            <option value="SC">Santa Cruz</option>
                            <option value="TJ">Tarija</option>
                            <option value="OR">Oruro</option>
                            <option value="CBBA">Cochabamba</option>
                        </select>

                    </div>

                </fieldset>

                <fieldset>
                    <legend>Información Extra</legend>
                    
                    <div className="campo">
                        <label htmlFor="cliente">Cliente Antiguo</label>
                        <input id="cliente" type="radio" name="tipo" value="cliente" />
                    </div>

                    <div className="campo">
                        <label htmlFor="proveedor">Cliente Nuevo</label>
                        <input id="proveedor" type="radio" name="tipo" value="proveedor" />
                    </div>

                    <div className="campo">
                        <label htmlFor="categoria">Categoría de Interés</label>
                        <input list="categorias" name="categorias" />
                        <datalist id="categorias">
                            <option value="Cocina" />
                            <option value="Exterior" />
                            <option value="Dormitorios" />
                            <option value="Garaje" />
                            <option value="Televisión" />
                        </datalist>
                    </div>

                </fieldset>

                <input className="btn" type="submit" value="Enviar Formulario" />
            </form>
            
        </main>

        < Footer />
    </>
  )
}
