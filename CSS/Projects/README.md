# 🎵 Spotify Web Player UI Clone

A high-fidelity, responsive web architecture replication of the **Spotify Web Player Interface** built using modern **HTML5** and **CSS3**. 

This project demonstrates advanced CSS layout strategies, dynamic content containment, custom interactive web form controls, and pixel-perfect design system implementation without relying on external JavaScript frameworks.

---

## 🔗 Live Demo & Source Code

* **🚀 View Live Web Application:** [Spotify Web Player Live App](https://ashishrodale.github.io/web-development-journey/CSS/Projects/project-spotify/)
* **📁 Source Code Directory:** [Browse Code Repository](https://github.com/ashishrodale/web-development-journey/tree/main/CSS/Projects/project-spotify)
* **🎨 Main CSS Architecture:** [`style.css`](./style.css)

---

## 🛠️ Key Technical Features & Implementations

### **1. Dual-Panel Application Architecture**
* **Sticky Navigation Header:** Built with `position: sticky` to preserve top-level controls (`Explore Premium`, navigation arrows) during vertical scrolling.
* **Scroll-Locked Viewports:** Configured height constraints using CSS calculations (`calc(100vh - 72px)`) alongside `overflow-y: auto` to allow independent content scrolling while maintaining fixed UI frames.

### **2. Fixed Audio Playback Control Bar**
* **Bottom Docking:** Locked playback controls to the bottom of the viewport using `position: fixed; bottom: 0; width: 100%`.
* **Custom Range Sliders:** Standard HTML `<input type="range">` elements fully customized using pseudo-element selectors (`::-webkit-slider-thumb` and `::-webkit-slider-runnable-track`) for volume and progress tracking.

### **3. Zero-JavaScript Interactive UI**
* **Wishlist Heart Toggle:** Implemented pure CSS state toggling via visually hidden `<input type="checkbox">` elements paired with adjacent sibling selectors (`:checked + label`) to switch dynamic icon states on user interaction.

### **4. Design System & Typography**
* **Spotify Dark Mode Palette:** Uses exact visual color variables (`#000000`, `#121212`, `#181818`, `#242424`, `#1db954`).
* **External Assets Integration:** Clean integration of **Google Fonts (Montserrat)** and **Font Awesome v6.5.1** SVG icon sets.

---

## 🎨 UI Preview Showcase

| Component Section | Engineering Highlight |
| :--- | :--- |
| **Sidebar Navigation** | Dynamic library expansion cards, fixed icon links, rounded container borders |
| **Content Feed** | Card grid layouts, truncation for long titles (`text-overflow: ellipsis`) |
| **Bottom Player** | Dual-ended time duration markers, album art preview, flex layout alignment |

---

## 📁 Repository Structure

```text
project-spotify/
├── README.md              <-- Technical Project Documentation
├── index.html             <-- Semantic HTML5 Application Structure
├── style.css              <-- CSS Flexbox & Custom Component Styling
└── assets/                <-- Icons, Artist Covers & Favicon Assets
    ├── logo.png           <-- Application Tab Favicon & Brand Logo
    ├── player_icon1.png   <-- Playback Control Assets
    ├── library_icon.png   <-- Navigation UI Assets
    └── *.webp / *.jpeg    <-- Dynamic Album & Artist Media Assets
