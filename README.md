# 📚 StudyBot MVP

**StudyBot** is a mobile-first, AI-powered study assistant designed for university and high school students — and a homework helper for busy parents or working learners. Built with the MERN stack, it offers a sleek and scalable interface with modern animations, graphs, dark/light mode, and a clear CTA-driven experience.

---

## 🚀 Features

- 🎓 AI Homework Assistant (Coming soon)
- 🧠 Student Performance Dashboard (with graphs)
- 🎉 Confetti-based celebrations
- 🎨 Light/Dark Mode toggle
- 📱 Mobile-first responsive design
- 💡 Reminder/CTA system
- 🔐 Authentication-ready
- ⚛️ React + Tailwind CSS + Framer Motion
- 📊 Chart.js for progress tracking

---

## 🏗️ Tech Stack

| Layer       | Tech                        |
|------------|-----------------------------|
| Frontend    | React, Tailwind CSS, Framer Motion, React Router |
| Animations  | Framer Motion, React Confetti |
| Charts      | Chart.js (via `react-chartjs-2`) |
| Notifications | `react-hot-toast`          |
| Backend     | Node.js, Express (planned) |
| Auth        | JWT / Auth Provider (planned) |

---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/bethwel3001/PLPHack-2
cd studybot-frontend
```
### 2. Install dependencies
```bash
npm install
```
### 3. Taiwind css setup
```bash
npx tailwindcss init -p
```
### 4. Start the dev server
```bash
npm start
```

## 🧪 Development Notes
*Tailwind Version:* 3.4.1 (for full compatibility with Create React App)

*Chart Support:* via react-chartjs-2

*Dark Mode: uses Tailwind's darkMode:* 'class' system

*Toast Notifications:* powered by react-hot-toast

## 🔜 Upcoming Features
- AI-powered Q&A using OpenAI

- Course selection and personalized tips

- Backend API for quiz and study data

- Auth system with token storage

- Task reminders and streaks

