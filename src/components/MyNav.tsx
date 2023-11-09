import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const MyNav = () => (
    <Navbar
        expand="sm"
        className="bg-body-tertiary mb-3"
        bg="dark"
        data-bs-theme="dark"
    >
        <Container fluid>
            <Navbar.Brand as={NavLink} to="/">Spaceflight</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link disabled href="#">About</Nav.Link>
                    <Nav.Link disabled href="#">Browse</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)

export default MyNav