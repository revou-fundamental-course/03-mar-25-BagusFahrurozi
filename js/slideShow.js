let index = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

function showSlide(i) {
    index = i;
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function currentSlide(i) {
    showSlide(i);
}

function autoSlide() {
    index = (index + 1) % 3;
    showSlide(index);
}

setInterval(autoSlide, 3000);
showSlide(0);