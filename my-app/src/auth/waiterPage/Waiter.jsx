import Logo from "../elements/Logo"
import EditIcon from '@mui/icons-material/Edit';
import './waiter.css'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Counter } from "./Counter";

export const Waiter = () => {
    const [products, setProducts] = useState([])
    const [currentMenu, setCurrentMenu] = useState([])
    const [productsOrder, setProductsOrder] = useState([])
    const [showContent, setShowContent] = useState(false)


    const getProductsData = async () => {
        const result = await axios.get('https://637265f4025414c6370eb684.mockapi.io/api/bq/Products')
        const productData = result.data
        setProducts(productData);

    };

    const breakfastMenu = () => {
        const breakfastRender = products.filter((products => products.menu === 'Desayuno'));
        setCurrentMenu(breakfastRender)

    }

    const mainMenu = () => {
        const mainMenuRender = products.filter((products => products.menu === '24 hrs.'));
        setCurrentMenu(mainMenuRender)
    }


    useEffect(() => {
        getProductsData()
    }, []);

    const navigate = useNavigate();
    const logOut = () => {
        navigate('/')
    }

    const addProductOrder = (product) => {
   setProductsOrder((state)=>{
    return [...state, product]
   })
        setShowContent(true)
    }

    console.log(productsOrder);
    return (
        <section className='waiterView'>
            <div className='newOrder'>
                <button className='btnViolet'>NUEVA ORDEN</button>
                <Logo />
                <button className='btnExit' onClick={logOut}>SALIR</button>
            </div>
            <div className='menu'>
                <section>
                    <button className='btnGray' onClick={breakfastMenu}>DESAYUNO</button>
                    <button className='btnViolet' onClick={mainMenu}>24 HORAS</button>
                </section>
                <div className="container-menu">
                    {currentMenu.map((item) =>
                        <button className="container-item"
                            onClick={() => addProductOrder(item)} key={item.id}>
                            <p className="productName">{item.product}</p>
                            <p>${item.price}</p>
                        </button>
                    )}
                </div>
            </div>
            <div className='client'>
                <section className='idOrder'>
                    <input type="text" />
                    <EditIcon />
                </section>
                <div className='orderProducts'>COMANDA
                    {showContent && productsOrder.map((item) => <Counter productName={item.product} productPrice={item.price} key={item.id}/>)}
                </div>
                <div className='total'> TOTAL</div>
                <section className="btnOrder">
                    <button className='btnRed'>CANCELAR</button>
                    <button className='btnGreen'>ENVIAR</button>
                </section>
            </div>
        </section>
    )
}