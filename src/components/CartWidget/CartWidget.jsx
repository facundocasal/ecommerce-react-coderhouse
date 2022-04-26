import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from '../ContextCart/ContexCart'
import React, { useContext } from 'react'
import './cartWidget.css'



export default function CartWidget (){

    const {totalCount} = useContext(CartContext)

    return(
        <>
            <Link to={'/cart'}  className={totalCount<=0?("cart"):(" ")} style={{ color:"papayawhip", fontSize: "1.8rem"}} >
                <FaOpencart/>({totalCount})
            </Link>
        </>
    )
}