import ItemCount from "./ItemCount";
import React, { useState } from 'react';

export default function Item ( prod )  {

    let [available , setAvailable] = useState(prod.stock)

    let onAdd = (num) =>{
        alert("usted compro " + num)
        available = (setAvailable(prod.stock - num))
        }
    

        
    return (
      <div className="Item">
        <div className="Item-info">
          <h2 className="Item-title">{prod.name}</h2>
          <div>
                <img className="imgItem" src={prod.img} alt="logo" />
            </div>  
          <p className="Item-description"><strong>Description:</strong> <br /> {prod.description}</p>
          
        </div>
        <ItemCount initial={0} stock={prod.stock} onAdd={onAdd} exist={available} />
      </div>

    );
};