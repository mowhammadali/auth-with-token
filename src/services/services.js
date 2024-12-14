import axios from "axios";
import { axiosInstance } from "../api/api.config";

export const verifyUserService = async function (accessToken) {
    const response = await axios.get("http://localhost:5000/verify-user", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response;
};

export const refreshAuthTokensService = async function (data) {
    const response = await axiosInstance.post("refresh", data);
    return response;
};

export const loginService = async function (data) {
    const response = await axiosInstance.post("login", data);
    return response;
};

export const getProdcutsService = async function () {
    const response = await axiosInstance.get("products");
    return response;
};

export const logoutService = async function (data) {
    const response = await axiosInstance.post("logout", data);
    return response;
};

export const getUserDataService = async function () {
    const response = await axiosInstance.get("user");
    return response;
};
