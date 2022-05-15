import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from '../ContexCart'
import React, { useContext } from 'react'
import "./cartWidget.css"

export default function CartWidget() {
    const { totalCount } = useContext(CartContext)
    return (
        <>
            <Link to={'/cart'} className={"d-flex align-items-center  justify-content-around"} style={{ color: "papayawhip", fontSize: "1.8rem" }} >
                <FaOpencart/>
                <spam className={(totalCount?("show"):"noshow")}>({totalCount})</spam>
            </Link>
        </>
    )
}