/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
import * as React from 'react';
import "../style/admin.css";
import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component'


export let TableComponent = (path,) => {
    let [users, setUsers] = useState([])
    let [edit, setEdit] = useState(false)

    let URL = path

    const editRow = (e) => {
        setEdit(e.target.dataset.id)
    }

    // const handleValueTable = (e) => {
    //     setEdit(e.target.dataset.id)
    // }

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
            selector: row => edit === row.id ? <input value={row.name} ></input> : row.name
        },
        {
            name: 'AREA',
            id: "area",
            selector: row => row.area
        },
        {
            name: 'CORREO',
            id: "e-mail",
            selector: row => row.email
        },
        {
            name: 'CONTRASEÑA',
            id: "password",
            selector: row => row.password
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
//----------------------------------------------Products BQ-------------------------------------

export const TableProducts = () => {
    let [products, setProducts] = useState([]);
    let [edit, setEdit] = useState(false);
    let [selectedProduct, setSelectedProduct] = useState({
        Producto: '',
        Precio: '',
    })

    const URL = 'https://637ba5d36f4024eac2148d5b.mockapi.io/Productos'

    const editRow = (row) => {
        setSelectedProduct(row)
        setEdit(row.id)
    }

    // const handleProduct = (e) => {
    //     setProduct(e.target.dataset.id)
    // }

    const handleInputChange = (e) => {
        // const name = e.target.name
        // const value = e.target.value
        const { Producto, value } = e.target
        const { Precio, valuePrecio } = e.target

        setSelectedProduct((prevState) => ({ ...prevState, [Producto]: value }))
        setSelectedProduct((prevState) => ({ ...prevState, [Precio]: valuePrecio }))
    }

    const getData = () => {
        axios.get(URL).then(result => {
            const data = result.data;
            setProducts(data);
        })
    };

    useEffect(() => {
        getData()
    }, []);

useEffect(() => console.log(selectedProduct), [selectedProduct])

    const columns = [

        {
            name: 'PRODUCTO',
            id: "producto",
            selector: row => edit === row.id ? <input
            name="producto"
            value={selectedProduct.Producto}
            onChange={handleInputChange}>
            </input> : row.Producto
        },
        {
            name: 'PRECIO',
            id: "precio",
            selector: row => edit === row.id ? <input
            name="precio"
            value={selectedProduct.Precio}
            onChange={handleInputChange}>
            </input> : '$ ' + row.Precio
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
                // data-id={row.id}
                // onClick={editRow}
            >Eliminar</button>
        },
    ]
    return (
        <div className='Table'>
            <DataTable
                columns={columns}
                data={products}
            />
        </div>
    )
}

export default {
    TableProducts
}
