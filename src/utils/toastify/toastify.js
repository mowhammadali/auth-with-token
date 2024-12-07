import { toast } from "react-toastify";

export const toastify = (message, type, autoClose) =>
    toast(message, {
        position: "top-right",
        autoClose: autoClose,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        type: type,
        draggable: false,
        progress: undefined,
        theme: "light",
    });
