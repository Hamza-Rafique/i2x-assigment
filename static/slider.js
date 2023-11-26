let currentSlide = 0;
const totalSlides = 3;

function showSlide(index) {
  const slider = document.querySelector('.slider');
  const slideWidth = document.querySelector('.slide').offsetWidth;
  const newTransformValue = -index * slideWidth + 'px';
  slider.style.transform = 'translateX(' + newTransformValue + ')';
  currentSlide = index;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}


showSlide(currentSlide);
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;
    console.log('Name:', name);
    console.log('Company:', company);
    console.log('Email:', email);
});
