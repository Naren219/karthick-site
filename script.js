// Minimal JavaScript for Karthick Yoga website - Optimized for fast loading

document.addEventListener('DOMContentLoaded', function() {
    // Essential elements
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // Smooth scroll to target section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Update active navigation link based on scroll position (throttled)
    let ticking = false;
    function updateActiveNavLink() {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollPosition = window.scrollY + 100;
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    const sectionId = section.getAttribute('id');
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        navLinks.forEach(link => link.classList.remove('active'));
                        
                        const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                        if (activeLink) {
                            activeLink.classList.add('active');
                        }
                    }
                });
                ticking = false;
            });
            ticking = true;
        }
    }
    
    // Throttled scroll listener
    window.addEventListener('scroll', updateActiveNavLink, { passive: true });
    
    // Mobile menu toggle functionality
    if (mobileMenuToggle && navLinksContainer) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinksContainer.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        
        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navLinksContainer.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
        
        // Close mobile menu on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                mobileMenuToggle.classList.remove('active');
                navLinksContainer.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
    
    // Simple section reveal (minimal animation)
    function revealSections() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Run section reveal on load and scroll
    window.addEventListener('load', revealSections);
    window.addEventListener('scroll', revealSections, { passive: true });
    
    // Copy phone number functionality
    window.copyPhoneNumber = function() {
        const phoneNumber = '+91 9944516052';
        
        if (navigator.clipboard) {
            // Modern clipboard API
            navigator.clipboard.writeText(phoneNumber).then(() => {
                showCopySuccess();
            });
        } else {
            // Fallback for older browsers
            const textarea = document.createElement('textarea');
            textarea.value = phoneNumber;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            showCopySuccess();
        }
    };
    
    function showCopySuccess() {
        const existingMessage = document.querySelector('.copy-success');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        const successMessage = document.createElement('div');
        successMessage.className = 'copy-success';
        successMessage.textContent = 'Phone number copied!';
        document.body.appendChild(successMessage);
        
        setTimeout(() => {
            if (successMessage.parentNode) {
                successMessage.remove();
            }
        }, 3000);
    }
    
    // Add body loaded class for initial animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
}); 