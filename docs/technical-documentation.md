# Technical Documentation

## Overview

This is my personal portfolio website. I built it using HTML, CSS, and JavaScript — no frameworks. It has 4 main sections: About, Skills, Projects, and Contact. The goal was to have a clean, modern site with a warm pink gradient theme that looks good on any device and has some nice interactive touches.

## Project Structure

Here's how the project is organized:

* `index.html` → the main page with all the content (hero, about, skills, projects, contact, footer).
* `css/styles.css` → all the styling: layout, color theme with CSS custom properties, responsive rules, hover effects, glow animations, and the morphing hero shape.
* `js/script.js` → interactive features: smooth scrolling, dark/light theme toggle, mobile hamburger menu, form validation, time-based greeting, scroll animations, and scroll spy for active nav links.
* `assets/images/` → where images go (profile photo).
* `docs/` → this technical doc + the AI usage report.
* `README.md` → project description and setup instructions.
* `.gitignore` → ignores system/config files.

## Design and Responsiveness

* **CSS Grid** → used for the hero layout (two columns), about section, skills cards, projects grid, and contact section.
* **Flexbox** → used in the navbar, button groups, skill tags, and contact info items.
* **Desktop view** → two-column layouts for hero, about, and contact sections.
* **Tablet (≤ 900px)** → collapses into single-column layouts, hero shape gets smaller.
* **Mobile (≤ 640px)** → hamburger menu replaces nav links, project and skill cards stack vertically, hero shape moves to top.
* **`clamp()`** → used for fluid typography so headings scale smoothly between screen sizes.

## Theming System

* Built with **CSS custom properties** (variables) defined in `:root`.
* Dark mode is activated by setting `data-theme="dark"` on the `<html>` element.
* One set of variables controls everything — backgrounds, text colors, accents, borders, shadows, and glows.
* The theme choice is saved in `localStorage` so it persists across page reloads.
* Color scheme: warm pink-to-coral gradient with soft rose accents for light mode, with adjusted tones for dark mode.

## Interactivity (JavaScript Features)

* **Time-based greeting** → the hero section says Good Morning, Afternoon, Evening, or Night depending on the visitor's local time.
* **Dark/Light theme toggle** → switches between themes and remembers the choice with `localStorage`.
* **Smooth scroll** → clicking nav links glides the page to the section instead of jumping.
* **Mobile menu toggle** → hamburger icon opens/closes the nav menu on small screens. The icon animates into an X when open.
* **Active nav highlighting** → as you scroll, the nav link for the current section gets highlighted automatically (scroll spy).
* **Form validation** → checks that name, email, and message aren't empty, and validates email format with regex. Shows success or error messages. (Demo only, no actual sending).
* **Reveal on scroll** → sections fade in and slide up as you scroll down using `IntersectionObserver`. Each element only animates once.

## Hero Shape Animation

* The blob shape in the hero uses `border-radius` animation (`morphShape` keyframes) to continuously change shape.
* A dashed ring orbits around it using `spinSlow` rotation animation.
* The inner circle has a glassmorphism effect with `backdrop-filter: blur`.
* Background glow effects pulse using `radial-gradient` and the `pulseGlow` animation.

## Accessibility

* **Semantic HTML** → proper use of `<nav>`, `<section>`, `<article>`, `<footer>`.
* **ARIA labels** → interactive buttons (theme toggle, mobile menu) have `aria-label` attributes.
* **Form labels** → every input has a `<label>` element for screen readers.
* **Color contrast** → warm text on appropriate backgrounds with pink/coral accents that meet readability needs.

## Known Limitations

* The contact form is demo-only — it doesn't actually send data anywhere.
* Project images are emoji placeholders — need real screenshots eventually.
* No SEO meta tags or image optimization yet.
* The Google Fonts load externally, so the site needs internet to display the custom fonts.
* `localStorage` for theme preference won't work in incognito/private browsing on some browsers.
