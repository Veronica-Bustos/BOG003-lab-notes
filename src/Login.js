import { useState } from "react";
import { inciarSesion, iniciarSesionGoogle } from "./auth";
import "./Login.css";

function Login() {
    let [correo, setCorreo] = useState("");
    let [contraseña, setContraseña] = useState("");

    const inicio = (e) => {
        e.preventDefault();

        inciarSesion(correo, contraseña)
    };

    return (
        <div className="contenedor">
            <form action="" className="login-form" onSubmit={inicio}>
                <h2>Iniciar sesión</h2>
                <label htmlFor="">Correo:</label>
                <input
                    type="email"
                    name="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                />
                <label htmlFor="">Contraseña</label>
                <input
                    type="password"
                    name="password"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                />
                <button type="submit">Iniciar Sesión</button>
                <button type="button" onClick={iniciarSesionGoogle} >Iniciar con Google</button>
            </form>
        </div>
    );
}

export default Login;
