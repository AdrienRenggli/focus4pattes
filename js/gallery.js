import { galleryContent } from '../res/gallery/galleryContent.js';

document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('masonry-gallery');
    const modal = document.getElementById('carousel-modal');
    const carouselImg = document.getElementById('carousel-image');
    const captionTitle = document.getElementById('carousel-title');
    const captionDesc = document.getElementById('carousel-description');
    
    let currentImages = [];
    let currentIndex = 0;

    // Supported formats in the order they will be tested
    const validExtensions = ['jpg', 'jpeg', 'png', 'webp'];

    // 1. Parse category from URL, default to 'all'
    const urlParams = new URLSearchParams(window.location.search);
    const currentCategory = urlParams.get('category') || 'all';

    // Highlight the active category in the navigation
    document.querySelectorAll('.cat-item').forEach(link => {
        const linkCategory = new URL(link.href).searchParams.get('category');
        if (linkCategory === currentCategory) {
            link.classList.add('active');
        }
    });

    // 2. Compile data from galleryContent.js
    let petsToRender = [];

    if (currentCategory === 'all') {
        for (const categoryName in galleryContent) {
            const petsWithCategory = galleryContent[categoryName].map(pet => ({
                ...pet,
                folderCategory: categoryName 
            }));
            petsToRender = petsToRender.concat(petsWithCategory);
        }
    } else {
        if (galleryContent[currentCategory]) {
            petsToRender = galleryContent[currentCategory].map(pet => ({
                ...pet,
                folderCategory: currentCategory
            }));
        } else {
            galleryContainer.innerHTML = `<p style="text-align:center;">404: working on it.</p>`;
            return;
        }
    }

    renderGallery(petsToRender);

    // --- HELPER: Find the first working extension for a given image index ---
    async function getValidImageUrl(basePath, index) {
        for (const ext of validExtensions) {
            const testUrl = `${basePath}${index}.${ext}`;
            try {
                const response = await fetch(testUrl, { method: 'HEAD' });
                if (response.ok) {
                    return testUrl; // Found a working format!
                }
            } catch (error) {
                // Network error, ignore and continue loop
            }
        }
        return null; // Hit 404s on all extensions
    }

    // 3. Render Masonry Grid
    function renderGallery(pets) {
        galleryContainer.innerHTML = ''; 
        
        pets.forEach(async (pet) => {
            const basePath = `res/gallery/${pet.folderCategory}/${pet.id}/`;
            
            // Create the wrapper immediately to maintain DOM order
            const item = document.createElement('div');
            item.className = 'masonry-item';
            
            // Wait to find the correct extension for the cover photo (1.jpg, 1.png, etc.)
            const coverUrl = await getValidImageUrl(basePath, 1);
            
            // Only render the item if a cover photo was actually found
            if (coverUrl) {
                // Image
                const img = document.createElement('img');
                img.src = coverUrl; 
                img.alt = pet.name || 'Photographie d\'animal';
                img.loading = 'lazy';
                
                // Name Overlay
                const overlay = document.createElement('div');
                overlay.className = 'pet-overlay';
                overlay.textContent = pet.name;
                
                item.appendChild(img);
                item.appendChild(overlay);
                
                item.addEventListener('click', () => openCarousel(basePath, pet, coverUrl));
                galleryContainer.appendChild(item);
            }
        });
    }

    // 4. Carousel Logic
    async function openCarousel(basePath, pet, coverUrl) {
        // Start the array with the cover URL we already found
        currentImages = [coverUrl]; 
        currentIndex = 0;
        updateCarouselUI();
        
        // Setup text data
        const currentLang = localStorage.getItem('lang') || 'fr';
        captionTitle.textContent = pet.name;
        captionDesc.textContent = pet.description ? pet.description[currentLang] : '';

        modal.classList.remove('hidden');

        // Check for sequential images across multiple formats
        let indexToTest = 2;
        let keepChecking = true;

        while (keepChecking) {
            // Use helper function to check 2.jpg, 2.png, etc.
            const nextUrl = await getValidImageUrl(basePath, indexToTest);
            
            if (nextUrl) {
                currentImages.push(nextUrl);
                indexToTest++;
                
                // If more than 1 image is found, show the arrows
                const navButtons = document.querySelectorAll('.modal-btn.prev, .modal-btn.next');
                navButtons.forEach(btn => btn.style.display = 'block');
            } else {
                keepChecking = false; // No formats worked for this index, stop checking
            }
        }
        
        // Hide next/prev buttons if there is only 1 image total
        if (currentImages.length <= 1) {
            const navButtons = document.querySelectorAll('.modal-btn.prev, .modal-btn.next');
            navButtons.forEach(btn => btn.style.display = 'none');
        }
    }

    // 5. Navigation Logic
    function updateCarouselUI() {
        carouselImg.src = currentImages[currentIndex];
    }

    document.getElementById('carousel-prev').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : currentImages.length - 1;
        updateCarouselUI();
    });

    document.getElementById('carousel-next').addEventListener('click', () => {
        currentIndex = (currentIndex < currentImages.length - 1) ? currentIndex + 1 : 0;
        updateCarouselUI();
    });

    document.getElementById('modal-close').addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
    });
});