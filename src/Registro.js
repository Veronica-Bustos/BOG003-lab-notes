import "./Registro.css";

function Registro() {
    return (
        <div className="contenedor">
            <form action="" className="register-form">
                <h2>Registro</h2>
                <label htmlFor="">Nombres:</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Apellidos:</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Correo:</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Contraseña</label>
                <input type="password" name="" id="" />
                <label htmlFor="">Confirmar Contraseña:</label>
                <input type="password" name="" id="" />
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
}

export default Registro;
