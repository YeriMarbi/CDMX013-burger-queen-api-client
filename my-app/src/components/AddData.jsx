import axios from "axios";
import { useState } from "react";
import { Table } from './AdminTable';

export const InputEmployee = () => {

    

    // let [users, setUsers] = useState([]);

    // const URL = 'https://637265f4025414c6370eb684.mockapi.io/api/bq/users'

    // const datas = async () => {
    //     const result = await axios.get(URL)
    //     const data = result.data;
    //     setUsers(data);
    // };

    // useEffect(() => {
    //     datas()

    // }, []);

    // useEffect(() => console.log(users), [users])

    

    return (
        <section className='tabEmpl'>
            
            
            <Table ></Table>
            {/* <TableProducts></TableProducts> */}
        </section>
    )
}


