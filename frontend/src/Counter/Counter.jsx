import { Button } from 'bootstrap';
import React, { useState } from 'react'
import {useDispatch,useSelector} from "react-redux";
import { decrementAction, incrementAction,incrementValueAction, incrementValueAsync } from '../reducers/CountReducer';

function Counter() {
    // dont use state
    // const [count, setcount] = useState(0);
    const state = useSelector(state=>state.count);
    const dispatch = useDispatch();

    console.log(state);
    const {count,incrementValue} = state;
    return (
        <div>
            <h1>current count - {count}</h1>
            <button onClick={e=>dispatch(incrementAction(incrementValue))}>Increment Count</button>
            <button onClick={e=>dispatch(decrementAction())}>Decrement Count</button>
            <button onClick={e=>dispatch(incrementValueAsync(incrementValue))}>Increment action async</button>
            <input onChange={e=>dispatch(incrementValueAction(+e.target.value))} placeholder = "increment count by" type="number" />
        </div>
    )
}

export default Counter
