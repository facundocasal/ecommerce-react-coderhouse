import { FaOpencart } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

export default function CartWidget (){

    return(
        <>
            <Nav.Link variant="danger" href="#cart" style={{color:"papayawhip",fontSize: "1.8rem"}}><FaOpencart></FaOpencart></Nav.Link>
        </>
    )
}