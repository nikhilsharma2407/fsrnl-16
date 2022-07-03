const initialState = {
    count:0,
    incrementValue:1
};

const ACTIONS_ENUM = {
    INCREMENT:"increment",
    DECREMENT:"decrement",
    INCREMENT_VALUE:"INCREMENT_VALUE"
};

// action is an object having type and optional payload
// actionCreator a simple fn which return the actions

export const incrementAction = (payload = 1)=>{
    return {type:ACTIONS_ENUM.INCREMENT,payload};
}
export const decrementAction = (payload = 1)=>{
    return {type:ACTIONS_ENUM.DECREMENT,payload};
}

export const incrementValueAction = (payload=1)=>{
    return {type:ACTIONS_ENUM.INCREMENT_VALUE,payload}
}

export const incrementValueAsync = (payload)=>{
    // setTimeout(() => {
    //     return {type:ACTIONS_ENUM.INCREMENT_VALUE,payload}
    // }, 2000);

    return (dispatch)=>{
        setTimeout(() => {
            dispatch({type:ACTIONS_ENUM.INCREMENT,payload})
        }, 2000);
    }
}

// Reduces => perform action on state and return new state

const countReducer = (state = initialState, action)=>{
    console.log("in reducer");
    switch (action.type) {
        case ACTIONS_ENUM.INCREMENT:
            console.log(ACTIONS_ENUM.INCREMENT);
            return {...state, count: state.count + action.payload};
    
        case ACTIONS_ENUM.DECREMENT:
            console.log(ACTIONS_ENUM.DECREMENT);
            return {...state, count: state.count - action.payload};
        case ACTIONS_ENUM.INCREMENT_VALUE:
            const {payload} = action
            return {...state, incrementValue: payload}
        default:
            return state;
            break;
    }
}

export default countReducer