import "./css/App.css";
import ListaNotas from "./components/ListaNotas";
import DetalleNota from "./components/DetalleNota";
import { Route, Routes } from "react-router";

//componenete de react definido como funcion-(ruteo)

function App() {
    return (
        <div className="contenedor-notas">
            <div className="barra-superior">
                <h1>VeraNote</h1>
            </div>
            <ListaNotas />
            <Routes>
                <Route exact path="notas/1" element={<DetalleNota />} />
            </Routes>
        </div>
    );
}

export default App;
