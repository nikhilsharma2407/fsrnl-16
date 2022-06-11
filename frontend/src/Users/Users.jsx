import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import User from '../User/User';

function Users() {
    const [users, setusers] = useState([]);


    const TOKEN = "623f19872934031e5b0d8089";
    const url = 'https://dummyapi.io/data/v1/user?limit=10';
    const headers = {
        'app-id': TOKEN
    }
    useEffect(() => {
        (async () => {
            const { data } = await (await axios.get(url, { headers })).data;
            console.log(data);
            setusers(data);
        })()
        document.title = "Users"
    }, [])

    return (
        <Container fluid>
            <Row>
                {users.map(user => <User key={user.id} user={user} />)}
            </Row>
        </Container>
    );
}

export default Users