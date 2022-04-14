import React from 'react'
import './itemDetail.css';
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";

function ItemDetail({item}) {


  let [buttonCart , setButtonCart] = useState(true);

  let [cart , setCart] = useState(0)

  let onAdd = (num) =>{
    setCart(num)
    alert("Se añadieron  " + num + " productos a tu carrito ")
    setButtonCart(false)
}
  console.log(cart)

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
                    <li>Fabricante:  {i.maker}</li>
                    <li>Escala:  {i.scale}</li>
                    <li>Largo:  {i.long}</li>
                    <li>Material:  {i.material}</li>
                  </ul>)}
        </div>
        {buttonCart?(<ItemCount className="addCart" initial={0} stock={item.stock} onAdd={onAdd} />):<Link className='buttonCart' to={'/Cart'}>Ir al Carrito</Link>}  
      </div>  
    </>
  )
}

export default ItemDetail