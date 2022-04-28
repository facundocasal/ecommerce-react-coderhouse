/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import inventary from '../../utils/inventary'
import ItemList from '../ItemList/ItemList'
import Tittle from '../Tittle/Tittle'
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import {collection , getDocs , getFirestore, query, where } from 'firebase/firestore'


function ItemListContainer() {

  const [products, setProducts ] = useState([ ])
  const [loading , setLoading] = useState(true)
  const {mark} = useParams()

  useEffect(()=>{
      setLoading(true)
      const db = getFirestore();
      if(mark){
      const searchMark = query(collection(db, 'productos'),where('mark', '==' , mark));
      getDocs(searchMark).then((res)=>{
        setProducts(res.docs.map((i)=>({id: i.id , ...i.data()})))
        setLoading(false)
        console.log(products)
      });
      } else {
        const searchCollection = collection(db, 'productos');
        getDocs(searchCollection).then((res)=>{
          setProducts(res.docs.map((i)=>({id: i.id , ...i.data()})))
          setLoading(false)
      });
      }
      

      // if(mark){
      //   const searchItemMark = doc(db,'productos', mark)
      //   getDoc(searchItemMark).then((res)=>{
      //       setProducts({id: res.id , ...res.metadata()})
      //   })
      // }else {
      //   const searchItems = doc(db, 'productos')
      //   getDoc(searchItems).then((res)=>{
      //     setProducts({id: res.id , ...res.metadata()})
      //   }
      //   )
      // }


      // let promesa = new Promise ((resolve , reject) =>{
      //   setTimeout(() => {
      //     if(mark){
      //       resolve(inventary.filter(i=>i.mark === mark))
      //     } else {
      //       resolve(inventary)
      //     }
          
          
      //   }, 1000);
      // })
      // .then(res => setProducts(res))
      // .catch(err => console.log("error"))
      // .finally(()=>{
      //   setLoading(false)
      // })
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

