/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'

export const CartContext = createContext()

function ContexCartProvider({ children }) {

  const [cart, setCart] = useState([]);
  const [totalPrice, settotalPrice] = useState(0);
  const [totalCount, settotalCount] = useState(0);

  function calcTotal() {
    settotalPrice(cart.reduce((acc, item) => (acc += (item.cant * item.price)), 0))
    settotalCount(cart.reduce((acc, item) => (acc += item.cant), 0))
  }
  useEffect(() => {
    calcTotal()
  }, [cart])

  function onAdd(item) {
    let productRepit = cart.findIndex(i => i.id === item.id)
    if (productRepit !== -1) {
      const newCart = [...cart]
      newCart[productRepit].cant += item.cant
      setCart(newCart)
    } else {
      setCart([...cart, item])
    }
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title:'Has agregado '+ item.cant +' productos al carrito' ,
      showConfirmButton: false,
      timer: 1000
    })

  }
  function buy() {
    setCart([])
  }

  function removeItemCart(id) {
    setCart(cart.filter((plant) => plant.id !== id))
  }
  return (

    <CartContext.Provider value={{ cart, onAdd, removeItemCart, buy, totalPrice, totalCount }}>
      {children}
    </CartContext.Provider>
  )
}
export default ContexCartProvider