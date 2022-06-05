import axios from 'axios';
import React, { useEffect, useState } from 'react'



function Users(props) {
    // const [first,second] = [1,2];
    const [users, setUsers] = useState([]);
    const [userId, setUserID] = useState("1");
    const BASE_URL = "https://jsonplaceholder.typicode.com/users/";

    // Mounted -> empty dependency arrray
    useEffect(() => {
        (async ()=>{
            console.log("mounted");
            const data = await (await axios.get(BASE_URL)).data;
            console.log(data);
            setUsers(data); 
        })();
        // componentWillUnmount
        return ()=>{
            console.log("unmount hook");
        }
    }, []);

    
    // did Update lifecycle hook 
    useEffect(() => {
        (async ()=>{
            console.log("updated");
            const url = BASE_URL+userId;
            const userData = await (await axios.get(url)).data;
            console.log({userData});
        })();
    }, [userId])
    

    console.log("render");
    // console.log(props);
    // console.log(users);
    // console.log(userID);
    return (
        <>
            <div>props - {props.name} {props.email}</div>
            <input type="number" min="1" max="10"
                onChange={e => setUserID(e.target.value)} />
            <h1>user id - {userId}</h1>
            <div>Users</div>
            <button onClick={e=>setUsers([])}>Update Users</button>
        </>
    )
}

export default Users