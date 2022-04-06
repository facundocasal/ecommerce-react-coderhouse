import React, { useState } from 'react'

function ItemCount( { initial ,stock, onAdd , exist  }) {
  
    const [number , setnumber] = useState(initial)

  
    return (
    <div>
        <div className='add'>

            <button onClick={()=>{
                    if (number > 0){
                    setnumber(number - 1)}
                }}>-</button>

            <p>{number}</p>


            <button onClick={()=>{
                    setnumber(number + 1)
                }}>+</button>
        </div>
        <div>

        </div>
            <p>stock disponible {exist}</p>
        <div>
            <button disabled={number === 0} onClick={( number > stock?null:( ()=> onAdd(number)))}>Agregar Al Carrito</button>
        </div>
    </div>
  )
}

export default ItemCount