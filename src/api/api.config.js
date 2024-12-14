import axios from "axios";
import { refreshAuthTokensService } from "../services/services";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/",
    timeout: 15000,
});

let isRefreshing = false;
let refreshPromise;

const getAccessToken = function () {
    return localStorage.getItem("access-token");
};

const getRefreshToken = function () {
    return localStorage.getItem("refresh-token");
};

const setAccessToken = function (token) {
    localStorage.setItem("access-token", token);
};

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = getAccessToken();

        if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401) {
            if (!isRefreshing) {
                isRefreshing = true;
                refreshPromise = refreshAuthTokensService({
                    token: getRefreshToken(),
                });

                try {
                    const newAccessToken = (await refreshPromise).data
                        ?.accessToken;
                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                    setAccessToken(newAccessToken);
                    return axiosInstance(originalRequest);
                } catch (refreshError) {

                    localStorage.clear();
                    window.location.href = "http://localhost:3000/login";
                    return refreshError;
                } finally {
                    isRefreshing = false;
                }
            } else {
                await refreshPromise;
                return axiosInstance(originalRequest);
            }
        }
        return Promise.reject(error);
    }
);
