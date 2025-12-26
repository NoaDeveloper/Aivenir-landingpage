// Smooth scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Animate on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Animate chat messages sequentially
    animateChatMessages();
});

// Chat animation
function animateChatMessages() {
    const messages = document.querySelectorAll('.message');
    messages.forEach((message, index) => {
        message.style.opacity = '0';
        message.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            message.style.transition = 'all 0.5s ease';
            message.style.opacity = '1';
            message.style.transform = 'translateY(0)';
        }, (index + 1) * 800);
    });

    // Show paywall after last message
    const paywall = document.querySelector('.paywall-overlay');
    if (paywall) {
        paywall.style.opacity = '0';
        setTimeout(() => {
            paywall.style.transition = 'opacity 0.8s ease';
            paywall.style.opacity = '1';
        }, messages.length * 800 + 500);
    }
}

// Parallax effect for floating icons
document.addEventListener('mousemove', (e) => {
    const icons = document.querySelectorAll('.floating-icon');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    icons.forEach((icon, index) => {
        const speed = (index + 1) * 20;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        icon.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Add glow effect on hover for CTA buttons
const ctaButtons = document.querySelectorAll('.cta-button, .cta-button-large, .cta-button-final');
ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.filter = 'brightness(1.2)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.filter = 'brightness(1)';
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(10, 22, 40, 1)';
    } else {
        navbar.style.backgroundColor = 'rgba(10, 22, 40, 0.95)';
    }
});

// Add animation class to CSS
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.8s ease forwards;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
