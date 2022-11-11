import React from 'react';
import ReactDOM from 'react-dom/client';
import "./login.css";
// import {opciona} from "./image/opciona.png"

const Welcome = () => {
    return <div className='welcome'>
            <h1>Bienvenidx</h1>
            <p>Correo Electronico</p>
            <input type={'email'} />
            <p>Contraseña</p>
            <input type={'password'} /> <br></br>
            <button className='buttonLogin'>Iniciar Sesion</button>
        </div>
};

const Logo = () => {
    return <div className='logo'>
        </div>
};

export const login =ReactDOM.createRoot(document.getElementById('root'));
login.render(<div className='login'>
    <Welcome></Welcome>
    <Logo></Logo>
</div>);