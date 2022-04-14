import React, { useEffect, useState } from 'react'
import inventary from '../../utils/inventary'
import ItemList from '../ItemList/ItemList'
import Tittle from '../Tittle/Tittle'
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


function ItemListContainer() {

  const [products, setProducts ] = useState([])
  const [loading , setLoading] = useState(true)
  const {mark} = useParams()

  useEffect(()=>{
      // eslint-disable-next-line no-unused-vars
      let promesa = new Promise ((resolve , reject) =>{
        setTimeout(() => {
          if(mark){
            resolve(inventary.filter(i=>i.mark === mark))
          } else {
            resolve(inventary)
          }
          
          
        }, 1000);
      })
      .then(res => setProducts(res))
      .catch(err => console.log("error"))
      .finally(()=>{
        setLoading(false)
      })
  },[mark])
    
    return (
    <>
    <Tittle texto={"catalogo"}/>
    <div style={{ width: '90%' ,padding: "4rem", margin:"auto" , display:"flex" , justifyContent: "center",flexWrap:"wrap"}}>
        {loading?(<div style={{display: "flex" , height:"300px" , alignItems:"center", flexDirection:"column"}}> <h1> Cargando Productos  </h1> <Spinner animation="grow"/></div>):<ItemList products={products}></ItemList>}
    </div>
    </>
  )
}

export default ItemListContainer

