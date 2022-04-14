import React from 'react'
import Item from '../Item/Item'
import "./itemList.css"




function ItemList({products}) {
                                   
                            
  return (
    <div className='ItemList'>

        {
        products.map((car) =>
                    <>
                      <Item 
                      key={car.id}
                      id={car.id}
                      name={car.mark}
                      model={car.model}
                      img={car.img}
                      price={car.price}
                      />
                    </>    
            )}
    </div>
  )
}

export default ItemList




