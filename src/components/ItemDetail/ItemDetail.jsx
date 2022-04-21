import React from 'react'
import './itemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";

function ItemDetail({item}) {


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
        <ItemCount className="addCart" initial={0} stock={item.stock}  item={item}/>

        <Link className='buttonCart' to={'/Cart'}>Ir al Carrito</Link>  
      </div>  
    </>
  )
}

export default ItemDetail