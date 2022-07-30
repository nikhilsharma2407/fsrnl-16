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

import MyNavBar from './MyNavbar';
import { loginCookieUtil } from './apiUtil';
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
import 'bootstrap/dist/css/bootstrap.min.css';

const UsersClass = React.lazy(()=>import('./Users-test/UsersClass'));
const Users = React.lazy(()=>import('./Users/Users')) ;
const Flexbox = React.lazy(()=>import('./Flexbox/Flexbox')) ;
const Signup = React.lazy(()=>import('./Signup/Signup.jsx')) ;
const Counter = React.lazy(()=>import('./Counter/Counter')) ;
const UserProfile = React.lazy(()=>import('./UserProfile/UserProfile')) ;

const Login = React.lazy(() => import('./Login/Login'));

function App() {



  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const { isLoggedIn, userloading, loading, message, status } = user;
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
      {loading ? <Spinner className="counter spinner" animation="border" /> : null}
      <MyNavBar />
      <MyToast status={status} message={message} />
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
        <Route path='/home' element={
          <React.Suspense fallback={<Spinner className="counter spinner" animation="border" />}>
            <MyComponent name={name} email="nikhil@gmail.com" />
          </React.Suspense>
        } />
        <Route path='/flex' element={<React.Suspense fallback={<Spinner className="counter spinner" animation="border" />}>
          <Flexbox />
        </React.Suspense>
        } />
        {/* <Route path='/users' element={<Users />} /> */}
        {userloading === false ? <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route path='users' element={
            <React.Suspense fallback={<Spinner className="counter spinner" animation="border" />}>
              <Users />
            </React.Suspense>
          } />
          <Route path='profile' element={
            <React.Suspense fallback={<Spinner className="counter spinner" animation="border" />}>
              <UserProfile user={user} />
              </React.Suspense>
            } 
              />
        </Route> : null}
        {/* {userloading===false?<Route path='/users' element={
            <ProtectedRoute isLoggedIn = {isLoggedIn}>
              <Users/>
            </ProtectedRoute>
          } />:null} */}
          <Route path='/signup' element={
            
            <React.Suspense fallback={<Spinner className="counter spinner" animation="border" />}>
            <Signup />
            </React.Suspense>
          } />
          <Route path='/login' element={
            <React.Suspense fallback={<Spinner className="counter spinner" animation="border" />}>
              <Login />
            </React.Suspense>

          } />
          <Route path='/usersClass' element={
            <React.Suspense fallback={<Spinner className="counter spinner" animation="border" />}>
              <UsersClass name={name} email="nikhil@gmail.com" />
            </React.Suspense>
          } />
          <Route path='/counter' element={
            <Provider store={toolkitStore}>
              <React.Suspense fallback={<Spinner className="counter spinner" animation="border" />}>
                <Counter />
              </React.Suspense>
            </Provider>
          } />
          {/* <Typescript name="abc"></Typescript> */}
          <Route path='/router/:userId' element={<Routing />} />

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
