import React, { useContext, useEffect, useState } from "react";
import { verifyUserService } from "./services/services";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/auth-context";

export default function Layout() {
    const { setIsAuthenticated } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const verify = async () => {
        try {
            await verifyUserService();
            setIsAuthenticated(true);
            setErrorMessage("");
        } catch (error) {
            setErrorMessage(error.message);
            setIsAuthenticated(false);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        verify();
    }, []);

    if (loading) {
        return <h1>loading</h1>;
    }

    if (!errorMessage) {
        return <Outlet />;
    }
    return <Navigate to="/login" replace />;
}
