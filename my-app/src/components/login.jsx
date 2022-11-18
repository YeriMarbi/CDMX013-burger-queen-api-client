import React from 'react';
import "./login.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Logo from "./Logo"
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import { pink } from '@mui/material/colors';

const Myerror = ({ message }) => {
    console.log(message)
    return (
        <div className='error'>
            <p><ReportProblemRoundedIcon sx={{ color: pink[500] }}
                className='iconoError' />
                <b>Error: </b>{message}</p>
        </div>
    )
}


const Welcome = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorInput, setError] = useState(false);
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
                }else if(element.password === !password && element.email === !email){
                    console.log('hola');
                    setMessage(true)
                    setError(false)
                }
                else if (email === '' || password === '') {
                    setMessage(false)
                    setError(true)
                } else {
                    setMessage(true)

                }
            });
        })
    }

return <div className='welcome'>
    <section>
        <h1>Bienvenidx</h1>

        {errorInput &&
            <Myerror message={message ? 'Credenciales Invalidas' : 'Rellena los campos'} />
        }
        {/* { errorCredenciales &&
            <Myerror message='Credenciales Inválidas'/>
            } */}
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