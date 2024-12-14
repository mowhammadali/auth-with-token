import React, { useContext, useEffect, useState } from "react";
import Loader from "./components/common/loader/loader";
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
            const accessToken = localStorage.getItem("access-token");
            await verifyUserService(accessToken);
            setIsAuthenticated(true);
            setErrorMessage("");
        } catch (error) {
            setErrorMessage(error.message);
            setIsAuthenticated(false);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    };

    useEffect(() => {
        verify();
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (!errorMessage) {
        return <Outlet />;
    }
    return <Navigate to="/login" replace />;
}
