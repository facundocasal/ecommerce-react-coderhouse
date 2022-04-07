import React from 'react'
import {Card} from 'react-bootstrap'

function ItemDetail({item}) {
  return (
    <>
        {
            <div style={{ width: '60%' , height: "80vh", margin:"auto" , display:"flex" ,alignItems: "center" , justifyContent: "center",flexDirection:"column"}}>
                <div>
                    <h3 style={{ textAlign: "center" }} > {item.name}</h3>
                </div>
                <div style={{display:"flex"}}>
                    <div>
                        <img style={{ width:"300px", height:"300px"}} src={item.pictures[0].url} alt="" />
                    </div>
                    <div>
                        <Card.Title>precio $15000.-</Card.Title>
                        <Card.Title>colores</Card.Title>
                        <div style={{display:"flex" , width:"60%" , justifyContent:"space-around" }}>
                            <div>
                                <a style={{display:"flex", flexDirection:"column" , textDecoration:"none" , color:"black" , textAlign:'center',fontWeight:"600",fontSize: "1.5rem"}} href=" ">
                                <img style={{ width: '100px',height:"80px"}}  src={item.pickers[1].products[0].thumbnail} alt="" />
                                 Dorado</a>
                            </div>
                            <div >
                                <a style={{display:"flex", flexDirection:"column" , textDecoration:"none" , color:"black" , textAlign:'center',fontWeight:"600",fontSize: "1.5rem"}} href=" ">
                                    <img style={{ width: '100px',height:"80px"}} src={item.pickers[1].products[1].thumbnail} alt="" />
                                Gris </a>
                            </div>
                            <div >
                                <a style={{display:"flex", flexDirection:"column" , textDecoration:"none" , color:"black" , textAlign:'center', fontWeight:600 , fontSize: "1.5rem"}} href=" ">
                                    <img style={{ width: '100px',height:"80px"}} src={item.pickers[1].products[2].thumbnail} alt="" />
                                Negro</a>
                            </div>
                        </div>
                        <Card.Title>Descripcion</Card.Title>
                        <Card.Text>
                            {item.short_description.content}
                        </Card.Text>
                    </div>
                </div>
            </div>
        }
    </>
  )
}

export default ItemDetail