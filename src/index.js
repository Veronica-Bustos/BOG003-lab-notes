import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./css/index.css";
import App from "./App";
import Login from "./components/Login";
import Registro from "./components/Registro";
import { Routes, Route } from "react-router-dom";
// import reportWebVitals from "./reportWebVitals";
import { crearNota, eliminarNota, listarNotas } from "./api/notas";

(async () => {
    // console.log(await crearNota("Test", "Test"));
    // console.log(await listarNotas());
    let lista = await listarNotas();
    if (lista.length > 0) {
        console.log(await eliminarNota(lista[0].id));
    }
})();

//punto de entrada- renderiza como etiqueta html
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="//*" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
