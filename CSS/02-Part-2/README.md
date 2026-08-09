# 🎯 CSS Selectors, Specificity & Pseudo-Elements

Welcome to **Module 2** of the CSS series. This section dives into CSS specificity rules, advanced selector targeting, pseudo-classes, pseudo-elements, and property inheritance behavior.

---

## 📊 Module Architecture & Resources

| Topic / Focus Area | HTML Source | CSS Stylesheet | Functional Description |
| :--- | :--- | :--- | :--- |
| **Main Chapter Demo** | [`index.html`](./index.html) | — | Quora UI layout demonstrating core structural markup and basic styling rules. |
| **Practice Questions** | [`PracticeQs.html`](./PracticeQs.html) | [`PQ.css`](./PQ.css) | Re-creating UI elements (buttons, search inputs) via class & ID selectors. |
| **Assignment Solutions** | [`AQ.html`](./AQ.html) | [`AQ.css`](./AQ.css) | Complete solution for advanced selectors, pseudo-classes, and universal rules. |
| **Inheritance Demo** | [`inheritance_demo.html`](./inheritance_demo.html) | — | Demonstrates typography and color inheritance behavior across nested elements. |

---

## 💡 Key Technical Takeaways

* **Selector Specificity Hierarchy:**
  `Universal (*)` $\rightarrow$ `Element (p, h1)` $\rightarrow$ `Class (.class)` $\rightarrow$ `ID (#id)` $\rightarrow$ `Inline Styles`

* **Pseudo-Classes & Pseudo-Elements:**
  * `:hover` — Applied state-based visual feedback for interactive elements.
  * `:nth-of-type()` — Targeted specific structural children without extra classes.
  * `::first-letter` — Custom typographic drop-cap effects.

* **Inheritance Rules:**
  * Inherited properties: `font-family`, `color`, `line-height`, `text-align`.
  * Non-inherited properties: `margin`, `padding`, `border`, `background`.

---

## 📁 Directory Structure

```text
02-Part-2/
├── AQ.css
├── AQ.html
├── PQ.css
├── PracticeQs.html
├── README.md
├── index.html
└── inheritance_demo.html
