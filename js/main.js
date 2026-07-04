function initMenu() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.desktop-nav');
    const header = document.getElementById('main-header');
    let lastScrollY = window.scrollY;

    // Toggle Menu
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        // Change icon from ☰ to ✕
        hamburger.innerText = nav.classList.contains('active') ? '✕' : '☰';
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.desktop-nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            hamburger.innerText = '☰';
        });
    });

    // Hide or show the header based on the scroll status
    // If scroll down, hide
    // If scroll up, show
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      // Don't hide the header if the mobile menu is currently open
      if (nav.classList.contains('active')) return;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling DOWN - hide header
        header.style.transform = 'translateY(-100%)';
      } else {
        // Scrolling UP - show header
        header.style.transform = 'translateY(0)';
      }
      lastScrollY = currentScrollY;
    });

    function topFunction() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
        const backToTopBtn = document.getElementById("backToTopBtn");

        if (backToTopBtn) {
            // Scroll to top smoothly when clicked
            backToTopBtn.addEventListener("click", () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            });

            // Only show the button when the user scrolls down
            window.addEventListener("scroll", () => {
                if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                    backToTopBtn.style.display = "block";
                } else {
                    backToTopBtn.style.display = "none";
                }
            });
        }
    });