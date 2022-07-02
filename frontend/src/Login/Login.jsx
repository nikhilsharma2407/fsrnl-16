import React, {useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { loginCookieUtil, loginUtil} from '../apiUtil';
import "./Login.scss"

function Login() {

  
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [valid, setvalid] = useState(false);
  

  useEffect(() => {
    setvalid(username.length && password.length);
  }, [username,password])
  
  const  login = async(e)=>{
    try {
      e.preventDefault();
      const payload = {username,password};
      console.log(payload);
      const userdata = await (await loginUtil(payload)).data;
      console.log(userdata);  
    } catch (error) {
      const {data} = error.response;
      console.log(data);
    }
    
  }

  return (

    <Card className='m-3 p-3 signup'>
      <Card.Title>Signup</Card.Title>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Usernam</Form.Label>
            <Form.Control type="text" placeholder="Enter email" onKeyUp = {e=>setusername(e.target.value)} />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onKeyUp={e => {
              setpassword(e.target.value);
              }} />
          </Form.Group>
          <Button variant="outline-primary" type="submit" disabled={!valid} onClick = {login}>
            Login
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default Login