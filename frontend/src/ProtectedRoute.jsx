import React from 'react'
import { Navigate } from 'react-router';
import {Outlet} from "react-router-dom"
import { useLocation } from 'react-router';

function ProtectedRoute(props) {
    const {pathname} = useLocation();
    const {isLoggedIn, children} = props;
    if(!isLoggedIn){
        alert("Please login to continue!!!");
        return <Navigate to = "/login" state={pathname} replace/>
    }
    return <Outlet/>;
    return children;
}

export default ProtectedRoute