'use strict'

const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer( app )
const { Server } = require("socket.io");
const io = new Server(server);

const port = 3000

app.get('/', (req, res) => {
  res.sendFile( __dirname + '/index.html' )
})


io.on('connection', (socket) => {
  console.log('a user connected');
  socket.broadcast.emit('hi');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat_message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat_message', msg);
  });

});


server.listen( port, () => {
  console.log(`Example app listening on port ${port}`)
})

