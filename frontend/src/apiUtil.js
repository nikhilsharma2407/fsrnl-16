
import axios from "axios"
const BASE_URL  = "http://localhost:4000/";

const SIGNUP = "user/signup";
const LOGIN = "user/login";
const LOGOUT = "user/logout";
const ADD_FRIEND = "user/addFriend";
const REMOVE_FRIEND = "user/removeFriend";

const createURL = (endpoint)=> BASE_URL+endpoint;

export const signupUtil = (payload)=>{
    const url = createURL(SIGNUP);
    return axios.post(url,payload);
};

export const loginUtil = (payload)=>{
    const url = createURL(LOGIN);
    return axios.post(url,payload,{withCredentials:true});
};

export const loginCookieUtil = ()=>{
    const url = createURL(LOGIN);
    return axios.get(url,{withCredentials:true});
};

export const logoutUtil = ()=>{
    const url = createURL(LOGOUT);
    return axios.get(url);
};

export const addFriendUtil = (payload)=>{
    const url = createURL(ADD_FRIEND);
    return axios.post(url,payload,{withCredentials:true});
};

export const removeFriendUtil = (payload)=>{
    const url = createURL(REMOVE_FRIEND);
    return axios.post(url,payload,{withCredentials:true});
};