import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

export default function PrivateLayout({ element }) {
    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated ? element : <Navigate to="/login" />;
}
