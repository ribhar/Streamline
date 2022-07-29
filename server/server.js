const express = require("express");
const env = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/user.routes");
const messageRoute = require("./routes/messages.routes");
const chatRoute = require("./routes/chat.routes");
const socket = require("socket.io");

const app = express();

env.config({ path: "./config.env" });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth",userRoute);
app.use("/messages",messageRoute);
app.use("/chat",chatRoute);

app.get("/", (req, res) => {
  res.send("Hello");
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successfull"))
  .catch((err) => console.log(err.message));

const server = app.listen(process.env.PORT || 5000, (req, res) => {
  console.log(`Server started at port 8080`);
});

const io = socket(server,{
  pingTimeout: 120000,
  cors:{
    origin: "http://localhost:3000",
    credentials: true,
  },
});

io.on("connection",(socket)=>{
  console.log("Connected to socket");

  socket.on("setup",(userData)=>{
    socket.join(userData._id);
    console.log(`Logged in user ${userData.username} joined the room`);
    socket.emit("connected")
  });

  socket.on("join chat",(room)=>{
    socket.join(room);
    console.log("User joined the selected chat room:" + room)
  })

  socket.on("new message",(newMessageRecieved)=>{
    var chat = newMessageRecieved.chat;

    if(!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user)=>{
      if(user._id==newMessageRecieved.sender._id) return;
      socket.in(user._id).emit("message recieved",newMessageRecieved);
    });
  });

  socket.off("setup",()=>{
    console.log("USER disconnected");
    socket.leave(userData._id);
  });
})