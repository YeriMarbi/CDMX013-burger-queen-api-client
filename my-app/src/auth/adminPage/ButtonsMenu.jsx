import React from 'react';
import "./admin.css";
import Logo from '../elements/Logo.jsx'
import { useNavigate} from 'react-router-dom';

export const ButtonsMenu = () => {
    const navigate = useNavigate();
    const logOut = () => {
        navigate('/')
    }

    const employeeButton = () => {
        navigate('employees')
    }

    const productsButton = () => {
        navigate('products')
    }


        return (
            <section className='menuBtn'>
                <button id="emplBtn" onClick={employeeButton} >EMPLEADOS</button><br></br>
                <button id="prodBtn" onClick={productsButton}>PRODUCTOS</button>
                <Logo />
                <button id="exit" onClick={logOut}>SALIR</button>
            </section>
        )
    }