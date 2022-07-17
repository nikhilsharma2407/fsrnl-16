import { Button } from 'bootstrap';
import Spinner from 'react-bootstrap/Spinner';

import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
// import { decrementAction, incrementAction,incrementValueAction, incrementValueAsync } from '../reducers/CountReducer';
import { decrementActionToolkit, incrementActionToolkit, incrementValueActionToolkit, fetchUserById } from './couterSlice';

import "./counter.scss"

function Counter() {
    // dont use state
    // const [count, setcount] = useState(0);
    const { count, incrementValue,loading,user } = useSelector(state => state.count);
    const dispatch = useDispatch();

    const payload = {
        title: 'test123',
        body: 'dummy data',
        userId: 1,
    }
    console.log("img data",user);
    return (
        <>
            {loading?<Spinner className = "counter spinner" animation="border" />:null};
            <h1>current count - {count}</h1>
            <button onClick={e => dispatch(incrementActionToolkit(incrementValue))}>Increment Count</button>
            <button onClick={e => dispatch(decrementActionToolkit())}>Decrement Count</button>
            <button onClick={e => dispatch(fetchUserById(payload))}>Fetch user async</button>
            <img src= {user && user.thumbnailUrl}></img>
            <input onChange={e => dispatch(incrementValueActionToolkit(+e.target.value))} placeholder="increment count by" type="number" />
        </>
    )
}

export default Counter
