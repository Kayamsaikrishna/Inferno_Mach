// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.querySelector('i').classList.toggle('fa-bars');
    menuToggle.querySelector('i').classList.toggle('fa-times');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuToggle.querySelector('i').classList.add('fa-bars');
        menuToggle.querySelector('i').classList.remove('fa-times');
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .domain-card, .about-text, .about-image');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .domain-card, .about-text, .about-image');
    
    animatedElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Initial check in case elements are already in view
    animateOnScroll();
});

// Form Placeholder Animation
const placeholders = document.querySelectorAll('.placeholder');
placeholders.forEach(placeholder => {
    placeholder.addEventListener('click', () => {
        alert('This is a placeholder. You can replace it with actual content, videos, or GIFs as needed.');
    });
});

// Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Check if form is properly configured for Formspree
            const formAction = contactForm.getAttribute('action');
            if (formAction === '#' || formAction === '') {
                alert('To make this contact form functional:\n\n' +
                      '1. Sign up at https://formspree.io/\n' +
                      '2. Create a new form and get your form ID\n' +
                      '3. Update the form action in index.html to:\n' +
                      '   action="https://formspree.io/f/YOUR_FORM_ID"\n\n' +
                      'This is a static website, so it needs a service like Formspree to handle form submissions.');
                return;
            }
            
            // Get form data
            const formData = new FormData(contactForm);
            
            // Show submitting message
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // For now, we'll show an alert with the form data
            // In a real implementation, you would send this to a server
            const formDataObj = {};
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });
            
            // Display form data (for demonstration)
            alert('Form data captured:\n' + JSON.stringify(formDataObj, null, 2) + 
                  '\n\nIn a production environment, this would be sent to your email.');
            
            // Reset form and button
            contactForm.reset();
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        });
    }
});