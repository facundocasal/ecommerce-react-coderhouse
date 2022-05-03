import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from '../ContexCart'
import React, { useContext } from 'react'

export default function CartWidget() {
    const { totalCount } = useContext(CartContext)
    return (
        <>
            <Link to={'/cart'} style={{ color: "papayawhip", fontSize: "1.8rem" }} >
                <FaOpencart />({totalCount})
            </Link>
        </>
    )
}