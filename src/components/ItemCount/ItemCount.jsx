import React, { useContext, useState } from 'react'
import { CartContext } from '../ContexCart'
import "./itemCount.css"
import Swal from 'sweetalert2/dist/sweetalert2.js'

function ItemCount({ initial, stock, item }) {
    const [cant, setcant] = useState(initial)
    const [updatestock, setUpdatestock] = useState(stock)
    //funcion que se ejecuta cuando se intenta agregar mas productos de los disponibles en stock 
    function fail() {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'No tenemos tanto Stock',
            showConfirmButton: false,
            timer: 1000
        })
    }

    const { onAdd } = useContext(CartContext)
    // funcion que agrega el producto al carrito y modifica el stock disponible 
    function addProduct(i, sE) {
        onAdd(i)
        setUpdatestock(sE - i.cant)
        setcant(initial)
    }
    return (
        <div>
            <div className='add'>
                <button className='Button moreRest' disabled={updatestock === 0} style={{ backgroundColor: "red" }} onClick={() => {
                    if (cant > 0) {
                        setcant(cant - 1)
                    }
                }}>-</button>
                <p className='Button' style={{ backgroundColor: "darkslategrey", marginBottom: "0", textAlign: "center", width: "80px", borderRadius: "15px 5px 15px 5px" }}>{cant}</p>
                <button className='Button moreRest' disabled={updatestock === 0} style={{ backgroundColor: "green" }} onClick={() => {
                    setcant(cant + 1)
                }}>+</button>
            </div>
            <div>
            </div>
            <p style={{ textAlign: "center" }}>stock disponible: {updatestock}</p>
            <div style={{ margin: "auto", width: "200px" }}>
                <button className="addCart text-center" disabled={cant === 0} onClick={(cant > updatestock ? () => fail() : () => addProduct({ ...item, cant }, updatestock))}>{updatestock === 0 ? ("Sin Stock") : "Agregar Al Carrito"}</button>
            </div>
        </div>
    )
}

export default ItemCount