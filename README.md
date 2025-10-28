<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


# 🚀 Hello Nest API

A **secure and scalable REST API** built with **NestJS**, **Prisma ORM**, and **PostgreSQL**.
This API provides user authentication, profile management, and personal bookmark management.

---

## 📚 Table of Contents

* [Features](#-features)
* [Tech Stack](#-tech-stack)
* [API Endpoints](#-api-endpoints)
* [Project Structure](#-project-structure)
* [Setup & Installation](#-setup--installation)
* [Running the Application](#-running-the-application)
* [Database Setup](#-database-setup--seeding)
* [Environment Variables](#-environment-variables)
* [Deployment](#-deployment)
* [Testing with Postman](#-testing-with-postman)
* [Future Features & Improvements](#-future-features-&-Improvements)
* [License](#-license)

---

## ✨ Features

 ✅ Secure **JWT authentication**
 ✅ User **signup, signin, update, delete**
 ✅ Role-based access control (secure routes)
 ✅ CRUD operations for **bookmarks**
 ✅ Centralized validation with `ValidationPipe`
 ✅ Prisma ORM integration with PostgreSQL

---

## 🧰 Tech Stack

| Tool / Framework                        | Purpose                         |
| --------------------------------------- | ------------------------------- |
| **NestJS**                              | Backend framework               |
| **Prisma**                              | ORM for database operations     |
| **PostgreSQL**                          | Relational database             |
| **JWT**                                 | Authentication                  |
| **argon2**                              | Password encryption             |
| **class-validator / class-transformer** | Request data validation         |


---

## 🧭 API Endpoints

### 🧑 Authentication

| Method | Endpoint       | Description           |
| ------ | -------------- | --------------------- |
| `POST` | `/auth/signup` | Register a new user   |
| `POST` | `/auth/signin` | Login and receive JWT |

---

### 👤 User Management

| Method   | Endpoint     | Description                 | Auth |
| -------- | ------------ | --------------------------- | ---- |
| `GET`    | `/users/me`  | Get current user profile    | ✅    |
| `GET`    | `/users`     | List all users (public route) | ✅    |
| `PATCH`  | `/users/:id` | Update user info            | ✅    |
| `DELETE` | `/users/:id` | Delete user account         | ✅    |

---

### 🔖 Bookmarks

| Method   | Endpoint         | Description                   | Auth |
| -------- | ---------------- | ----------------------------- | ---- |
| `POST`   | `/bookmarks`     | Create a new bookmark         | ✅    |
| `GET`    | `/bookmarks`     | Get all bookmarks of the user | ✅    |
| `GET`    | `/bookmarks/:id` | Get a specific bookmark       | ✅    |
| `PATCH`  | `/bookmarks/:id` | Update a bookmark             | ✅    |
| `DELETE` | `/bookmarks/:id` | Delete a bookmark             | ✅    |

---

## 🗂️ Project Structure

```
src/
 ├── auth/
 │    ├── auth.controller.ts
 │    ├── auth.service.ts
 │    ├── auth.module.ts
 │    ├── decorator/
 |    ├── dto/
 │    ├── guard/
 │    ├── strategy/
 ├── users/
 │    ├── users.controller.ts
 │    ├── users.service.ts
 │    ├── users.module.ts
 │    └── dto/
 ├── bookmarks/
 │    ├── bookmarks.controller.ts
 │    ├── bookmarks.service.ts
 │    ├── bookmarks.module.ts
 │    └── dto/
 ├── prisma/
 │    ├── prisma.service.ts 
 │    ├── prisma.module.ts
 ├── app.module.ts
 └── main.ts
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Georjane/hello_nest.git
cd hello_nest
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
JWT_SECRET="your_jwt_secret"
```

---

## 🧑‍💻 Running the Application

```bash
npm run start:dev
```

Server starts on:

```
http://localhost:3000
```

---

## 🗃️ Database Setup

### 1️⃣ Run Prisma Migrations

```bash
npx prisma migrate dev
```

## 🌍 Deployment

You can deploy this project to:

* [Render](https://render.com)

---

## 🧪 Testing with Postman

Follow these steps to test your API endpoints in Postman:

### 1️⃣ **Signup**

* **POST** → `http://localhost:3000/auth/signup`
* **Body (JSON):**

```json
{
  "email": "testuser@example.com",
  "password": "password123"
}
```

✅ Response:
Returns user info and JWT token.

---

### 2️⃣ **Signin**

* **POST** → `http://localhost:3000/auth/signin`
* **Body (JSON):**

```json
{
  "email": "testuser@example.com",
  "password": "password123"
}
```

✅ Response:

```json
{
  "access_token": "your.jwt.token"
}
```

---

### 3️⃣ **Authorize Subsequent Requests**

In Postman:

* Go to the **Authorization** tab
* Type: **Bearer Token**
* Paste the token from the signin response

---

### 4️⃣ **Get Current User**

* **GET** → `http://localhost:3000/users/me`
  ✅ Should return the profile of the logged-in user.

---

### 5️⃣ **Create Bookmark**

* **POST** → `http://localhost:3000/bookmarks`
* **Body (JSON):**

```json
{
  "title": "NestJS Docs",
  "description": "Official NestJS documentation"
}
```

✅ Response:
Returns the created bookmark.

---

### 6️⃣ **List All Bookmarks**

* **GET** → `http://localhost:3000/bookmarks`

✅ Returns all bookmarks belonging to the current user.

---

### 7️⃣ **Get a Specific Bookmark**

* **GET** → `http://localhost:3000/bookmarks/:id`

---

### 8️⃣ **Update Bookmark**

* **PATCH** → `http://localhost:3000/bookmarks/:id`
* **Body (JSON):**

```json
{
  "title": "Updated Title"
}
```

---

### 9️⃣ **Delete Bookmark**

* **DELETE** → `http://localhost:3000/bookmarks/:id`

✅ Should return a success message or status `204`.

---
## 🧩 Future Features & Improvements

Here are some planned upgrades to enhance the API’s functionality and scalability:

| Feature                                 | Description                                                                     |
| --------------------------------------- | ------------------------------------------------------------------------------- |
| **Refresh Tokens**                      | Add refresh tokens to improve authentication security.                          |
| **Role-based Authorization Middleware** | Implement roles like `admin`, `editor`, `user` for fine-grained access control. |
| **Password Reset & Email Verification** | Integrate Nodemailer or SendGrid for secure password recovery.                  |              
| **Pagination & Filtering**              | Improve performance for large datasets in `/users` and `/bookmarks`.            |
| **Search Feature**                      | Enable text-based search on bookmark titles/descriptions.                       |
| **2FA / OTP Authentication**            | Strengthen account security with optional two-factor authentication.            |
| **Testing Suite (Jest + Supertest)**    | Add end-to-end and integration tests.                                           |
| **CI/CD Pipeline**                      | Automate deployment with GitHub Actions or Render Deploy Hooks.                 |


## 🧾 License

This project is open-source under the [MIT License](LICENSE).

---

## 💡 Author

**Witah Geojane**
👩‍💻 Software Developer | 🌍 Tech Leader | 🔗 [LinkedIn](https://www.linkedin.com/in/witah-georjane/)

---
