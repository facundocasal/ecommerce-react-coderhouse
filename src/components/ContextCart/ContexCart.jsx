import React, { createContext, useState } from 'react'

export const CartContext = createContext()

function ContexCartProvider ({children}) {
  
  const [cart , setCart] = useState([])

  function onAdd (item) {
      let productRepit = cart.find(i => i.id === item.id )
        if(productRepit){
            productRepit.cant = productRepit.cant + item.cant
            setCart(cart)
        }else{
            setCart([...cart ,item])
        }
  }
  function buy () {
      alert("gracias por su compra")
      setCart([])
  }

  function removeItemCart (id) {
    setCart(cart.filter((plant) => plant.id !== id))
  }
  
  
    return (
        
        <CartContext.Provider value={{ cart, onAdd , removeItemCart, buy}}>
        
            {children}
        
        </CartContext.Provider>
        
  )
}

export default ContexCartProvider