/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState , useEffect } from 'react'

export const CartContext = createContext()

function ContexCartProvider ({children}) {
  
  const [cart , setCart] = useState([]);
  const [totalPrice, settotalPrice] = useState(0);
  const [totalCount, settotalCount] = useState(0);

  function totalPriceItems (){
    settotalPrice(cart.reduce((acc , item) => (acc +=  (item.cant * item.price )), 0))
  }
  function totalCountItems () { 
    settotalCount(cart.reduce((acc , item) =>( acc  += item.cant  ), 0))
  }

  useEffect(() => {
    totalPriceItems()
    totalCountItems()
  }, [cart] )
  

  function onAdd (item) {
      let productRepit = cart.find(i => i.id === item.id )
        if(productRepit){
            productRepit.cant += item.cant
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
        
        <CartContext.Provider value={{ cart, onAdd , removeItemCart, buy , totalPrice ,totalCount , totalCountItems , totalPriceItems}}>
        
            {children}
        
        </CartContext.Provider>
        
  )
}

export default ContexCartProvider