import React from "react";
import useFetch from "./hooks/useFetch";
import { verifyUserService } from "./services/services";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function Layout() {
    const accessToken = localStorage.getItem('access-token') || '';
    const [ , loading , errorMessage] = useFetch(() => verifyUserService(accessToken) , []);
    
    if (loading) {
        return <h1>loading</h1>
    }
    
    else {
        if (errorMessage) { 
            return <Navigate to="/login" replace/>

        }
        return <Outlet />;
    }
    
}
