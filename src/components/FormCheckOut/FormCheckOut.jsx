import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { CartContext } from '../ContexCart';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import "./FormCheckOut.css"
import Tittle from '../Tittle/Tittle';
import { Table } from 'react-bootstrap';
import { FaRegSadTear } from "react-icons/fa";


function FormCheckOut() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { cart, totalPrice, buy } = useContext(CartContext)
  const [orderId, setOrderId] = useState("")

  function sendBuyer(data) {
    const order = {
      buyer: data,
      items: cart,
      date: serverTimestamp(),
      total: totalPrice
    }

    const db = getFirestore();

    const orders = collection(db, 'ventas');

    addDoc(orders, order).then(({ id }) => {
      buy()
      setOrderId(id)
    })
  }


  return (
    <div style={{ paddingBottom: "4rem" }}>
      <div>
        <Tittle text={"Revisa tu compra antes de Finalizar"} />
        <Table style={{ width: "70%", margin: "1rem auto", textAlign: "center", fontWeight: "600" }} responsive striped bordered hover>
          <thead>
            <tr>
              <th>Item</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Escala</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
          {cart.map(i =>
            <tr>
              <td># {cart.indexOf(i) + 1}</td>
              <td>{i.mark}</td>
              <td>{i.model}</td>
              <td>{i.scale}</td>
              <td>{i.cant}</td>
            </tr>)}
          </tbody>
        </Table>
      </div>
      {cart ? (
        <form onSubmit={handleSubmit(sendBuyer)}>
          <h3 style={{ textAlign: "center", margin:"0", fontWeight: "600" }}>Completa el siguiente formulario para finalizar</h3>
          <input type="text" name="name" placeholder="Nombre"{...register("name", { required: true, minLength: 3, maxLength: 25, pattern: /[A-Za-z]/ })} />
          {errors.name?.type === 'required' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>debes completar tu Nombre</p>}

          <input type="text" placeholder="Apellido" {...register("LastName", { required: true, minLength: 3, maxLength: 25, pattern: /[A-Za-z]/ })} />
          {errors.LastName?.type === 'required' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>debes completar tu Apellido</p>}

          <input type="email" placeholder="123@123.com" {...register("Email", { required: true, min: 5, maxLength: 60, pattern: /^\S+@\S+$/i })} />
          {errors.Email?.type === 'required' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>debes completar tu Email</p>}

          <input type="tel" placeholder="011-xxxx-xxxx" {...register("phone", { required: true, minLength: 10, maxLength: 13, pattern: /[0-9]+/i })} />
          {errors.phone?.type === 'required' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>debes completar tu telefono</p>}
          {errors.phone?.type === 'maxLength' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>debe contener solo 10 caracteres 11-xxxx-xxxx </p>}
          {errors.phone?.type === 'pattern' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>debe contener solo numeros </p>}

          <p className='total' style={{ textAlign: "center" }}> Total a Pagar: $ {totalPrice}</p>
          <input type="submit" value="Comprar" ></input>
        </form>)
        :
        <div className='d-flex flex-column'>
          <Tittle text={"Carrito Vacio ..."} />
          <FaRegSadTear className='sad' />
          <Link className='cartEmpty' to={"/"} style={{ textDecoration: "none", color: "#333" }}>Ir a Comprar</Link>
        </div>}
      <div>
        {orderId === "" ? "" : (<p> Su Codigo de compra es : {orderId}</p>)}
      </div>
    </div>

  )
}

export default FormCheckOut