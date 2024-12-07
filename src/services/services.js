import { axiosInstance } from "../api/api.config";

export const verifyUserService = async function (accessToken) {
    const response = await axiosInstance.get(`verify-user` , {
        headers: {
            Authorization: accessToken
        }
    });
    return response;
}

export const loginService = async function (data) {
    const response = await axiosInstance.post('login' , data);
    return response;
} 