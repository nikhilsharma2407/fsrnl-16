import React, { useEffect, useState } from 'react'
import { Button, Card, Form, Container, Row, Col } from 'react-bootstrap'
import { signupUtil } from '../apiUtil';
import "./Signup.scss"

function Signup() {

  const [validation, setValidation] = useState({
    lowercase: false,
    uppercase: false,
    number: false,
    symbol: false,
    length: false
  })

  const [valid, setValid] = useState(false);

  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  useEffect(() => {
    const isValid = Object.values(validation).every(Boolean);
    setValid(isValid);
  }, [validation])

  const validate = (e) => {
    const { value: password } = e.target;
    console.log(password);
    const lowercase = /(?=.*[a-z])/.test(password);
    const uppercase = /(?=.*[A-Z])/.test(password);
    const number = /(?=.*\d)/.test(password);
    const symbol = /(?=.*[\W_])/.test(password);
    const length = password.length > 8;
    setValidation({
      lowercase, uppercase, number, symbol, length
    })
  };


  const signup = async (e) => {
    try {
      e.preventDefault();
      const payload = { name, username, password };
      console.log(payload);
      const userdata = await (await signupUtil(payload)).data;
      console.log(userdata);
    } catch (error) {
      const { data } = error.response;
      console.log(data);
    }

  }

  const { lowercase, uppercase, number, symbol, length } = validation;
  return (
    <Container fluid>
      <Row>
        <Col lg={{ span: 4, offset: 4 }} md={{ span: 6, offset: 3 }} sm={{ span: 10, offset: 1 }}>
          <Card className='m-3 p-3 signup'>
            <Card.Title>Signup</Card.Title>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter email" onKeyUp={e => setname(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Usernam</Form.Label>
                  <Form.Control type="text" placeholder="Enter email" onKeyUp={e => setusername(e.target.value)} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" onKeyUp={e => {
                    validate(e);
                    setpassword(e.target.value);
                  }} />
                </Form.Group>
                <Button variant="outline-primary" type="submit" disabled={!valid} onClick={signup}>
                  Submit
          </Button>
              </Form>
            </Card.Body>
            <div className='pwd-strength'>
              <div className={lowercase ? 'text-success' : 'text-danger'}>Lowercase</div>
              <div className={uppercase ? 'text-success' : 'text-danger'}>Uppercase</div>
              <div className={number ? 'text-success' : 'text-danger'}>Number 0-9</div>
              <div className={symbol ? 'text-success' : 'text-danger'}>Symbol !@#$%^&*()</div>
              <div className={length ? 'text-success' : 'text-danger'}>Atleast 8 characters</div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Signup