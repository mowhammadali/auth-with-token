import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/',
    timeout: 15000,
})

const getAccessToken = function () {
    return localStorage.getItem('access-token');
}

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = getAccessToken();

        if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }

        return config;
    },


    error => {
        return Promise.reject(error);
    }
)