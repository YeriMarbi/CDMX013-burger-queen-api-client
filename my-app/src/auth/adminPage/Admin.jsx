import React from 'react';
import "./admin.css";
import Table from './AdminTable';
import { ButtonsMenu } from './ButtonsMenu';


const Admin = () => {
    return (
        <div className='backAdmin'>
            <ButtonsMenu />
            <section><Table /></section>
        </div>
    )
}

export default Admin
