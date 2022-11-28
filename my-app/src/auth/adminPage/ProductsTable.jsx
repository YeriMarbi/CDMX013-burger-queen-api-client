import { useEffect, useState } from "react"
import axios from "axios"
import "./productsTable.css"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const ProductsTable = () => {
    const [products, setProducts] = useState([])
    
    const URL = 'https://637265f4025414c6370eb684.mockapi.io/api/bq/Products'

    const [data, setData] = useState({
        product: '',
        price: '',
        menu: '',
    })

    const handleInputChange = (e) => {

        const { product, value, price, menu } = e.target

        setData((prevState) => ({ ...prevState, [product]: value }))
        setData((prevState) => ({ ...prevState, [price]: value }))
        setData((prevState) => ({ ...prevState, [menu]: value }))
    }

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
            <div className='employee'>
                <input name="product" value={data.product} onChange={handleInputChange} placeholder='Producto' className='inputAdm'></input>
                <input name="price" value={data.price} onChange={handleInputChange} placeholder='Price' className='inputAdm'></input>
                <input name="menu" value={data.menu} onChange={handleInputChange} placeholder='Menu' className='inputAdm'></input>
                <button id="addEmployee" >AGREGAR</button>
            </div>
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
                        <tr className='row' key={i}>
                            <td>{item.product}</td>
                            <td>{item.price}</td>
                            <td>{item.menu}</td>
                            <td><EditIcon>Editar</EditIcon></td>
                            <td><DeleteIcon>Borrar</DeleteIcon></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}