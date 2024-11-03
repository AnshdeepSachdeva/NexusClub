// Hamburger and Navbar
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');

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

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetSection = document.querySelector(link.getAttribute('href'));
            if (targetSection) {
                e.preventDefault();
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                navLinks.forEach(navLink => navLink.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + header.offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));

                const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });

        if (window.scrollY === 0) {
            navLinks.forEach(link => link.classList.remove('active'));
            const homeLink = document.querySelector('nav a[href="#"]');
            if (homeLink) homeLink.classList.add('active');
        }
    });
});

// Parallax Effect
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY * 0.45;
    document.body.style.setProperty("--scrollY", scrollY + "px");
});
