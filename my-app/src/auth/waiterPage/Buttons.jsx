import { useNavigate } from 'react-router-dom';
import Logo from "../elements/Logo"

export const Buttons = ({message}) => {
    const navigate = useNavigate();

    const logOut = () => {
        navigate('/')
    }

    return (
        <div className='newOrder'>
            <button className='btnViolet'>{message}</button>
            <Logo />
            <button className='btnExit' onClick={logOut}>SALIR</button>
        </div>
    )
}