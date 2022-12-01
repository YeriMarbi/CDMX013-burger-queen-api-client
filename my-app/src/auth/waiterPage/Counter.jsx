import { useState } from "react"

export const Counter = (item) =>{
    let [value, setValue]=useState(0)

    const addProduct = () => {
        setValue(value+1)
    }

    const removeProduct = () => {
        setValue(value-1) 
    }

    return(
        <div className="orderButton">
        <button onClick={addProduct}  >+</button>
        <p>{value<1?value=0:value}</p>
        <button  onClick={removeProduct} >-</button>
    </div>
    )
}