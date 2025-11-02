// --- script.js ---

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio Website Loaded - Designed with a Modern Blue Theme.');
    
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // The main "cook animation" hover effect is handled purely by CSS
    // using the :hover selector on the .hover-animate class for performance.
    // This file is ready for any future advanced interactivity.
});