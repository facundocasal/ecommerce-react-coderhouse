import React, { useContext, useState } from 'react'
import { CartContext } from '../ContexCart'
import "./itemCount.css"

function ItemCount({ initial, stock, item }) {
    const [cant, setcant] = useState(initial)

    const { onAdd } = useContext(CartContext)
    return (
        <div>
            <div className='add'>
                <button className='Button moreRest' style={{ backgroundColor: "red" }} onClick={() => {
                    if (cant > 0) {
                        setcant(cant - 1)
                    }
                }}>-</button>
                 <p className='Button' style={{ backgroundColor: "darkslategrey" , marginBottom:"0", textAlign: "center", width:"80px" , borderRadius: "15px 5px 15px 5px" }}>{cant}</p>
                <button className='Button moreRest' style={{ backgroundColor: "green" }} onClick={() => {
                    setcant(cant + 1)
                }}>+</button>
            </div>
            <div>
            </div>
            <p style={{ textAlign: "center" }}>stock disponible: {stock}</p>
            <div style={{margin: "auto",width: "200px"}}>
                <button className="addCart text-center" disabled={cant === 0} onClick={(cant > stock ? null : () => onAdd({ ...item, cant }))}  >Agregar Al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount