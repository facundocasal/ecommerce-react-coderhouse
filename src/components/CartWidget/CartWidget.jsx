import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from '../ContextCart/ContexCart'
import React, { useContext } from 'react'

export default function CartWidget (){

    const {cart} = useContext(CartContext)

    return(
        <>
            <Link to={'/cart'} style={{color:"papayawhip",fontSize: "1.8rem"}} >
                <FaOpencart/>({cart.length})
            </Link>
        </>
    )
}