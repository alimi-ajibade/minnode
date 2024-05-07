import axios, { CanceledError } from "axios";

const APIURL = import.meta.env.VITE_MINDMAP_API_URL;

export default axios.create({
    baseURL: `${APIURL}/api`,
});

export { CanceledError };
