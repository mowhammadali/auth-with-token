import { axiosInstance } from "../api/api.config";

export const verifyUserService = async function () {
    const response = await axiosInstance.get('verify-user');
    return response;
};

export const updateTokenService = async function (data) {
    const response = await axiosInstance.post('refresh' , data);
    return response;
} 

export const loginService = async function (data) {
    const response = await axiosInstance.post('login', data);
    return response;
};

export const getProdcutsService = async function () {
    const response = await axiosInstance.get('products');
    return response;
}

export const logoutService = async function (data) {
    const response = await axiosInstance.post('logout' , data);
    return response;
}

export const getUserDataService = async function () {
    const response = await axiosInstance.get('user');
    return response;
}