import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/login";
import Layout from "../layout";
import PrivateLayout from "./private-layout";
import Products from "../pages/products/products";
import Profile from "../pages/profile/profile";

export default function RoutesProvider() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<Layout />}>
                <Route
                    path="/"
                    element={<PrivateLayout element={<Products />} />}
                />
                <Route
                    path="/profile"
                    element={<PrivateLayout element={<Profile />} />}
                />
            </Route>
        </Routes>
    );
}
