# 🏨 Grand Voyage Hotel Website

> A full-stack hotel management and booking web application built using **Node.js**, **Express.js**, **EJS**, and a structured **MVC architecture**. The system demonstrates clean backend organization, dynamic routing, and database integration for a modern hotel platform.

---

## 📑 Table of Contents

- [Project Overview](#-project-overview)
- [System Architecture](#-system-architecture)
- [Repository Structure](#-repository-structure)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Installation & Setup](#-installation--setup)
- [Usage Guide](#-usage-guide)
- [Testing](#-testing)
- [Future Improvements](#-future-improvements)
- [Author](#-author)
- [License](#-license)

---

## 🏖️ Project Overview

**Grand Voyage Hotel Website** is a dynamic hotel booking platform designed to simulate a real-world hospitality management system.

The project focuses on:

- Clean **MVC Architecture**
- Organized routing & controllers
- Server-side rendering with **EJS**
- Database query integration
- Scalable backend structure

It serves as a practical demonstration of full-stack development using Node.js and Express.

---

## 🏗️ System Architecture

The application follows a structured **MVC (Model–View–Controller)** pattern:

- **Models Layer:** Handles database schema and queries.
- **Controllers Layer:** Manages business logic and request handling.
- **Routes Layer:** Defines API and page routes.
- **Views Layer:** EJS templates rendered dynamically.
- **Public Layer:** Static assets (CSS, JS, Images).
- **App Entry (`app.js`):** Main Express server configuration.

---

## 📂 Repository Structure

Grand-Voyage-Hotel-Website/
├── controllers/ # Route controllers
├── models/ # Database models
├── public/ # Public/static files (CSS/JS/images)
├── routes/ # Express route definitions
├── tests/ # Unit & integration tests
├── views/ # EJS view templates
├── app.js # Main Express application
├── .gitignore
├── Grande_Voyage_Database_Queries.sql
├── package.json
└── README.md



---

## 🚀 Key Features

### 🏨 Hotel Management

- Dynamic room listings
- Structured booking system logic
- Organized controller-based request handling

### 📅 Booking System

- Reservation structure
- Database query integration
- Route-based booking flow

### 🎨 Dynamic Rendering

- Server-side rendering using **EJS**
- Reusable view templates
- Clean UI separation from backend logic

### 🧪 Testing Support

- Dedicated `tests/` directory
- Unit and integration testing structure

---

## 💻 Tech Stack

| Category | Technologies |
|-----------|-------------|
| **Backend** | [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/) |
| **Frontend** | HTML5, CSS3, JavaScript |
| **Templating** | [EJS](https://ejs.co/) |
| **Database** | SQL (Queries included in `.sql` file) |
| **Testing** | JavaScript testing setup (see `tests/`) |

---

## ⚙️ Installation & Setup

### Prerequisites

- Node.js `v14+`
- npm
- MySQL (if using SQL database)

---

### 1️⃣ Clone Repository

```bash
git clone https://github.com/alyhassan23/Grand-Voyage-Hotel-Website.git
cd Grand-Voyage-Hotel-Website
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a .env file in the root directory:
PORT=3000
DATABASE_URL=your_database_connection_string
SESSION_SECRET=your_secret_key

### 4️⃣ Import Database (If Using MySQL)
```bash
mysql -u your_username -p < Grande_Voyage_Database_Queries.sql
```
### ▶️ Run the Application
```bash
npm start
```


Open your browser and navigate to:

http://localhost:3000

📘 Usage Guide

Start the server.

Navigate through hotel pages.

View room details.

Test booking routes.

Modify controllers/models to expand functionality.

### 🧪 Testing
Run tests with:
```bash
npm test
```
Tests are located in the tests/ directory.

### 🔮 Future Improvements
User authentication system
Payment gateway integration
Admin dashboard
REST API expansion
Deployment configuration (Docker / CI/CD)

### 👤 Author

Ali Hassan
GitHub: https://github.com/alyhassan23

### 📜 License

This project is open-source and available for educational purposes.

⭐ If you found this project helpful, consider giving it a star on GitHub!


