import "./UserProfile.scss";

import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { IUser, IFriend } from "./interface";
import Friend from "./Friend/Friend";

interface IProps{
    user:IUser
}

function UserProfile({user}:IProps) {
// function UserProfile(props) {
//   const {user} = props
console.log(user.username);

  const [friends, setfriends] = useState<IFriend[]>([]);
    const {friendList,name} = user    

  useEffect(() => {
    (async()=>{
      const url = 'https://dummyapi.io/data/v1/user/';
      const TOKEN = "623f19872934031e5b0d8089";
      const headers = {
          'app-id': TOKEN
      }
      
      friendList.forEach(async (id)=>{
        let url_id = url+id 
        const data = await (await axios.get<IFriend>(url_id,{headers})).data;
        setfriends(friends=>{
          const uniqueFriends  = new Set<IFriend>([...friends,data])
          return Array.from(uniqueFriends);
        })
      })
    })()
  }, [])
  


  return (
    <Container>
    <Row>
        <h1>Welcome - {name}</h1>
        <div className="p-3 grid-container">
          {friends.map(friend=><Friend friend = {friend} key={friend.id}/>)}
        </div>
    </Row>
  </Container>
  )
}

export default UserProfile