# JavaScript DOM Mini-Projects & Event-Driven Applications

> Production-ready JavaScript mini-projects demonstrating core DOM manipulation, Event Delegation, dynamic element creation, event propagation, and interactive game state logic.

---

## 🌐 Live Demos & Deployment Links

| Project Name | Live Preview Link | Source Code Folder |
| :--- | :--- | :--- |
| **Dynamic Todo App** | [🚀 Launch Todo App](https://ashishrodale.github.io/web-development-journey/JavaScript/Mini-Projects/01-todo-app/todo_app.html) | [📁 View Code](./01-todo-app/) |
| **Simon Says Memory Game** | [🎮 Launch Simon Says Game](https://ashishrodale.github.io/web-development-journey/JavaScript/Mini-Projects/02-simon-says-game/simon_says.html) | [📁 View Code](./02-simon-says-game/) |

---

## 📌 Core JavaScript Concepts Covered

* **Event Bubbling & Propagation:** Managing event traversal up the DOM tree.
* **Event Delegation:** Handling dynamic actions on dynamically injected list elements (`<li>` delete operations).
* **DOM Mutation:** Dynamic creation (`createElement`), appending (`appendChild`), and element deletion (`remove()`).
* **Game State Management:** Sequence array comparison (`gameSeq` vs `userSeq`), level triggers, and global state resets.
* **UI Feedback Effects:** Asynchronous visual response using dynamic CSS class toggles and `setTimeout`.

---

## 📂 Folder & File Structure

```text
JS-Mini-Projects/
├── README.md
├── 01-todo-app/
│   ├── todo_app.html          # Dynamic UI markup & task input field
│   ├── todo_app.css           # Modern flex container layout & dynamic action styling
│   └── todo_app.js            # Dynamic DOM task management & event delegation logic
└── 02-simon-says-game/
    ├── simon_says.html        # Interactive game board markup
    ├── simon_says.css         # Color tiles layout & custom flash effects
    └── simon_says.js          # Memory sequence generator, input tracker, state engine
