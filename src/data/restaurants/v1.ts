// V1: Bella Sole — Coastal Italian, La Jolla San Diego
// Theme: Warm Italian (terracotta, cream, Playfair Display)
import type { RestaurantConfig } from './types';

export const restaurant: RestaurantConfig = {
  name: 'Bella Sole',
  cuisine: 'Coastal Italian',
  city: 'La Jolla, San Diego',
  tagline: 'Coastal Italian · La Jolla',
  heroHeadline: 'Where the Pacific\nMeets the Mediterranean',
  heroSubtitle: 'Fresh coastal ingredients. Timeless Italian craft.',
  phone: '(619) 555-0142',
  email: 'ciao@bellasolesd.com',
  address: {
    street: '1247 Prospect Street',
    city: 'La Jolla',
    state: 'CA',
    zip: '92037',
    full: '1247 Prospect Street, La Jolla, CA 92037',
  },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.68!2d-117.2737!3d32.8484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06d1ea09f6bb%3A0x4dd48c84e5e52e25!2s1247%20Prospect%20St%2C%20La%20Jolla%2C%20CA%2092037!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
  mapDirectionsUrl: 'https://maps.google.com/?q=1247+Prospect+Street+La+Jolla+CA+92037',
  hours: [
    { day: 'Monday', open: null, close: null },
    { day: 'Tuesday', open: '5:00 PM', close: '10:00 PM' },
    { day: 'Wednesday', open: '5:00 PM', close: '10:00 PM' },
    { day: 'Thursday', open: '5:00 PM', close: '10:30 PM' },
    { day: 'Friday', open: '5:00 PM', close: '11:00 PM' },
    { day: 'Saturday', open: '4:30 PM', close: '11:00 PM' },
    { day: 'Sunday', open: '4:30 PM', close: '9:30 PM' },
  ],
  social: {
    instagram: 'https://instagram.com/bellasolesd',
    facebook: 'https://facebook.com/bellasolesd',
    yelp: 'https://yelp.com/biz/bella-sole-la-jolla',
  },
  openTableId: null,
  reservationPhone: '(619) 555-0142',
  hero: {
    image: '/images/photos/photo-1414235077428-338989a2e8c0-1600.jpg',
    imageMobile: '/images/photos/photo-1414235077428-338989a2e8c0-800.jpg',
    imageAlt: 'Bella Sole dining room — warm candlelit evening service',
  },
  about: {
    headline: 'A love letter to the Italian coast',
    story: `Bella Sole was born from a simple conviction: the finest meal is one that connects you to place. Executive Chef Marco Bellini grew up splitting his summers between his grandmother's kitchen in Cinque Terre and the fishing piers of the California coast — two worlds that share the same soul.\n\nOpened in 2019 on La Jolla's storied Prospect Street, Bella Sole sources its seafood daily from the San Diego docks and its dry goods from a small Sicilian importer Marco has trusted for twenty years. The result is a menu that changes with the seasons and the catch, anchored by technique and alive with Pacific flavor.`,
    chef: {
      name: 'Marco Bellini',
      title: 'Executive Chef & Owner',
      bio: 'Trained at ALMA in Colorno, shaped by seasons in Rome, Naples, and the San Diego fishing community. James Beard semifinalist 2023.',
      photo: '/images/photos/photo-1577219491135-ce391730fb2c-400.jpg',
      photoAlt: 'Chef Marco Bellini in the Bella Sole open kitchen',
    },
    ambiance: '/images/photos/photo-1559339352-11d035aa65de-800.jpg',
    ambianceAlt: 'Bella Sole dining room at golden hour',
  },
  menu: {
    note: 'Menu reflects seasonal availability. Consuming raw or undercooked proteins may increase risk of foodborne illness.',
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
          { name: 'Burrata Pugliese', description: 'Fresh burrata, heirloom tomatoes, Taggiasca olives, aged balsamic, basil oil', price: '18', dietary: ['vegetarian'] },
          { name: 'Carpaccio di Manzo', description: 'Thinly sliced beef tenderloin, baby arugula, parmigiano, black truffle oil', price: '24' },
          { name: 'Fritto Misto', description: 'Lightly fried Pacific calamari, shrimp, zucchini blossoms, lemon-caper aioli', price: '22' },
          { name: 'Bruschetta al Pomodoro', description: 'Grilled sourdough, San Marzano tomatoes, torn basil, extra-virgin olive oil', price: '14', dietary: ['vegan'] },
          { name: 'Polpo alla Griglia', description: "Chargrilled Pacific octopus, roasted potato, 'nduja vinaigrette, pickled celery", price: '26' },
        ],
      },
      {
        id: 'pasta',
        name: 'Pasta & Risotto',
        items: [
          { name: 'Linguine alle Vongole', description: 'Pacific little-neck clams, white wine, garlic, Calabrian chili', price: '34' },
          { name: 'Tagliatelle al Tartufo', description: 'Fresh egg pasta, Périgord black truffle, aged Parmigiano cream', price: '42', dietary: ['vegetarian'] },
          { name: 'Cacio e Pepe', description: 'Tonnarelli, 24-month Pecorino Romano, Tellicherry black pepper', price: '28', dietary: ['vegetarian'] },
          { name: 'Risotto ai Frutti di Mare', description: 'Carnaroli rice, Pacific crab, scallop, shrimp, saffron', price: '38' },
        ],
      },
      {
        id: 'secondi',
        name: 'Secondi',
        items: [
          { name: 'Branzino al Forno', description: 'Whole roasted sea bass, salsa verde, capers, heirloom cherry tomatoes', price: '46', dietary: ['gluten-free'] },
          { name: 'Agnello Scottadito', description: 'Grilled lamb rib chops, rosemary-pistachio gremolata, cannellini beans', price: '54', dietary: ['gluten-free'] },
          { name: 'Bistecca Fiorentina', description: '28-day dry-aged Porterhouse for two, sea salt, rosemary, lemon (min. 32 oz.)', price: 'Market', dietary: ['gluten-free'] },
        ],
      },
      {
        id: 'dolci',
        name: 'Dolci',
        items: [
          { name: 'Tiramisù della Casa', description: 'Mascarpone cream, espresso-soaked Savoiardi, single-origin dark cocoa', price: '14', dietary: ['vegetarian'] },
          { name: 'Panna Cotta', description: 'Silky vanilla bean cream, wild strawberry compote, pistachio crumble', price: '13', dietary: ['vegetarian', 'gluten-free'] },
          { name: 'Affogato', description: 'Double espresso over house-made fior di latte gelato', price: '11', dietary: ['vegetarian', 'gluten-free'] },
        ],
      },
      {
        id: 'beverages',
        name: 'Cocktails & Wine',
        items: [
          { name: 'Bella Sole Spritz', description: 'Aperol, Prosecco, blood orange, fresh thyme', price: '16' },
          { name: 'Negroni Sbagliato', description: 'Campari, sweet vermouth, Prosecco, orange peel', price: '17' },
          { name: 'Italian Wine List', description: 'We pour exclusively Italian producers — ask your server', price: 'From $14' },
        ],
      },
    ],
  },
  gallery: [
    { url: '/images/photos/photo-1555396273-367ea4eb4db5-800.jpg', alt: 'Linguine alle vongole', span: 'normal' },
    { url: '/images/photos/photo-1414235077428-338989a2e8c0-800.jpg', alt: 'Dining room, candlelit evening', span: 'tall' },
    { url: '/images/photos/photo-1565299624946-b28f40a0ae38-800.jpg', alt: 'Wood-fired pizza', span: 'normal' },
    { url: '/images/photos/photo-1551782450-17144efb9c50-800.jpg', alt: 'Burrata Pugliese', span: 'normal' },
    { url: '/images/photos/photo-1504674900247-0877df9cc836-800.jpg', alt: 'Fresh pasta', span: 'tall' },
    { url: '/images/photos/photo-1516450360452-9312f5e86fc7-800.jpg', alt: 'Bar — aperitivo hour', span: 'normal' },
    { url: '/images/photos/photo-1473093226795-af9932fe5856-800.jpg', alt: 'Antipasti spread', span: 'wide' },
    { url: '/images/photos/photo-1490645935967-10de6ba17061-800.jpg', alt: 'Tiramisù della Casa', span: 'normal' },
    { url: '/images/photos/photo-1600891964092-4316c288032e-800.jpg', alt: 'Bistecca Fiorentina', span: 'normal' },
    { url: '/images/photos/photo-1559339352-11d035aa65de-800.jpg', alt: 'Terrace dining at sunset', span: 'normal' },
  ],
  seo: {
    title: 'Bella Sole | Coastal Italian Restaurant | La Jolla, San Diego',
    description: 'Coastal Italian dining in La Jolla, San Diego. Fresh Pacific seafood, house-made pasta, and an all-Italian wine list. Open Tue–Sun.',
    ogImage: '/images/photos/photo-1414235077428-338989a2e8c0-800.jpg',
    canonicalUrl: 'https://restaurants.dcrader.dev/v1-warm-italian',
  },
};
