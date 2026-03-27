/* ============================================================
   PORTFOLIO SCRIPTS — Somaia
   Features:
   1. Time-based greeting message
   2. Dark / Light theme toggle (persisted via localStorage)
   3. Mobile menu toggle
   4. Contact form validation with feedback
   5. Scroll-triggered fade-in animations
   6. Tab navigation
   ============================================================ */

// Run after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------------------------
       1. TIME-BASED GREETING
       Displays a different greeting depending on the time of day.
    ---------------------------------------------------------- */
    const greetingEl = document.getElementById('greeting');

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

    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlEl.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const current = htmlEl.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        htmlEl.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });


    /* ----------------------------------------------------------
       3. MOBILE MENU TOGGLE
       Opens / closes the navigation menu on small screens.
    ---------------------------------------------------------- */
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        menuToggle.classList.toggle('active');
    });


    /* ----------------------------------------------------------
       4. CONTACT FORM VALIDATION
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

        feedbackEl.textContent = '';
        feedbackEl.className = 'form-feedback';

        if (!name || !email || !message) {
            feedbackEl.textContent = 'Please fill in all fields.';
            feedbackEl.classList.add('error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            feedbackEl.textContent = 'Please enter a valid email address.';
            feedbackEl.classList.add('error');
            return;
        }

        feedbackEl.textContent = 'Thank you! Your message has been received.';
        feedbackEl.classList.add('success');

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    });


    /* ----------------------------------------------------------
       5. SCROLL-TRIGGERED FADE-IN ANIMATIONS
       Uses IntersectionObserver to add a "visible" class to
       elements with the "fade-in" class when they enter view.
    ---------------------------------------------------------- */
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

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        }
    );

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


    /* ----------------------------------------------------------
       6. TAB NAVIGATION
       Shows the selected section and hides the rest.
    ---------------------------------------------------------- */
    const allNavLinks = document.querySelectorAll('.nav-link');

    function showSection(id) {
        document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
        document.getElementById(id).style.display = 'block';
        allNavLinks.forEach(b => b.classList.remove('active'));
        document.querySelector(`a[href="#${id}"]`).classList.add('active');
    }

    // Show first section by default
    showSection('about');

    // Attach to nav links
    allNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.getAttribute('href').replace('#', '');
            showSection(id);
            // Close mobile menu if open
            navLinks.classList.remove('open');
            menuToggle.classList.remove('active');
        });
    });

});