import { axiosInstance } from "../api/api.config";

export const verifyUserService = async function () {
    const response = await axiosInstance.get(`verify-user`);
    return response;
};

export const loginService = async function (data) {
    const response = await axiosInstance.post("login", data);
    return response;
};

export const getProdcutsService = async function () {
    const response = await axiosInstance.get('products');
    return response;
}
