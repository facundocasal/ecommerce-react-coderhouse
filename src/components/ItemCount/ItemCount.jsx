import React, { useState } from 'react'
import "./itemCount.css"

function ItemCount( { initial ,stock, onAdd , exist  }) {
  
    const [number , setnumber] = useState(initial)

  
    return (
    <div>
        <div className='add'>

            <button style={{backgroundColor:"red",color:"wheat" , padding:"1rem"}} onClick={()=>{
                    if (number > 0){
                    setnumber(number - 1)}
                }}>-</button>

            <p style={{margin:"0 4px" ,backgroundColor:"darkslategrey", color:"wheat",padding:"1rem"}}>{number}</p>


            <button style={{backgroundColor:"green", color:"wheat",padding:"1rem"}} onClick={()=>{
                    setnumber(number + 1)
                }}>+</button>
        </div>
        <div>

        </div>
            <p>stock disponible {stock}</p>
        <div>
            <button disabled={number === 0} onClick={( number > stock?null:( ()=> onAdd(number)))}>Agregar Al Carrito</button>
        </div>
    </div>
  )
}

export default ItemCount