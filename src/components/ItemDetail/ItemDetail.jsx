import React from 'react'
import './itemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";

function ItemDetail({product}) {


  return (
    <>
      <div className='detail'>   
        <div>
          <img src={product.img} alt="" />
        </div>
        <div className='description' >
          
              <h1>Marca Vehiculo: {product.name}</h1>
              <h2>Modelo:  {product.model}</h2>
              <h3>Precio: $ {product.price}</h3>
                
                  {product.description.map(i => 
                  <ul className='description__lista'>
                    <li>Fabricante:  {i.maker}</li>
                    <li>Escala:  {i.scale}</li>
                    <li>Largo:  {i.long}</li>
                    <li>Material:  {i.material}</li>
                  </ul>)}
        </div>
        <ItemCount className="addCart" initial={0} stock={product.stock} key={product.id} item={product}/>

        <Link className='buttonCart' to={'/Cart'}>Ir al Carrito</Link>  
      </div>  
    </>
  )
}

export default ItemDetail