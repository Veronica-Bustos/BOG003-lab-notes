import "./NotasApp.css";
import ListaNotas from "./ListaNotas";
import DetalleNota from "./DetalleNota";

//componenete de react definido como funcion-(ruteo)

function App() {
    return (
        <div className="contenedor-notas">
            <div className="barra-superior">
                <h1>VeraNote</h1>
            </div>
            <ListaNotas />
            <DetalleNota />
        </div>
    );
}

export default App;
