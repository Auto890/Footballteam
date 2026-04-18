# ⚽ Football Club Management System

A full-stack web application for managing university football club members.
This project demonstrates practical skills in **frontend development, API integration, and database management**.

---

## 🚀 Live Features

* 📋 View all football club members
* ➕ Add new players
* ❌ Delete players
* 📊 Dashboard overview (player statistics)
* 🌗 Dark / Light mode toggle

---

## 🧠 Tech Stack

### Frontend

* React.js (Hooks: useState, useEffect)
* Axios (API communication)
* CSS (Custom styling)

### Backend

* PHP (REST-like API)
* MySQL (Relational Database)

---

## 🏗️ System Architecture

```text
Client (React)
   ↓ HTTP Requests (Axios)
Server (PHP API)
   ↓ SQL Queries
Database (MySQL)
```

---

## 🔗 API Integration

The frontend communicates with the backend via HTTP requests:

| Method | Endpoint   | Description         |
| ------ | ---------- | ------------------- |
| GET    | `/api.php` | Fetch all players   |
| POST   | `/api.php` | Add new player      |
| DELETE | `/api.php` | Delete player by ID |

---

## 🗄️ Database Design

### Table: `students`

| Field      | Type         | Description              |
| ---------- | ------------ | ------------------------ |
| id         | varchar(10)  | Student ID (Primary Key) |
| name       | varchar(100) | Player name              |
| position   | varchar(50)  | Playing position         |
| year       | varchar(10)  | Academic year            |
| created_at | timestamp    | Created timestamp        |

---

## 📂 Project Structure

```bash
footballteam/
│── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Dashboard.jsx
│   │   ├── AddForm.jsx
│   │   └── PersonList.jsx
│   ├── App.js
│   └── App.css
│
│── football_club.sql
│── api.php
│── package.json
```

---

## ⚙️ Getting Started

### 1. Clone repository

```bash
git clone https://github.com/Auto890/Footballteam.git
cd Footballteam
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Run React app

```bash
npm start
```

---

## 🗄️ Backend Setup

1. Start Apache & MySQL (XAMPP / Laragon)
2. Place `api.php` in:

```
htdocs/football_api/
```

3. Import database:

```
football_club.sql
```

---

## 💡 Key Learnings

* Built a full-stack CRUD application
* Integrated React with a PHP backend using REST principles
* Managed relational data using MySQL
* Practiced asynchronous data handling with Axios

---

## 🚧 Future Improvements

* ✏️ Implement Update (PUT/PATCH) functionality
* 🔐 Add authentication (JWT / Login system)
* 🎨 Improve UI with Tailwind CSS
* ☁️ Deploy to cloud (Vercel + Railway / Render)

---

## 👨‍💻 Author

**Weerapat Unkaeo**
Aspiring Full-Stack Developer / Data Analyst

---

## 📌 Note

This project was developed for educational purposes and to strengthen full-stack development skills.

---
