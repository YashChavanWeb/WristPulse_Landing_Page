// Section: Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});







// Section: Carousel Functionality
document.addEventListener('DOMContentLoaded', function () {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const images = document.querySelectorAll('.carousel-track img');

    let index = 0;

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % images.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
    });

    function updateCarousel() {
        const position = -index * 100 + '%';
        track.style.transform = 'translateX(' + position + ')';
    }
});








// Section: Automatic Slider Change
document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    setInterval(function () {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }, 2000);

    function updateSlider() {
        const position = -currentIndex * 100 + '%';
        sliderContainer.style.transform = 'translateX(' + position + ')';
    }
});
