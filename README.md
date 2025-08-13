# Employee Directory + Org Chart

## Overview

This project is a responsive Employee Directory web application with an integrated Organizational Chart viewer. It allows users to browse employees by department, search by name or title, and view reporting hierarchies in a clean, modern interface.

## Features

- **Left Sidebar Navigation** with dark mode toggle and department filter
- **Employee Search** by name, title, or department
- **Responsive Layout** optimized for desktop, tablet, and mobile
- **Organizational Chart** with hierarchical view of manager-report relationships
- **Reusable UI Components** for scalability and maintainability
- **Mock Data Integration** (using Json Server)

## Tech Stack

- **React** with **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **shadcn/ui** components for UI primitives

## Folder Structure

```
project-root/
├── src/components/             # Reusable UI components
├── src/lib/hooks/              # Custom React hooks
├── src/lib/types/              # TypeScript type definitions
├── public/                     # Static assets
├── public/employees.json       # Mock employee dataset
├── App.tsx                     # Main application file
└── README.md                   # Project documentation
└── NOTES.md                    # Project Notes
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd <project-directory>
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run Json-Server:**

```bash
npx json-server ./public/employee.json
```

4. **Start the development server:**

```bash
npm run dev
```

5. **Open in browser:**
   Navigate to `http://localhost:5173` (or your dev server URL).

## Data

The app uses `employees.json` with mock data for demonstration utilising `json-server`.

```json
{
  "id": 1,
  "name": "John Doe",
  "title": "Engineering Manager",
  "department": "Engineering",
  "photo": "https://i.pravatar.cc/150?img=1",
  "managerId": null
}
```

## Scalability Notes

- Components follow the **atomic design principle** for reusability.
- State management is localized but can be moved to a global store (Zustand, Redux) if the app grows.
