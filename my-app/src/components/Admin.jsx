import React from 'react';
import { Table } from './AdminTable';
import {TableProducts} from './elements/TableData';

const Admin = () => {
    return (
        <div>
            <h1>Lista de productos</h1>
            <Table></Table>
            <TableProducts></TableProducts>
        </div>
    )
}

export default Admin
