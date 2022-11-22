import axios from 'axios'
import * as React from 'react';
import "./style/admin.css";
import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component'

export const Table = () => {
    let [users, setUsers] = useState([]);
    let [selectedUser, setSelectedUser] = useState({
        name: '',
        area: '',
        email: '',
        password: '',
    })
    let [edit, setEdit] = useState('');
    // let [delete, setDelete] = useState(false);

    const URL = 'https://637265f4025414c6370eb684.mockapi.io/api/bq/users'

    const editRow = (row) => {
        setSelectedUser(row)
        setEdit(row.id)
    }
    const saveData = (row) => {
        console.log('row', row);
        setEdit('')
    }
    // const deleteRow = (row) => {
    //     setSelectedUser(row)
    //     setDelete(row.id)
    // }

    // const handleName = (e) => {
    //     setSelectedUser((prevState) => ({ ...prevState, name: e.target.value }))
    // }

    const handleInputChange = (e) => {
        // const name = e.target.name
        // const value = e.target.value
        const { name, value, area, email, password } = e.target
        // const { area, valueArea } = e.target
        // const { email, valueEmail } = e.target
        // const { password, valuePassword } = e.target

        setSelectedUser((prevState) => ({ ...prevState, [name]: value }))
        setSelectedUser((prevState) => ({ ...prevState, [area]: value }))
        setSelectedUser((prevState) => ({ ...prevState, [email]: value }))
        setSelectedUser((prevState) => ({ ...prevState, [password]: value}))
    }

    const getData = () => {
        axios.get(URL).then(result => {
            const data = result.data;
            // console.log(data);
            setUsers(data);
        })
    };
    // const getData =  async () => {
    //     const result = await axios.get(URL)
    //     const data = result.data;
    //     setUsers(data);
    // };
    useEffect(() => {
        getData()
    }, []);

    // useEffect(() => console.log(selectedUser), [selectedUser])

    const columns = [
        {
            name: 'NOMBRE',
            id: "name",
            selector: row => edit === row.id ? <input
                name="name"
                value={selectedUser.name}
                // value= {row.name} 
                onChange={handleInputChange}>
            </input> : row.name
        },
        {
            name: 'AREA',
            id: "area",
            selector: row => edit === row.id ?
                <select
                    name="area"
                    onChange={handleInputChange}>
                    <option>Cocina</option>
                    <option>Administrador</option>
                    <option>Meserx</option>
                </select>
                // value= {row.area}  
                // >
                // </input>
                : row.area
        },
        {
            name: 'CORREO',
            id: "e-mail",
            selector: row => edit === row.id ? <input
                // value= {area} 
                name="email"
                value={selectedUser.email}
                onChange={handleInputChange}
            // value={row.email}  
            ></input> : row.email
        },
        {
            name: 'CONTRASEÑA',
            id: "password",
            selector: row => edit === row.id ? <input
                // value= {area} 
                name="password"
                value={selectedUser.password}
                onChange={handleInputChange}
            >
            </input> : row.password
        },
        {
            name: '',
            id: "editbtn",
            selector: row => edit === row.id ?
                <button onClick={() => saveData(row)}>OK</button>
                : <button
                    onClick={() => editRow(row)}
                >editar</button> 
        },
        {
            name: '',
            id: "deletebtn",
            selector: row => <button
            // onClick={() => deleteRow(row)}
            >Eliminar</button>
        },
    ]
    return (
        <div className='Table'>
            <DataTable
                columns={columns}
                data={users}
            />
        </div>
    )
}
