# JavaScript DOM Mini-Projects & Event-Driven Applications

> Production-ready JavaScript mini-projects built with HTML5, CSS3, and Vanilla JavaScript focusing on DOM manipulation, Event Delegation, dynamic element creation, event propagation, and interactive game state logic.

---

## 🌐 Live Demos & Deployment Links

| Project Name | Live Demo Link | Source Code Folder |
| :--- | :--- | :--- |
| **Simon Says Memory Game** | [🎮 Launch Simon Says Game](https://ashishrodale.github.io/web-development-journey/JavaScript/JS-Mini-Projects/02-simon-says-game/simon_says.html) | [📁 View Code](./02-simon-says-game/) |
| **Dynamic Todo App** | [📝 Launch Todo App](https://ashishrodale.github.io/web-development-journey/JavaScript/JS-Mini-Projects/01-todo-app/todo_app.html) | [📁 View Code](./01-todo-app/) |

---

## 📌 Core Concepts Mastered

* **Event Bubbling & Propagation:** Managing event traversal through nested DOM structures.
* **Event Delegation:** Implementing dynamic action handlers on parent elements (`<ul>`) for dynamic child deletion (`<li>`).
* **DOM Mutation:** Dynamic element creation (`createElement`), DOM appending (`appendChild`), and element deletion (`remove()`).
* **Game State Management:** Sequence tracking (`gameSeq` vs `userSeq`), level progressions, and state resets upon sequence mismatch.
* **UI Feedback Effects:** Asynchronous visual responses using dynamic CSS class toggles (`.flash`) combined with `setTimeout`.

---

## 📂 Project Structure & Architecture

```text
JS-Mini-Projects/
├── README.md
├── 01-todo-app/
│   ├── todo_app.html          # Input markup & task list container
│   └── todo_app.js            # Dynamic DOM manipulation & event delegation logic
└── 02-simon-says-game/
    ├── simon_says.html        # Interactive 4-tile board markup
    ├── simon_says.css         # 2x2 grid layout, tile styling, & flash effects
    └── simon_says.js          # Memory sequence engine, user input matching, & game logic
