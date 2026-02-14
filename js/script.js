/* ============================================================
   PORTFOLIO SCRIPTS — Somaia
   Features:
   1. Time-based greeting message
   2. Dark / Light theme toggle (persisted via localStorage)
   3. Smooth scrolling for navigation links
   4. Mobile menu toggle
   5. Active nav link highlighting on scroll
   6. Contact form validation with feedback
   7. Scroll-triggered fade-in animations
   ============================================================ */

// Run after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------------------------
       1. TIME-BASED GREETING
       Displays a different greeting depending on the time of day.
    ---------------------------------------------------------- */
    const greetingEl = document.getElementById('greeting');

    /**
     * Returns a greeting string based on the current hour.
     * @returns {string} A time-appropriate greeting.
     */
    function getGreeting() {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good Morning ☀️';
        if (hour < 17) return 'Good Afternoon 🌤️';
        if (hour < 21) return 'Good Evening 🌅';
        return 'Good Night 🌙';
    }

    if (greetingEl) {
        greetingEl.textContent = getGreeting();
    }


    /* ----------------------------------------------------------
       2. DARK / LIGHT THEME TOGGLE
       Switches the data-theme attribute on <html> and
       saves the preference in localStorage.
    ---------------------------------------------------------- */
    const themeToggle = document.getElementById('themeToggle');
    const htmlEl = document.documentElement;

    // Load saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlEl.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const current = htmlEl.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        htmlEl.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });


    /* ----------------------------------------------------------
       3. SMOOTH SCROLLING
       All anchor links with href starting with "#" scroll
       smoothly to their target section.
    ---------------------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                // Close mobile menu if open
                navLinks.classList.remove('open');
                menuToggle.classList.remove('active');

                // Scroll to target with offset for fixed nav
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });


    /* ----------------------------------------------------------
       4. MOBILE MENU TOGGLE
       Opens / closes the navigation menu on small screens.
    ---------------------------------------------------------- */
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        menuToggle.classList.toggle('active');
    });


    /* ----------------------------------------------------------
       5. ACTIVE NAV LINK ON SCROLL
       Highlights the nav link corresponding to the section
       currently visible in the viewport.
    ---------------------------------------------------------- */
    const sections = document.querySelectorAll('.section');
    const allNavLinks = document.querySelectorAll('.nav-link');

    /**
     * Updates the "active" class on navigation links based
     * on which section is currently in view.
     */
    function updateActiveLink() {
        const scrollPos = window.scrollY + 120; // offset for fixed nav

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                allNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // run once on load


    /* ----------------------------------------------------------
       6. CONTACT FORM VALIDATION
       Validates Name, Email, and Message fields on submit.
       Shows success or error feedback below the button.
       (No backend — demonstration only.)
    ---------------------------------------------------------- */
    const submitBtn = document.getElementById('submitBtn');
    const feedbackEl = document.getElementById('formFeedback');

    submitBtn.addEventListener('click', () => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Reset feedback
        feedbackEl.textContent = '';
        feedbackEl.className = 'form-feedback';

        // Simple validation
        if (!name || !email || !message) {
            feedbackEl.textContent = 'Please fill in all fields.';
            feedbackEl.classList.add('error');
            return;
        }

        // Basic email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            feedbackEl.textContent = 'Please enter a valid email address.';
            feedbackEl.classList.add('error');
            return;
        }

        // Success (no actual submission)
        feedbackEl.textContent = 'Thank you! Your message has been received.';
        feedbackEl.classList.add('success');

        // Clear form fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    });


    /* ----------------------------------------------------------
       7. SCROLL-TRIGGERED FADE-IN ANIMATIONS
       Uses IntersectionObserver to add a "visible" class to
       elements with the "fade-in" class when they enter view.
    ---------------------------------------------------------- */
    // Add fade-in class to animatable elements
    const animatableSelectors = [
        '.section-title',
        '.section-label',
        '.about-image-wrapper',
        '.about-text',
        '.skill-category',
        '.project-card',
        '.contact-form-wrapper',
        '.contact-info'
    ];

    animatableSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('fade-in');
        });
    });

    // Create observer
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // animate only once
                }
            });
        },
        {
            threshold: 0.15,   // trigger when 15% visible
            rootMargin: '0px 0px -40px 0px'
        }
    );

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

});