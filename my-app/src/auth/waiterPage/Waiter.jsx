
import './waiter.css'
import { useState } from 'react';
import axios from "axios";
import { Ticket } from "./Ticket";
import Modal from '../elements/Modal.jsx'
import { MenuBQ } from "./MenuBQ";
import { Buttons } from "./Buttons";


export const Waiter = () => {
    const [productsOrder, setProductsOrder] = useState([])
    const [currentMenu, setCurrentMenu] = useState('Desayuno');
    const [client, setClient] = useState("");
    const [modal, setModal] = useState(false);

    const breakfastMenu = () => {
        setCurrentMenu('Desayuno')
    }

    const mainMenu = () => {
        setCurrentMenu('24hrs')
    }

    const addProductOrder = (product) => {
        if (!productsOrder.find((item) => item.product.id === product.id)) {
            setProductsOrder((state) => {
                return [...state, { product, qty: 1 }]
            })
        } else {
            const currentProduct = productsOrder.find((item) => item.product.id === product.id)
            setProductsOrder((state) => {

                const newCurrentProduct = state.map((item) => {
                    if (item.product.id === product.id) {
                        return { product, qty: currentProduct.qty + 1 }
                    } else {
                        return item
                    }
                });
                return newCurrentProduct
            })
        }
    }

    const decreaseProductOrder = (product) => {
        const currentProduct = productsOrder.find((item) => item.product.id === product.id)
        setProductsOrder((state) => {
            const newCurrentProduct = state.map((item) => {
                if (item.product.id === product.id) {
                    return { product, qty: currentProduct.qty - 1 }
                } else {
                    return item
                }
            });
            return newCurrentProduct
        })
    }

    const deleteProduct = (product) => {
        const filterProducts = productsOrder.filter((item) => item.product.id !== product.id)
        setProductsOrder(filterProducts)
    }

    const totalPrice = () => {
        return productsOrder.reduce((prev, item) => prev + item.qty * item.product.price, 0);
    }

    const handleApi = () => {
        const date = new Date();
        const hour = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

        const clientOrder = {
            name: client,
            hour: hour,
            items: productsOrder,
            total: totalPrice(),
            status:'pending'
        }
        console.log(clientOrder)
        axios.post('https://637265f4025414c6370eb684.mockapi.io/api/bq/clientorder', clientOrder)
        clearOrder()
        setClient('')
        setModal(false);
    }


    const clearOrder = () => {
        setProductsOrder([]);
        setClient('')
    }

    const closeModal = () => {
        setModal(false);
    }

    const showModal = () => {
        setModal(true);
    };

    return (
        <section className='waiterView'>
            <Buttons message='NUEVA ORDEN'/>
            <div className='menu'>
                <section>
                    <button className='btnGray' onClick={breakfastMenu}>DESAYUNO</button>
                    <button className='btnViolet' onClick={mainMenu}>24 HORAS</button>
                </section>
                <MenuBQ currentMenu={currentMenu} addProductOrder={addProductOrder}></MenuBQ>
            </div>
            <div className='client'>
                <section className='idOrder'>
                    <input type="text" placeholder="Customer name" value={client} onChange={(e) => setClient(e.target.value)} />
                </section>
                <div className='orderProducts'>
                    {productsOrder.length > 0 && productsOrder.map((item) => <Ticket addProductOrder={addProductOrder}
                        deleteProductOrder={decreaseProductOrder} item={item} key={item.product.id}
                        deleteItem={() => deleteProduct(item.product)} />)}
                </div>
                <div className='total'> TOTAL ${totalPrice()}.00</div>
                <section className="btnOrder">
                    <button className='btnRed' onClick={clearOrder}>CANCELAR</button>
                    <button className='btnGreen' onClick={showModal}>ENVIAR</button>
                    {modal && <Modal
                        modalFunction={handleApi}
                        closeFunction={closeModal}
                        message='¿Deseas enviar esta orden?'
                    />
                    }
                </section>
            </div>
        </section>
    )
}