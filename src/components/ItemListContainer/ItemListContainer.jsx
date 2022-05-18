import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import Tittle from '../Tittle/Tittle'
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'


function ItemListContainer() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { mark } = useParams()

  useEffect(() => {
    setLoading(true)
    const db = getFirestore();
    if (mark) {
      const searchMark = query(collection(db, 'productos'), where('mark', '==', mark));
      getDocs(searchMark).then((res) => {
        setProducts(res.docs.map((i) => ({ id: i.id, ...i.data() })))
        setLoading(false)
      });
    } else {
      const searchCollection = collection(db, 'productos');
      getDocs(searchCollection).then((res) => {
        setProducts(res.docs.map((i) => ({ id: i.id, ...i.data() })))
        setLoading(false)
      });
    }
  }, [mark])

  return (
    <>
      <Tittle text={"MiniCar"} />
      <Tittle text={"Los Mejores Autos a Escala "} />
      <div style={{ width: '100%', paddingBottom: "4rem", paddingTop: "0.5rem", margin: "auto", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {loading ? (<div style={{ display: "flex", height: "300px", alignItems: "center", flexDirection: "column" }}> <h1> Cargando Productos  </h1> <Spinner animation="grow" /></div>) : <ItemList products={products}></ItemList>}
      </div>
    </>
  )
}

export default ItemListContainer

