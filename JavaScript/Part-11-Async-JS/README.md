# JavaScript Part 11: Asynchronous JavaScript & Promises

> Comprehensive hands-on coverage of the JavaScript Call Stack, single-threaded execution, callback hell, and modern asynchronous patterns using Promises and Promise Chaining.

---

## 📌 Core Concepts Covered

* **Call Stack & Execution Context:** Stack frame creation, function invocation order, and stack visual representations.
* **Single-Threaded Execution:** Synchronous execution model, Web APIs, and how JavaScript handles async operations via event loops.
* **Debugging with Breakpoints:** Inspecting runtime execution, pausing scripts, and tracing call stacks using Browser Developer Tools.
* **Callback Hell & Pyramids of Doom:** Understanding nested asynchronous callbacks and their limitations.
* **Promises (`then` & `catch`):** Resolving and rejecting Promises, handling data results, error propagation, and Promise chaining.
* **Refactoring Legacy Code:** Migrating nested callback functions into clean Promise-based chains.

---

## 📂 Module Files & Direct Links

### 📄 Core Web Interface
| File Name | Description | Status |
| --- | --- | --- |
| [`index.html`](./index.html) | Interactive HTML Runner displaying live call stack & dynamic visual updates | Completed |
| [`style.css`](./style.css) | Custom UI styling with visual card indicators and status badges | Completed |
| [`app.js`](./app.js) | Main entry script consolidating all Part 11 asynchronous implementations | Completed |

---

### 🛠️ Practice Exercises
| Standard Topic Name | File Name | Topics & Concepts Covered |
| --- | --- | --- |
| JS Call Stack | [`01_call_stack_demo.js`](./exercises/01_call_stack_demo.js) | Stack frame pushing/popping and execution order |
| Visualizing the Call Stack | [`02_visualizing_call_stack.js`](./exercises/02_visualizing_call_stack.js) | Visual tracing of nested function calls |
| Breakpoints | [`03_breakpoints_debugging.js`](./exercises/03_breakpoints_debugging.js) | Browser DevTools step-over, step-into debugging |
| JS is Single Threaded | [`04_single_threaded_nature.js`](./exercises/04_single_threaded_nature.js) | Non-blocking execution using `setTimeout` |
| Callback Hell | [`05_callback_hell_demo.js`](./exercises/05_callback_hell_demo.js) | Deeply nested asynchronous color transitions |
| Setting up for Promises | [`06_promise_setup.js`](./exercises/06_promise_setup.js) | Instantiating `new Promise((resolve, reject) => {})` |
| Refactoring with Promises | [`07_refactoring_with_promises.js`](./exercises/07_refactoring_with_promises.js) | Replacing callback signatures with Promise returns |
| `then()` and `catch()` methods | [`08_then_catch_methods.js`](./exercises/08_then_catch_methods.js) | Registering resolution and rejection handlers |
| Promise Chaining | [`09_promise_chaining.js`](./exercises/09_promise_chaining.js) | Sequential asynchronous operation handling |
| Results & Errors in Promises | [`10_results_and_errors.js`](./exercises/10_results_and_errors.js) | Argument passing to `resolve` / `reject` and error catching |
| Refactoring Old Code | [`11_refactoring_old_code.js`](./exercises/11_refactoring_old_code.js) | Converting nested callbacks to structured Promise chains |

---

### 📝 Assignment Exercises
| Assignment Topic | File Name | Implementation Task |
| --- | --- | --- |
| Delayed Background Changer | [`01_delayed_color_changer.js`](./assignments/01_delayed_color_changer.js) | Sequential DOM color updates using Promise chaining |
| Simulated API Fetcher | [`02_simulated_api_fetcher.js`](./assignments/02_simulated_api_fetcher.js) | Network request simulation using random resolve/reject rates |
| Promise Chain Math Operations | [`03_promise_chain_math.js`](./assignments/03_promise_chain_math.js) | Passing dynamic results step-by-step down a Promise chain |
| User Authentication Flow | [`04_authentication_flow_simulator.js`](./assignments/04_authentication_flow_simulator.js) | Sequential async step verification (Login -> Token -> Profile) |

---

## 💻 How to Run & Verify

1. Open `index.html` in your browser or run it via **VS Code Live Server**.
2. Press `F12` (or `Right-Click` $\rightarrow$ **Inspect**) and navigate to the **Console** tab.
3. Observe execution logs, stack traces, and Promise resolution states directly in the console output.
