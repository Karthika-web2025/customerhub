# Customer Management Dashboard

## Project Overview

This is a simple full-stack web application that allows users to manage customer data.
Users can **add**, **view**, and **delete** customers through a clean and responsive interface.

The frontend is built using React, and the backend is built using Node.js and Express.
Customer data is stored in an **in-memory array**, meaning data will reset when the server restarts.

---

## Setup Instructions

### 🔹 1. Clone the Repository

```bash
git clone <your-repo-link>
cd <project-folder>
```

---

### 🔹 2. Backend Setup

```bash
cd backend
npm install
node server.js
```

Server will run on:

```
http://localhost:5000
```

---

### 🔹 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

React app will run on:

```
http://localhost:3000
```

---

## Features

* Add a new customer (Name, Email, Phone)
* View all customers in a table
* Delete a customer
* Auto-refresh after add/delete
* Clean and responsive UI
* Fast performance with in-memory storage

---

## API Endpoints

### POST /customers

* Adds a new customer

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210"
}
```

**Response:**

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210"
}
```

---

### GET /customers

* Returns all customers

**Response:**

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210"
  }
]
```

---

### DELETE /customers/:id

* Deletes a customer by ID

**Response:**

```json
{
  "message": "Customer deleted successfully"
}
```

---

## Assumptions

* Data is stored in a **temporary in-memory array**
* No database is used
* Data will be **lost when the server restarts**
* Basic validation is implemented for email and phone
* Application is designed for learning/demo purposes

---

## Conclusion

This project demonstrates a simple full-stack CRUD application using React and Node.js.
It showcases frontend-backend communication, REST API usage, and basic state management.

---
