let lastScrollY = window.scrollY;
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // Scrolling DOWN - hide header
    header.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling UP - show header
    header.style.transform = 'translateY(0)';
  }
  
  lastScrollY = currentScrollY;
});