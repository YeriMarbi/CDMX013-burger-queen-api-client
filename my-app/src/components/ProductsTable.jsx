import { useEffect, useState } from "react"
import axios from "axios"
import "./style/productsTable.css"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const ProductsTable = () => {
    const [products, setProducts] = useState([])

    const URL = 'https://637265f4025414c6370eb684.mockapi.io/api/bq/Products'

    const getProductsData = async () => {
        const result = await axios.get(URL)
        const data = result.data;
        setProducts(data);

    };

    useEffect(() => {
        getProductsData()
    })
    return (
        <div className="productsTable">
            <h3>Productos</h3>
            <table id='products'>
                <tbody>
                    <tr>
                        <th className="columna">PRODUCTO</th>
                        <th className="columna">PRECIO</th>
                        <th className="columna">MENU</th>
                        <th className="botones"></th>
                        <th className="botones"></th>
                    </tr>
                    {products.map((item, i) =>
                        <tr key={i}>
                            <td>{item.Producto}</td>
                            <td>{item.Precio}</td>
                            <td>{item.horario}</td>
                            <td><EditIcon>Editar</EditIcon></td>
                            <td><DeleteIcon>Borrar</DeleteIcon></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}