// scripts.js

// Interactive Animations
const animateElements = () => {
    const elements = document.querySelectorAll('.animate');
    elements.forEach(el => {
        el.classList.add('fade-in');  // Assuming fade-in is defined in CSS
    });
};

// Smooth Scrolling
const smoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
};

// Form Validation
const validateForm = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        const email = this.querySelector('input[type="email"]').value;
        if (!email.includes('@')) {
            e.preventDefault();
            alert('Please enter a valid email address.');
        }
    });
};

// Dynamic Effects
const dynamicEffects = () => {
    const dynamicElements = document.querySelectorAll('.dynamic-effect');
    window.addEventListener('scroll', () => {
        dynamicElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('active'); // Activate effect when in view.
            }
        });
    });
};

// Initialize all functions
const init = () => {
    animateElements();
    smoothScroll();
    validateForm();
    dynamicEffects();
};

document.addEventListener('DOMContentLoaded', init);