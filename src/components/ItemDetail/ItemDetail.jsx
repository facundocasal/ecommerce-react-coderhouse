import React from 'react'
import './itemDetail.css';
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";

function ItemDetail({item}) {


  let [cart , setCart] = useState(true)

  let onAdd = (num) =>{
    alert("Se añadieron  " + num + " productos a tu carrito ")
    setCart(false)
}

  return (
    <>
      <div className='detail'>   
        <div>
          <img src={item.img} alt="" />
        </div>
        <div className='description'>
          
              <h1>Marca Vehiculo: {item.name}</h1>
              <h2>Modelo:  {item.model}</h2>
              <h3>Precio: {item.price}</h3>
                
                  {item.description.map(i => 
                  <ul className='description__lista'>
                    <li>Fabricante:  {i.mark}</li>
                    <li>Escala:  {i.scale}</li>
                    <li>Largo:  {i.long}</li>
                    <li>Material:  {i.material}</li>
                  </ul>)}
        </div>
        {cart?(<ItemCount initial={0} stock={item.stock} onAdd={onAdd} />):<Link className='buttonCart' to={'/Cart'}>Ir al Carrito</Link>}  
      </div>  
    </>
  )
}

export default ItemDetail