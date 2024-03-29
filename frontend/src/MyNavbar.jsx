import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { logoutAction } from './reducers/userReducer';
import Avatar from './UserProfile/Avatar/Avatar';

import "./MyNavBar.scss"

function MyNavBar() {
  const { user } = useSelector(state => state);
  const { isLoggedIn,name } = user;
  const dispatch = useDispatch();
  const [, setSearch] = useSearchParams();

  return (
    <Navbar variant="dark" bg="dark" expand="sm">
      <Container fluid>
        <Navbar.Brand as={Link} to='/'>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 my-lg-0"
          >
            <Nav.Link as={Link} to='/users' >Users</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/counter'>Counter</Nav.Link>
          </Nav>

          {isLoggedIn ? (<Nav className="ms-auto">
            <NavDropdown renderMenuOnMount={true} title={
              <Avatar name = {name}/>
            } id="basic-nav-dropdown" >
              <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item as={Button} variant="outline" onClick={e => dispatch(logoutAction())}>Logout</NavDropdown.Item>
            </NavDropdown></Nav>) : (<><Nav className="ms-auto">
              <Nav.Link as={Link} to='/login'>Login</Nav.Link>
            </Nav>
              <Nav className="">
                <Nav.Link as={Link} to='/signup'>Signup</Nav.Link>
              </Nav></>)}
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e => setSearch({ name: e.target.value }))}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;