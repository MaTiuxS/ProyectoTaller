
export const FormRegistro = () => {
  return (
    <>
       <div className="form-register">
        <input type="text" className="button-registro" name="usuario" id="nombres" placeholder="Ingrese su Usuario"/>
        <input type="tel" className="button-registro" name="apellidos" id="apellidos" placeholder="Ingrese su Numero de celular"/>
        <input type="email" className="button-registro" name="correo" id="correo" placeholder="Ingrese su Correo"/>
        <input type="password" className="button-registro" name="correo" id="correo" placeholder="Ingrese su Contraseña"/>
        <p>Estoy de acuerdo con <a href="#">Terminos y Condiciones</a></p>
        <input class="botons" type="submit" value="Registrar"/>
       </div>
    </>
  )
}
