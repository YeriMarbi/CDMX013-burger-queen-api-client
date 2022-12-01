import Logo from "../elements/Logo"
import EditIcon from '@mui/icons-material/Edit';
import './waiter.css'

export const Waiter = () => {
    return (
        <section className='waiterView'>
            <div className='newOrder'>
                <button>NUEVA ORDEN</button>
                <Logo />
                <button>SALIR</button>
            </div>
            <div className='menu'>
                <section>
                    <button>DESAYUNO</button>
                    <button>24 HORAS</button>
                </section>
                <div>

                    {/* renderizado de productos */}
                </div>
            </div>
            <div className='client'>
                <input type="text" />
                <EditIcon />
                <section>PRODUCTOS</section>
                <div className='total'> TOTAL</div>
                <button>CANCELAR</button>
                <button>ENVIAR</button>
            </div>
        </section>
    )
}