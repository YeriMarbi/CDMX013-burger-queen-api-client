import axios from 'axios'
import * as React from 'react';
import "./style/admin.css";
import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import Modal from './elements/Modal.jsx'

export const Table = () => {
    const [modal, setModal] = useState(false);
    let [users, setUsers] = useState([]);
    let [selectedUser, setSelectedUser] = useState({
        name: '',
        area: '',
        email: '',
        password: '',
    })
    let [edit, setEdit] = useState('');
    const [deleteUser, setDeleteUser] = useState(null)
    // let [delete, setDelete] = useState(false);

    const URL = 'https://637265f4025414c6370eb684.mockapi.io/api/bq/users'

    const editRow = (row) => {
        setSelectedUser(row)
        setEdit(row.id)
    }
    const saveData = (row) => {
        // console.log('row', row);
        setEdit('')
        editData(selectedUser)
    }

    const handleInputChange = (e) => {

        const { name, value, area, email, password } = e.target

        setSelectedUser((prevState) => ({ ...prevState, [name]: value }))
        setSelectedUser((prevState) => ({ ...prevState, [area]: value }))
        setSelectedUser((prevState) => ({ ...prevState, [email]: value }))
        setSelectedUser((prevState) => ({ ...prevState, [password]: value }))
    }

    // const getData = () => {
    //     axios.get(URL).then(result => {
    //         const data = result.data;
    //         // console.log(data);
    //         setUsers(data);
    //     })
    // };
    const editData = async (datafinal) => {
        await axios.put(`https://637265f4025414c6370eb684.mockapi.io/api/bq/users/${datafinal.id}`, datafinal)
            .then((result) => {
                console.log(result.data)
                console.log(setSelectedUser(result.data), 'Acá')
            })
        //    const editData=result.editData;
        //         setSelectedUser(editData)
    }

    const deleteData = () => {
        axios.delete(`https://637265f4025414c6370eb684.mockapi.io/api/bq/users/${deleteUser.id}`, deleteUser)
        setModal(false)
        // const editData=result.editData;
        //     setSelectedUser(editData)
    }

    //  useEffect(() => console.log(selectedUser), [selectedUser])


    const getData = async () => {
        const result = await axios.get(URL)
        const data = result.data;
        setUsers(data);
    };

    useEffect(() => {
        getData()
    }, []);

    const showModal = (user) => {
        console.log(user);
        setModal(true);
        setDeleteUser(user)
    };

    const closeModal = () => {
        setModal(false);
    }
    const columns = [
        {
            name: 'NOMBRE',
            id: "name",
            selector: row => edit === row.id ? <input name="name" value={selectedUser.name} onChange={handleInputChange}>
            </input> : row.name
        },
        {
            name: 'AREA',
            id: "area",
            selector: row => edit === row.id ? <select name="area" onChange={handleInputChange}>
                <option>Cocina</option>
                <option>Administrador</option>
                <option>Meserx</option>
            </select> : row.area
        },
        {
            name: 'CORREO',
            id: "e-mail",
            selector: row => edit === row.id ? <input name="email" value={selectedUser.email} onChange={handleInputChange}>
            </input> : row.email
        },
        {
            name: 'CONTRASEÑA',
            id: "password",
            selector: row => edit === row.id ? <input name="password" value={selectedUser.password} onChange={handleInputChange}>
            </input> : row.password
        },
        {
            name: '',
            id: "editbtn",
            selector: row => edit === row.id ? <SaveIcon onClick={() => saveData(row)}>OK</SaveIcon>
                : <EditIcon onClick={() => editRow(row)} >editar</EditIcon>
        },
        {
            name: '',
            id: "deletebtn",
            selector: row => <DeleteIcon onClick={()=>showModal(row)}
            >Eliminar</DeleteIcon>
        },
    ]
    return (
        <div className='Table'>
            <DataTable
                columns={columns}
                data={users}
            />
            {modal && <Modal
                funBorrar={deleteData}
                funCerrar={closeModal} />}
        </div>
    )
}

export default Table
