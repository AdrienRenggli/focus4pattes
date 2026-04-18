import { galleryContent } from './galleryContent.js';

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('gallery-grid');
    const modal = document.getElementById('photo-modal');
    const closeBtn = document.getElementById('modal-close');
    const backdrop = document.querySelector('.modal-backdrop');

    const modalImg = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalFocal = document.getElementById('modal-meta-focal');
    const modalAperture = document.getElementById('modal-meta-aperture');
    const modalShutter = document.getElementById('modal-meta-shutter');
    const modalISO = document.getElementById('modal-meta-iso');

    // Helper to get current language from storage
    const getLang = () => localStorage.getItem('lang') || 'fr';

    // ---  DOM Injection ---
    function createGalleryItem(data) {
        const item = document.createElement('div');
        item.className = 'gallery-item';

        // Store the full bilingual object directly on the element for later access
        item._bilingualData = data;

        const src = `img/gallery/${data.path}`;
        const img = document.createElement('img');
        img.src = src;
        img.loading = 'lazy';
        img.alt = data.title;

        item.appendChild(img);
        
        // Pass the element itself to openModal
        item.addEventListener('click', () => openModal(item));
        
        grid.appendChild(item);
    }

    // --- Modal & EXIF Logic ---
    async function openModal(item) {
        const data = item._bilingualData;
        const lang = getLang();
        const imgElement = item.querySelector('img');

        modalImg.src = `img/gallery/${data.path}`;
        modalTitle.innerText = data.title;
        modalDesc.innerText = data.description[lang] || "";
        
        // Tag the modal with the current path so the language listener can find it
        modal.dataset.activePath = data.path;
        
        modalFocal.innerText = "";
        modalShutter.innerText = "";
        
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        try {
            const exifData = await exifr.parse(imgElement);
            
            if (exifData) {
                modalFocal.innerText = exifData.FocalLength ? `f ${exifData.FocalLength}mm` : "";

                modalAperture.innerText = exifData.FNumber ? `ƒ/${exifData.FNumber}` : "";

                
                let shutter = "";
                if (exifData.ExposureTime) {
                    const fraction = Math.round(1 / exifData.ExposureTime);
                    modalShutter.innerText = `shutter speed 1/${fraction}`;
                }

                modalISO.innerText = exifData.ISO ? `ISO ${exifData.ISO}` : "";
            } else {
                modalFocal.innerText = "";
            }
        } catch (error) {
            console.error("Failed to extract EXIF:", error);
            modalFocal.innerText = "Error while loading metadata";
        }
    }

    function closeModal() {
        modal.classList.add('hidden');
        delete modal.dataset.activePath;
        document.body.style.overflow = '';
        setTimeout(() => modalImg.src = '', 300);
    }

    // React to the language change event
    window.addEventListener('languageChanged', () => {
        const lang = getLang();

        // Update the modal content if it is currently open
        if (!modal.classList.contains('hidden') && modal.dataset.activePath) {
            const activeItemData = galleryContent.find(i => i.path === modal.dataset.activePath);
            if (activeItemData) {
                modalDesc.innerText = activeItemData.description[lang] || "";
            }
        }
    });

    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
    });

    // --- Load Initial Images ---
    galleryContent.forEach(item => createGalleryItem(item));
});