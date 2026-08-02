export const ratesContent = {
    header: {
        title: { fr: "Tarifs & Prestations", en: "Rates & Services" },
        subtitle: { fr: "Capturer l'émotion, simplement.", en: "Capturing emotion, simply." },
        intro: { 
            fr: "Chaque séance est unique et s'adapte au rythme de votre compagnon. Avant d'être une prestation photographique, c'est un moment partagé, pensé pour révéler sa personnalité et le lien qui vous unit.", 
            en: "Each session is unique and adapts to the rhythm of your companion. More than a photography service, it is a shared moment, designed to reveal their personality and the bond that unites you." 
        }
    },

    included: {
        sectionTitle: { fr: "INCLUS DANS CHAQUE SÉANCE", en: "INCLUDED IN EVERY SESSION" },
        items: [
            {
                icon: "fa-regular fa-comments",
                title: { fr: "PRÉPARATION PERSONNALISÉE", en: "PERSONALIZED PREPARATION" },
                desc: { fr: "Échange avant la séance afin de comprendre votre projet et vous conseiller.", en: "Discussion before the session to understand your project and advise you." }
            },
            {
                icon: "fa-solid fa-location-dot",
                title: { fr: "DÉPLACEMENT", en: "TRAVEL" },
                desc: { fr: "À votre domicile ou en extérieur, dans un rayon de 15 km offert.", en: "At your home or outdoors, within a complimentary 15 km radius." }
            },
            {
                icon: "fa-solid fa-paw",
                title: { fr: "UNE SÉANCE RESPECTUEUSE", en: "A RESPECTFUL SESSION" },
                desc: { fr: "Aucune pose forcée. Chaque animal évolue à son rythme.", en: "No forced poses. Each animal moves at their own pace." }
            },
            {
                icon: "fa-solid fa-camera-retro",
                title: { fr: "SÉLECTION & RETOUCHE", en: "SELECTION & RETOUCHING" },
                desc: { fr: "Tri minutieux des images puis retouche individuelle de chaque photographie.", en: "Careful sorting of images, then individual retouching of each chosen photograph." }
            },
            {
                icon: "fa-solid fa-desktop",
                title: { fr: "LIVRAISON", en: "DELIVERY" },
                desc: { fr: "Vos photographies sont livrées en Haute Définition via une galerie privée.", en: "Your photographs are delivered in High Definition via a private gallery." }
            }
        ]
    },

    packages: {
        sectionTitle: { fr: "NOS PRESTATIONS", en: "OUR PACKAGES" },
        idealForText: { fr: "Idéale pour :", en: "Ideal for:" },
        items: [
            {
                id: "essentielle-lifestyle",
                isHighlighted: false,
                title: { fr: "L'Essentielle", en: "The Essential" },
                subtitle: { fr: "Formule Life Style", en: "Lifestyle Package" },
                desc: { fr: "L'animal dans son cocon", en: "The animal in its cocoon" },
                price: "CHF 190.-",
                duration: { fr: "Jusqu'à 30 minutes", en: "Up to 30 minutes" },
                photos: { fr: "3 photographies HD", en: "3 HD photographs" },
                idealFor: {
                    fr: ["un portrait", "un chat à domicile", "un chien dans son environnement", "un souvenir simple et authentique"],
                    en: ["a portrait", "an indoor cat", "a dog in its environment", "a simple, authentic memory"]
                },
                imgSrc: "res/rates/hero-lifestyle.jpeg"
            },
            {
                id: "essentielle-studio",
                isHighlighted: false,
                title: { fr: "L'Essentielle", en: "The Essential" },
                subtitle: { fr: "Studio Mobile", en: "Mobile Studio" },
                desc: { fr: "Portrait sur fond studio", en: "Portrait on studio background" },
                price: "CHF 250.-",
                duration: { fr: "Jusqu'à 30 minutes", en: "Up to 30 minutes" },
                photos: { fr: "3 photographies HD", en: "3 HD photographs" },
                idealFor: {
                    fr: ["portrait artistique", "fond noir ou beige", "rendu intemporel"],
                    en: ["artistic portrait", "black or beige background", "timeless look"]
                },
                imgSrc: "res/rates/hero-studio.jpeg"
            },
            {
                id: "serenite",
                isHighlighted: false,
                title: { fr: "La Sérénité", en: "Serenity" },
                subtitle: { fr: "Prendre le temps.", en: "Taking the time." },
                desc: { fr: "", en: "" },
                price: "CHF 450.-",
                duration: { fr: "Jusqu'à 1 heure", en: "Up to 1 hour" },
                photos: { fr: "5 photographies HD", en: "5 HD photographs" },
                idealFor: {
                    fr: ["plusieurs mises en scène", "deux animaux", "animal et propriétaire", "davantage de variété"],
                    en: ["multiple setups", "two pets", "pet and owner", "more variety"]
                },
                imgSrc: "res/rates/hero-serenity.jpeg"
            },
            {
                id: "heritage",
                isHighlighted: false,
                title: { fr: "L'Héritage", en: "The Heritage" },
                subtitle: { fr: "Des images qui traversent le temps.", en: "Images that stand the test of time." },
                desc: { fr: "", en: "" },
                price: "CHF 550.-",
                duration: { fr: "Jusqu'à 1 heure", en: "Up to 1 hour" },
                photos: { fr: "8 photographies HD\n2 tirages d'art A4", en: "8 HD photographs\n2 A4 fine art prints" },
                idealFor: {
                    fr: ["raconter une histoire", "immortaliser une relation", "offrir un souvenir durable"],
                    en: ["telling a story", "immortalizing a bond", "offering a lasting memory"]
                },
                imgSrc: "res/rates/hero-heritage.jpeg"
            },
            {
                id: "exclusive",
                isHighlighted: true,
                title: { fr: "L'Exclusive", en: "The Exclusive" },
                subtitle: { fr: "Une demi-journée entièrement consacrée à votre compagnon.", en: "Half a day entirely dedicated to your companion." },
                desc: { fr: "", en: "" },
                price: "CHF 850.-",
                duration: { fr: "Demi-journée", en: "Half-day" },
                photos: { fr: "Galerie complète\nPortfolio personnalisé", en: "Complete gallery\nPersonalized portfolio" },
                idealFor: {
                    fr: ["reportage complet", "plusieurs lieux", "plusieurs animaux", "raconter une véritable histoire"],
                    en: ["full coverage", "multiple locations", "multiple animals", "telling a true story"]
                },
                imgSrc: "res/rates/hero-exclusive.jpeg"
            }
        ]
    },

    options: {
        sectionTitle: { fr: "OPTIONS & TIRAGES", en: "OPTIONS & PRINTS" },
        digital: {
            title: { fr: "IMAGES NUMÉRIQUES", en: "DIGITAL IMAGES" },
            items: [
                {
                    icon: "fa-regular fa-image",
                    name: { fr: "Photo supplémentaire", en: "Additional photo" },
                    price: "CHF 35.-"
                },
                {
                    icon: "fa-regular fa-images",
                    name: { fr: "Pack de 5 photographies", en: "Pack of 5 photographs" },
                    badge: { fr: "Plus choisis", en: "Most popular" },
                    price: "CHF 130.-"
                },
                {
                    icon: "fa-solid fa-paw",
                    name: { fr: "Animal supplémentaire", en: "Additional pet" },
                    price: "CHF 50.-"
                }
            ]
        },
        prints: {
            title: { fr: "TIRAGES D'ART", en: "FINE ART PRINTS" },
            items: [
                {
                    icon: "fa-regular fa-square",
                    name: { fr: "A4 – Canson Mat 300 g", en: "A4 – Canson Matte 300g" },
                    price: "CHF 50.-"
                },
                {
                    icon: "fa-regular fa-rectangle-list",
                    name: { fr: "A3 – Canson Mat 300 g", en: "A3 – Canson Matte 300g" },
                    price: "CHF 90.-"
                },
                {
                    icon: "fa-solid fa-border-top-left",
                    name: { fr: "Tableau Aludibond (30 x 45 cm)", en: "Aludibond Panel (30 x 45 cm)" },
                    price: "CHF 200.-"
                },
                {
                    icon: "fa-solid fa-hard-drive",
                    name: { fr: "Clé USB personnalisée", en: "Custom USB drive" },
                    price: "CHF 45.-"
                }
            ]
        },
        travel: {
            title: { fr: "DÉPLACEMENT", en: "TRAVEL" },
            freeRadius: { fr: "15 km autour de votre domicile", en: "15 km around your home" },
            freeLabel: { fr: "Offert", en: "Free" },
            rateLabel: { fr: "Puis CHF 0.80/km", en: "Then CHF 0.80/km" }
        }
    },

    whyUs: {
        sectionTitle: { fr: "POURQUOI ME CHOISIR ?", en: "WHY CHOOSE ME?" },
        items: [
            {
                icon: "fa-regular fa-heart",
                title: { fr: "UNE APPROCHE BIENVEILLANTE", en: "A CARING APPROACH" },
                desc: { 
                    fr: "Chaque séance respecte le rythme et les émotions de votre animal.", 
                    en: "Every session respects the rhythm and emotions of your pet." 
                }
            },
            {
                icon: "fa-solid fa-camera",
                title: { fr: "UNE EXPERTISE PHOTOGRAPHIQUE", en: "PHOTOGRAPHIC EXPERTISE" },
                desc: { 
                    fr: "Plus de dix ans de pratique photographique, aujourd'hui entièrement consacrés à révéler l'émotion à travers le regard animal.", 
                    en: "Over ten years of photography experience, now entirely dedicated to capturing emotion through the eyes of animals." 
                }
            },
            {
                icon: "fa-solid fa-award",
                title: { fr: "UNE QUALITÉ PROFESSIONNELLE", en: "PROFESSIONAL QUALITY" },
                desc: { 
                    fr: "Photographies réalisées avec du matériel Canon professionnel et développées individuellement pour un rendu naturel et intemporel.", 
                    en: "Photographs taken with professional Canon gear and individually processed for a timeless, natural look." 
                }
            },
            {
                icon: "fa-regular fa-gem",
                title: { fr: "DES SUPPORTS DURABLES", en: "DURABLE MEDIA" },
                desc: { 
                    fr: "Tirages Fine Art sur papier Canson Mat 300 g sélectionnés pour leur qualité d'impression et leur excellente conservation.", 
                    en: "Fine Art prints on Canson Matte 300g paper, selected for their print quality and longevity." 
                }
            }
        ]
    },

    callout: {
        title: { fr: "UNE DERNIÈRE QUESTION ?", en: "HAVE A QUESTION?" },
        text: { 
            fr: "Vous recherchez une prestation particulière ou un projet sur mesure ? Parlons-en.<br>Chaque histoire mérite une séance qui lui ressemble.", 
            en: "Looking for a custom package or a tailored project? Let's talk.<br>Every story deserves a session that truly reflects it." 
        },
        button: { fr: "Me contacter", en: "Contact me" },
        href: "#"
    }
};