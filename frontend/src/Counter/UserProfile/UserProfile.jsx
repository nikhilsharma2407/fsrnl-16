import "./UserProfile.scss";

import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import User from "../../User/User";
import Friend from "./Friend";

function UserProfile({user}) {
// function UserProfile(props) {
//   const {user} = props
console.log(user);

  const [friends, setfriends] = useState([]);
  const {friendList,name } = user;


  useEffect(() => {
    (async()=>{
      const url = 'https://dummyapi.io/data/v1/user/';
      const TOKEN = "623f19872934031e5b0d8089";
      const headers = {
          'app-id': TOKEN
      }
      
      friendList.forEach(async (id)=>{
        let url_id = url+id 
        const data = await (await axios.get(url_id,{headers})).data;
        setfriends(friends=>[...friends,data]);
      })
    })()
  
    
  }, [])
  


console.log(friends);

  return (
    <Container>
    <Row>
      <Col lg = {{span:4,offset:4}} md = {{span:6,offset:3}} sm = {{span:10,offset:1}}>
        <div className="p-3">
          <h1>Welcome - {name}</h1>
          friendList.map(user=><Friend user = {user}></Friend>)

        </div>
        {/* <Card className='m-3 p-3 signup'>
          <Card.Title>UserProfile</Card.Title>
          <Card.Body>
          </Card.Body>
        </Card> */}
      </Col>
    </Row>
  </Container>
  )
}

export default UserProfile