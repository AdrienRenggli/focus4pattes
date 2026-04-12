async function initLanguage() {
    const response = await fetch('data/dictionary.json');
    const translations = await response.json();
    
    // Default to French or stored preference
    let currentLang = localStorage.getItem('lang') || 'fr';
    
    const updateText = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerText = translations[lang][key];
            }
        });
        // Update flag icon
        document.getElementById('lang-switch').innerText = lang === 'fr' ? '🇬🇧' : '🇫🇷';
    };

    document.getElementById('lang-switch').addEventListener('click', () => {
        currentLang = currentLang === 'fr' ? 'en' : 'fr';
        localStorage.setItem('lang', currentLang);
        updateText(currentLang);
    });

    updateText(currentLang);
}