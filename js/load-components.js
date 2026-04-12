async function loadComponents() {
    try {
        // Fetch Header and Footer simultaneously
        const [headerResponse, footerResponse] = await Promise.all([
            fetch('components/header.html'),
            fetch('components/footer.html')
        ]);

        // Extract HTML text
        const headerHtml = await headerResponse.text();
        const footerHtml = await footerResponse.text();

        // Inject into the DOM
        document.getElementById('main-header').innerHTML = headerHtml;
        document.getElementById('main-footer').innerHTML = footerHtml;

        // Initialize our scripts
        if (typeof initLanguage === 'function') initLanguage();
        if (typeof initMenu === 'function') initMenu();
        if (typeof initReveal === 'function') initReveal();

    } catch (error) {
        console.error("Error loading components:", error);
    }
}

// Start the process when the basic HTML structure loads
document.addEventListener('DOMContentLoaded', loadComponents);