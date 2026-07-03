// The text content stored in a JS array for easy bilingual support
import { legalsContent } from '../res/legals/legalsContent.js';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('legals-content');
    const getLang = () => localStorage.getItem('lang') || 'fr';

    function renderContent() {
        const lang = getLang();
        container.innerHTML = ''; 

        // Initialize a counter for your section titles
        let sectionCounter = 1;

        legalsContent.forEach(block => {
            let el;
            
            if (block.type === 'title') {
                el = document.createElement('h1');
                el.className = 'legals-title';
                el.innerText = block.content[lang];
            } 
            else if (block.type === 'subtitle') {
                if (block.content[lang]) {
                    el = document.createElement('h3');
                    el.className = 'legals-subtitle';
                    el.innerText = block.content[lang];
                }
            }
            else if (block.type === 'date') {
                el = document.createElement('p');
                el.className = 'legals-date';
                el.innerText = block.content[lang];
            }
            else if (block.type === 'section_title') {
                el = document.createElement('h2');
                el.className = 'legals-section-title';
                
                el.innerText = `${sectionCounter}. ${block.content[lang]}`;
                el.style.fontWeight = 'bold';
                
                sectionCounter++; 
            }
            else if (block.type === 'paragraph') {
                el = document.createElement('p');
                el.className = 'legals-paragraph';
                el.innerText = block.content[lang];
            }
            else if (block.type === 'link') {
                el = document.createElement('a');
                el.className = 'legals-link';
                el.href = block.href;
                el.innerText = block.content[lang];
                el.target = "_blank";
            }

            if (el) container.appendChild(el);
        });
    }

    renderContent();
    window.addEventListener('languageChanged', renderContent);
});