import React, { useEffect, useState } from 'react'
import inventary from '../../utils/inventary'
import ItemList from '../ItemList/ItemList'


function ItemListContainer() {

  const [products, setProducts ] = useState([])
    
  useEffect(()=>{
      // eslint-disable-next-line no-unused-vars
      let promesa = new Promise ((resolve , reject) =>{
        setTimeout(() => {
          if(true){
            resolve(inventary)
          } else {
            reject("hubo un error")
          }
          
        }, 3000);
      })
      .then(res => setProducts(res))
      .catch(err => console.log("error"))
  },[])
    
    return (
    <div>
        <ItemList products={products}></ItemList>
    </div>
  )
}

export default ItemListContainer

