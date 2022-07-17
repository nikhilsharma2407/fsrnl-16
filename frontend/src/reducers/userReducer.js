import { loginUtil, logoutUtil, loginCookieUtil, addFriendUtil, removeFriendUtil } from "../apiUtil";
import { async } from "q";

const initialState = {
    isLoggedIn : false,
    username:'',
    name:'',
    friendList:[],
    message : '',
    status:false,
    loading:null,
    userloading:null
}


const USER_ACTIONS = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
    ADD_FRIEND: "ADD_FRIEND",
    REMOVE_FRIEND: "REMOVE_FRIEND",
    LOADING: "LOADING",
    MESSAGE: "MESSAGE",
    USER_LOADING: "USER_LOADING",
};

const loginActionCreator = payload=>{
    const {status, message,data:{username,name,friendList}} = payload;
    const isLoggedIn = status;
    const userData = {status,message,username,name,friendList,isLoggedIn};
    return {type:USER_ACTIONS.LOGIN,payload:userData};
}
const logoutActionCreator = () =>{
    return {type:USER_ACTIONS.LOGOUT};
}

const loadingActionCreator = payload=>{
    return {type:USER_ACTIONS.LOADING,payload};
}
const userLoadingActionCreator = payload=>{
    return {type:USER_ACTIONS.USER_LOADING,payload};
}

export const messageActionCreator = payload=>{
    return {type:USER_ACTIONS.MESSAGE,payload};
}
export const addFriendActionCreator = payload=>{
    return {type:USER_ACTIONS.ADD_FRIEND,payload};
}
export const removeFriendActionCreator = payload=>{
    return {type:USER_ACTIONS.REMOVE_FRIEND,payload};
}

const asyncAction  = (apiUtil,payload,action)=>{
    return async(dispatch)=>{
        try {
            if(apiUtil.name==="loginCookieUtil" ){
                dispatch(userLoadingActionCreator(true));    
            }
            dispatch(loadingActionCreator(true));
            const data = await (await apiUtil(payload)).data;
            console.log('userData from response',data);
            if(data.status){
                dispatch(action(data));
            };    
        } catch (error) {
            const {message} = error.response.data;
            dispatch(messageActionCreator(message))
            console.log(message);
        }
        finally{
            dispatch(loadingActionCreator(false));
            if(apiUtil.name==="loginCookieUtil" ){
                dispatch(userLoadingActionCreator(false));    
            }
        }
    }
}

export const addFriend = (payload)=>{
    return asyncAction(addFriendUtil,payload,addFriendActionCreator)
}

export const removeFriend = (payload)=>{
    return asyncAction(removeFriendUtil,payload,removeFriendActionCreator)
}

export const loginAction = (payload)=>{
    return asyncAction(loginUtil,payload,loginActionCreator)
};


export const loginWithCookieAction = (payload)=>{
    return asyncAction(loginCookieUtil,null,loginActionCreator)
};
export const logoutAction = ()=>{
    return asyncAction(logoutUtil,null,logoutActionCreator)
};


const userReducer = (state = initialState,action)=>{
    switch (action.type) {
        case USER_ACTIONS.LOGIN:
            var {payload} = action;
            console.log("loginaction",payload);
            return {...state,...payload}

        case USER_ACTIONS.LOADING:
            var {payload} = action;
            console.log("loading",payload);
            return {...state,loading:payload};

        case USER_ACTIONS.USER_LOADING:
            var {payload} = action;
            console.log("loading",payload);
            return {...state,userloading:payload};

        case USER_ACTIONS.MESSAGE:
            var {payload} = action;
            console.log("message",payload);
            return {...state,message:payload};

        case USER_ACTIONS.ADD_FRIEND:
            var {payload:{data,message}} = action;
            console.log("add Friend",data,message);
            var {friendList} = state;
            return {...state,message,friendList:[...friendList,data]};

        case USER_ACTIONS.REMOVE_FRIEND:
            var {payload:{data,message}} = action;
            console.log("remove Friend",data,message);
            var {friendList} = state;
            return {...state,message,friendList:friendList.filter(id=>id!==data)};
            
        case USER_ACTIONS.LOGOUT:
            return initialState
    
        default:
            return state
    }
};


export default userReducer