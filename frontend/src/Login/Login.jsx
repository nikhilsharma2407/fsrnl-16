import React, { useEffect, useState } from 'react'
import { Button, Card, Form, Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { loginCookieUtil, loginUtil } from '../apiUtil';
import { loginAction } from '../reducers/userReducer';
import "./Login.scss"
import { useLocation, useNavigate } from 'react-router';

function Login() {


  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [valid, setvalid] = useState(false);


  const dispatch = useDispatch();
  const {isLoggedIn} = useSelector(state => state.user);
  const {state:path=''} = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setvalid(username.length && password.length);
  }, [username, password])

  useEffect(() => {
    if(isLoggedIn){
      navigate(path||'');
    }

  }, [isLoggedIn])
  


  const login = async (e) => {
    e.preventDefault();
    const payload = { username, password };
    console.log(payload);
    await dispatch(loginAction(payload));
  }

  return (
    <Container>
      <Row>
        <Col lg = {{span:4,offset:4}} md = {{span:6,offset:3}} sm = {{span:10,offset:1}}>
          <Card className='m-3 p-3 signup'>
            <Card.Title>Signup</Card.Title>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Usernam</Form.Label>
                  <Form.Control type="text" placeholder="Enter email" onKeyUp={e => setusername(e.target.value)} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" onKeyUp={e => {
                    setpassword(e.target.value);
                  }} />
                </Form.Group>
                <Button variant="outline-primary" type="submit" disabled={!valid} onClick={login}>
                  Login
          </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

  )
}

export default Login