const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    // Adds background when scrolling down past 20 pixels
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        // Removes background when back at the very top
        navbar.classList.remove('scrolled');
    }
});
