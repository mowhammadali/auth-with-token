import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function PrivateLayout() {
    const { isAuthenticated } = useContext(AuthContext);
    const location = useLocation();

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
