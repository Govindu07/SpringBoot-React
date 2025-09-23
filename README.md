# Student Management System (Spring Boot + React)

## 📌 Project Overview
This project is a **Student Management System** built using:
- **Backend:** Spring Boot (Java 17, Spring Data JPA, MySQL)
- **Frontend:** React.js
- **Database:** MySQL

It allows you to perform **CRUD operations** (Create, Read, Update, Delete) on student records such as:
- Add new student
- View student list
- Edit student details
- Delete student

---

## 🚀 Tech Stack
- **Java 17**
- **Spring Boot 3.2.6**
- **Spring Data JPA + Hibernate**
- **MySQL Database**
- **React.js (with Axios for API calls)**

---

## 🗂️ Folder Structure
```
student-management-system/
│── student-management-backend/   # Spring Boot Backend
│── student-management-frontend/  # React Frontend
```

---

## ⚡ How to Run

### Backend (Spring Boot)
1. Navigate to backend folder:
   ```bash
   cd student-management-backend
   ```
2. Run using Maven:
   ```bash
   mvn spring-boot:run
   ```
   Backend will start at: **http://localhost:8080**

### Frontend (React)
1. Navigate to frontend folder:
   ```bash
   cd student-management-frontend
   ```
2. Install dependencies and run:
   ```bash
   npm install
   npm start
   ```
   Frontend will start at: **http://localhost:3000**

---

## ✅ Features Implemented
- REST APIs for Student CRUD operations
- Database integration with MySQL
- React frontend with Axios for API calls
- CORS configuration for smooth frontend-backend communication
- Hot reload with Spring DevTools + React

---

## 📷 Preview (Optional)
_Add screenshots of your UI here for quick reference._

---

## 🏗️ Future Enhancements
- Add authentication (Spring Security + JWT)
- Add pagination & search filters
- Deploy to cloud (Heroku / AWS / Azure)
