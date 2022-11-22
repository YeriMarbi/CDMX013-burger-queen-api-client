import React from 'react';
import { Table } from './AdminTable';
import {TableProducts} from './elements/TableData';
// import  StickyHeadTable from './tablemui'

const Admin = () => {
    return (
        <div>
            <h3>Empleados</h3>
            <Table></Table>
            <h3>Productos</h3>
            <TableProducts></TableProducts>
           {/* < StickyHeadTable></ StickyHeadTable> */}
        </div>
    )
}

export default Admin
