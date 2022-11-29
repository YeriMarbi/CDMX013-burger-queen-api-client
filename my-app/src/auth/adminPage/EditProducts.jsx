import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Logo from "../elements/Logo";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const EditProducts = () => {
  const { id } = useParams();
  console.log(id)
  const URL = `https://637265f4025414c6370eb684.mockapi.io/api/bq/Products/${id}`
  const [product, setProduct] = useState({
    product: '',
    price: '',
    menu: '',
  })
  const navigate = useNavigate();

  const getProductsData = async () => {
    const result = await axios.get(URL)
    setProduct(result.data);
  };

  useEffect(() => {
    getProductsData()
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProduct((prevState) => ({ ...prevState, [name]: value }))

  }

  const editData = async (product) => {
    await axios.put(`https://637265f4025414c6370eb684.mockapi.io/api/bq/Products/${id}`, product)
    navigate('/admin/products')
  }

  return (
    <section>
      <div className='edit'>
        <h1>PRODUCTOS</h1>
        <p>Producto</p>
        <input name="product" value={product.product} onChange={handleInputChange} />
        <p>Precio</p>
        <input name="price" value={product.price} onChange={handleInputChange} />
        <p>Horario</p>
        <select name="menu" value={product.menu} onChange={handleInputChange} >
          <option></option>
          <option>Desayuno</option>
          <option>24 hrs.</option>
        </select>
        <br />
        <button className='btnEdit' onClick={() => editData(product)} >GUARDAR</button>
      </div>
      <Logo />
    </section>
  )
}