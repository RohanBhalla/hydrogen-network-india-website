<!-- PROJECT BANNER -->

<h1 align="center">Hydrogen Network India Website</h1>
<p align="center">
  <a href="https://h2network.in" target="_blank"><b>🌐 Visit h2network.in</b></a>
</p>

<p align="center">
  A modern web platform built with React, TypeScript, Tailwind CSS, and Supabase.
</p>

<p align="center">
  <!-- BADGES -->
  <img src="https://img.shields.io/badge/React-18.0-blue?logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Vite-4.0-646CFF?logo=vite" />
  <img src="https://img.shields.io/badge/Supabase-Backend-3ECF8E?logo=supabase" />
  <img src="https://img.shields.io/badge/License-Open%20Source-brightgreen" />
</p>

---

## 📘 Overview

This repository contains the official website for **Hydrogen Network India**, leveraging a modern frontend stack and cloud backend to deliver high-performance, scalable features.

---

## 🚀 Tech Stack

- **React + TypeScript**
- **Vite** (lightning-fast bundler)
- **Tailwind CSS** for utility-first styling  
- **Supabase** for backend + database  
- **ESLint** for code linting  

---

## 📦 Prerequisites

Before running the project, ensure you have:

- **Node.js v18+**
- **npm** or **yarn**

---

## 🛠️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ekaansharora89/hydrogen-network-india-website.git
cd hydrogen-network-india-website
```

### 2️⃣ Install dependencies

```npm install```

###3️⃣ Environment variables

Create a .env file in the root directory:

```VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4️⃣ Start the development server
```npm run dev
```

Your app will be available at:
👉 http://localhost:5173

### 📜 Available Scripts
Command	Description
```npm run dev	Start dev server
npm run build	Build production bundle
npm run preview	Preview production build
npm run lint	Run ESLint checks
```
```
📁 Project Structure
hydrogen-network-india-website/
├── public/                # Static assets
├── src/                   # React source code
├── supabase/
│   └── migrations/        # Database migrations
├── .bolt/                 # Bolt configuration
├── google-apps-script.js  # Google Apps Script integration
├── tailwind.config.js     # Tailwind config
├── vite.config.ts         # Vite config
├── tsconfig.json          # TS config
└── package.json           # Dependencies
```

### 🗄️ Supabase Setup

This project uses Supabase as backend + database.

Steps:

Create a project at https://supabase.com

Run migrations inside:

supabase/migrations/

Add your Supabase project URL + anon key to .env

### 📊 Google Apps Script Integration

The google-apps-script.js file provides automation for Google Sheets & Forms.

Deploying:

Go to https://script.google.com/

Create a new Apps Script project

Paste the contents of google-apps-script.js

Deploy as a web app if needed

🤝 Contributing

We welcome contributions!

Steps:
# Create a new branch
```git checkout -b feature/amazing-feature```

# Commit changes
```git commit -m "Add amazing feature"```

# Push to GitHub
```git push origin feature/amazing-feature```


Then open a Pull Request.

📄 License

This project is open source. See the repository for full license details.
