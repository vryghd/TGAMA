// Hamburger Menu Toggle
const mobileMenu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
    navLinks.classList.toggle('active');
    
    // Toggle ARIA expanded state
    const isExpanded = mobileMenu.getAttribute('aria-expanded') === 'true';
    mobileMenu.setAttribute('aria-expanded', !isExpanded);
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-active');
        navLinks.classList.remove('active');
        mobileMenu.setAttribute('aria-expanded', 'false');
    });
});

// Scroll Animations (Fade-in on scroll)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Smooth scrolling is natively handled by CSS scroll-behavior: smooth

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Form Submission Placeholder
const contactForm = document.querySelector('#compliantLeadForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you shortly.');
        contactForm.reset();
    });
}

// Automatic Interlinking for Legal Terms Site-Wide
function interlinkLegalTerms() {
    const terms = [
        { name: 'Privacy Policy', url: 'privacy-policy.html' },
        { name: 'Terms of Service', url: 'terms-of-service.html' }
    ];

    // Select text nodes in main content areas to avoid breaking attributes or scripts
    const contentElements = document.querySelectorAll('p, li, .sms-disclosure, .legal-links');

    contentElements.forEach(el => {
        // Skip if the element is already a link or contains one for these specific terms
        if (el.tagName === 'A' || el.closest('a')) return;

        let html = el.innerHTML;
        let modified = false;

        terms.forEach(term => {
            // Regex to find the term but not if it's already inside an <a> tag
            // Using a simpler replacement that checks for existing links first
            if (html.includes(term.name) && !html.includes(`href="${term.url}"`)) {
                const regex = new RegExp(term.name, 'gi');
                html = html.replace(regex, `<a href="${term.url}" style="color: var(--gold); text-decoration: underline;">${term.name}</a>`);
                modified = true;
            }
        });

        if (modified) {
            el.innerHTML = html;
        }
    });
}

// Initialize Interlinking on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    interlinkLegalTerms();
});