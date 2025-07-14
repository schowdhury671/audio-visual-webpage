// script.js

// Smooth scrolling for anchor links (if you have any)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Add animations when elements come into the viewport
const sections = document.querySelectorAll('.project-section');

const options = {
    root: null,
    threshold: 0.1,
};

const revealSection = (entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
};

const observer = new IntersectionObserver(revealSection, options);

sections.forEach(section => {
    observer.observe(section);
    section.classList.add('hidden');
});
