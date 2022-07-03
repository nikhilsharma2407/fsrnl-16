import { loginUtil } from "../apiUtil";

const initialState = {
    isLoggedIn : false,
    username:'',
    name:'',
    friendList:[],
    message : ''
}


const USER_ACTIONS = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
    ADD_FRIEND: "ADD_FRIEND",
    REMOVE_FRIEND: "REMOVE_FRIEND"
};

const loginActionCreator = payload=>{
    const {status:isLoggedIn, message,data:{username,name,friendList}} = payload;
    const userData = {message,username,name,friendList,isLoggedIn};
    return {type:USER_ACTIONS.LOGIN,payload:userData};
}

export const loginAction = (payload)=>{
    return async (dispatch)=>{
        try {
            const userData = await (await loginUtil(payload)).data;
            if(userData.status){
                console.log("userReducer",userData);
                alert("Logged in successfully");
                dispatch(loginActionCreator(userData));
            };    
        } catch (error) {
            console.log(error);
            alert("login failed")
        }
    }
};


const userReducer = (state = initialState,action)=>{
    switch (action.type) {
        case USER_ACTIONS.LOGIN:
            const {payload} = action;
            console.log("loginaction",payload);
            return {...state,...payload}
    
        default:
            return state
    }
};


export default userReducer