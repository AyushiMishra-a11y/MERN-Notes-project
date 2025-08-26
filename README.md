# MERN Notes Project

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![React](https://img.shields.io/badge/React-17-blue)
![Node.js](https://img.shields.io/badge/Node.js-14-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen)
![Express](https://img.shields.io/badge/Express-4.17.1-lightgrey)

A full-stack **MERN** (MongoDB, Express.js, React, Node.js) application that allows users to register, log in, and manage their personal notes with full CRUD functionality. Passwords are securely hashed using **bcrypt**, and authentication is managed with **JWT tokens**.

## Features

* User registration with **unique email** and hashed password.
* Secure login and authentication with **JWT tokens**.
* Create, read, update, and delete notes.
* Responsive and user-friendly frontend built with React.
* Backend built with Node.js and Express.js.
* Data stored securely in MongoDB.

## Tech Stack

* **Frontend:** React.js, HTML, CSS, JavaScript
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Authentication & Security:** bcrypt, JSON Web Tokens (JWT)

## Installation and Setup

1. **Clone the repository**

```bash
git clone https://github.com/AyushiMishra-a11y/MERN-Notes-project.git
cd MERN-Notes-project
```

2. **Install backend dependencies**

```bash
cd server
npm install
```

3. **Install frontend dependencies**

```bash
cd ../client
npm install
```

4. **Set up environment variables**
   Create a `.env` file in the `server` folder:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

5. **Run the backend**

```bash
cd ../server
npm start
```

6. **Run the frontend**

```bash
cd ../client
npm start
```

* Open `http://localhost:3000` in your browser to access the app.

## Usage

* Register a new user with a unique email and password.
* Login using your credentials.
* Create, view, update, and delete notes.

## Security Highlights

* Passwords are **hashed using bcrypt** before storing in the database.
* **JWT tokens** ensure secure user sessions and protect private routes.

## License
This project is open source and free to use.

This project is open source and free to use.
