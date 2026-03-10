document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -60px 0px',
        }
    );

    reveals.forEach((el) => revealObserver.observe(el));

    const navToggles = document.querySelectorAll('.nav-toggle');
    navToggles.forEach((toggle) => {
        const nav = toggle.closest('nav');
        const links = nav.querySelector('.nav-links');

        toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', (!expanded).toString());
            links.classList.toggle('open');
        });

        links.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                links.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    });

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Please complete all fields.');
                return;
            }

            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            alert('Thanks for reaching out! I will respond within 24 hours.');
            contactForm.reset();
        });
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
