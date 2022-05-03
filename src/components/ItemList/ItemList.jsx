import React from 'react'
import Item from '../Item/Item'
import "./itemList.css"




function ItemList({ products }) {
  return (
    <div className='ItemList'>

      {products.map((i) =>
        <>
          <Item
            key={i.id}
            id={i.id}
            model={i.model}
            mark={i.mark}
            img={i.img}
            price={i.price} />
        </>)}
    </div>
  )
}

export default ItemList




