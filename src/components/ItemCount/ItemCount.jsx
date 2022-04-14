import React, { useState } from 'react'
import "./itemCount.css"

function ItemCount( { initial ,stock, onAdd , exist  }) {
  
    const [number , setnumber] = useState(initial)

  
    return (
    <div>
        <div className='add'>

            <button style={{fontWeight:"600" ,backgroundColor:"red",color:"wheat" , padding:"0.8rem"}} onClick={()=>{
                    if (number > 0){
                    setnumber(number - 1)}
                }}>-</button>

            <p style={{fontWeight:"600",margin:"0 4px" ,backgroundColor:"darkslategrey", color:"wheat",padding:"0.8rem"}}>{number}</p>


            <button style={{fontWeight:"600", backgroundColor:"green", color:"wheat",padding:"0.8rem"}} onClick={()=>{
                    setnumber(number + 1)
                }}>+</button>
        </div>
        <div>

        </div>
            <p style={{textAlign:"center"}}>stock disponible {stock}</p>
        <div>
            <button className="addCart" disabled={number === 0} onClick={( number > stock?null:( ()=> onAdd(number)))}>Agregar Al Carrito</button>
        </div>
    </div>
  )
}

export default ItemCount