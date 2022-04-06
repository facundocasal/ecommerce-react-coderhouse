import React from 'react'
import Item from '../Item/Item'



function ItemList({products}) {
                                   
                            
  return (
    <div className='ItemList'>

        {
        products.map((car) => 
                    <Item 
                    key={car.id}
                    name={car.name}
                    img={car.img}
                    stock={car.stock}
                    description={car.description}
                    />         
            )}
    </div>
  )
}

export default ItemList




