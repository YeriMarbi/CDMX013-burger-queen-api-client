import axios from 'axios'
import * as React from 'react';
import "./admin.css";
import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component'


export const Table = () => {
    const [users, setUsers] = useState([])
    const [edit, setEdit]=useState(false)

    const URL = 'https://637265f4025414c6370eb684.mockapi.io/api/bq/users'

    const editRow = (e) => {
        setEdit(e.target.dataset.id)
    }

    const getData = async () => {
        await axios.get(URL).then(result => {
            const data = result.data;
            // console.log(data);
            setUsers(data);
        }
        )
    };
    useEffect(() => {
        getData()
    }, []);
    const columns = [
        {
            name: 'Name',
            id: "name",
            selector: row => edit===row.id?<input value={row.name}></input> :row.name
        },
        {
            name: 'Area',
            id: "area",
            selector: row => row.area
        },
        {
            name: 'E-mail',
            id: "e-mail",
            selector: row => row.email
        },
        {
            name: 'Password',
            id: "password",
            selector: row => row.password
        },
        {
            name: 'Editar',
            id: "editbtn",
            selector: row => <button data-id={row.id} onClick={editRow}>editar</button>
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