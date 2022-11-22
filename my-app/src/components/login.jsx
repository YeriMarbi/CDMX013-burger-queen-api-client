import React from 'react';
import "./style/login.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Logo from "./elements/Logo"
import MessageError from "./elements/messageError"


const Welcome = () => {    
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [errorInput, setError] = useState(false);
    let [message, setMessage] = useState(false);

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
            setMessage(false)
            setError(true)
        } else {

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
                        setMessage(true)
                        setError(true)
                    }
                });
            })
    }
    }
    return <div className='welcome'>
        <section>
            <h1>Bienvenidx</h1>
            {errorInput &&
                <MessageError 
                message={message ? 'Credenciales Invalidas' : 'Rellena los campos'} 
                />
            }
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

        </section>
        <Logo />
    </div>
};

export default Welcome