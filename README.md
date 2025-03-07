# 📚 Book Store API

This is a **Book Store API** built with **Node.js**, **Express**, **Mongoose**, and **MongoDB Atlas**. The project follows a modular structure with separate directories for **routes**, **models**, **controllers**, and **database connection**. The API allows for basic **CRUD (Create, Read, Update, Delete)** operations on book data.

---

## 🚀 Features

- 📗 **Create** a new book
- 📖 **Read** book information
- ✏️ **Update** existing book details
- 🗑️ **Delete** a book
- 🌐 Connected to **MongoDB Atlas** for cloud-based data storage
- 📂 Modular and maintainable code structure

---

## 🚧 Technologies Used

<ul>
  <li>
    <img src="https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" style="vertical-align: middle;" />
    <span style="vertical-align: middle;">: JavaScript runtime environment</span>
  </li>
  <li>
    <img src="https://img.shields.io/badge/-Express.js-000000?style=for-the-badge&logo=express&logoColor=white" style="vertical-align: middle;" />
    <span style="vertical-align: middle;">: Backend framework for building RESTful APIs</span>
  </li>
  <li>
    <img src="https://img.shields.io/badge/-Mongoose-880000?style=for-the-badge&logo=buffer&logoColor=white" style="vertical-align: middle;" />
    <span style="vertical-align: middle;">: Object Data Modeling (ODM) library for MongoDB</span>
  </li>
  <li>
    <img src="https://img.shields.io/badge/-MongoDB_Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" style="vertical-align: middle;" />
    <span style="vertical-align: middle;">: Cloud-hosted MongoDB service</span>
  </li>
  <li>
    <img src="https://img.shields.io/badge/-dotenv-ECD53F?style=for-the-badge&logo=.env&logoColor=black" style="vertical-align: middle;" />
    <span style="vertical-align: middle;">: For managing environment variables</span>
  </li>
</ul>

---


## 🛠️ Project Structure

```bash
.
├── controllers           # Contains controller functions
│   └── book-controller.js
├── database              # Contains database connection logic
│   └── db.js
├── models                # Defines the data schema using Mongoose
│   └── book.js
├── routes                # API routes
│   └── book-routes.js
├── .env                  # Environment variables
├── .gitignore            # Files and directories to ignore in version control
├── package.json          # Project metadata and dependencies
├── package-lock.json     # Dependency tree
├── README.md             # Project documentation
└── server.js             # Main entry point of the application

```

---

## 📋 API Endpoints

| Method | Endpoint    | Description              |
|--------|--------------|--------------------------|
| GET    | /api/get       | Get all books            |
| GET    | /api/get/:id   | Get a specific book      |
| POST   | /api/add       | Add a new book           |
| PUT    | /api/update/:id   | Update book information  |
| DELETE | /api/delete/:id   | Delete a book            |

---
<h3 align="center">Thank You !</h3>
