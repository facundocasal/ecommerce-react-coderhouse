import CartWidget from './CartWidget';
import {Navbar , Nav , Container} from 'react-bootstrap';

export default function NavBar() {

    return (
        <Navbar expand="lg" bg="dark"  variant="dark">
            <Container>
                <Navbar.Brand href="#home">INICIO</Navbar.Brand>
                <CartWidget></CartWidget>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#productos">Productos</Nav.Link>
                        <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                        <Nav.Link href="#dondeEstamos">Donde Estamos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                    
            </Container>
            
        </Navbar>
    )
}