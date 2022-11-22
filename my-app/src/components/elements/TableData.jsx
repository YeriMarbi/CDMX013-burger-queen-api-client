/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
import * as React from 'react';
import "../style/admin.css";
import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component'

export const TableProducts = () => {
    let [products, setProducts] = useState([]);
    let [edit, setEdit] = useState(false);
    let [selectedProduct, setSelectedProduct] = useState({
        producto: '',
        precio: '',
    })

    const URL = 'https://637ba5d36f4024eac2148d5b.mockapi.io/Productos'

    const editRow = (row) => {
        setSelectedProduct(row)
        setEdit(row.id)
    }
    const saveData = (row) => {
        console.log('row', row);
        setEdit('')
        // putData(selectedProduct)
    }
    // const handleProduct = (e) => {
    //     setProduct(e.target.dataset.id)
    // }

    const handleInputChange = (e) => {
        const producto = e.target.name
        // const value = e.target.value
        const { precio, value } = e.target
        // const { precio, valuePrecio } = e.target

        setSelectedProduct((prevState) => ({ ...prevState, [producto]: value }))
        setSelectedProduct((prevState) => ({ ...prevState, [precio]: value }))
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

    // useEffect(() => console.log(selectedProduct), [selectedProduct])

    const columns = [

        {
            name: 'PRODUCTO',
            id: "producto",
            selector: row => edit === row.id ? <input
                name="producto"
                value={selectedProduct.producto}
                onChange={handleInputChange}>
            </input> : row.producto
        },
        {
            name: 'PRECIO',
            id: "precio",
            selector: row => edit === row.id ? <input
                name="precio"
                value={selectedProduct.precio}
                onChange={handleInputChange}>
            </input> : '$ ' + row.precio
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
