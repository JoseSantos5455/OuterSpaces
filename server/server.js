const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var cors = require("cors");
const socket = require("socket.io");
const mongooseConnection = require("./helpers/mongoose-connection");
const appRoutes = require("./routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());
app.use("/api", appRoutes);

mongooseConnection();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log("Server is listening on port 5000");
});

const io = socket(server, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

let allUsers = new Map();

io.on("connection", (socket) => {
  socket.on("add-user", (userId) => {
    // let isNewUser = true;
    // for (let i = 0; i < allUsers.length; i++) {
    //   if (allUsers.keys(i) === userId) {
    //     isNewUser = false;
    //     break;
    //   }
    // }
    // if (isNewUser) {
    allUsers.set(userId, socket.id);
    // }
  });

  socket.on("message", (message) => {
    let receiver_socket = allUsers.get(message.receiver);
    socket.to(receiver_socket).emit("sent", message.text);
  });
});
