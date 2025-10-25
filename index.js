const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const triggerPoint = window.innerHeight / 1.2;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < triggerPoint) {
            section.classList.add('animate');
        } else {
            section.classList.remove('animate');
        }
    });
});


const track = document.querySelector('.slider-track');
const slides = Array.from(track.children);
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function updateSlider() {
  const slideWidth = slides[0].getBoundingClientRect().width + 20; // including gap
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

// Auto slide every 3 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}, 3000);

// Dot click
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSlider();
  });
});