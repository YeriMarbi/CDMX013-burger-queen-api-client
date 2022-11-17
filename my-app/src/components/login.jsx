import React from 'react';
import "./login.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Logo from "./Logo"


const Welcome = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorInput, changeError] = useState(null);
    const [errorCredenciales, changeCredenciales] = useState(null);
    // let mensaje = ''

    const navigate = useNavigate();
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
   
    const handleApi = (e) => {
        e.preventDefault()

        if (email === '' || password === '') {
            changeError(true)
            errorInput(true)
        } else {

            console.log({ email, password });
            axios.get('https://637265f4025414c6370eb684.mockapi.io/api/bq/users').then(result => {
                const data = result.data;
                data.forEach(element => {

                    if (element.password === password && element.email === email) {

                        if (element.area === 'Administrador') {
                            navigate('admin')
                        }
                        if (element.area === 'Cocina') {
                            console.log('Cocina');
                        }
                        if (element.area === 'Mesero') {
                            console.log('Mesas');
                        }
                    } else {
                       
                        changeCredenciales(true)
                        errorCredenciales(true)
                        // errorInput(false)
                        // changeError(false)
                    }
                });
            })
        }
    }
    return <div className='welcome'>
        <section>
            <h1>Bienvenidx</h1>
            <p>Correo Electrónico</p>
            <input
                value={email}
                onChange={handleEmail}
                type={'email'} />
            <p>Contraseña</p>
            <input
                value={password}
                onChange={handlePassword}
                type={'password'} />
            <br />
            <button onClick={handleApi} className='buttonLogin'>Iniciar Sesión</button>
            <br />
            {errorInput && <div className='error'>
                <p><b>Error: </b> Rellena los campos</p>
            </div>}
            {errorCredenciales && <div className='error'>
                <p><b>Error: </b> Credenciales Invalidas</p>
            </div>}
        </section>
        <Logo />
    </div>
};

// const Error = ({ mensaje }) => {
//     return (
//         <div>
//             {mensaje}
//         </div>
//     )
// }

export default Welcome