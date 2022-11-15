import React from 'react';
// import  DataBQ from "./AdminTable";
import { TableBasic } from './AdminTable';

const Admin = () => {
    return (
        <div>
            <h1>Lista de productos</h1>
            {/* <DataBQ /> */}
            <TableBasic />
        </div>
    )
}

export default Admin
