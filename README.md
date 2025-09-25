<h1 align="center">Student Management System (Spring Boot + React)</h1>

## 1. Project Overview
The Student Management System is a full-stack web application designed to manage student records efficiently. The project demonstrates CRUD operations, database connectivity, and integration between frontend and backend.

---

## 2. Tech Stack
- **Backend: Java 17, Spring Boot 3.2.6, Spring Data JPA, Hibernate, MySQL**
- **Frontend: React.js, Axios**
- **Build & Package: Maven (backend), npm (frontend)**
- **IDE Support: IntelliJ IDEA, VS Code**
- **Version Control: Git and GitHub**
  
---

## 3. Folder Structure
```
student-management-system/
│── student-management-backend/   # Spring Boot Backend
│── student-management-frontend/  # React Frontend
```

---

## 4. How to Run

### Backend (Spring Boot)
+ Navigate to backend folder:
   ```bash
   cd student-management-backend
   ```
+ Run using Maven:
   ```bash
   mvn spring-boot:run
   ```
+ Backend will start at: **http://localhost:8080**

### Frontend (React)
+ Navigate to frontend folder:
   ```bash
   cd student-management-frontend
   ```
+ Install dependencies and run:
   ```bash
   npm install
   npm start
   ```
+ Frontend will start at: **http://localhost:3000**

---

## 5. Features Implemented
+ Add Student: Create a new student record with name, email, and course details.
+ View Students: List all students in the system.
+ Edit Student: Update student details.
+ Delete Student: Remove student records.
+ Database Integration: MySQL database used to persist data.
+ REST API: Backend exposes RESTful endpoints using Spring Boot.
+ Frontend Integration: React.js frontend consumes the API using Axios.
+ Hot Reload & Dev Tools: Spring Boot DevTools and React live reload for rapid development.

---

## 6. Preview 
+ Screenshots of project output.
<img width="1688" height="729" alt="Screenshot 2025-09-25 163231" src="https://github.com/user-attachments/assets/76b6feb3-1205-4a35-96a9-b57225776fcb" />

---

## 7. Future Enhancements
- Add authentication (Spring Security + JWT)
- Add pagination & search filters
- Deploy to cloud (Heroku / AWS / Azure)
