import axios from "axios";
import { useState } from "react";
import { Table } from './AdminTable';


export const InputEmployee = () => {

    // let [datos, setDatos] = useState({
    //     name: '',
    //     area: '',
    //     email: '',
    //     password: ''
    // })

    let [name, setName] = useState('');
    let [area, setArea] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleArea = (e) => {
        setArea(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    // const handleDatos = (e) => {
    //     const { name, area, email, password, value } = e.target
    //     setDatos((prevState) => ({ ...prevState, [email]: value }))
    //     setDatos((prevState) => ({ ...prevState, [name]: value }))
    //     setDatos((prevState) => ({ ...prevState, [area]: value }))
    //     setDatos((prevState) => ({ ...prevState, [password]: value }))
    // }


    const handleApi = () => {
        const prueba = {
            name: 'diana',
        }
        axios.post('https://637265f4025414c6370eb684.mockapi.io/api/bq/users', prueba).then(result => {
            console.log(result)
        })
    }

    return (
        <section className='tabEmpl'>
            <div className='employee'>
                <input value={name} onChange={handleName} placeholder='Nombre' className='inputAdm'></input>
                <input value={area} onChange={handleArea} placeholder='Área' className='inputAdm'></input>
                <input value={email} onChange={handleEmail} placeholder='Correo' className='inputAdm'></input>
                <input value={password} onChange={handlePassword} placeholder='Contraseña' className='inputAdm'></input>
                <button id="addEmployee" onClick={handleApi}>AGREGAR</button>
            </div>
            <Table></Table>
            {/* <TableProducts></TableProducts> */}
        </section>
    )
}

