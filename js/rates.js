import { ratesContent } from '../res/rates/ratesContent.js';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('rates-content');

    const getLang = () => localStorage.getItem('lang') || 'fr';

    function renderContent() {
        const lang = getLang();
        container.innerHTML = '';

        ratesContent.forEach(block => {
            let el;
            
            // --- HEADER ---
            if (block.type === 'header') {
                el = document.createElement('header');
                el.className = 'pricing-header';
                
                const h2 = document.createElement('h2');
                h2.innerText = block.title[lang];
                el.appendChild(h2);
            } 
            
            // --- PACKAGES ---
            else if (block.type === 'packages') {
                el = document.createElement('section');
                el.className = 'packages';
                
                block.items.forEach(item => {
                    const card = document.createElement('div');
                    card.className = `package-card ${item.highlight ? 'highlight' : ''}`;
                    
                    const h3 = document.createElement('h3');
                    h3.innerHTML = item.title[lang] + (item.subtitle ? `<br><span>${item.subtitle[lang]}</span>` : '');
                    card.appendChild(h3);
                    
                    if (item.desc) {
                        const desc = document.createElement('p');
                        desc.className = 'package-desc';
                        desc.innerText = item.desc[lang];
                        card.appendChild(desc);
                    }
                    
                    const price = document.createElement('p');
                    price.className = 'price';
                    price.innerText = item.price[lang];
                    card.appendChild(price);
                    
                    const ul = document.createElement('ul');
                    ul.className = 'package-features';
                    item.features.forEach(feat => {
                        const li = document.createElement('li');
                        li.innerText = feat[lang];
                        ul.appendChild(li);
                    });
                    card.appendChild(ul);
                    
                    el.appendChild(card);
                });
            }
            
            // --- DETAILS ---
            else if (block.type === 'details') {
                el = document.createElement('section');
                el.className = 'service-details';
                
                const h3 = document.createElement('h3');
                h3.innerText = block.title[lang];
                el.appendChild(h3);
                
                const p = document.createElement('p');
                p.className = 'subtitle-small';
                p.innerText = block.subtitle[lang];
                el.appendChild(p);
                
                const grid = document.createElement('div');
                grid.className = 'details-grid';
                
                block.items.forEach(item => {
                    const detailItem = document.createElement('div');
                    detailItem.className = 'detail-item';
                    
                    const h4 = document.createElement('h4');
                    h4.innerText = item.label[lang];
                    detailItem.appendChild(h4);
                    
                    const desc = document.createElement('p');
                    desc.innerText = item.desc[lang];
                    detailItem.appendChild(desc);
                    
                    grid.appendChild(detailItem);
                });
                
                el.appendChild(grid);
            }
            
            // --- OPTIONS ---
            else if (block.type === 'options') {
                el = document.createElement('section');
                el.className = 'options-section';
                
                const h3 = document.createElement('h3');
                h3.innerText = block.title[lang];
                el.appendChild(h3);
                
                const optionsContainer = document.createElement('div');
                optionsContainer.className = 'options-container';
                
                const table = document.createElement('table');
                table.className = 'options-table';
                const tbody = document.createElement('tbody');
                
                block.items.forEach(item => {
                    const tr = document.createElement('tr');
                    
                    const tdLabel = document.createElement('td');
                    tdLabel.innerText = item.label[lang];
                    tr.appendChild(tdLabel);
                    
                    const tdPrice = document.createElement('td');
                    tdPrice.className = 'align-right';
                    tdPrice.innerText = item.price[lang];
                    tr.appendChild(tdPrice);
                    
                    tbody.appendChild(tr);
                });
                
                table.appendChild(tbody);
                optionsContainer.appendChild(table);
                el.appendChild(optionsContainer);
                
                const note = document.createElement('p');
                note.className = 'custom-options-note';
                note.innerText = block.note[lang];
                el.appendChild(note);
            }
            
            // --- FOOTER ---
            else if (block.type === 'footer') {
                el = document.createElement('footer');
                el.className = 'pricing-cta';
                
                const btn = document.createElement('a');
                btn.href = '#'; 
                btn.className = 'cta-button reveal-email-link';
                btn.innerText = block.buttonText[lang];
                el.appendChild(btn);
                
                const note = document.createElement('p');
                note.className = 'atelier-note';
                note.innerText = block.note[lang];
                el.appendChild(note);
            }

            if (el) container.appendChild(el);
        });
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