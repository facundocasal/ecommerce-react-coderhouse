import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import getItem from './getItem'

function ItemDetailContainer() {

    const [item , setItem] = useState({})
    
    const [loading , setLoading] = useState(true)


    //TERNARIO  number <10? setNumber (number + 1): alert("no se puede ")
    useEffect(()=>{
        let time = 2000
        let url = "https://api.mercadolibre.com/products/MLA10025564#json"
        setTimeout(() =>
        getItem(url)
        .then(data => setItem(data))
        .finally(()=>{
            setLoading(false)   
        }),time)


    },[])

  return (
    <div>
        {loading?(<h1> Cargando productos</h1>):(<ItemDetail item={item}/>)}
        
    </div>
  )
}

export default ItemDetailContainer