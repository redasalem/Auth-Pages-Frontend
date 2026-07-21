# 🔐 Modern Auth Pages

> A sleek, high-performance, and fully responsive Authentication UI built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS v4**.

![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## ✨ Features

- 🎨 **Modern & Premium Aesthetic**: Soft purple theme (`#F0EDFF`) with vibrant royal purple accents (`#4C43D9`).
- 📱 **Fully Responsive**: Grid & flexbox layouts optimized for mobile, tablet, and desktop viewports.
- 🔑 **Complete Auth Flow**:
  - **Sign Up** (`/register`): Email, Username, Phone Number, Password & Confirm Password.
  - **Login** (`/login`): Email, Password, Social Auth & Signup redirection.
  - **Forget Password** (`/forget-password`): Quick recovery interface.
- 👁️ **Interactive UI Elements**: Dynamic password visibility toggle (Show/Hide password).
- 🌐 **Social Authentication Buttons**: Google, Apple, and Facebook SVG integrations.
- ⚡ **Lightning Fast**: Built on Vite with Instant HMR (Hot Module Replacement).

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Frontend UI Framework |
| **[TypeScript](https://www.typescriptlang.org/)** | Type safety & developer experience |
| **[Vite](https://vitejs.dev/)** | Next Generation Frontend Tooling |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Utility-first CSS Framework |
| **[React Router DOM v7](https://reactrouter.com/)** | Client-side Routing |
| **[React Hook Form](https://react-hook-form.com/)** | Form state management & validation |

---

## 📁 Project Structure

```text
auth-pages/
├── public/
│   ├── logo.jpg              # Custom brand logo
│   ├── favicon.svg           # Application favicon
│   └── icons.svg             # Utility SVG assets
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── illustration.png  # 3D Hero illustration
│   ├── components/           # Reusable UI components
│   ├── pages/                # Route pages
│   │   ├── register.tsx      # Sign Up page
│   │   ├── login.tsx         # Login page
│   │   └── forget-password.tsx # Password recovery page
│   ├── App.tsx               # Main routing setup
│   ├── main.tsx              # Application entry point
│   └── index.css             # Tailwind v4 import & global styles
├── index.html                # HTML entry point with title & favicon
├── package.json              # Project dependencies & scripts
└── vite.config.ts            # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js**: `v18.0.0` or higher
- **npm** or **pnpm** or **yarn**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/auth-pages.git
   cd auth-pages
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:5173/register` to view the Sign Up page!

---

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev` — Starts the development server with HMR.
- `npm run build` — Compiles TypeScript and builds the production bundle with Vite.
- `npm run preview` — Locally preview the production build.
- `npm run lint` — Runs ESLint to check for code quality issues.

---

## 📝 License

This project is licensed under the MIT License.
