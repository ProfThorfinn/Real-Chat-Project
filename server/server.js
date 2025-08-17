
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

// Configure CORS for Express
app.use(cors({
  origin: "http://localhost:3001", // Client will run on port 3001
  methods: ["GET", "POST"],
  credentials: true
}));

// Configure Socket.IO with CORS
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Store connected users and their status
const users = new Map();

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);
  
  // Add user to online users list
  users.set(socket.id, {
    id: socket.id,
    online: true,
    typing: false
  });

  // Broadcast user count and online status
  io.emit('user_status', {
    userCount: users.size,
    onlineUsers: Array.from(users.values())
  });

  // Handle incoming chat messages
  socket.on('chat_message', (data) => {
    console.log(`Message from ${socket.id}: ${data.message}`);
    
    // Broadcast message to all connected clients
    io.emit('chat_message', {
      id: socket.id,
      message: data.message,
      timestamp: new Date().toISOString()
    });
  });

  // Handle typing status
  socket.on('typing_start', () => {
    if (users.has(socket.id)) {
      users.get(socket.id).typing = true;
      socket.broadcast.emit('user_typing', {
        userId: socket.id,
        typing: true
      });
    }
  });

  socket.on('typing_stop', () => {
    if (users.has(socket.id)) {
      users.get(socket.id).typing = false;
      socket.broadcast.emit('user_typing', {
        userId: socket.id,
        typing: false
      });
    }
  });

  // Handle user disconnect
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
    
    // Remove user from online users list
    users.delete(socket.id);
    
    // Broadcast updated user count and online status
    io.emit('user_status', {
      userCount: users.size,
      onlineUsers: Array.from(users.values())
    });
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Client should connect from http://localhost:3001`);
});