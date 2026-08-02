# 🎨 CSS Part 3: Box Model, Spacing & Layout Mechanics

Welcome to **CSS Part 3** of the Web Development series! This section focuses on mastering the **CSS Box Model**, element dimensions, spacing mechanics, and reset strategies essential for responsive UI development.

---

## 📌 Topics Covered

* **CSS Box Model Basics**: Content, Padding, Border, and Margin components.
* **Border Styling**: `border-width`, `border-style`, `border-color`, and `border-radius`.
* **Padding & Margin**: Inner and outer spacing, directional shorthand rules, and visual alignment.
* **Sizing Properties**: Working with `height`, `width`, `max-width`, and standard sizing constraints.
* **Box Sizing Control**: Understanding `content-box` vs `border-box` and modern CSS reset patterns.

---

## 📂 Folder Content Overview

| Folder / File | Type | Description |
| :--- | :--- | :--- |
| `concepts/` | Key Concepts | Hands-on code demonstrating Box Model elements, borders, and margins. |
| `assignments/aq1.html` | Practice | Assignment 1 HTML structure (Styling div components & buttons). |
| `assignments/style1.css` | Practice | Stylesheet for Assignment 1. |
| `assignments/aq2.html` | Practice | Assignment 2 HTML structure. |
| `assignments/style2.css` | Practice | Stylesheet for Assignment 2. |
| `assignments/aq3.html` | Practice | Assignment 3 HTML structure. |
| `assignments/style3.css` | Practice | Stylesheet for Assignment 3. |

---

## 🛠️ Key Takeaways & Syntax Highlights

### 1. Global Box-Sizing Reset
To prevent width and height calculations from swelling when adding padding or borders, always apply `box-sizing: border-box`:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
