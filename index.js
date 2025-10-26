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
  const slideWidth = slides[0].getBoundingClientRect().width + 20; 
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}, 3000);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSlider();
  });
});

window.addEventListener('scroll', () => {
  const saySection = document.querySelector('.SaySection');
  const scrollY = window.scrollY;
  
  const offset = Math.min(scrollY * 0.3, 100); 
  saySection.style.transform = `translateX(${offset}px)`;
});