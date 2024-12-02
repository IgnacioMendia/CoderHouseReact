import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ShoppingCart from '../shoppingCart/ShoppingCart'

const NavBar = () => {
  return (
    <Navbar  bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Clothes">Ropa</Nav.Link>
            <Nav.Link href="#link">Tecnologia</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant=""><i className="bi bi-person-circle fs-2"></i></Button>
            <ShoppingCart />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar