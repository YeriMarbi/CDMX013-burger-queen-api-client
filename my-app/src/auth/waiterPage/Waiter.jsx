import Logo from "../elements/Logo"
import EditIcon from '@mui/icons-material/Edit';
import './waiter.css'

export const Waiter = () => {
    return (
        <section className='waiterView'>
            <div className='newOrder'>
                <button className='btnViolet'>NUEVA ORDEN</button>
                <Logo />
                <button className='btnExit'>SALIR</button>
            </div>
            <div className='menu'>
                <section>
                    <button className='btnGray'>DESAYUNO</button>
                    <button className='btnViolet'>24 HORAS</button>
                </section>
                <div>

                    {/* renderizado de productos */}
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