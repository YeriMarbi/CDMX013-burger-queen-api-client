import Logo from "../elements/Logo"
import EditIcon from '@mui/icons-material/Edit';
import './waiter.css'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import { useNavigate} from 'react-router-dom';


export const Waiter = () => {
    const [products, setProducts] = useState([])
    const [currentMenu, setCurrentMenu] = useState([])


    const getProductsData = async () => {
        const result = await axios.get('https://637265f4025414c6370eb684.mockapi.io/api/bq/Products')
        const productData = result.data
        setProducts(productData);
        console.log(productData)
    };

    const breakfastMenu = () =>{
        const breakfastRender = products.filter((products => products.menu === 'Desayuno'));
        setCurrentMenu(breakfastRender)
        console.log(breakfastRender)
    }

    const mainMenu = () =>{
        const mainMenuRender = products.filter((products => products.menu === '24 hrs.'));
        setCurrentMenu(mainMenuRender)
        console.log(mainMenuRender)
    }
    

    useEffect(() => {
        getProductsData()
    }, []);

    const navigate = useNavigate();
    const logOut = () => {
        navigate('/')
    }


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
                        <div className="container-item" key={item.id}>
                            <p className="productName">{item.product}</p>
                            <p>${item.price}</p>
                            <div className="orderButton">
                                <button data-id={item.id}>+</button>
                                <p>0</p>
                                <button data-id={item.id}>-</button>
                            </div>
                        </div>
                      )}
                </div>
            </div>
            <div className='client'>
                <section className='idOrder'>
                <input type="text" />
                <EditIcon />
                </section>
                <div className='orderProducts'>COMANDA
               
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