import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent/MyComponent';
import React from 'react';
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

function App() {
  const name = "Nikhil Sharma"
  return (
    <BrowserRouter>
    <MyNavBar/>
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
        <Route path='/users' element={<Users />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/usersClass' element={<UsersClass name={name} email="nikhil@gmail.com" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
