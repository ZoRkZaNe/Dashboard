const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('a user connected');

    // Enviar datos de ejemplo cada 5 segundos
    setInterval(() => {
        const data = ['data1', 'data2', 'data3'];
        socket.emit('update', data);
    }, 5000);

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(4000, () => {
    console.log('listening on *:4000');
});