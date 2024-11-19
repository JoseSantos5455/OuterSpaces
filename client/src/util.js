<<<<<<< HEAD
// export const server_url = "http://192.168.142.177:5000";
=======
import { io } from "socket.io-client";

const URL = `http://${window.location.hostname}:5000`;

export const clientSocket = io(URL, { autoConnect: false });

>>>>>>> 5f43e8c9f49acb4eebaaefd794ef8b524a864018
export const server_url = `http://${window.location.hostname}:5000`;
