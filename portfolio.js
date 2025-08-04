// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
});

// Navigation functionality
let isMenuOpen = false;

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    const navbar = document.getElementById('navbar');
    const offset = navbar.offsetHeight;
    
    if (element) {
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
    
    // Close mobile menu if open
    if (isMenuOpen) {
        toggleMobileMenu();
    }
}

// Navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    const scrolled = window.scrollY > 50;
    
    if (scrolled) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Hero mouse tracking effect
function initHeroMouseTracking() {
    const hero = document.querySelector('.hero');
    const heroBg = document.getElementById('heroBg');
    
    if (hero && heroBg) {
        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            heroBg.style.setProperty('--mouse-x', `${x}%`);
            heroBg.style.setProperty('--mouse-y', `${y}%`);
        });
    }
}

// Animate elements on scroll
function animateOnScroll() {
    const animatedElements = document.querySelectorAll('.skill-card, .project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || '0s';
                entry.target.style.animationDelay = delay;
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach((el) => {
        observer.observe(el);
    });
}

// Download resume function
function downloadResume() {
    // Create a temporary link for demo purposes
    // In a real implementation, you would link to your actual resume file
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual resume URL
    link.download = 'Sachin_Chaubey_Resume.pdf';
    
    // For demo, show an alert
    alert('Resume download would start here. Please add your actual resume file.');
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Parallax effect for hero shapes
function initParallaxEffect() {
    const shapes = document.querySelectorAll('.shape');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.1;
            shape.style.transform = `translateY(${rate * speed}px) rotate(${scrolled * speed * 0.1}deg)`;
        });
    });
}

// Add typing effect to hero title
function initTypingEffect() {
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        const text = heroName.textContent;
        heroName.textContent = '';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            heroName.textContent += text.charAt(i);
            i++;
            if (i > text.length - 1) {
                clearInterval(typeInterval);
            }
        }, 100);
    }
}

// Initialize all functionality
function init() {
    initHeroMouseTracking();
    animateOnScroll();
    initSmoothScroll();
    initParallaxEffect();
    // Uncomment the line below if you want the typing effect
    // initTypingEffect();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Initial navbar state
    handleNavbarScroll();
}

// Run initialization when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add click animation to buttons
    const buttons = document.querySelectorAll('button, .btn-primary, .btn-secondary, .btn-outline');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});