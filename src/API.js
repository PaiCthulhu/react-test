import axios from "axios";

const API = axios.create({
    baseURL: "https://api.randomuser.me/"
});

export default API;