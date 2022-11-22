import axios from 'axios'
import * as React from 'react';
import "./style/admin.css";
import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component'


export const Table = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({
        name: '',
        area: '',
        email: '',
        password: '',
    })
    const [edit, setEdit] = useState(false);


    const URL = 'https://637265f4025414c6370eb684.mockapi.io/api/bq/users'

    const editRow = (row) => {
        setSelectedUser(row)
        setEdit(row.id)
    }

    const handleName = (e) => {
        setSelectedUser((prevState) => ({ ...prevState, name: e.target.value }))
    }

    const handleInputChange = (e) => {
        // const name = e.target.name
        // const value = e.target.value
        const { name, value } = e.target
        const { area, valueArea } = e.target
        const { email, valueEmail } = e.target
        const { password, valuePassword } = e.target

        setSelectedUser((prevState) => ({ ...prevState, [name]: value }))
        setSelectedUser((prevState) => ({ ...prevState, [area]: valueArea }))
        setSelectedUser((prevState) => ({ ...prevState, [email]: valueEmail }))
        setSelectedUser((prevState) => ({ ...prevState, [password]: valuePassword }))
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

    useEffect(() => console.log(selectedUser), [selectedUser])


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
            selector: row => <button
                onClick={() => editRow(row)}
            >editar</button>
        },
        {
            name: '',
            id: "deletebtn",
            selector: row => <button
                data-id={row.id}
            // onClick={}
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
export default Table