document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let currentSlide = 0;
    let slideInterval;
    
    // Initialize slider
    function initSlider() {
        if (slides.length === 0) return;
        
        // Set first slide as active
        showSlide(currentSlide);
        
        // Start autoplay
        startSlideInterval();
        
        // Add event listeners
        if (prevBtn) {
            prevBtn.addEventListener('click', prevSlide);
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', nextSlide);
        }
        
        if (dots.length > 0) {
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    showSlide(index);
                });
            });
        }
        
        // Pause autoplay on hover
        const slider = document.querySelector('.slider');
        if (slider) {
            slider.addEventListener('mouseenter', () => {
                clearInterval(slideInterval);
            });
            
            slider.addEventListener('mouseleave', () => {
                startSlideInterval();
            });
        }
    }
    
    // Show specific slide
    function showSlide(index) {
        // Reset current slide
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Reset dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Set current slide and dot as active
        currentSlide = index;
        
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        
        slides[currentSlide].classList.add('active');
        
        if (dots.length > 0 && dots[currentSlide]) {
            dots[currentSlide].classList.add('active');
        }
    }
    
    // Next slide
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    // Previous slide
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    // Start autoplay
    function startSlideInterval() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    // Initialize slider
    initSlider();
    
    // Client logos slider
    const clientLogos = document.querySelector('.clients-slider');
    
    if (clientLogos) {
        // Clone logos for infinite scroll effect
        const logos = clientLogos.querySelectorAll('.client-logo');
        logos.forEach(logo => {
            const clone = logo.cloneNode(true);
            clientLogos.appendChild(clone);
        });
    }
});