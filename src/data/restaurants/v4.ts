// V4: Casa Verde — Modern Mediterranean, Echo Park Los Angeles
// Theme: Bold Color (vibrant red-orange + citrus yellow, Oswald, high energy)
import type { RestaurantConfig } from './types';

export const restaurant: RestaurantConfig = {
  name: 'Casa Verde',
  cuisine: 'Modern Mediterranean',
  city: 'Echo Park, Los Angeles',
  tagline: 'Modern Mediterranean · Los Angeles',
  heroHeadline: 'Bold.\nBright.\nFresh.',
  heroSubtitle: 'Wood-fired mezze, natural wines, and California sunshine — all under one roof.',
  phone: '(323) 555-0219',
  email: 'hola@casaverdela.com',
  address: {
    street: '1842 Sunset Blvd',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90026',
    full: '1842 Sunset Blvd, Echo Park, Los Angeles CA 90026',
  },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.4!2d-118.2600!3d34.0769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6b4d2e52bf7%3A0x3ab8c4e7a1d2f5b0!2s1842%20Sunset%20Blvd%2C%20Los%20Angeles%2C%20CA%2090026!5e0!3m2!1sen!2sus!4v1700000000000',
  mapDirectionsUrl: 'https://maps.google.com/?q=1842+Sunset+Blvd+Echo+Park+Los+Angeles+CA',
  hours: [
    { day: 'Monday', open: null, close: null },
    { day: 'Tuesday', open: '12:00 PM', close: '10:00 PM' },
    { day: 'Wednesday', open: '12:00 PM', close: '10:00 PM' },
    { day: 'Thursday', open: '12:00 PM', close: '11:00 PM' },
    { day: 'Friday', open: '12:00 PM', close: '12:00 AM' },
    { day: 'Saturday', open: '11:00 AM', close: '12:00 AM' },
    { day: 'Sunday', open: '11:00 AM', close: '9:00 PM' },
  ],
  social: {
    instagram: 'https://instagram.com/casaverdela',
    facebook: 'https://facebook.com/casaverdela',
    yelp: 'https://yelp.com/biz/casa-verde-los-angeles',
  },
  openTableId: null,
  reservationPhone: '(323) 555-0219',
  hero: {
    // Vibrant mezze spread, natural colors
    image: '/images/photos/photo-1565299624946-b28f40a0ae38-1600.jpg',
    imageMobile: '/images/photos/photo-1565299624946-b28f40a0ae38-800.jpg',
    imageAlt: 'Casa Verde — vibrant wood-fired dishes, fresh from the kitchen',
  },
  about: {
    headline: 'The Mediterranean, reimagined in California',
    story: `Chef Sofia Reyes grew up eating grilled fish in Barcelona and smashed avocado in Malibu. At Casa Verde, she doesn't choose between the two — she celebrates both.\n\nOpened in 2021 on Sunset Boulevard, Casa Verde is the restaurant Echo Park always deserved: loud music, natural wine, wood-fire smoke, and fresh ingredients from the Hollywood Farmers Market every Saturday morning. We're open late. Come as you are.`,
    chef: {
      name: 'Sofia Reyes',
      title: 'Chef & Co-Owner',
      bio: 'Born in Barcelona, raised in Los Angeles. Trained under José Andrés before opening Casa Verde with partner Nadia Okafor.',
      photo: '/images/photos/photo-1577219491135-ce391730fb2c-400.jpg',
      photoAlt: 'Chef Sofia Reyes at the Casa Verde wood-fire grill',
    },
    ambiance: '/images/photos/photo-1414235077428-338989a2e8c0-800.jpg',
    ambianceAlt: 'Casa Verde dining room — vibrant, colorful, full of life',
  },
  menu: {
    note: 'Most dishes are designed for sharing. Order two to three mezze per person. All our proteins are sourced from regenerative California farms.',
    dietaryKey: [
      { symbol: 'V', label: 'Vegetarian' },
      { symbol: 'VG', label: 'Vegan' },
      { symbol: 'GF', label: 'Gluten-Free' },
    ],
    categories: [
      {
        id: 'mezze',
        name: 'Mezze & Starters',
        items: [
          { name: 'Charred Pita & Dips', description: 'Wood-fire pita, hummus, muhammara, baba ghanoush, za\'atar oil', price: '16', dietary: ['vegan'] },
          { name: 'Labneh Board', description: 'Strained yogurt, heirloom tomatoes, cucumber, mint, Aleppo pepper, olive oil', price: '15', dietary: ['vegetarian', 'gluten-free'] },
          { name: 'Patatas Bravas', description: 'Crispy smashed potato, house romesco, aioli, smoked paprika', price: '13', dietary: ['vegetarian', 'gluten-free'] },
          { name: 'Fried Chickpeas', description: 'House-spiced, lemon zest, fresh herbs, tahini drizzle', price: '12', dietary: ['vegan', 'gluten-free'] },
          { name: 'Tuna Crudo', description: 'Bluefin tuna, blood orange, Castelvetrano olive, cucumber, mint oil', price: '22', dietary: ['gluten-free'] },
        ],
      },
      {
        id: 'woodfire',
        name: 'From the Wood Fire',
        items: [
          { name: 'Whole Roasted Branzino', description: 'Grilled over grapevine, salsa verde, lemon, charred fennel', price: '44', dietary: ['gluten-free'] },
          { name: 'Half Chicken, Chermoula', description: 'Free-range chicken, North African spice rub, charred lemon, herb couscous', price: '36' },
          { name: 'Lamb Kofta', description: 'Wood-fire grilled, toum, pickled onion, warm flatbread', price: '32' },
          { name: 'Wood-Roasted Cauliflower', description: 'Whole head, harissa butter, pomegranate, pistachios, herbs', price: '26', dietary: ['vegan', 'gluten-free'] },
        ],
      },
      {
        id: 'salads',
        name: 'Salads & Grains',
        items: [
          { name: 'Fattoush', description: 'Summer greens, radish, mint, sumac-dressed pita chips, pomegranate molasses', price: '16', dietary: ['vegan'] },
          { name: 'Farro & Roasted Beet', description: 'Farro, golden beet, arugula, pistachios, whipped feta, sherry vinaigrette', price: '18', dietary: ['vegetarian'] },
          { name: 'Shakshuka', description: 'Spiced tomato sauce, poached eggs, feta, warm flatbread — brunch & lunch only', price: '18', dietary: ['vegetarian'] },
        ],
      },
      {
        id: 'sweets',
        name: 'Sweets',
        items: [
          { name: 'Basque Cheesecake', description: 'Burnt Basque-style, seasonal fruit, crème fraîche', price: '13', dietary: ['vegetarian', 'gluten-free'] },
          { name: 'Olive Oil Cake', description: 'Orange blossom, California olive oil, Chantilly cream, pistachios', price: '12', dietary: ['vegetarian'] },
          { name: 'Churros, Chocolate', description: 'House-made churros, dark chocolate dipping sauce', price: '10', dietary: ['vegan'] },
        ],
      },
      {
        id: 'drinks',
        name: 'Natural Wines & Drinks',
        items: [
          { name: 'Casa Verde Spritz', description: 'Lillet Blanc, cucumber, elderflower, soda, lime', price: '16', dietary: ['vegan', 'gluten-free'] },
          { name: 'Watermelon Paloma', description: 'Tequila blanco, fresh watermelon, grapefruit, tajín rim', price: '17', dietary: ['vegan', 'gluten-free'] },
          { name: 'Natural Wine List', description: 'We pour exclusively organic and biodynamic producers — ask your server', price: 'From $12' },
          { name: 'Agua Fresca (non-alc)', description: 'Seasonal house-made fresh fruit water — changes daily', price: '7', dietary: ['vegan', 'gluten-free'] },
        ],
      },
    ],
  },
  gallery: [
    { url: '/images/photos/photo-1565299624946-b28f40a0ae38-800.jpg', alt: 'Wood-fire grill — bold flames', span: 'tall' },
    { url: '/images/photos/photo-1473093226795-af9932fe5856-800.jpg', alt: 'Mezze spread — vibrant colors', span: 'wide' },
    { url: '/images/photos/photo-1551782450-17144efb9c50-800.jpg', alt: 'Labneh board with fresh herbs', span: 'normal' },
    { url: '/images/photos/photo-1504674900247-0877df9cc836-800.jpg', alt: 'Handmade pita, hot off the stone', span: 'normal' },
    { url: '/images/photos/photo-1414235077428-338989a2e8c0-800.jpg', alt: 'Casa Verde dining room, lively and bright', span: 'normal' },
    { url: '/images/photos/photo-1516450360452-9312f5e86fc7-800.jpg', alt: 'Natural wine service at the bar', span: 'tall' },
    { url: '/images/photos/photo-1490645935967-10de6ba17061-800.jpg', alt: 'Basque cheesecake, fresh-baked', span: 'normal' },
    { url: '/images/photos/photo-1555396273-367ea4eb4db5-800.jpg', alt: 'Whole roasted branzino', span: 'normal' },
  ],
  seo: {
    title: 'Casa Verde | Modern Mediterranean Restaurant | Echo Park, Los Angeles',
    description: 'Bold Mediterranean flavors on Sunset Blvd, Echo Park. Wood-fire mezze, natural wines, California-fresh ingredients by Chef Sofia Reyes. Open Tue–Sun.',
    ogImage: '/images/photos/photo-1565299624946-b28f40a0ae38-800.jpg',
    canonicalUrl: 'https://restaurants.dcrader.dev/v4-bold-color',
  },
};
