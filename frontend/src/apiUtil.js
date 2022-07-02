
import axios from "axios"
const BASE_URL  = "http://localhost:4000/";

const SIGNUP = "user/signup";
const LOGIN = "user/login";
const ADD_FRIEND = "user/addFriend";

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

export const addFriendUtil = (payload)=>{
    const url = createURL(ADD_FRIEND);
    return axios.post(url,payload,{withCredentials:true});
};