import axios, { CanceledError } from "axios";

const baseURL = import.meta.env.VITE_MINDMAP_API_URL;
console.log(baseURL);

export default axios.create({
    baseURL: baseURL,
});

export { CanceledError };
