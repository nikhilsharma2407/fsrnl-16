import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import User from '../User/User';
import { useSearchParams } from 'react-router-dom';

function Users() {
    const [users, setusers] = useState([]);
    const [search] = useSearchParams();

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
    const name = (search.get('name') || '').toLowerCase();
    return (
        <Container fluid>
            <Row>
                {users.filter(user=>user.firstName.toLowerCase().includes(name))
                .map(user => <User key={user.id} user={user} />)}
            </Row>
        </Container>
    );
}

export default Users