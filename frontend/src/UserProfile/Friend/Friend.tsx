import "../../User/User.scss"
import React from 'react'
import { IFriend } from '../interface';
import { Col, Card,Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeFriend } from '../../reducers/userReducer';

interface IProps{
    friend:IFriend
}

interface IPayload {
  id:string;
  friendName:string
};

function Friend(props:IProps) {
    const {friend:{firstName,lastName,title,picture,id}} = props

  const dispatch = useDispatch()

    const removeFromFriend = async()=>{
      const payload:IPayload = {id,friendName:firstName};
      dispatch<any>(removeFriend(payload));
}

return (
  <Card className="user">
      <Card.Body className = "d-flex">
          <img src={picture} />
          <div className = "data">
              <strong>{title.toUpperCase()} {firstName} {lastName}</strong>
              <Button className = "data__button" variant="outline-danger" onClick = {removeFromFriend}>Remove Friend</Button>
              
          </div>
      </Card.Body>
  </Card>
  // block__element-modifier

)
}

export default Friend