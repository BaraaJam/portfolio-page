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

const toggle = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark');
    toggle.checked = true;
}

toggle.addEventListener('change', () => {
    const isDark = toggle.checked;
    document.body.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});