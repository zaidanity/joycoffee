// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth Scroll dengan offset header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if(targetId === "#" || targetId === "") return;
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            e.preventDefault();
            const offset = 70;
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        }
    });
});

// Efek Parallax saat scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxBg = document.querySelector('.parallax-bg');
    if(parallaxBg) {
        parallaxBg.style.transform = `translateY(${scrolled * 0.08}px) scale(1.02)`;
    }
    
    const header = document.querySelector('header');
    if(scrolled > 20) {
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
    } else {
        header.style.boxShadow = "0 2px 15px rgba(0,0,0,0.03)";
    }
});