import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Spinner } from 'react-bootstrap';
import inventary from '../../utils/inventary'

function ItemDetailContainer() {

    const [item , setItem] = useState({})
    
    const [loading , setLoading] = useState(true)

    const {id} = useParams()
    
    


    useEffect(()=>{
        setLoading(true)
        // eslint-disable-next-line no-unused-vars
        let promesa = new Promise ((resolve , reject) =>{
          setTimeout(() => {
              // eslint-disable-next-line eqeqeq
              resolve(inventary.find((element => element.id === Number(id))))
            
          }, 1000);
        })
        .then(res => setItem(res))
        .catch(err => console.log("error"))
        .finally(()=>{
          setLoading(false)
        })
    },[id])

    
  return (
    <>
        <div style={{ width: '100%' ,padding: "4rem", margin:"auto" , display:"flex" , justifyContent: "center"}}>
            {loading?(<div style={{display: "flex", height:"300px" , alignItems:"center", flexDirection:"column"}}> <h1> Cargando Detalles Del Producto </h1> <br /> <Spinner animation="grow"/></div>):(<ItemDetail key={item.id} product={item}/>)}
        </div>
    </>
  )
}

export default ItemDetailContainer