import React from 'react'
import { Nav } from 'react-bootstrap';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./footer.css"

function Footer() {
    return (

        <>
            <footer className='bg-dark'>
                <Nav className=" d-flex justify-content-center w-100  align-items-center" activeKey="/home">
                    <Nav.Item >
                        <Nav.Link href='https://github.com/facundocasal'>GitHub <FaGithub /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link href='https://www.linkedin.com/in/facundo-casal-471869208/'>Linkedin  <FaLinkedinIn /></Nav.Link>
                    </Nav.Item>
                </Nav>
                <p className="text-center mt-1 ">Produced and Design x Facundo Nahuel Casal</p>
            </footer>
        </>

    )
}

export default Footer