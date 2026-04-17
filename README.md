 Todo Card – Stage 1

##  Overview

This project is an enhanced version of the Todo Card from Stage 0. It introduces interactivity, state management, accessibility improvements, and responsive design to create a more app-like experience using HTML, CSS, and Vanilla JavaScript.

---

##  What Changed from Stage 0

* Added **edit mode** with form inputs (title, description, priority, due date)
* Implemented **status control** (Pending, In Progress, Done)
* Synchronized **checkbox, status display, and dropdown**
* Introduced **expand/collapse functionality** for long descriptions
* Added **dynamic time updates** (updates every 30 seconds)
* Implemented **overdue detection** with visual indicator
* Added **priority indicator** (color-based visual feedback)
* Improved **keyboard navigation and accessibility**
* Enhanced **responsive layout** for mobile, tablet, and desktop

---

##  New Design Decisions

* Used a **state-driven approach** (central JS object) instead of static DOM manipulation
* Implemented **flexbox layout** for responsiveness across screen sizes
* Used **color-coded priority indicators**:

  * Green → Low
  * Orange → Medium
  * Red → High
* Applied **visual feedback for status states**:

  * Done → strikethrough + muted UI
  * In Progress → highlighted state
  * Overdue → red indicator
* Collapsible description prevents layout overflow while keeping content accessible
* Form fields stack on mobile and align horizontally on larger screens

---

##  Known Limitations

* No persistent storage (data resets on page refresh)
* No backend integration
* Edit form does not fully trap focus (basic accessibility implemented)
* Animations are minimal (can be enhanced)

---

##  Accessibility Notes

* All interactive elements are **keyboard accessible**
* Expand/collapse uses:

  * `aria-expanded`
  * `aria-controls`
* Time updates use `aria-live="polite"` for screen readers
* Form inputs include proper `<label for="">` associations
* Buttons and controls have **accessible names**
* Focus states are visible for keyboard navigation
* Semantic HTML elements used:

  * `<article>`, `<section>`, `<time>`, `<button>`




