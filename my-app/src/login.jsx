import React from 'react';
import ReactDOM from 'react-dom/client';
import "./login.css";

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
        <img src="https://user-images.githubusercontent.com/101679628/201446330-4a95197e-4311-4ec2-88d2-401155646188.png" alt="BurgerQueenLogo" />
        </div>
};

export const login =ReactDOM.createRoot(document.getElementById('root'));
login.render(<div className='login'>
    <Welcome></Welcome>
    <Logo></Logo>
</div>);