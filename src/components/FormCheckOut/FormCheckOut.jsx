import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { CartContext } from '../ContexCart';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import "./FormCheckOut.css"
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
    <div >
      <div>
        <h1>Revisa tu compra antes de continuar </h1>
        {cart.map(i =>
          <div>
            <h1>Producto Marca: {i.mark}</h1>
            <h2>Producto Modelo: {i.model}</h2>
            <p>Cantida: {i.cant}</p>
            <p>Precio Unitario: $ {i.price}-</p>
          </div>)}
      </div>
      {cart.length > 0 ? (
        <form onSubmit={handleSubmit(sendBuyer)}>
          <h3 style={{ textAlign: "center", marginBottom: "10px", fontWeight: "600" }}>Completa el siguiente formulario para finalizar</h3>
          <input type="text" name="name" placeholder="Nombre"{...register("name", { required: true, minLength: 3, maxLength: 25, pattern: /[A-Za-z]/ })} />
          {errors.name?.type === 'required' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>debes completar tu Nombre</p>}

          <input type="text" placeholder="Apellido" {...register("LastName", { required: true, minLength: 3, maxLength: 25, pattern: /[A-Za-z]/ })} />
          {errors.LastName?.type === 'required' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>debes completar tu Apellido</p>}

          <input type="email" placeholder="123@123.com" {...register("Email", { required: true, min: 5, maxLength: 60, pattern: /^\S+@\S+$/i })} />
          {errors.Email?.type === 'required' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>debes completar tu Email</p>}

          <input type="tel" placeholder="11-xxxx-xxxx" {...register("phone", { required: true, minLength: 10, maxLength: 10, pattern: /[0-9]+/i })} />
          {errors.phone?.type === 'required' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>debes completar tu telefono</p>}
          {errors.phone?.type === 'maxLength' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>debe contener solo 10 caracteres 11-xxxx-xxxx </p>}
          {errors.phone?.type === 'pattern' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>debe contener solo numeros </p>}

          <p style={{ textAlign: "center" }}> Total : {totalPrice}</p>
          <input type="submit" value="Comprar" ></input>
        </form>)
        :
        <div>
          <h2> Carrito Vacio</h2>
          <Link to={"/"}><button>Ir a Comprar</button> </Link>
        </div>}
      <div>
        {orderId === "" ? "" : (<p> su Codigo de compra es : {orderId}</p>)}
      </div>
    </div>

  )
}

export default FormCheckOut