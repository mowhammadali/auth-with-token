import React from "react";
import RoutesProvider from "./routes/routes-provider";
import AuthProvider from "./context/auth-context";

const App = () => {
    return (
        <AuthProvider>
            <RoutesProvider />
        </AuthProvider>
    );
};

export default App;
