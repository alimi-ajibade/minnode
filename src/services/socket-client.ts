import io from "socket.io-client";

const baseURL = import.meta.env.VITE_MINDMAP_API_URL;

const socket = io(baseURL, {
    autoConnect: false,
    reconnectionDelay: 10000,
});

export default socket;
