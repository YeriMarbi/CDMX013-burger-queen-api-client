import { Buttons } from "../waiterPage/Buttons"
import axios from "axios"
import './kitchen.css'
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
// import {Timer} from './Timer'

export const Kitchen = () => {

    const [orderKitchen, setOrderKitchen] = useState([])

    const getOrders = async () => {
        const result = await axios.get('https://637265f4025414c6370eb684.mockapi.io/api/bq/clientorder')
        setOrderKitchen(result.data);
    };

    useEffect(() => {
        getOrders()
    }, []);


    const deleteOrder = async (item) => {
        await axios.delete(`https://637265f4025414c6370eb684.mockapi.io/api/bq/clientorder/${item.id}`, item)
        getOrders()

        console.log(item)
    }
    // const addKeyProduct = (product) => {
    //     const currentProduct = productsOrder.find((item) => item.product.id === product.id)
    //     setProductsOrder((state) => {
    //         const newCurrentProduct = state.map((item) => {
    //             if (item.product.id === product.id) {
    //                 return { product, qty: currentProduct.qty - 1 }
    //             } else {
    //                 return item
    //             }
    //         });
    //         return newCurrentProduct
    //     })
    // }
    // console.log(':::::::::::::::', orderKitchen[0].items[0].product.product)
    return (
        <section className="backKitchen">
            <Buttons message='PEDIDOS' />
            <div className="kitchen">
                <div className="kitchenButtons">
                    <button className='btnPending'>
                        <p>PENDIENTES</p>
                    </button>
                    <button className='btnReady' >
                        <p>LISTOS</p>
                    </button>
                </div>
                <section className="orders">
                    {orderKitchen.length > 0 && orderKitchen.map((item) =>
                        <div className='kitchenTicket' key={item.id} >
                            <section className="headerOrder">
                                <button key={item.id} onClick={() => deleteOrder(item)}> <CloseIcon /></button>
                                <p> {item.name}</p>
                                <p>{item.hour}</p>
                            </section>
                            <div>
                                {item.items.map((element) =>
                                    <div className="OrderItem" key={element.id}>
                                        <p> {element.qty} </p>
                                        <p> {element.product.product}</p>
                                       
                                    </div> 
                                )}
                            </div>
                          <button key={item.id}><CheckIcon className='checkIcon' /></button>
                            {/* <Timer/> */}
                        </div>
                    )}
                </section>
            </div>
        </section>
    )

}