import React from 'react';
import ReactDOM from 'react-dom/client';
import "./login.css";
// import {opciona} from "./image/opciona.png"

const welcome =
    (
        <div>
            <h1>Bienvenidx</h1>
            <p>Correo Electronico</p>
            <input type={'email'} />
            <p>Contraseña</p>
            <input type={'password'} />
            <button>Iniciar Sesion</button>
        </div>
    );

const logo = (props) => {
    return (
        <div>
            <img className='logo' src='./image/opciona' alt="BurguerQueen" />
        </div>
    )
};

export const login =
    ReactDOM.createRoot(document.getElementById('root'));
login.render(
    welcome,
    logo
);