import React, { useState } from 'react'

function ItemCount( { initial ,stock, onAdd , existente  }) {
  
    const [numero , setNumero] = useState(initial)

  
    return (
    <div>
        <div className='add'>

            <button onClick={()=>{
                    if (numero > 0){
                    setNumero(numero - 1)}
                }}>-</button>

            <p>{numero}</p>


            <button onClick={()=>{
                    setNumero(numero + 1)
                }}>+</button>
        </div>
        <div>

        </div>
            <p>stock disponible {existente}</p>
        <div>
            <button disabled={ numero === 0} onClick={( numero > stock?null:( ()=> onAdd(numero)))}>Agregar Al Carrito</button>
        </div>
    </div>
  )
}

export default ItemCount