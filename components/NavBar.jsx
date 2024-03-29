import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
return (
    <Navbar expand="lg" className="bg-body-secondary">
        <Container>
            <Navbar.Brand href="#home" style={{
                fontSize: "2rem",
                fontWeight: "600",
                color: "green"
            }}>Glad-Flory</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"  />
            <Navbar.Collapse id="basic-navbar-nav" style={{
                fontSize: "1rem",
                fontWeight: "600"
            }}>
            <Nav className="m-auto gap-5">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
                <NavDropdown title="Category" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar