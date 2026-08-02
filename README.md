# Focus4Pattes

A professional, responsive portfolio website created for a pet photographer. This platform is designed to elegantly showcase pet photography portfolios, detail service rates, and provide clients with booking information and necessary documentation.

## Key Features

*   **Portfolio Galleries:** Optimized image galleries featuring high-quality WebP format images (e.g., cats, dogs) for faster load times without sacrificing quality.
*   **Dynamic Component Loading:** Modular HTML architecture utilizing `load-components.js` to dynamically inject the header and footer across all pages, ensuring maintainability.
*   **Internationalization (i18n):** Built-in multi-language support driven by `data/dictionary.json` and parsed through `js/i18n.js`, allowing the photographer to reach a broader audience.
*   **Smooth Scroll Animations:** Engaging user experience with scroll-reveal animations powered by `js/reveal.js`.
*   **Downloadable Resources:** Direct access to booking documentation, including the official reservation form (`Bon_Reservation_Focus4Pattes.pdf`).

## Project Architecture

The project follows a clean, vanilla web development structure:

```text
focus4pattes/
├── index.html              # Landing page / Home
├── about.html              # About the photographer
├── gallery.html            # Photography portfolios
├── rates.html              # Service packages and pricing
├── legals.html             # Legal notices and terms
│
├── components/             # Reusable UI modules
│   ├── header.html
│   └── footer.html
│
├── css/                    # Stylesheets
│   ├── [page].css          # Page-specific styles
│   ├── header-footer.css   # Global layout styles
│   └── components/         # Specific component styles (e.g., topButton.css)
│
├── js/                     # JavaScript logic
│   ├── main.js             # Core site logic
│   ├── i18n.js             # Language dictionary handling
│   ├── load-components.js  # Header/Footer injection
│   ├── reveal.js           # Reveal mail & phone number
│   └── [page].js           # Page-specific scripts (gallery.js, about.js, etc.)
│
├── data/                   # Static data stores
│   └── dictionary.json     # Translations for i18n
│
└── res/                    # Media and documents
    ├── about/              # Images/content for the about page
    ├── docs/               # Downloadable PDFs (e.g., Reservation Form)
    ├── gallery/            # High-res WebP portfolio images
    ├── home/               # Images and SVGs for the main page
    ├── layout/             # Other ressources 
    ├── legals/             # Content of the legal page
    └── rates/              # Images and content of the tarif page
```

## Getting Started

Since this is a static, frontend-only project built with Vanilla HTML/CSS/JS, no complex build tools or package managers (like npm/yarn) are required.

### Prerequisites
*   A modern web browser.
*   A local web server (to bypass CORS restrictions when fetching local JSON data and HTML components).

### Installation & Running Locally
1.  **Clone or extract** the project repository to your local machine.
2.  **Start a local server** in the root directory (`focus4pattes/`). 
    *   *Using Python 3:* Run `python -m http.server 8000`
    *   *Using Node.js:* Run `npx serve` or use the VS Code "Live Server" extension.
3.  **Open your browser** and navigate to `http://localhost:8000`.

## Technologies Used

*   **HTML5:** Semantic markup and modular component structure.
*   **CSS3:** Custom styling, Flexbox/Grid layouts, and responsive media queries.
*   **Vanilla JavaScript (ES6+):** DOM manipulation, asynchronous fetching (i18n & components), and UI animations.
*   **WebP Image Format:** Next-gen image optimization for superior performance.

## Legal & Documentation

All terms of service, copyright notices, and legal disclaimers regarding the photography services and website usage can be found on the `legals.html` page. Reservation policies are outlined in the provided PDF form located in `/res/docs/`.

## AI Notice

This website was built using an AI-assisted "pair programming" methodology. While the project was originally mapped out in Figma, the client provided AI-generated templates for the initial build. The resulting codebase is a manual refinement and integration of those AI templates to meet the project's design and functional requirements.