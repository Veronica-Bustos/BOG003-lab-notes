import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./Login";
import Registro from "./Registro";
import { Routes, Route, Link } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDwk1INOPdwde_tNWNBzwhzrW5X-yYrI6Y",
    authDomain: "notas-app-ad942.firebaseapp.com",
    projectId: "notas-app-ad942",
    storageBucket: "notas-app-ad942.appspot.com",
    messagingSenderId: "166001730149",
    appId: "1:166001730149:web:b3775ab37f5f71bdec9c8c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//punto de entrada- renderiza como etiqueta html
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
