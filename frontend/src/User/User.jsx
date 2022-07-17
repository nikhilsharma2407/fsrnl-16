import React from 'react'
import { Card, Button, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addFriendUtil } from '../apiUtil';
import "./User.scss"
import { addFriendActionCreator, removeFriendActionCreator, addFriend, removeFriend } from '../reducers/userReducer';
function User(props) {
    const dispatch = useDispatch();
    const {friendList } = useSelector(state => state.user);

    const { user: { id,picture, title, firstName, lastName } } = props;
    // const { picture, title, firstName, lastName } = user

    const addToFreindlist = async()=>{
            const payload = {id,friendName:firstName};
            dispatch(addFriend(payload));
    }

    const removeFromFriend = async()=>{
            const payload = {id,friendName:firstName};
            dispatch(removeFriend(payload));
    }

    return (
        <Col sm="12" md="6" lg= "4">
        <Card className="user">
            <Card.Body className = "d-flex">
                <img src={picture} />
                <div className = "data">
                    <strong>{title.toUpperCase()} {firstName} {lastName}</strong>
                    {friendList.includes(id)?<Button className = "data__button" variant="outline-danger" onClick = {removeFromFriend}>Remove Friend</Button>:
                    <Button className = "data__button" variant="outline-primary" onClick = {addToFreindlist}>Add Friend</Button>
                    }
                </div>
            </Card.Body>
        </Card>
        </Col>
        // block__element-modifier

    )
}

export default User