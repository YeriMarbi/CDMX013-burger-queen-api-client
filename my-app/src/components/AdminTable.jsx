import axios from 'axios'
import * as React from 'react';
import MUIDataTable from "mui-datatables"
import { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

export const TableBasic = () => {
    const [people, setPeople] = useState([])

    const endpoint='https://637265f4025414c6370eb684.mockapi.io/api/bq/users'

    const getData= async () => {
        await axios.get(endpoint).then(result => {
            const data = result.data;
            console.log(data);
            setPeople(data);
        }
        )};
        useEffect(()=>{
            getData()
        },[])

        const columns=[
            {
                name:'name',
                label:'NAME'
            },
            {
                name:'area',
                label:'AREA'
            },
            {
                name:'e-mail',
                label:'E-MAIL'
            },
            {
                name:'password',
                label:'PASSWORD'
            },
        ]

    return (
        <MUIDataTable
            title={'Lista de Empleados'}
            data={people}
            columns={columns}
        />
    )
}

// const DataBQ = () => {
//     axios.get('https://637265f4025414c6370eb684.mockapi.io/api/bq/users').then(result => {
//         const data = result.data;
//         // console.log(data);
//         return (
//             <section id='Admin'>
//                 <h3>PERSONAL</h3>
//                 <TableContainer>
//                     <Table>
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell>  Nombre  </TableCell>
//                                 <TableCell>  Area  </TableCell>
//                                 <TableCell>  Correo  </TableCell>
//                                 <TableCell>  Constraseña  </TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {data.map(row => {
//                                 <TableRow>
//                                     <TableCell>{row.name}</TableCell>
//                                     <TableCell>{row.area}</TableCell>
//                                     <TableCell>{row.email}</TableCell>
//                                     <TableCell>{row.password}</TableCell>
//                                 </TableRow>
//                             })
//                             }
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </section>
//         )
//     });
// }

export default TableBasic