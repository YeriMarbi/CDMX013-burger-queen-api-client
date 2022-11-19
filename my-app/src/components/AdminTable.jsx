import axios from 'axios'
import * as React from 'react';
import "./style/admin.css";
import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component'


export const Table = () => {
    const [users, setUsers] = useState([]);
    const [edit, setEdit]=useState(false);
    let [name, setName]=useState('');
   

    const URL = 'https://637265f4025414c6370eb684.mockapi.io/api/bq/users'

    const editRow = (e) => {
        setEdit(e.target.dataset.id)
    }

    const handleName = (e) => {
        setName(e.target.dataset.id)
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
            name: 'NOMBRE',
            id: "name",
            selector: row => edit===row.id ? <input value= {row.name} 
            // value= {row.name} 
            onChange={handleName} ></input> :row.name
        },
        {
            name: 'AREA',
            id: "area",
            selector: row => edit===row.id ? <input 
            // value= {area} 
            value= {row.area}  ></input> :row.area
        },
        {
            name: 'CORREO',
            id: "e-mail",
            selector: row => edit===row.id ? <input 
            // value= {area} 
            value= {row.email}  ></input> :row.email
        },
        {
            name: 'CONTRASEÑA',
            id: "password",
            selector: row => edit===row.id ? <input 
            // value= {area} 
            value= {row.password}  ></input> :row.password
        },
        {
            name: '',
            id: "editbtn",
            selector: row => <button 
            data-id={row.id} 
            onClick={editRow}

            >editar</button>
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