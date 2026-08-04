import { ratesContent } from '../res/rates/ratesContent.js';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('rates-content');
    const getLang = () => localStorage.getItem('lang') || 'fr';

    function renderContent() {
        const lang = getLang();

        container.innerHTML = ''; 

        // 1. Header & Intro
        const headerSection = document.createElement('section');
        headerSection.className = 'rates-header-intro';
        headerSection.innerHTML = `
            <header class="rates-header">
                <h1>${ratesContent.header.title[lang]}</h1>
                <p class="subtitle">${ratesContent.header.subtitle[lang]}</p>
            </header>
            <div class="rates-intro">
                <p>${ratesContent.header.intro[lang]}</p>
            </div>
        `;
        container.appendChild(headerSection);

        // 2. Included Section
        const includedSection = document.createElement('section');
        includedSection.className = 'rates-included';
        
        let includedHTML = `<h2 class="section-divider">${ratesContent.included.sectionTitle[lang]}</h2><div class="grid-5-col">`;
        
        ratesContent.included.items.forEach(item => {
            includedHTML += `
                <div class="included-item">
                    <i class="${item.icon} fa-2x"></i>
                    <h3>${item.title[lang]}</h3>
                    <p>${item.desc[lang]}</p>
                </div>
            `;
        });
        includedHTML += `</div>`;
        includedSection.innerHTML = includedHTML;
        container.appendChild(includedSection);

        // 3. Packages Section
        const packagesSection = document.createElement('section');
        packagesSection.className = 'rates-packages';
        
        let packagesHTML = `<h2 class="section-divider">${ratesContent.packages.sectionTitle[lang]}</h2><div class="grid-5-col packages-grid">`;
        
        ratesContent.packages.items.forEach(pkg => {
            const highlightClass = pkg.isHighlighted ? 'highlighted' : '';
            const idealList = pkg.idealFor[lang].map(li => `<li>${li}</li>`).join('');
            
            packagesHTML += `
                <article class="package-card ${highlightClass}">
                    <h3>${pkg.title[lang]}</h3>
                    <span class="pkg-subtitle">${pkg.subtitle[lang]}</span>
                    ${pkg.desc[lang] ? `<p class="pkg-desc">${pkg.desc[lang]}</p>` : ''}
                    
                    <div class="pkg-price">${pkg.price}</div>
                    
                    <ul class="pkg-features">
                        <li>${pkg.duration[lang]}</li>
                        <li>${pkg.photos[lang].replace('\n', '<br>')}</li>
                    </ul>
                    
                    <div class="pkg-ideal">
                        <strong>${ratesContent.packages.idealForText[lang]}</strong>
                        <ul>${idealList}</ul>
                    </div>                 
                </article>
            `;
        });
        packagesHTML += `</div>`;
        packagesSection.innerHTML = packagesHTML;
        container.appendChild(packagesSection);

        // 4. Options & Tirages Section
        const optionsSection = document.createElement('section');
        optionsSection.className = 'rates-options';
        
        const opt = ratesContent.options;
        
        let optionsHTML = `
            <h2 class="section-divider">${opt.sectionTitle[lang]}</h2>
            <div class="options-grid">
                <!-- Digital Column -->
                <div class="options-box">
                    <h3>${opt.digital.title[lang]}</h3>
                    <ul class="option-list">
                        ${opt.digital.items.map(item => `
                            <li>
                                <div class="option-info">
                                    <i class="${item.icon}"></i>
                                    <span>${item.name[lang]}</span>
                                    ${item.badge ? `<span class="badge">${item.badge[lang]}</span>` : ''}
                                </div>
                                <span class="option-price">${item.price}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <!-- Prints Column -->
                <div class="options-box">
                    <h3>${opt.prints.title[lang]}</h3>
                    <ul class="option-list">
                        ${opt.prints.items.map(item => `
                            <li>
                                <div class="option-info">
                                    <i class="${item.icon}"></i>
                                    <span>${item.name[lang]}</span>
                                </div>
                                <span class="option-price">${item.price}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>

            <!-- Travel Full Width Banner -->
            <div class="travel-banner">
                <div class="travel-title">
                    <i class="fa-solid fa-car"></i>
                    <strong>${opt.travel.title[lang]}</strong>
                </div>
                <div class="travel-info">
                    <span>${opt.travel.freeRadius[lang]}</span>
                    <span class="highlight-pill">${opt.travel.freeLabel[lang]}</span>
                </div>
                <div class="travel-rate">
                    ${opt.travel.rateLabel[lang]}
                </div>
            </div>
        `;
        optionsSection.innerHTML = optionsHTML;
        container.appendChild(optionsSection);

        // 5. Why Choose Us Section
        const whyUsSection = document.createElement('section');
        whyUsSection.className = 'rates-why-us';
        
        let whyUsHTML = `
            <h2 class="section-divider">${ratesContent.whyUs.sectionTitle[lang]}</h2>
            <div class="grid-4-col">
                ${ratesContent.whyUs.items.map(item => `
                    <div class="why-item">
                        <i class="${item.icon} fa-2x"></i>
                        <h3>${item.title[lang]}</h3>
                        <p>${item.desc[lang]}</p>
                    </div>
                `).join('')}
            </div>
        `;
        whyUsSection.innerHTML = whyUsHTML;
        container.appendChild(whyUsSection);

        // 6. Contact Banner
        // 6. Contact Banner
    const calloutSection = document.createElement('section');
    calloutSection.className = 'rates-callout';
    calloutSection.innerHTML = `
        <div class="callout-content">
            <div class="callout-icon">
                <i class="fa-solid fa-paw fa-3x"></i>
            </div>
            <div class="callout-text">
                <h2>${ratesContent.callout.title[lang]}</h2>
                <p>${ratesContent.callout.text[lang]}</p>
                <a class="callout-btn reveal-email-link" href="mailto:${ratesContent.callout.email}">
                    <i class="fa-regular fa-envelope"></i> ${ratesContent.callout.button[lang]}
                </a>
            </div>
        </div>
    `;
    container.appendChild(calloutSection);
            
        }

    // Initial render
    renderContent();
    if (typeof initReveal === 'function') initReveal();

    // Re-render when the language changes
    window.addEventListener('languageChanged', () => {
        renderContent();
        if (typeof initReveal === 'function') initReveal();
    });
});