import React from 'react';
import "./admin.css";
import Logo from '../elements/Logo.jsx'
import { useNavigate } from 'react-router-dom';

export const ButtonsMenu = () => {
    const navigate = useNavigate();
    const logOut = () => {
        navigate('/')
    }

    return (
        <section className='menuBtn'>
            <button id="emplBtn">EMPLEADOS</button><br></br>
            <button id="prodBtn">PRODUCTOS</button>
            <Logo />
            <button id="exit" onClick={logOut}>SALIR</button>
        </section>
    )
}