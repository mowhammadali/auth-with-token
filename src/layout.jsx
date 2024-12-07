import React from "react";
import useFetch from "./hooks/useFetch";
import { verifyUserService } from "./services/services";
import { Outlet } from "react-router-dom";
import Login from "./pages/login/login";

export default function Layout() {
    const accessToken = localStorage.getItem('accessToken') || '';
    const [ , loading , errorMessage] = useFetch(() => verifyUserService(accessToken) , []);
    
    if (loading) {
        return <h1>loading</h1>
    }
    
    else {
        if (errorMessage) {
            return <Login />
        }
        return <Outlet />;
    }
    
}
