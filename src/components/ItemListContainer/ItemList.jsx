import React from 'react'
import Item from './Item'



function ItemList({products}) {
                                   
                            
  return (
    <div className='ItemList'>

        {
        products.map((auto) => 
                    <Item 
                    key={auto.id}
                    name={auto.name}
                    img={auto.img}
                    stock={auto.stock}
                    description={auto.description}
                    />         
            )}
    </div>
  )
}

export default ItemList




