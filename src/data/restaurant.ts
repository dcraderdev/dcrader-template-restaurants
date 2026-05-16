// ─────────────────────────────────────────────────────────────────────────────
// RESTAURANT CONFIG
// Swap this one file to generate a new demo for any restaurant prospect.
// ─────────────────────────────────────────────────────────────────────────────

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  dietary?: Array<'vegan' | 'vegetarian' | 'gluten-free' | 'contains-nuts'>;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface GalleryItem {
  // Photo credit: Unsplash (https://unsplash.com/license — free to use)
  url: string;
  alt: string;
  span?: 'tall' | 'wide' | 'normal';
}

export interface HoursEntry {
  day: string;
  /** null = closed */
  open: string | null;
  close: string | null;
}

export const restaurant = {
  // ── Identity ────────────────────────────────────────────────────────────────
  name: 'Bella Sole',
  cuisine: 'Coastal Italian',
  city: 'La Jolla, San Diego',
  tagline: 'Coastal Italian · La Jolla',
  heroHeadline: 'Where the Pacific\nMeets the Mediterranean',
  heroSubtitle: 'Fresh coastal ingredients. Timeless Italian craft.',

  // ── Contact ─────────────────────────────────────────────────────────────────
  phone: '(619) 555-0142',
  email: 'ciao@bellasolesd.com',
  address: {
    street: '1247 Prospect Street',
    city: 'La Jolla',
    state: 'CA',
    zip: '92037',
    full: '1247 Prospect Street, La Jolla, CA 92037',
  },
  // Embed: replace pb= coords with real venue location
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.68!2d-117.2737!3d32.8484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06d1ea09f6bb%3A0x4dd48c84e5e52e25!2s1247%20Prospect%20St%2C%20La%20Jolla%2C%20CA%2092037!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
  mapDirectionsUrl: 'https://maps.google.com/?q=1247+Prospect+Street+La+Jolla+CA+92037',

  // ── Hours ───────────────────────────────────────────────────────────────────
  hours: [
    { day: 'Monday', open: null, close: null },
    { day: 'Tuesday', open: '5:00 PM', close: '10:00 PM' },
    { day: 'Wednesday', open: '5:00 PM', close: '10:00 PM' },
    { day: 'Thursday', open: '5:00 PM', close: '10:30 PM' },
    { day: 'Friday', open: '5:00 PM', close: '11:00 PM' },
    { day: 'Saturday', open: '4:30 PM', close: '11:00 PM' },
    { day: 'Sunday', open: '4:30 PM', close: '9:30 PM' },
  ] as HoursEntry[],

  // ── Social & Reservations ───────────────────────────────────────────────────
  social: {
    instagram: 'https://instagram.com/bellasolesd',
    facebook: 'https://facebook.com/bellasolesd',
    yelp: 'https://yelp.com/biz/bella-sole-la-jolla',
  },
  // Set openTableId to your real OpenTable ID to activate the embed widget
  openTableId: null as string | null,
  // fallback if no OpenTable: phone reservation
  reservationPhone: '(619) 555-0142',

  // ── Images ──────────────────────────────────────────────────────────────────
  // Photo credits: Unsplash contributors (free commercial license)
  hero: {
    // Warm candlelit restaurant interior
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=85',
    imageMobile: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Bella Sole dining room — warm candlelit evening service',
  },

  // ── About ───────────────────────────────────────────────────────────────────
  about: {
    headline: 'A love letter to the Italian coast',
    story: `Bella Sole was born from a simple conviction: the finest meal is one that connects you to place. Executive Chef Marco Bellini grew up splitting his summers between his grandmother's kitchen in Cinque Terre and the fishing piers of the California coast — two worlds that, as it turns out, share the same soul.\n\nOpened in 2019 on La Jolla's storied Prospect Street, Bella Sole sources its seafood daily from the San Diego docks and its dry goods from a small Sicilian importer Marco has trusted for twenty years. The result is a menu that changes with the seasons and the catch, anchored by technique and alive with Pacific flavor.`,
    chef: {
      name: 'Marco Bellini',
      title: 'Executive Chef & Owner',
      bio: 'Trained at ALMA in Colorno, shaped by seasons in Rome, Naples, and the San Diego fishing community. James Beard semifinalist 2023.',
      // Professional chef in kitchen
      photo: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80',
      photoAlt: 'Chef Marco Bellini in the Bella Sole open kitchen',
    },
    // Interior wide shot
    ambiance: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80',
    ambianceAlt: 'Bella Sole dining room at golden hour',
  },

  // ── Menu ────────────────────────────────────────────────────────────────────
  menu: {
    note: 'Menu reflects seasonal availability. Consuming raw or undercooked proteins may increase risk of foodborne illness. Please inform your server of any allergies.',
    dietaryKey: [
      { symbol: 'V', label: 'Vegetarian' },
      { symbol: 'VG', label: 'Vegan' },
      { symbol: 'GF', label: 'Gluten-Free' },
    ],
    categories: [
      {
        id: 'antipasti',
        name: 'Antipasti',
        items: [
          {
            name: 'Burrata Pugliese',
            description: 'Fresh burrata, heirloom tomatoes, Taggiasca olives, aged balsamic, basil oil',
            price: '18',
            dietary: ['vegetarian'],
          },
          {
            name: 'Carpaccio di Manzo',
            description: 'Thinly sliced beef tenderloin, baby arugula, parmigiano, black truffle oil, Maldon salt',
            price: '24',
          },
          {
            name: 'Fritto Misto',
            description: 'Lightly fried Pacific calamari, shrimp, zucchini blossoms, lemon-caper aioli',
            price: '22',
          },
          {
            name: 'Bruschetta al Pomodoro',
            description: 'Grilled sourdough, San Marzano tomatoes, torn basil, extra-virgin olive oil',
            price: '14',
            dietary: ['vegan'],
          },
          {
            name: 'Polpo alla Griglia',
            description: "Chargrilled Pacific octopus, roasted potato, 'nduja vinaigrette, pickled celery",
            price: '26',
          },
        ],
      },
      {
        id: 'pasta',
        name: 'Pasta & Risotto',
        items: [
          {
            name: 'Linguine alle Vongole',
            description: 'Pacific little-neck clams, white wine, garlic, Calabrian chili, house-dried pasta',
            price: '34',
          },
          {
            name: 'Tagliatelle al Tartufo Nero',
            description: 'Fresh egg pasta, Périgord black truffle, aged Parmigiano cream, chives',
            price: '42',
            dietary: ['vegetarian'],
          },
          {
            name: 'Cacio e Pepe',
            description: 'Tonnarelli, 24-month aged Pecorino Romano, Tellicherry black pepper',
            price: '28',
            dietary: ['vegetarian'],
          },
          {
            name: 'Risotto ai Frutti di Mare',
            description: 'Carnaroli rice, Pacific crab, scallop, shrimp, saffron, dry Vermentino',
            price: '38',
          },
          {
            name: "Pappardelle all'Anatra",
            description: 'Slow-braised duck ragù, wild mushrooms, fresh herbs, aged Montasio',
            price: '36',
          },
        ],
      },
      {
        id: 'secondi',
        name: 'Secondi',
        items: [
          {
            name: 'Branzino al Forno',
            description: 'Whole roasted Mediterranean sea bass, salsa verde, capers, heirloom cherry tomatoes',
            price: '46',
            dietary: ['gluten-free'],
          },
          {
            name: 'Agnello Scottadito',
            description: 'Grilled lamb rib chops, rosemary-pistachio gremolata, cannellini beans',
            price: '54',
            dietary: ['gluten-free'],
          },
          {
            name: 'Bistecca Fiorentina',
            description: '28-day dry-aged Porterhouse for two, sea salt, rosemary, organic lemon (min. 32 oz.)',
            price: 'Market',
            dietary: ['gluten-free'],
          },
          {
            name: 'Petto di Pollo al Mattone',
            description: 'Brick-pressed free-range chicken, preserved lemon, artichokes, wilted spinach',
            price: '36',
            dietary: ['gluten-free'],
          },
        ],
      },
      {
        id: 'dolci',
        name: 'Dolci',
        items: [
          {
            name: 'Tiramisù della Casa',
            description: 'Classic mascarpone cream, espresso-soaked Savoiardi, single-origin dark cocoa',
            price: '14',
            dietary: ['vegetarian'],
          },
          {
            name: 'Panna Cotta alla Vaniglia',
            description: 'Silky vanilla bean cream, wild strawberry compote, pistachio crumble',
            price: '13',
            dietary: ['vegetarian', 'gluten-free'],
          },
          {
            name: 'Cannoli Siciliani',
            description: "Hand-rolled pastry shells, sheep's milk ricotta, candied orange, Bronte pistachio",
            price: '12',
            dietary: ['vegetarian'],
          },
          {
            name: 'Affogato',
            description: 'Double-shot espresso poured tableside over house-made fior di latte gelato',
            price: '11',
            dietary: ['vegetarian', 'gluten-free'],
          },
        ],
      },
      {
        id: 'beverages',
        name: 'Cocktails & Beverages',
        items: [
          {
            name: 'Bella Sole Spritz',
            description: 'Aperol, Prosecco, blood orange, fresh thyme',
            price: '16',
            dietary: ['vegan'],
          },
          {
            name: 'Negroni Sbagliato',
            description: 'Campari, sweet vermouth, Prosecco, orange peel',
            price: '17',
            dietary: ['vegan'],
          },
          {
            name: 'Limoncello Sour',
            description: 'House-made limoncello, Meyer lemon, egg white, Amalfi bitters',
            price: '16',
          },
          {
            name: 'Italian Still & Sparkling Water',
            description: 'Acqua Panna · San Pellegrino',
            price: '7',
            dietary: ['vegan', 'gluten-free'],
          },
          {
            name: 'Curated Italian Wine List',
            description: 'We pour exclusively Italian producers — ask your server',
            price: 'From $14',
          },
          {
            name: 'Espresso · Americano · Cappuccino',
            description: 'Illy single-origin beans, pulled in-house',
            price: '5–8',
            dietary: ['vegan', 'gluten-free'],
          },
        ],
      },
    ] as MenuCategory[],
  },

  // ── Gallery ─────────────────────────────────────────────────────────────────
  // Photo credits: Unsplash contributors (free commercial license)
  gallery: [
    {
      url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80',
      alt: 'Linguine alle vongole — Pacific clams, white wine, house-dried pasta',
      span: 'normal',
    },
    {
      url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80',
      alt: 'Bella Sole dining room, candlelit evening service',
      span: 'tall',
    },
    {
      url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80',
      alt: 'Wood-fired pizza, fresh from the forno',
      span: 'normal',
    },
    {
      url: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?auto=format&fit=crop&w=900&q=80',
      alt: 'Burrata Pugliese with heirloom tomatoes',
      span: 'normal',
    },
    {
      url: 'https://images.unsplash.com/photo-1476224203421-74177f72b58c?auto=format&fit=crop&w=900&q=80',
      alt: 'Fresh pasta course — house-made egg tagliatelle',
      span: 'tall',
    },
    {
      url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80',
      alt: 'Bella Sole bar — aperitivo hour',
      span: 'normal',
    },
    {
      url: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=900&q=80',
      alt: 'Antipasti spread — seasonal market ingredients',
      span: 'wide',
    },
    {
      url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80',
      alt: 'Tiramisù della Casa — house-made mascarpone, dark cocoa',
      span: 'normal',
    },
    {
      url: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80',
      alt: 'Bistecca Fiorentina — dry-aged Porterhouse, sea salt, herbs',
      span: 'normal',
    },
    {
      url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80',
      alt: 'Bella Sole terrace dining at golden hour',
      span: 'normal',
    },
  ] as GalleryItem[],

  // ── SEO ──────────────────────────────────────────────────────────────────────
  seo: {
    title: 'Bella Sole | Coastal Italian Restaurant | La Jolla, San Diego',
    description:
      'Coastal Italian dining in La Jolla, San Diego. Fresh Pacific seafood, house-made pasta, and an all-Italian wine list by Executive Chef Marco Bellini. Open Tue–Sun.',
    ogImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
    canonicalUrl: 'https://restaurants.dcrader.dev',
  },
};
