import React from 'react'
import Item from '../Item/Item'
import "./itemList.css"




function ItemList({products}) {

  // console.log( products)
                                   
                            
  return (
    <div className='ItemList'>

        {products.map((i)=>
                          <>
                          <Item 
                          key={i.id}
                          id={i.id}
                          model={i.model}
                          mark={i.mark}
                          img={i.img}
                          price={i.price}/>   
                          </>)}

        {/* {
        products.map((car) =>
                    <>
                      <Item 
                      // key={car.id}
                      // id={car.id}
                      mark={car.mark}
                      // model={car.model}
                      // img={car.img}
                      // price={car.price}
                      />
                    </>    
            )} */}
          
    </div>
  )
}

export default ItemList




