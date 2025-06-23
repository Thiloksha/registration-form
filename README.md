# 📝 Multi-Step Registration Form with Backend API

This project is a responsive multi-step registration form built with React, featuring client-side validation, API integration, and a basic Express.js backend for testing.

---

## 🚀 Features

- Multi-step registration form
- Step progress indicator (with labels)
- Inline validation and error highlighting
- Password visibility toggle
- Axios-based API integration
- Submission loading indicator
- Success message on completion

---

## 🧠 Assumptions & Decisions

- Phone number field is optional.
- Password must be at least 6 characters.
- Email must be in valid format.
- Form buttons are disabled until validation passes.
- The app uses a mock backend (localhost) for testing.
- All form UI logic is managed with React local state.

---

## 🛠️ Frontend Setup (`multi-step-form`)

### 1. Navigate to frontend
```bash
cd multi-step-form
````

### 2. Install dependencies

```bash
npm install
```

### 3. Add `.env` file in root of `multi-step-form`

```
REACT_APP_API_BASE_URL=http://localhost:5000
```

### 4. Start the frontend

```bash
npm start
```

---

## 🔧 Backend Setup (`registration-backend`)

### 1. Navigate to backend

```bash
cd registration-backend
```

### 2. Install backend dependencies

```bash
npm install
```

### 3. Start backend server

```bash
node index.js
```

> ✅ The backend will run on: `http://localhost:5000`

---

## 🧪 API Endpoint

### POST `/api/register`

Example request payload:

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "password": "yourpassword"
}
```

---

## 📂 Folder Structure

```
project-root/
├── multi-step-form/
│   ├── /api
│   ├── /components
│   ├── /context
│   ├── /pages
│   ├── /utils
│   ├── App.jsx
│   └── .env
├── registration-backend/
│   └── index.js
└── README.md
```

