import React, { useContext } from 'react'
import { CartContext } from '../ContextCart/ContexCart'
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';

function Cart() {


  const {cart , buy , totalPrice , removeItemCart } = useContext(CartContext)
  


  return (
    <>
      <div style={{ width: '100%' ,padding: "4rem", margin:"auto" , display:"flex" , justifyContent: "center"}}>
          <h1>Carrito</h1>
      </div>
        <div style={{ width: '100%' ,padding: "4rem", margin:"auto" , display:"flex" ,flexDirection:"column", alignItems: "center"}}>
          {cart.length > 0?(cart.map(i =>  
                <div>
                  <h1>Producto Marca: {i.mark}</h1>
                  <h2>Producto Modelo: {i.model}</h2>
                  <p>Cantida: {i.cant}</p>
                  <p>Precio Unitario: $ {i.price}-</p>
                  <button onClick={()=>removeItemCart(i.id)}> Eliminar  <ImCross/></button>
                </div>
              )):
              <div>
                <h2> Carrito Vacio</h2>
                <Link to={"/"}><button>Ir a Comprar</button> </Link>
              </div>}
          <div style={{margin:"2rem 0"}}>
            <h1>Total :$ {totalPrice}</h1>
            <button style={{width: "200px" ,padding: "1rem" , textAlign:"center" }} onClick={()=>buy()} >Finalizar Compra </button>
          </div>
      </div>

    </>


  )
}

export default Cart