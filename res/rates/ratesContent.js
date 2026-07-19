export const ratesContent = [
    {
        type: "header",
        title: {
            fr: "Tarifs & Prestations",
            en: "Rates & Services"
        }
    },
    {
        type: "packages",
        items: [
            {
                title: { fr: "L'Essentielle", en: "The Essential" },
                subtitle: { fr: "Formule Life Style", en: "Life Style Package" },
                desc: { fr: "L'animal dans son cocon", en: "The animal in its cocoon" },
                price: { fr: "CHF 190.-", en: "CHF 190.-" },
                features: [
                    { fr: "Durée: 30 min", en: "Duration: 30 min" },
                    { fr: "3 photos HD retouchées", en: "3 retouched HD photos" }
                ],
                highlight: false
            },
            {
                title: { fr: "L'Essentielle", en: "The Essential" },
                subtitle: { fr: "Formule Studio Mobile", en: "Mobile Studio Package" },
                desc: { fr: "Portrait avec fond studio", en: "Portrait with studio background" },
                price: { fr: "CHF 250.-", en: "CHF 250.-" },
                features: [
                    { fr: "Durée: 30 min", en: "Duration: 30 min" },
                    { fr: "3 photos HD retouchées", en: "3 retouched HD photos" }
                ],
                highlight: false
            },
            {
                title: { fr: "La Sérénité", en: "Serenity" },
                subtitle: null,
                desc: null,
                price: { fr: "CHF 450.-", en: "CHF 450.-" },
                features: [
                    { fr: "Durée: 1h00", en: "Duration: 1h00" },
                    { fr: "5 photos HD retouchées", en: "5 retouched HD photos" }
                ],
                highlight: true
            },
            {
                title: { fr: "La Patrimoine", en: "Heritage" },
                subtitle: null,
                desc: null,
                price: { fr: "CHF 550.-", en: "CHF 550.-" },
                features: [
                    { fr: "Durée: 1h00", en: "Duration: 1h00" },
                    { fr: "8 photos HD + 2 tirages d'art A4", en: "8 HD photos + 2 A4 art prints" }
                ],
                highlight: false
            },
            {
                title: { fr: "L'Exclusive", en: "The Exclusive" },
                subtitle: null,
                desc: null,
                price: { fr: "CHF 850.-", en: "CHF 850.-" },
                features: [
                    { fr: "Durée: Demi-journée", en: "Duration: Half-day" },
                    { fr: "Galerie complète (10) + 1 portfolio", en: "Full gallery (10) + 1 portfolio" }
                ],
                highlight: false
            }
        ]
    },
    {
        type: "details",
        title: { fr: "Détails de la prestation", en: "Service Details" },
        subtitle: { fr: "(Inclus dans chaque séance)", en: "(Included in every session)" },
        items: [
            {
                label: { fr: "L'approche", en: "The approach" },
                desc: { 
                    fr: "Une séance au rythme de l'animal, sans poses forcées, pour capturer son caractère authentique.", 
                    en: "A session at the animal's pace, without forced poses, to capture their authentic character." 
                }
            },
            {
                label: { fr: "L'environnement", en: "The environement" },
                desc: {
                    fr: "Chez vous ou en extérieur, vous choisissez votre lieu.",
                    en: "At your place or outside, you may choose your favourite setting."
                }
            },
            {
                label: { fr: "L'expertise", en: "The expertise" },
                desc: { 
                    fr: "10 ans d'expérience et l'utilisation d'un matériel professionnel (Canon EOS R6) pour une netteté et un piqué exceptionnels.", 
                    en: "10 years of experience and the use of professional equipment (Canon EOS R6) for exceptional sharpness and detail." 
                }
            },
            {
                label: { fr: "La polyvalence", en: "Versatility" },
                desc: { 
                    fr: "Un regard forgé par la photo de rue et le paysage pour sublimer votre compagnon dans son environnement.", 
                    en: "An eye shaped by street and landscape photography to enhance your companion in their environment." 
                }
            },
            {
                label: { fr: "Le support", en: "The medium" },
                desc: { 
                    fr: "Le choix du papier Canson Mat 300g garantit un rendu velouté, sans reflets, et une conservation de vos souvenirs sur plusieurs générations.", 
                    en: "The choice of Canson Matte 300g paper guarantees a velvety, reflection-free finish, preserving your memories for generations." 
                }
            }
        ]
    },
    {
        type: "options",
        title: { fr: "Options & Tirages à la carte", en: "À la carte Options & Prints" },
        items: [
            { 
                label: { fr: "Fichier digital supplémentaire (L'unité, retouchée en HD)", en: "Additional digital file (Per unit, HD retouched)" }, 
                price: { fr: "CHF 35.-", en: "CHF 35.-" } },
            { 
                label: { fr: "Pack de 5 images digitales", en: "Pack of 5 digital images" }, 
                price: { fr: "CHF 130.-", en: "CHF 130.-" } },
            { 
                label: { fr: "Animal supplémentaire (Par animal de la même famille)", en: "Additional pet (Per pet from the same family)" }, 
                price: { fr: "CHF 50.-", en: "CHF 50.-" } },
            { 
                label: { fr: "Tirage d'Art A4 (Canson Mat 300g)", en: "A4 Fine Art Print (Canson Matte 300g)" }, 
                price: { fr: "CHF 50.-", en: "CHF 50.-" } },
            { 
                label: { fr: "Tirage d'Art A3 (Canson Mat 300g)", en: "A3 Fine Art Print (Canson Matte 300g)" }, 
                price: { fr: "CHF 90.-", en: "CHF 90.-" } },
            { 
                label: { fr: "Tableau Aludibond (30x45 cm)", en: "Aludibond Panel (30x45 cm)" }, 
                price: { fr: "CHF 200.-", en: "CHF 200.-" } },
            { 
                label: { fr: "Clé USB personnalisée (Pour une livraison physique)", en: "Custom USB drive (For physical delivery)" }, 
                price: { fr: "CHF 45.-", en: "CHF 45.-" } },
            { 
                label: { fr: "Déplacement (Rayon de 15km autour de votre domicile)", en: "Travel (15km radius around your home)" }, 
                price: { fr: "Offert", en: "Free" } },
            { 
                label: { fr: "Km supplémentaire (Au-delà du rayon de 20km)", en: "Additional Km (Beyond the 20km radius)" }, 
                price: { fr: "CHF 0.80/km", en: "CHF 0.80/km" } }
        ],
        note: {
            fr: "Vous souhaitez d'autres options : Nous pouvons en discuter.",
            en: "Looking for other options? We can discuss it."
        }
    },
    {
        type: "footer",
        buttonText: { fr: "Envoyez-moi un e-mail pour réserver votre séance !", en: "Send me an email to book your session!" },
        note: { fr: "Tous les tirages photos sont effectués à l'Atelierphoto - Nyon (Olivier Evard)", en: "All photo prints are made at Atelierphoto - Nyon (Olivier Evard)" }
    }
];