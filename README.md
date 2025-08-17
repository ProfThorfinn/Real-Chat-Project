# Vipers Chat 🐍💬

A **real-time chat application** built with **Node.js**, **Express**, **Socket.IO**, and a simple **HTML/CSS/JS frontend**.
It allows multiple users to connect, send messages instantly, see who is online, and check when someone is typing.

---

## 🚀 Features

* Real-time messaging between connected users.
* Online user count & status updates.
* Typing indicator (`User is typing...`).
* System messages (connect/disconnect notifications).
* Different styling for:

  * **Sent messages** (your messages).
  * **Received messages** (messages from others).
  * **System messages** (status updates).
* Responsive and clean chat UI.

---

## 🛠️ Tech Stack

* **Backend**: Node.js, Express.js, Socket.IO
* **Frontend**: HTML, CSS, Vanilla JavaScript
* **Other**: CORS for cross-origin support

---

## 📂 Project Structure

```
.
├── client/
│   └── index.html       # Chat UI with client-side JS
│
├── server/
│   └── server.js        # Node.js + Express + Socket.IO backend
│
└── README.md            # Project documentation
```

---

## ⚡ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/vipers-chat.git
cd vipers-chat
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
node server/server.js
```

By default, the server runs on:

```
http://localhost:3000
```

### 4. Open the client

Open the `client/index.html` file in your browser (or serve it on `http://localhost:3001` if you’re using a dev server).

---

## 🖥️ Usage

* Open the client in **two or more browsers/tabs**.
* Type a message and send → all connected clients will see it.
* When a user starts typing, a typing indicator is shown.
* Online user count is updated dynamically.
* Disconnecting removes the user from the list.

---

## 🔮 Future Improvements

* Add **usernames** instead of socket IDs.
* Support for **private chats** (direct messages).
* Store chat history in a **database** (MongoDB).
* Add **authentication** and **profiles**.
* Deploy the app (Heroku, Vercel, etc.).

---

## 👨‍💻 Author

Developed with ❤️ by **\[Mahmoud Sayed Mohamed]**

---
