import React from "react";
import Login from '../pages/login/login';
import Layout from '../layout';
import PrivateRoutes from './private-routes';
import Products from '../pages/products/products';
import { Routes , Route } from "react-router-dom";

export default function RoutesProvider() {
    return (
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route element={<Layout />}>
                <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<Products />}/>
                </Route>
            </Route>
        </Routes>
    )
}
