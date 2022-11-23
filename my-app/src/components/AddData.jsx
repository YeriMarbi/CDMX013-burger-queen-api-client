import axios from "axios";
import { useState, useEffect  } from "react";
import { Table } from './AdminTable';


export const InputEmployee = () => {

    let [datos, setDatos] = useState({
        name: '',
        area: '',
        email: '',
        password: ''
    })

    // let [name, setName] = useState('');
    // let [area, setArea] = useState('');
    // let [email, setEmail] = useState('');
    // let [password, setPassword] = useState('');

    // const handleName = (e) => {
    //     setName(e.target.value)
    // }

    // const handleArea = (e) => {
    //     setArea(e.target.value)
    // }

    // const handleEmail = (e) => {
    //     setEmail(e.target.value)
    // }

    // const handlePassword = (e) => {
    //     setPassword(e.target.value)
    // }

    const handleDatos = (e) => {
        const { name, area, email, password, value } = e.target
        setDatos((prevState) => ({ ...prevState, [email]: value }))
        setDatos((prevState) => ({ ...prevState, [name]: value }))
        setDatos((prevState) => ({ ...prevState, [area]: value }))
        setDatos((prevState) => ({ ...prevState, [password]: value }))
    }


    const handleApi = () => {
        const prueba = {
            name: datos.name,
            area:datos.area,
            email:datos.email,
            password:datos.password
        }
        axios.post('https://637265f4025414c6370eb684.mockapi.io/api/bq/users', prueba)
        // .then((data) => {
        //     setDatos(data)});
        // .then(result => {
        //     console.log(result.data)
        // })
    }
    // useEffect(() => {
    //     handleApi()
    // }, []);
    
    return (
        <section className='tabEmpl'>
            <div className='employee'>
                <input name="name" value={datos.name} onChange={handleDatos} placeholder='Nombre' className='inputAdm'></input>
                <input name="area"value={datos.area} onChange={handleDatos} placeholder='Área' className='inputAdm'></input>
                <input name="email"value={datos.email} onChange={handleDatos} placeholder='Correo' className='inputAdm'></input>
                <input name="password"value={datos.password} onChange={handleDatos} placeholder='Contraseña' className='inputAdm'></input>
                <button id="addEmployee" onClick={handleApi}>AGREGAR</button>
            </div>
            <Table></Table>
            {/* <TableProducts></TableProducts> */}
        </section>
    )
}


