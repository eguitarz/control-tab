document.addEventListener('DOMContentLoaded', function() {
    // Add a subtle parallax effect on mouse move
    document.addEventListener('mousemove', function(e) {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        
        const cards = document.querySelectorAll('.feature-card');
        cards.forEach(card => {
            card.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
        });
    });

    // Add glitch effect to logo on hover
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseenter', function() {
        logo.classList.add('glitch');
        setTimeout(() => {
            logo.classList.remove('glitch');
        }, 1000);
    });

    // Simulate tab management in the mockup
    const mockup = document.querySelector('.dashboard-mockup');
    if (mockup) {
        // Create a simple animation showing tab management
        setInterval(() => {
            const randomOpacity = Math.random() * 0.5 + 0.5;
            mockup.style.opacity = randomOpacity;
            
            setTimeout(() => {
                mockup.style.opacity = 1;
            }, 150);
        }, 3000);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});