# Technical Documentation — Assignment 2

## Overview

This is the second version of my personal portfolio website, built on top of
Assignment 1. It's still plain HTML, CSS, and JavaScript — no frameworks. The
main additions in this version are tab-based navigation, enhanced form
validation with user feedback, and scroll-triggered animations. The design
keeps the same warm pink/coral theme from Assignment 1, with improvements to
interactivity and user experience throughout.

---

## Project Structure

* `index.html` → the main page with all content (hero, about, skills, projects,
  contact, footer).
* `css/styles.css` → all styling: layout, CSS custom properties for theming,
  responsive rules, hover effects, animations, and the morphing hero shape.
* `js/script.js` → all interactivity: tab navigation, form validation, theme
  toggle, smooth scroll, mobile menu, scroll spy, time-based greeting, and
  fade-in animations.
* `assets/images/` → profile photo and project images.
* `docs/` → this technical doc + the AI usage report.
* `README.md` → project description and setup instructions.
* `.gitignore` → ignores system/config files.

---

## New Features in Assignment 2

### Tab Navigation
The navbar now functions as a tab system. Clicking a nav link calls
`showSection(id)`, which hides all `<section>` elements using `display: none`
and shows only the selected one. The active button gets an `active` class that
applies a pink underline via CSS. This replaces the scroll-based navigation
from Assignment 1 for a cleaner, app-like feel.
```javascript
function showSection(id) {
  document.querySelectorAll('section').forEach(s => s.style.display = 'none');
  document.getElementById(id).style.display = 'block';
  document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
}
```

### Form Validation
The contact form validates three fields before the user can "send":
- Name → must not be empty
- Email → must match a regex pattern (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)
- Message → must not be empty

Feedback is shown in a `<p id="formFeedback">` element below the button.
On error, the text turns red and describes exactly what to fix. On success,
a confirmation message appears and the form fields clear automatically.

### localStorage Theme Persistence
The dark/light theme preference is saved to `localStorage` on every toggle and
loaded on page start. This means the user's choice survives page reloads.
```javascript
localStorage.setItem('theme', next);
const savedTheme = localStorage.getItem('theme') || 'light';
```

---

## Design and Responsiveness

* **CSS Grid** → hero layout, about section, skills cards, projects grid,
  contact section.
* **Flexbox** → navbar, button groups, skill tags, contact info items.
* **Desktop** → two-column layouts for hero, about, and contact.
* **Tablet (≤ 900px)** → single-column layouts, hero shape scales down.
* **Mobile (≤ 640px)** → hamburger menu, cards stack vertically.
* **`clamp()`** → fluid typography that scales smoothly between breakpoints.

---

## Theming System

* CSS custom properties defined in `:root` control all colors, backgrounds,
  accents, borders, and shadows.
* Dark mode is activated by setting `data-theme="dark"` on `<html>`.
* Theme preference is saved in `localStorage` and restored on load.
* Color scheme: warm pink-to-coral gradient for light mode, adjusted tones
  for dark mode.

---

## JavaScript Features (full list)

* **Tab navigation** → shows/hides sections on nav click, updates active state.
* **Form validation** → validates name, email (regex), and message; shows
  error or success feedback; clears fields on success.
* **localStorage theme** → persists dark/light preference across reloads.
* **Time-based greeting** → displays Good Morning / Afternoon / Evening / Night
  based on the visitor's local time.
* **Smooth scroll** → nav links glide to sections (fallback behavior).
* **Mobile menu toggle** → hamburger opens/closes nav on small screens,
  icon animates to X when open.
* **Scroll spy** → highlights the nav link for the section currently in view.
* **Fade-in on scroll** → elements reveal with opacity + translateY using
  `IntersectionObserver`. Each element animates only once.

---

## Hero Shape Animation

* The blob uses `border-radius` keyframe animation (`morphShape`) to
  continuously change shape.
* A dashed ring orbits it using a `spinSlow` rotation animation.
* The inner circle uses `backdrop-filter: blur` for a glassmorphism effect.
* Background glows pulse using `radial-gradient` and `pulseGlow` keyframes.

---

## Accessibility

* **Semantic HTML** → `<nav>`, `<section>`, `<article>`, `<footer>`.
* **ARIA labels** → theme toggle and mobile menu buttons have `aria-label`.
* **Form labels** → every input has a linked `<label>` for screen readers.
* **Color contrast** → warm text on appropriate backgrounds; pink/coral
  accents maintain readability in both light and dark modes.

---

## Known Limitations

* The contact form is demo-only — it does not send data anywhere.
* Project images are placeholders — real screenshots needed eventually.
* No SEO meta tags or image optimization yet.
* Google Fonts load externally — custom fonts require an internet connection.
* `localStorage` may not persist in private/incognito browsing on some browsers.
* Tab navigation and scroll spy can conflict — switching tabs resets scroll
  position, which may briefly affect the active nav highlight.