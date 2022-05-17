import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Spinner } from 'react-bootstrap';
import { doc, getDoc, getFirestore } from 'firebase/firestore'


function ItemDetailContainer() {

  const [item, setItem] = useState({})

  const [loading, setLoading] = useState(true)

  const { id } = useParams()
  useEffect(() => {

    const fire = getFirestore()

    setLoading(true)

    const searchItem = doc(fire, 'productos', id)
    getDoc(searchItem).then((res) => {
      setItem({ id: res.id, ...res.data() })
      setLoading(false)
    })
  }, [id])

  return (
    <>
      <div style={{ width: '100%', paddingBottom: "4.5rem",paddingTop:"0.5rem" , margin: "auto", display: "flex", justifyContent: "center" }}>
        {loading ? (<div style={{ display: "flex", height: "300px", alignItems: "center", flexDirection: "column" }}> <h1> Cargando Detalles Del Producto </h1> <br /> <Spinner animation="grow" /></div>) : (<ItemDetail key={item.id} product={item} />)}
      </div>
    </>
  )
}

export default ItemDetailContainer