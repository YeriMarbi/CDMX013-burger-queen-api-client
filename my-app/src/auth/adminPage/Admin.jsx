import React from 'react';
import "./admin.css";
import Table from './AdminTable';
import { ButtonsMenu } from './ButtonsMenu';
import { ProductsTable } from './ProductsTable';
import { Outlet } from 'react-router';


export const AdminEmployees = () => {
    return (
        <div className='backAdmin'>
            <section><Table/></section>
        </div>
    )
}

export const AdminInicio = () => {
    return (
        <div className='backAdmin'>
            <ButtonsMenu />
            <Outlet/>
        </div>
    )
}

export const AdminProducts = () => {
    return (
        <div className='backAdmin'>
            <section><ProductsTable /></section>
        </div>
    )
}
