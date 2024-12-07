import React from "react";
import Login from '../pages/login/login';
import Layout from '../layout';
import PrivateRoutes from './private-routes';
import { Routes , Route } from "react-router-dom";
import Products from '../pages/products/products';

export default function RoutesProvider() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/login" element={<Login />}/>
                <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<Products />}/>
                </Route>
            </Route>
        </Routes>
    )
}
