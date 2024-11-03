// Hamburger and Navbar
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });


    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        }
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetSection = document.querySelector(link.getAttribute('href'));
            if (targetSection) {
                e.preventDefault();
                const headerHeight = header.offsetHeight; // Height of the header
                const targetPosition = targetSection.offsetTop - headerHeight; // Adjusted position

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Parallax Effect
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY * 0.45;
    document.body.style.setProperty("--scrollY", scrollY + "px");
});
