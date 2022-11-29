// import {Link} from 'react-router-dom';
import React from "react";
import { useParams } from "react-router";
import Logo from "../elements/Logo";

export const EditProducts = () => {
  let { id } = useParams();
  console.log(id);
  return (
    <section>
      <div className='edit'>
        <h1>PRODUCTOS</h1>
        <p>Producto</p>
        <input name="product" value={id} />
        <p>Precio</p>
        <input />
        <p>Horario</p>
        <input />
        <button className='btnEdit' >GUARDAR</button>
      </div>
      <Logo />
    </section>
  )
}