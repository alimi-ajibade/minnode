import axios, { CanceledError } from "axios";

const APIURL = import.meta.env.VITE_MINDMAP_API_URL;

export default axios.create({
    baseURL: "https://mindmap-api.onrender.com/api",
});

export { CanceledError };
