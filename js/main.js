document.addEventListener('DOMContentLoaded', () => {
    let lastScrollY = window.scrollY;

    // --- 1. CLICK EVENT DELEGATION ---
    document.addEventListener('click', (e) => {
        
        // A. Hamburger Menu Clicked
        const hamburger = e.target.closest('#hamburger-menu');
        if (hamburger) {
            const mainNav = document.querySelector('.main-nav');
            const icon = hamburger.querySelector('i');

            if (mainNav) {
                mainNav.classList.toggle('active');
                
                // Swap FontAwesome icons (Bars <-> X mark)
                if (icon) {
                    if (mainNav.classList.contains('active')) {
                        icon.classList.remove('fa-bars');
                        icon.classList.add('fa-xmark');
                    } else {
                        icon.classList.remove('fa-xmark');
                        icon.classList.add('fa-bars');
                    }
                }
            }
            return; // Stop here so we don't trigger other click events
        }

        // B. Nav Link Clicked (Close the menu automatically)
        const navLink = e.target.closest('.main-nav a');
        if (navLink) {
            const mainNav = document.querySelector('.main-nav');
            const hamburgerIcon = document.querySelector('#hamburger-menu i');
            
            if (mainNav) {
                mainNav.classList.remove('active');
            }
            if (hamburgerIcon) {
                hamburgerIcon.classList.remove('fa-xmark');
                hamburgerIcon.classList.add('fa-bars');
            }
        }

        // C. Back To Top Button Clicked
        const backToTopBtn = e.target.closest('#backToTopBtn');
        if (backToTopBtn) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // D. Click Outside to Close Menu
        const mainNav = document.querySelector('.main-nav');
        // Check if the menu is currently open
        if (mainNav && mainNav.classList.contains('active')) {
            // Check if the click happened OUTSIDE the nav menu and OUTSIDE the hamburger button
            if (!e.target.closest('.main-nav') && !e.target.closest('#hamburger-menu')) {
                mainNav.classList.remove('active');
                
                // Reset the icon back to bars
                const hamburgerIcon = document.querySelector('#hamburger-menu i');
                if (hamburgerIcon) {
                    hamburgerIcon.classList.remove('fa-xmark');
                    hamburgerIcon.classList.add('fa-bars');
                }
            }
        }
    });

    // --- 2. SCROLL EVENTS ---
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        const header = document.querySelector('.header') || document.getElementById('main-header');
        const mainNav = document.querySelector('.main-nav');
        const backToTopBtn = document.getElementById('backToTopBtn');

        // A. Hide/Show Header Logic
        if (header) {
            if (mainNav && mainNav.classList.contains('active')) {
                header.style.transform = 'translateY(0)';
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
        }
        lastScrollY = currentScrollY;

        // B. Back To Top Visibility Logic
        if (backToTopBtn) {
            if (currentScrollY > 200) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        }
    });
});