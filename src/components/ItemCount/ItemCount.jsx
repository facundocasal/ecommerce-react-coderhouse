import React, { useContext, useState } from 'react'
import { CartContext } from '../ContextCart/ContexCart'
import "./itemCount.css"

function ItemCount( { initial ,stock, item }) {
  
    const [cant , setcant] = useState(initial)

    const {onAdd} = useContext(CartContext)


    return (
    <div>
        <div className='add'>

            <button style={{fontWeight:"600" ,backgroundColor:"red",color:"wheat" , padding:"0.8rem"}} onClick={()=>{
                    if (cant > 0){
                    setcant(cant - 1)}
                }}>-</button>

            <p style={{fontWeight:"600",margin:"0 4px" ,backgroundColor:"darkslategrey", color:"wheat",padding:"0.8rem"}}>{cant}</p>


            <button style={{fontWeight:"600", backgroundColor:"green", color:"wheat",padding:"0.8rem"}} onClick={()=>{
                    setcant(cant + 1)
                }}>+</button>
        </div>
        <div>

        </div>
            <p style={{textAlign:"center"}}>stock disponible {stock}</p>
        <div>
            <button className="addCart" disabled={cant === 0} onClick={(cant > stock?null:()=>onAdd({...item,cant}))}  >Agregar Al Carrito</button>
        </div>
    </div>
  )
}

export default ItemCount