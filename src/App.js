import NotasApp from "./NotasApp";
import Login from "./Login";
import Registro from "./Registro";
import { Routes, Route, Link } from "react-router-dom";

//componenete de react definido como funcion-(ruteo)

function App() {
    return (
        <Routes>
            <Route path="/" element={<NotasApp />} />
            <Route path="login" element={<Login />} />
            <Route path="registro" element={<Registro />} />
        </Routes>
    );
}

export default App;
