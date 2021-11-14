import { useNavigate } from "react-router-dom";

function ListaNotas() {
    let listado = [
        { id: 1, titulo: "Nota 1", fecha: "2021-01-01" },
        { id: 2, titulo: "Nota 2", fecha: "2021-01-01" },
        { id: 3, titulo: "Nota 3", fecha: "2021-01-01" },
        { id: 4, titulo: "Nota 4", fecha: "2021-01-01" },
    ];

    let navigate = useNavigate();

    return (
        <div className="listado-notas">
            <h2>Notas:</h2>
            {listado.map((item) => {
                return (
                    <div
                        key={item.id}
                        className="item-nota"
                        onClick={() => navigate(`/notas/${item.id}`)}
                    >
                        <span className="item-titulo">{item.titulo}</span>
                        <span className="item-fecha">{item.fecha}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default ListaNotas;
