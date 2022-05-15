import React from 'react'
import './itemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";

function ItemDetail({ product }) {


  return (
    <>
      <div className='detailContainer'>
        <div className='detail'>
          <div>
            <img src={product.img} alt="" />
          </div>
          <div>
            <div className='description' >
              <h2>Modelo:  {product.model}</h2>
              <h3>Precio: $ {product.price}</h3>
            </div>
              <ItemCount className="addCart" initial={0} stock={product.stock} key={product.id} item={product} />
              <Link className='buttonCart' to={'/Cart'}>Ir al Carrito</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemDetail