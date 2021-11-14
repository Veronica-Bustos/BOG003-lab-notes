import "../css/Registro.css";
import { registrarUsusario } from "../api/auth";
import { useState } from "react";

// Usestate devuelve el estado y la funcion para cambiar el estado
function Registro() {
    let [state, setState] = useState({
        nombre: "",
        correo: "",
        password: "",
        confirm_password: "",
    });

    const registrarse = (e) => {
        e.preventDefault();

        registrarUsusario(state.nombre, state.correo, state.password);
        
    };

    return (
        <div className="contenedor">
            <form action="" className="register-form" onSubmit={registrarse}>
                <h2>Registro</h2>
                <label htmlFor="">Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={state.nombre}
                    onChange={(e) =>
                        setState({ ...state, nombre: e.target.value })
                    }
                />
                <label htmlFor="">Correo:</label>
                <input
                    type="text"
                    name="correo"
                    value={state.correo}
                    // se dispara cuando el valor del input cambia
                    onChange={(e) =>
                        setState({ ...state, correo: e.target.value })
                    }
                />
                <label htmlFor="">Contraseña</label>
                <input
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={(e) =>
                        setState({ ...state, password: e.target.value })
                    }
                />
                <label htmlFor="">Confirmar Contraseña:</label>
                <input
                    type="password"
                    name="confirm_password"
                    value={state.confirm_password}
                    onChange={(e) =>
                        setState({ ...state, confirm_password: e.target.value })
                    }
                />
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
}

export default Registro;
