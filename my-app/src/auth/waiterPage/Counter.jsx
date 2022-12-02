import DeleteIcon from '@mui/icons-material/Delete';

export const Counter = ({ item, deleteItem, addProductOrder}) => {
  
    const addProduct = () => {
        // setValue(value + 1)
        addProductOrder(item.product)
    }

    const removeProduct = () => {
        // setValue(value - 1)
    }

    return (
        <div className="orderButton">

            <div className='productsOrder'>{item.product.product} </div>
            <p> $ {item.product.price}</p>
            <button onClick={addProduct}  >+</button>
            <p>{item.qty}</p>
            <button onClick={removeProduct} >-</button>
            <DeleteIcon onClick={deleteItem} />
        </div>
    )
}