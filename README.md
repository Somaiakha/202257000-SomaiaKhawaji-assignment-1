# Somaia's Portfolio — Assignment 2

This is the second version of my portfolio website, built on top of Assignment 1.
The goal this time was to make the site feel more alive — content that actually
responds when you interact with it, real data handling, and smoother feedback
throughout. Still plain HTML, CSS, and JavaScript. No frameworks, no shortcuts ✨

---

## What's new in Assignment 2

### Dynamic Content — Tab Navigation
The navbar now works as a **tab system**: clicking About, Skills, Projects, or
Contact instantly shows that section and hides the rest — no scrolling needed.
The active tab gets a pink underline so you always know where you are.

### Data Handling — Contact Form Validation
The contact form validates all three fields (name, email, message) before
"sending". It checks that nothing is empty and that the email has a valid format
using a regex pattern. The user always gets clear feedback — either an error
telling them what to fix, or a success message once everything looks good.

### Animation & Transitions — Scroll Fade-in
Sections and cards fade in smoothly as you scroll down, using
`IntersectionObserver`. No janky scroll listeners — just clean, performant
reveal animations that run once and get out of the way.

### Error Handling & User Feedback
The form never leaves the user guessing:
- Empty fields → "Please fill in all fields."
- Bad email → "Please enter a valid email address."
- Everything valid → "Thank you! Your message has been received." ✅

---

## Features (full list)

- **Tab navigation** → switches sections instantly on click
- **Form validation** → name, email, message — all checked before submit
- **Dark / Light theme** → toggle persisted in `localStorage`
- **Time-based greeting** → Good Morning / Afternoon / Evening / Night
- **Smooth scroll** → nav links glide to sections (fallback for non-tab use)
- **Mobile menu** → hamburger toggle for small screens
- **Scroll spy** → nav highlights the active section while scrolling
- **Fade-in on scroll** → elements reveal as they enter the viewport
- **Animated hero shape** → morphing blob with orbiting ring

---

## Project structure
```
assignment-2/
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

---

## How to run locally

1. Clone the repository:
```bash
   git clone https://github.com/SomaiaKha/assignment-2.git
```
2. Open `index.html` in any modern browser — no server needed.

---

## AI usage summary

I used **Claude AI** throughout this assignment:
- Helped plan which interactive features to implement
- Generated base JS logic for tab navigation and form validation
- Suggested the `IntersectionObserver` approach for scroll animations
- Assisted with writing this README and the technical documentation

I reviewed, tested, and modified everything to make sure I understand it and
that it fits my project. Full details in `docs/ai-usage-report.md`.

---

## Notes from building this

- Tab navigation was simpler than expected once I understood `display: none` toggling
- The form regex for email validation is way cleaner than manual string checking
- `IntersectionObserver` is still my favourite CSS/JS trick — much better than scroll listeners
- `localStorage` for theme persistence is genuinely useful — wish more sites did this

---

## Checklist

- [x] Dynamic content (tab navigation)
- [x] Data handling (form validation + localStorage theme)
- [x] Animations (fade-in on scroll, hover effects)
- [x] Error handling & user feedback (form messages)
- [x] AI tools used and documented
- [x] README + technical documentation complete
- [x] Responsive across desktop, tablet, mobile