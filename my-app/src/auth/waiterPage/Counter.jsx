import { useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';

export const Counter = ({ productName, productPrice, deleteItem}) => {
    let [value, setValue] = useState(1)

    const addProduct = () => {
        setValue(value + 1)
    }

    const removeProduct = () => {
        setValue(value - 1)
    }

    return (
        <div className="orderButton">
                <p>{productName}</p>
                <p>{productPrice}</p>
            <button onClick={addProduct}  >+</button>
            <p>{value < 1 ? value = 1 : value}</p>
            <button onClick={removeProduct} >-</button>
            <DeleteIcon onClick={deleteItem}/>
        </div>
    )
}