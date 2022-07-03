import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function MyNavBar() {
  const {isLoggedIn} = useSelector(state => state.user)

  return (
    <Navbar variant="dark" bg="dark" expand="sm">
      <Container fluid>
        <Navbar.Brand as={Link}  to='/'>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 my-lg-0"
          >
            <Nav.Link as={Link}  to='/users' >Users</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as = {Link} to='/counter'>Counter</Nav.Link>
          </Nav>
          {isLoggedIn?<Nav className = "ms-auto">
            <Nav.Link as = {Button} variant= "outline">Logout</Nav.Link>
          </Nav>:(<><Nav className = "ms-auto">
            <Nav.Link as = {Link} to='/login'>Login</Nav.Link>
          </Nav>
          <Nav className = "">
            <Nav.Link as = {Link} to='/signup'>Signup</Nav.Link>
          </Nav></>)}
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;