import React, { useContext ,useEffect ,useState } from 'react'
import { CartContext } from '../ContexCart'
import "./itemCount.css"
import Swal from 'sweetalert2/dist/sweetalert2.js'

function ItemCount({ initial, stock, item }) {
    const [cant, setcant] = useState(initial)
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
    function addProduct(i) {
        onAdd(i)
        setcant(initial)
    }

    const { cart } = useContext(CartContext)

    let [stockAvailable, setStockAvailable] = useState(stock)
    // Effect que revisa si el producto esta en el carrito  para mostrar el verdadero stock disponible 
    useEffect(() => {
        if(cart){
        let productSearch = cart.find(i => i.id === item.id)
        if (productSearch) {
            const newStock = item.stock - productSearch.cant
            setStockAvailable(newStock)
        }else{
            setStockAvailable(stock)
        }
        }
    }, [cart])

    return (
        <div>
            <div className='add'>
                <button className='Button moreRest' disabled={stockAvailable === 0} style={{ backgroundColor: "red" }} onClick={() => {
                    if (cant > 0) {
                        setcant(cant - 1)
                    }
                }}>-</button>
                <p className='Button' style={{ backgroundColor: "darkslategrey", marginBottom: "0", textAlign: "center", width: "80px", borderRadius: "15px 5px 15px 5px" }}>{cant}</p>
                <button className='Button moreRest' disabled={stockAvailable === 0} style={{ backgroundColor: "green" }} onClick={() => {
                    setcant(cant + 1)
                }}>+</button>
            </div>
            <div>
            </div>
            <p style={{ textAlign: "center" }}>stock disponible: {stockAvailable}</p>
            <div style={{ margin: "auto", width: "200px" }}>
                <button className="addCart text-center" disabled={cant === 0} onClick={(cant > stockAvailable ? () => fail() : () => addProduct({ ...item, cant }))}>{stockAvailable === 0 ? ("Sin Stock") : "Agregar Al Carrito"}</button>
            </div>
        </div>
    )
}

export default ItemCount