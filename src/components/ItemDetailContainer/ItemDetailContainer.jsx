import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import getItem from './getItem'
import { Spinner } from 'react-bootstrap';

function ItemDetailContainer() {

    const [item , setItem] = useState({})
    
    const [loading , setLoading] = useState(true)


    //TERNARIO  number <10? setNumber (number + 1): alert("no se puede ")
    useEffect(()=>{
        let time = 3000
        let url = "https://api.mercadolibre.com/products/MLA10025564#json"
        setTimeout(() =>
        getItem(url)
        .then(data => setItem(data))
        .finally(()=>{
            setLoading(false)   
        }),time)


    },[])

  return (
    <>
        <div style={{ width: '100%' , height: "90vh", margin:"auto" , display:"flex" ,alignItems: "center" , justifyContent: "center"}}>
            {loading?(<div style={{display: "flex" , justifyContent:'space-around' , alignItems:"center"}}> <h1> Cargando Detalles Del Producto </h1> <Spinner animation="grow"/></div>):(<ItemDetail item={item}/>)}
        </div>
    </>
  )
}

export default ItemDetailContainer