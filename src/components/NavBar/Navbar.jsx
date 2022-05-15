import CartWidget from '../CartWidget/CartWidget';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './navbar.css';

export default function NavBar() {

    const section = ["bmw", "audi", "nissan", "chevrolet"]

    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link to={"/"} className="navLink align-items-center">Inicio</Link></Navbar.Brand>
                <CartWidget />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto nav">
                        <Navbar.Brand>Marcas :</Navbar.Brand>
                        {
                            section.map((i) =>
                                <Link className="navLink" to={`/category/${i}`}>{i}</Link>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}