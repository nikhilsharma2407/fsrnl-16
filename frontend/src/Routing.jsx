import React from 'react'
import { useParams, useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Routing() {

    const params = useParams();
    const [query,setQuery]  = useSearchParams();
    const navigate = useNavigate()
// query is a JS map

const map = new Map();
map.set("name","Nikhil");

map.get("name");

console.log(map.size);

map.values();
map.keys();
map.entries()



    const {userId} = params;
    return (
        <>
            <h1>Routing Component</h1>
            <h1>Route params {JSON.stringify(params)} {userId}</h1>
            <h1>Query Params {query.get("myKey")}</h1>
            <input type="text" onChange = {e=>setQuery({myKey:e.target.value})} />

            <Button variant = "outline-primary" onClick = {e=>navigate("/login",{replace:true})}>Goto Login</Button>
        </>
    )
}

export default Routing