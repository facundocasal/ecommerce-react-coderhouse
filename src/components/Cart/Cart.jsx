import React, { useContext } from 'react'
import { CartContext } from '../ContextCart/ContexCart'

function Cart() {

  const {cart , buy} = useContext(CartContext)

  return (
    <>
      <div style={{ width: '100%' ,padding: "4rem", margin:"auto" , display:"flex" , justifyContent: "center"}}>
          <h1>Carrito</h1>
      </div>
      <div style={{ width: '100%' ,padding: "4rem", margin:"auto" , display:"flex" ,flexDirection:"column", alignItems: "center"}}>
          {
            cart.map(i =>  
              <>
                <h1>Producto Marca: {i.mark}</h1>
                <h2>Producto Modelo: {i.model}</h2>
                <p>Cantida: {i.cant}</p>
              </>
            )
          }
        <button style={{width: "10%" , margin:"auto" , textAlign:"center" }} onClick={()=>buy()} >Finalizar Compra </button>
      </div>
    </>
  )
}

export default Cart