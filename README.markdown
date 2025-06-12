# To-Do List Application

## Overview
This is a backend application for a To-Do List, built as part of the Backend Intermediate Level Assignment No. 1. It allows users to create, update, and delete tasks, with user-specific data management and basic CRUD operations. The application is built using the JavaScript stack with Express.js, Node.js, and MongoDB.

## Features
- Create a new task with title, description, priority, category, and due date.
- Retrieve all tasks for a specific user.
- Update existing tasks (e.g., mark as completed, change priority).
- Delete tasks.
- Supports user-specific task management.

## Tech Stack
- **Backend Framework**: Express.js
- **Runtime**: Node.js
- **Database**: MongoDB

## Prerequisites
- Node.js (v24.2.0 or later recommended)
- MongoDB (local installation or MongoDB Atlas)
- npm (Node Package Manager)

## Project Structure
```
todo-list-app/
├── models/
│   └── Task.js       # Mongoose schema for tasks
├── routes/
│   └── tasks.js      # API routes for task operations
├── .env              # Environment variables
├── server.js         # Main server file
├── package.json      # Project dependencies and scripts
└── README.md         # Project documentation
```

## Setup Instructions

### 1. Clone or Download the Project
If you haven't already, place the project files in a directory:
```bash
mkdir todo-list-app
cd todo-list-app
```

### 2. Install Dependencies
Install the required npm packages:
```bash
npm install
```

This will install the following dependencies:
- `express`
- `mongoose`
- `cors`
- `dotenv`

### 3. Set Up Environment Variables
Create a `.env` file in the root directory with the following content:
```
PORT=5002
MONGO_URI=mongodb://127.0.0.1:27017/todo-list
```

- `PORT`: The port where the server will run (set to 5002 as per your setup).
- `MONGO_URI`: The MongoDB connection string. If using MongoDB Atlas, replace this with your Atlas connection string (e.g., `mongodb+srv://<username>:<password>@cluster0.mongodb.net/todo-list`).

### 4. Start MongoDB
Ensure MongoDB is running on your machine:
- If using a local MongoDB instance:
  ```bash
  brew services start mongodb-community
  ```
  Or run manually:
  ```bash
  mongod
  ```
- Verify MongoDB is running on port `27017`:
  ```bash
  lsof -i :27017
  ```
- If using MongoDB Atlas, ensure your cluster is active and the `MONGO_URI` is correctly set in the `.env` file.

### 5. Start the Server
Run the server:
```bash
node server.js
```

You should see:
```
Server running on port 5002
MongoDB connected
```

If you encounter a MongoDB connection error (`ECONNREFUSED`), ensure MongoDB is running and the `MONGO_URI` is correct.

## API Endpoints
The server runs on `http://localhost:5002`. Below are the available endpoints:

- **GET /**  
  Root route to confirm the server is running.  
  Response: `Welcome to the To-Do List API! Use /api/tasks to interact with the API.`

- **GET /api/tasks/:userId**  
  Retrieve all tasks for a specific user.  
  Example: `http://localhost:5002/api/tasks/user1`  
  Response: Array of tasks (e.g., `[{"title":"Buy Milk","priority":"High",...}]`)

- **POST /api/tasks**  
  Create a new task.  
  Example Request Body:
  ```json
  {
    "userId": "user1",
    "title": "Buy Milk",
    "description": "Get 2 liters of milk",
    "priority": "High",
    "category": "Personal",
    "dueDate": "2025-08-01"
  }
  ```
  Example: Use `curl` to test:
  ```bash
  curl -X POST http://localhost:5002/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"userId": "user1", "title": "Buy Milk", "priority": "High", "dueDate": "2025-08-01"}'
  ```

- **PUT /api/tasks/:id**  
  Update an existing task by ID.  
  Example Request Body:
  ```json
  {
    "title": "Buy Milk (Updated)",
    "completed": true
  }
  ```

- **DELETE /api/tasks/:id**  
  Delete a task by ID.

## Troubleshooting
- **MongoDB Connection Error**:
  - Ensure MongoDB is running on `127.0.0.1:27017`.
  - Check MongoDB logs: `cat /usr/local/var/log/mongodb/mongo.log`.
  - If local MongoDB fails, consider using MongoDB Atlas (see setup instructions above).
- **Port Conflict**:
  - Check if port `5002` is in use: `lsof -i :5002`.
  - Change the `PORT` in `.env` if needed.
- **Infinite Loading in Browser**:
  - Test with `curl` to bypass browser issues: `curl http://localhost:5002`.
  - Ensure MongoDB is connected to avoid hanging on database queries.

## License
This project is for educational purposes as part of the Backend Intermediate Level Assignment.