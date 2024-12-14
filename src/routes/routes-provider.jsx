import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/login";
import Layout from "../layout";
import PrivateLayout from "./private-layout";
import Products from "../pages/products/products";
import Profile from "../pages/profile/profile";
import NotFound from "../pages/not-found/not-found";

export default function RoutesProvider() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<Layout />}>
                <Route element={<PrivateLayout />}>
                    <Route path="/" element={<Products />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Route>
        </Routes>
    );
}
