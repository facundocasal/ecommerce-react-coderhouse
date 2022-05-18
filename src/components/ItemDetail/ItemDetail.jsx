import React from 'react'
import './itemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";

function ItemDetail({ product }) {

  return (
    <>
      <div className='detailContainer'>
        <div className='detail'>
          <div >
            <img className='img-fluid' src={product.img} alt="" />
          </div>
          <div className='d-flex flex-column'>
            <div className='description' >
              <h2>Modelo:  {product.model}</h2>
              <div>
                <p className='fw-bold'>especificaciones </p>
                <p>Fabricante: {product.marker} </p>
                <p>Material: {product.material}</p>
                <p>escala: {product.scale}</p>
                <p>Medidas: {product.long}</p>
              </div>
              <h3>Precio: $ {product.price}</h3>
            </div>
            <ItemCount className="addCart" initial={0} stock={product.stock} key={product.id} item={product} />
            <Link className='buttonCart text-center fw-bold' to={'/Cart'}>Ir al Carrito</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemDetail