import { io } from "socket.io-client";

const URL = `http://${window.location.hostname}:5000`;

export const clientSocket = io(URL, { autoConnect: false });
