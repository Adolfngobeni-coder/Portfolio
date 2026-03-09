// Fade-in animation on scroll
const elements = document.querySelectorAll('.fade-in');

const showOnScroll = () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.classList.add('show');
    }
  });
};

window.addEventListener('scroll', showOnScroll);
showOnScroll();
