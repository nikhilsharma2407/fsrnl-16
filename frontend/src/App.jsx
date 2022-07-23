import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent/MyComponent';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import UsersClass from './Users-test/UsersClass';
import MyNavBar from './MyNavbar';
import Users from './Users/Users';
import 'bootstrap/dist/css/bootstrap.min.css';
import Flexbox from './Flexbox/Flexbox';
import Signup from './Signup/Signup.jsx';
import Login from './Login/Login';
import { loginCookieUtil } from './apiUtil';
import Counter from './Counter/Counter';
import { applyMiddleware, createStore } from 'redux';
import countReducer from './reducers/CountReducer';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { loginWithCookieAction } from './reducers/userReducer';
import ProtectedRoute from './ProtectedRoute';
import Routing from './Routing';
import MyToast from './MyToast';
import toolkitStore from "./store"
import { Spinner } from 'react-bootstrap';
import "./Counter/counter.scss"
import UserProfile from './Counter/UserProfile/UserProfile';

function App() {



  const dispatch = useDispatch();
  const user = useSelector(state=>state.user);
  const {isLoggedIn,userloading,loading,message,status} = user;
  useEffect(() => {
    // (async()=>{
    //   try {
    //     const response = await (await loginCookieUtil()).data;
    //     console.log(response);
    //     if(response.status){
    //       alert("logged in successfully with cookie!!!")
    //     }
    //   } catch (error) {
    //     console.log(error.response.data);
    //   }
    // })()
    dispatch(loginWithCookieAction());
  }, [])

  const name = "Nikhil Sharma"
  return (
    
      <BrowserRouter>
      {loading?<Spinner className = "counter spinner" animation="border" />:null}
      <MyNavBar/>
      <MyToast status = {status} message = {message}/>
        {/* <div >
          <h1>Router Link</h1>
          <Link to="/home">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/usersClass">UsersClass</Link>
        </div> */}

        {/* <div >
          <h1>Anchor</h1>
          <a href="/">Home</a>
          <a href="/users">Users</a>
        </div> */}

        <Routes>
          <Route path='/home' element={<MyComponent name={name} email="nikhil@gmail.com" />} />
          <Route path='/flex' element={<Flexbox />} />
          {/* <Route path='/users' element={<Users />} /> */}
          {userloading===false? <Route element = {<ProtectedRoute isLoggedIn = {isLoggedIn} />}>
                <Route path='users' element = {<Users/>}/>
                <Route path = 'profile' element ={<UserProfile user = {user}/>}/>
          </Route>:null}
          {/* {userloading===false?<Route path='/users' element={
            <ProtectedRoute isLoggedIn = {isLoggedIn}>
              <Users/>
            </ProtectedRoute>
          } />:null} */}
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/usersClass' element={<UsersClass name={name} email="nikhil@gmail.com" />} />
          <Route path='/counter' element={
          <Provider store={toolkitStore}>
            <Counter/>
          </Provider>
          } />
          {/* <Typescript name="abc"></Typescript> */}
          <Route path='/router/:userId' element={<Routing/>} />

          {/* {userloading===false?<Route path='/profile' element={
            <ProtectedRoute isLoggedIn = {isLoggedIn}>
              <UserProfile user = {user}/>
            </ProtectedRoute>
          } />:null} */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
