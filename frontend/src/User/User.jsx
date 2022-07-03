import React from 'react'
import { Card, Button, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { addFriendUtil } from '../apiUtil';
import "./User.scss"
function User(props) {

    const {friendList } = useSelector(state => state.user);

    const { user: { id,picture, title, firstName, lastName } } = props;
    // const { picture, title, firstName, lastName } = user

    const addFriend = async()=>{
        try {
            const payload = {id,friendName:firstName};
            const data = await (await addFriendUtil(payload)).data;
            console.log(data);    
        } catch (error) {
            const message = error.response.data;
            console.log(message);
        }
        
    }

    return (
        <Col sm="12" md="6" lg= "4">
        <Card className="user">
            <Card.Body className = "d-flex">
                <img src={picture} />
                <div className = "data">
                    <strong>{title.toUpperCase()} {firstName} {lastName}</strong>
                    {friendList.includes(id)?<Button className = "data__button" variant="outline-danger" onClick = {addFriend}>Remove Friend</Button>:
                    <Button className = "data__button" variant="outline-primary" onClick = {addFriend}>Add Friend</Button>
                    }
                </div>
            </Card.Body>
        </Card>
        </Col>
        // block__element-modifier

    )
}

export default User