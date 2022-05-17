import React, { useContext } from 'react'
import { FaRegSadTear } from "react-icons/fa";
import { CartContext } from '../ContexCart'
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
import Tittle from '../Tittle/Tittle';
import { Table } from 'react-bootstrap';
import "./cart.css"

function Cart() {
  const { cart, totalPrice, removeItemCart } = useContext(CartContext)
  return (
    <>
      {cart.length > 0 ?
        (<div className='d-flex flex-column' style={{ paddingBottom: "4rem", }}>
          <Tittle text={"Carrito"} />
          <Table style={{ width: "70%", margin: "auto", textAlign: "center", fontWeight: "600" }} responsive striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Item</th>
                <th>Descripcion</th>
                <th>cantidad</th>
                <th>Eliminar Item</th>
                <th>precio</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(i =>
                <tr key={i.id}>
                  <td># {cart.indexOf(i) + 1}</td>
                  <td><img style={{width:"50px" , height:"40px"}} src={i.img} alt="" /> {i.mark} {i.model}</td>
                  <td>{i.cant}</td>
                  <td><button className='deleteButton' onClick={() => removeItemCart(i.id)}><ImCross /></button></td>
                  <td>${i.price}</td>
                </tr>
              )}
              <tr>
                <td colSpan={4}>TOTAL</td>
                <td>$ {totalPrice}</td>
              </tr>
            </tbody>
          </Table>
          <Link className='buy' to={"/FormCheckOut"} style={{ textDecoration: "none", color: "#fff" }}>Finalizar Compra </Link>
        </div>) :
        <div className='d-flex flex-column'>
          <Tittle text={"Carrito Vacio ..."} />
          <FaRegSadTear className='sad' />
          <Link className='cartEmpty' to={"/"} style={{ textDecoration: "none", color: "#333" }}>Ir a Comprar</Link>
        </div>}
    </>
  )
}

export default Cart