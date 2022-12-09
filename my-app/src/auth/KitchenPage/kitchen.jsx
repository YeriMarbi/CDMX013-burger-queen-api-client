import { Buttons } from "../waiterPage/Buttons"
import axios from "axios"
import './kitchen.css'
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import InfoIcon from '@mui/icons-material/Info';
import { Info } from './Info'

export const Kitchen = () => {

    const [ordersPending, setOrdersPending] = useState([]);
    const [buttonDone, setButtonDone] = useState(true)
    const [infoOrder, setInfoOrder] = useState(false)


    const getOrders = async () => {
        const result = await axios.get('https://637265f4025414c6370eb684.mockapi.io/api/bq/clientorder?status=pending')
        const orders = result.data;
        setOrdersPending(orders.filter((orders => orders.status === 'pending')));
        setButtonDone(true)

    };

    const done = async () => {
        const result = await axios.get('https://637265f4025414c6370eb684.mockapi.io/api/bq/clientorder?status=done')
        setOrdersPending(result.data)
        setButtonDone(false)

    }

    useEffect(() => {
        getOrders()
    }, []);


    const deleteOrder = async (item) => {
        await axios.delete(`https://637265f4025414c6370eb684.mockapi.io/api/bq/clientorder/${item.id}`, item)
        getOrders()
    }

    const addKeyProducts = async (order) => {
        console.log(order, ':::::::::ORDER')
        const date = new Date();
        const hour = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

        let delta = Math.abs(new Date(order.date) - date) / 1000;

        const days = Math.floor(delta / 86400);
        delta -= days * 86400;

        const hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;

        const seconds = Math.floor(delta) % 60;

        const orderDone = {
            ...order,
            done: hour,
            status: 'done',
            time: hours + 'hrs ' + minutes + 'min ' + seconds + 'seg'
        }
        await axios.put(`https://637265f4025414c6370eb684.mockapi.io/api/bq/clientorder/${order.id}`, orderDone)
        getOrders()
    }

    const info = (item) => {
        setInfoOrder(!infoOrder)
    }

    return (
        <section className="backKitchen">
            <Buttons message='PEDIDOS' />
            <div className="kitchen">
                <div className="kitchenButtons">
                    <button onClick={() => getOrders()} className='btnPending'>
                        <p>PENDIENTES</p>
                    </button>
                    <button onClick={() => done()} className='btnReady' >
                        <p>LISTOS</p>
                    </button>
                </div>
                <section className="orders">
                    {ordersPending.length > 0 && ordersPending.map((item) =>
                        <div className='kitchenTicket' key={item.id} >
                            <section className="headerOrder">
                                <button key={item.id} onClick={() => deleteOrder(item)}> <CloseIcon /></button>
                                <p> {item.name}</p>
                                <p>Llego:{item.hour}</p>
                            </section>
                            <div>
                                {item.items.map((element) =>
                                    <div className="OrderItem" key={element.id}>
                                        <p> {element.qty} </p>
                                        <p> {element.product.product}</p>
                                    </div>
                                )}
                            </div>
                            {buttonDone ? <button className='done' key={item.id} onClick={() => addKeyProducts(item)}><CheckIcon className='checkIcon' /></button> :
                                <InfoIcon  onClick={() => info(item)}></InfoIcon>}
                            {infoOrder ? <Info item={item} /> : null}
                            
                        </div>
                    )}
                </section>
            </div>
        </section>
    )

}

