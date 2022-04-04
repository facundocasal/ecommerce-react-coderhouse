import React, { useEffect, useState } from 'react'
import inventary from '../../utils/inventary'
import ItemList from './ItemList'


function ItemListContainer() {

  const [arrayProducts, setArrayProducts ] = useState([])
    
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
      .then(res => setArrayProducts(res))
      .catch(err => console.log("error"))
  },[])
    
    return (
    <div>
        <ItemList products={arrayProducts}></ItemList>
    </div>
  )
}

export default ItemListContainer

