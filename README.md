# Somaia's Portfolio — Assignment 1

This is my first real portfolio website. I wanted it to feel clean and modern without being boring, and something I can actually keep building on later. It's all HTML, CSS, and JavaScript — no frameworks, no shortcuts. Just me trying to make something I'm proud of, with some nice animations along the way ✨.

## What this project is about

* **About section** → short intro + tagline, plus my profile photo with a glowing border and hover effect.
* **Skills section** → languages, tools, and concepts I work with, organized in cards with gradient accents.
* **Projects section** → three projects I've worked on, with room to add more later.
* **Contact section** → a simple form (front-end only, but fully styled and validated).

I went with a blue gradient theme (light by default, with a dark mode toggle 🌗). The layout is responsive, so it works on phone, tablet, and desktop.


## Features

* **Responsive design** → works on desktop, tablet, and phone.
* **Theme toggle** → light/dark mode 
* **Smooth scroll** → nav links glide to sections.
* **Mobile menu** → hamburger button shows/hides nav on smaller screens.
* **Contact form validation** → checks name/email/message before you "send" (just a demo, no backend).
* **Time-based greeting** → hero says Good Morning/Afternoon/Evening depending on the time.
* **Reveal on scroll** → sections fade in as you scroll down using IntersectionObserver.
* **Scroll spy** → the nav highlights whichever section you're currently viewing.
* **Animated hero shape** → morphing blob with an orbiting ring and my initial in the center.
* **Glow effects** → background glows that pulse softly in the hero section.

## Project structure

```
assignment-1/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       ├── profile.jpg
│       ├── course-route.jpg
│       └── volunteering-platform.jpg
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── README.md
└── .gitignore
```

```

## Short AI usage summary

I used AI to help me during development:

* **Claude AI** → helped with the base structure (HTML, CSS, JS), responsive layout, animations (morphing shape, glow effects, fade-in on scroll, scroll spy), theme toggle logic, and polishing the overall design.
* Also helped with documentation (this README, technical doc, and AI usage report).

I reviewed and modified everything to make sure it's correct and actually mine. Full details are in `docs/ai-usage-report.md`.

## Customize it your way

* Change my name + tagline in `index.html`.
* Swap the profile image in `assets/images/`.
* Replace project descriptions with your own.
* Add more project cards by duplicating existing ones.
* Colors live in `:root` inside `styles.css` — tweak the `--accent` variables to change the whole theme.

## Random notes (things I learned along the way)

* CSS Grid made laying out the projects and skills sections super easy.
* Flexbox in the header fixed a lot of alignment headaches.
* The mobile hamburger menu was tricky at first, but `max-height` transitions made it smooth.
* CSS custom properties are a game-changer for theming — one set of variables controls the entire look.
* IntersectionObserver is way better than scroll event listeners for animations.

## Checklist

* HTML, CSS, JS basics with clean structure.
* Responsive across devices (desktop, tablet, mobile).
* Interactivity (smooth scroll, theme toggle, mobile menu, form validation).
* Extra polish (animations, glow effects, scroll spy, time-based greeting).
* Documentation (README + technical doc + AI usage report).
* AI usage documented transparently.
