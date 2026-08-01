# Todo App

A simple full-stack todo application built with Node.js, Express, SQLite, and JWT authentication.

## Features

* Register and log in with JWT authentication
* Secure password hashing with bcrypt
* Create, view, update, and delete todos
* User-specific todo lists
* Protected API routes
* Default welcome todo for new users

## Tech Stack

* Node.js
* Express
* SQLite (`node:sqlite`)
* bcryptjs
* jsonwebtoken (JWT)
* Vanilla JavaScript

## API Routes

### Auth

| Method | Route            |
| ------ | ---------------- |
| POST   | `/auth/register` |
| POST   | `/auth/login`    |

### Todos (Protected)

| Method | Route        |
| ------ | ------------ |
| GET    | `/todos`     |
| POST   | `/todos`     |
| PUT    | `/todos/:id` |
| DELETE | `/todos/:id` |

## Setup

```bash
npm install
```

Create a `.env` file:

```env
JWT_SECRET=your_secret_key
PORT=5000
```

Start the server:

```bash
npm run dev
```

Visit:

```text
http://localhost:5000
```

## Notes

* JWT tokens expire after 24 hours
* Passwords are hashed with bcrypt
* New users receive a default todo
* SQLite currently runs in memory (`:memory:`), so data is lost when the server restarts

## License

ISC
