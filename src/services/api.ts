import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-contacts-manager.onrender.com",
    timeout: 10000,
})