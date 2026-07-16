# Prerequisites

Before creating a React project with Vite, make sure you have:

1. **Node.js (LTS version recommended)**

   * Install Node.js from https://nodejs.org/en/download.
   * Verify the installation:

     ```bash
     node -v
     npm -v
     ```

2. **A Code Editor**

   * Visual Studio Code is recommended.

3. **A Terminal**

   * Windows: Command Prompt, PowerShell, or Windows Terminal
   * macOS: Terminal
   * Linux: Any terminal emulator

---

# Step 1: Check Node.js Installation

Open a terminal and run:

```bash
node -v
```

Example output:

```bash
v22.16.0
```

Then check npm:

```bash
npm -v
```

Example:

```bash
10.9.2
```

If these commands work, you're ready to proceed.

---

# Step 2: Create a React Project with Vite

Run:

```bash
npm create vite@latest
```

You'll be prompted with a few questions.

### Project name

```
✔ Project name:
```

Example:

```
my-react-app
```

### Framework

Choose:

```
React
```

### Variant

Choose either:

```
JavaScript
```

---

# Step 3: Go to the Project Folder

```bash
cd my-react-app
```

Replace `my-react-app` with your project name.

---

# Step 4: Install Dependencies

```bash
npm install
```

This downloads all required packages.

---

# Step 5: Start the Development Server

```bash
npm run dev
```

You'll see something like:

```
VITE v7.x.x ready in 300 ms

➜ Local: http://localhost:5173/
```

Open the displayed URL (usually `http://localhost:5173`) in your browser.

---

# Project Structure

```
my-react-app/
│
├── node_modules/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── assets/
│
├── package.json
├── vite.config.js
└── index.html
```

The files you'll work with most often are:

* `src/App.jsx` – Main React component
* `src/main.jsx` – Entry point
* `package.json` – Project dependencies and scripts

---

# Common Commands

| Command                  | Purpose                      |
| ------------------------ | ---------------------------- |
| `npm create vite@latest` | Create a new Vite project    |
| `cd project-name`        | Enter the project folder     |
| `npm install`            | Install dependencies         |
| `npm run dev`            | Start development server     |
| `npm run build`          | Build for production         |
| `npm run preview`        | Preview the production build |

---

# Troubleshooting

### `'node' is not recognized as an internal or external command`

Node.js is either not installed or not added to your system's PATH. Install (or reinstall) Node.js and restart your terminal.

### `npm ERR!`

Run:

```bash
npm install
```

again inside the project directory. Ensure you're in the correct folder.

### Port 5173 is already in use

Vite will automatically suggest another available port (e.g., `5174`). Open the URL shown in the terminal.

---

# Quick Setup Summary

```bash
# Verify installation
node -v
npm -v

# Create a project
npm create vite@latest

# Enter the project folder
cd my-react-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

This entire setup typically takes **5–10 minutes** on a machine with Node.js already installed.
