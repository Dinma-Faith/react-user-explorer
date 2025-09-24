# React User Explorer

A simple React app that allows users to log in with a mock phone number, view a list of users fetched from the **JSONPlaceholder API**, search through them, and see detailed information on each user.

---

## 🚀 Live Demo

👉 [View Live Demo](https://react-users-explorer.netlify.app/)

---

## 📌 Features

* 🔑 Mock login validation with phone number
* 👥 Fetch users from JSONPlaceholder API
* 🔍 Dynamic search functionality on the main page
* 📄 Detail page with complete user info
* 🛡️ Protected routes (requires login)
* 🎨 Responsive UI with TailwindCSS
* ✅ Basic unit testing with Jest/React Testing Library and Vitest

---

## 🗂️ Project Structure

```
src/
  components/     # Reusable UI components (Button, Input, ProtectedRoute)
  pages/          # App pages (Login, Main, Detail)
  services/       # API calls
  hooks/          # Custom hooks (useFetch)
```

---

## ▶️ Getting Started

### Clone the repo

```bash
git clone https://github.com/<your-username>/react-user-explorer.git
cd react-user-explorer
```

### Install dependencies

```bash
npm install
```

### Run the app

```bash
npm run dev
```

### Run tests

You can run tests using **Jest** or **Vitest**:

```bash
# Jest
npm test

# Vitest
npx vitest
```

---

## 🛠️ Tech Stack

* **React** (Vite)
* **Tailwind CSS**
* **React Router DOM**
* **Jest & React Testing Library** / **Vitest**
* **JSONPlaceholder API**

---
