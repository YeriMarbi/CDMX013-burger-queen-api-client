// import {Link} from 'react-router-dom';
import React from "react";
import { useParams } from "react-router";

export const EditProducts=()=>{
    let {id}=useParams();
    console.log(id);
    return(
    <div>
        EditProducts
        {/* <h1>PRODUCTOS</h1>
      <p>{id}</p>
        <input/>
        <input/>
        <input/>
        <button >GUARDAR</button> */}
    </div>
    )
}