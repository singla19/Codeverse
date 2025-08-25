import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
const io = new Server(server, {
    cors:{
        origin: "*",
    },
});

io.on("connection", (socket)=>{
    console.log("user connected", socket.id);
});
server.listen(PORT, ()=>{
    console.log("server is working");
});


