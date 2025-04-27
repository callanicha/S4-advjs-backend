
---

# 📄 2. Backend Repository README (Render one)

> Repo: `S4-advjs-backend`

```markdown
# Simple SPA Backend - ADV JS Project

This is the **backend** of the Simple SPA project for the Advanced JavaScript course (EPITA).  
It is built using **Node.js**, **Express.js**, and deployed on **Render**.

## 🌐 Live API Server

- Backend (Render): [https://s4-advjs-backend.onrender.com/](https://s4-advjs-backend.onrender.com/)

## 📦 Tech Stack

- Node.js
- Express.js
- CORS
- Dotenv
- Render (hosting)

## 🧠 Features

- User Sign Up
- User Login (with fake JWT)
- In-memory user and product storage
- Create New Products
- Fetch All Products
- CORS configured for frontend integration
- No database (for simplicity — everything is stored temporarily in memory)

## 🛠️ Setup Instructions

1. Clone the repository:

git clone https://github.com/callanicha/S4-advjs-backend.git
cd S4-advjs-backend

2. Install dependencies:

npm install

3. Create .env file:

PORT=5000

4. Start the server:

npm start
The server will run on http://localhost:5000 (or assigned Render port).

## Deployment

Backend is automatically deployed on Render.

Server listens on process.env.PORT.