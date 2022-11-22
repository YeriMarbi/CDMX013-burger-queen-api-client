import React from 'react';
import { Table } from './AdminTable';
import { TableProducts } from './elements/TableData';
import "./style/admin.css";
import Logo from './elements/Logo.jsx'

const ButtonsMenu = () => {
    return (
        <section className='menuBtn'>
            <button id="emplBtn">EMPLEADOS</button><br></br>
            <button id="prodBtn">PRODUCTOS</button>
            <Logo />
            <button id="exit">SALIR</button>

        </section>
    )
}

const InputEmployee = () => {
    return (
        <section className='tabEmpl'>
            <div className='employee'>
                <input placeholder='Nombre' className='inputAdm'></input>
                <input placeholder='Área' className='inputAdm'></input>
                <input placeholder='Correo' className='inputAdm'></input>
                <input placeholder='Contraseña' className='inputAdm'></input>
                <button id="addEmployee">AGREGAR</button>
                <Table></Table>
                <TableProducts></TableProducts>
            </div>
        </section>
    )
}

const Admin = () => {
    return (
        <div className='backAdmin'>
            <ButtonsMenu />
            <InputEmployee />
        </div>
    )
}

export default Admin
