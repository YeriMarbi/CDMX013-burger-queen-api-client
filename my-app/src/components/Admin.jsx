import React from 'react';
import { Table } from './AdminTable';
import {TableProducts} from './elements/TableData';
import  StickyHeadTable from './tablemui'

const Admin = () => {
    return (
        <div>
            <h1>Lista de productos</h1>
            <Table></Table>
            <TableProducts></TableProducts>
           < StickyHeadTable></ StickyHeadTable>
        </div>
    )
}

export default Admin
