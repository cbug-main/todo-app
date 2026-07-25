# Todo App (Work in Progress)

A full-stack todo application built with **Node.js**, **Express**, **SQLite**, and **JWT authentication**. Users can register, log in, and manage personal todo lists. The project is under active development — core auth and listing work; create/update/delete API routes are still being implemented.

## What it does today

- **User registration** — creates an account with a bcrypt-hashed password and returns a JWT
- **User login** — validates credentials and returns a JWT (24-hour expiry)
- **Protected todo listing** — authenticated users can fetch their own todos via `GET /todos`
- **Welcome todo** — new users get a default todo on signup
- **Web UI** — login/register screen and a dashboard with All / Open / Complete tabs

## Tech stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Backend    | Node.js, Express 5                  |
| Database   | SQLite (`node:sqlite`, in-memory) |
| Auth       | bcryptjs, jsonwebtoken (JWT)        |
| Frontend   | Vanilla HTML, CSS, JavaScript       |

## Project structure

```
sec/
├── public/              # Static frontend (HTML, CSS, JS)
│   └── index.html
├── src/
│   ├── server.js        # Express app entry point
│   ├── db.js            # SQLite schema and connection
│   ├── middleware/
│   │   └── authMiddleware.js
│   └── routes/
│       ├── authRoutes.js
│       └── todoRoutes.js
├── todo-app.rest        # REST Client examples for auth endpoints
├── .env                 # Local secrets (not committed — see Setup)
└── package.json
```

## API overview

| Method | Route            | Auth | Status        | Description                    |
| ------ | ---------------- | ---- | ------------- | ------------------------------ |
| POST   | `/auth/register` | No   | Done          | Register a new user            |
| POST   | `/auth/login`    | No   | Done          | Log in and receive a JWT       |
| GET    | `/todos`         | Yes  | Done          | List todos for the logged-in user |
| POST   | `/todos`         | Yes  | In progress   | Create a new todo              |
| PUT    | `/todos/:id`     | Yes  | In progress   | Update a todo                  |
| DELETE | `/todos/:id`     | Yes  | In progress   | Delete a todo                  |

Protected routes expect an `Authorization` header containing the JWT token.

## Setup

**Requirements:** Node.js 20+ (uses built-in `--env-file`, `node:sqlite`, and `--watch`)

1. Clone the repository and install dependencies:

   ```bash
   git clone <your-repo-url>
   cd sec
   npm install
   ```

2. Create a `.env` file in the project root:

   ```env
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5000](http://localhost:5000) in your browser.

## Development notes

- The SQLite database runs **in memory** (`:memory:`), so all data is lost when the server restarts.
- The frontend stores the JWT in `localStorage` and sends it on todo requests.
- The UI already calls create, update, and delete endpoints; the corresponding backend handlers in `todoRoutes.js` still need to be implemented.
- `todo-app.rest` contains sample requests for testing auth with the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) VS Code extension.

## Scripts

| Command       | Description                                      |
| ------------- | ------------------------------------------------ |
| `npm run dev` | Start the server with file watching and `.env`   |

## License

ISC
