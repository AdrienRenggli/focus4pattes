// The text content stored in a JS array for easy bilingual support
import { aboutContent } from '../res/about/aboutContent.js';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('about-content');

    const getLang = () => localStorage.getItem('lang') || 'fr';

    function renderContent() {
        const lang = getLang();
        container.innerHTML = ''; // Clear current content

        aboutContent.forEach(block => {
            let el;
            
            if (block.type === 'title') {
                el = document.createElement('h1');
                el.className = 'about-title';
                el.innerText = block.content[lang];
            } 
            else if (block.type === 'subtitle') {
                el = document.createElement('h2');
                el.className = 'about-subtitle';
                el.innerText = block.content[lang];
            }
            else if (block.type === 'paragraph') {
                el = document.createElement('p');
                el.className = `about-paragraph ${block.bold ? 'bold' : ''}`;
                el.innerText = block.content[lang];
            }
            else if (block.type === 'list') {
                el = document.createElement('div');
                el.className = 'about-list';
                
                block.items.forEach(item => {
                    const p = document.createElement('p');
                    
                    const span = document.createElement('span');
                    span.innerText = item.label[lang] + " ";
                    
                    const textNode = document.createTextNode(item.desc[lang]);
                    
                    p.appendChild(span);
                    p.appendChild(textNode);
                    el.appendChild(p);
                });
            }
            else if (block.type === 'cta_link') {
                el = document.createElement('div');
                el.id = 'about-link';
                
                const textNode = document.createTextNode(block.text[lang]);
                const a = document.createElement('a');
                
                // Use the class so reveal.js can find it
                a.className = 'reveal-email-link'; 
                a.innerText = block.linkText[lang];
                
                el.appendChild(textNode);
                el.appendChild(a);
            }
            else if (block.type === 'material') {
                el = document.createElement('div');
                el.id = 'about-material';
                
                const titleNode = document.createTextNode(block.title[lang]);
                el.appendChild(titleNode);
                el.appendChild(document.createElement('br'));
                
                block.items.forEach((item, index) => {
                    const text = typeof item === 'string' ? item : item[lang];
                    el.appendChild(document.createTextNode(text));
                    
                    if (index < block.items.length - 1) {
                        el.appendChild(document.createElement('br'));
                    }
                });
            }

            if (el) container.appendChild(el);
        });
    }

    // Initial render
    renderContent();

    initReveal();

    // Re-render when the language changes
    window.addEventListener('languageChanged', renderContent);
});