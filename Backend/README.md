# 🚀 Backend Development: Node.js & Environment Fundamentals

> Production-grade documentation and source code covering Node.js runtime fundamentals, package management via npm, process inspection, and CommonJS module export systems.

---

## 📌 Core Concepts Covered

* **Node.js Runtime & REPL:** Executing server-side JavaScript outside the browser environment using interactive REPL and script execution.
* **Process Object & Global Scope:** Interacting with node process properties (`process.argv`, `process.cwd()`, `process.version`).
* **CommonJS Module System:** Modularizing code using `module.exports` and `require()` across files and directory indexes.
* **Package Management (npm):** Initializing projects using `package.json`, managing local vs. global package dependencies, and module resolution.
* **ES Modules vs CommonJS:** Understanding module import/export standards in server-side environments.

---

## 📂 Module Files & Code Base

| File Name | Description | Link |
| :--- | :--- | :--- |
| `01-NodeJS-Basics/index.js` | Main runner executing process args and module imports | [View File](./01-NodeJS-Basics/index.js) |
| `01-NodeJS-Basics/math.js` | Utility module demonstrating `module.exports` | [View File](./01-NodeJS-Basics/math.js) |
| `01-NodeJS-Basics/package.json` | npm manifest file with script shortcuts | [View File](./01-NodeJS-Basics/package.json) |

---

## 🛠️ Essential Terminal Commands Reference

| Command | Category | Description | Example Usage |
| :--- | :--- | :--- | :--- |
| `node` | Runtime | Enters interactive Node REPL | `node` |
| `node <file>` | Execution | Executes a JavaScript file with Node | `node index.js` |
| `npm init -y` | Package Manager | Generates default `package.json` file | `npm init -y` |
| `npm install <pkg>` | Package Manager | Installs package locally | `npm install figlet` |
| `npm install -g <pkg>`| Package Manager | Installs package globally | `npm install -g nodemon` |

---

## 💻 How to Run Locally

1. Open your terminal in the directory:
   ```bash
   cd 03-Backend/01-NodeJS-Basics
