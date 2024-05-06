import io from "socket.io-client";

const APIURL = import.meta.env.VITE_MINDMAP_API_URL;

const socket = io(APIURL, {
    autoConnect: false,
    reconnectionDelay: 10000,
});

export default socket;
