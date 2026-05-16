// V2: North & Pine — Contemporary American, West Village NYC
// Theme: Modern Minimal (near-mono, DM Serif Display, extreme whitespace)
import type { RestaurantConfig } from './types';

export const restaurant: RestaurantConfig = {
  name: 'North & Pine',
  cuisine: 'Contemporary American',
  city: 'West Village, New York',
  tagline: 'Contemporary American · West Village',
  heroHeadline: 'Precision.\nPleasure.',
  heroSubtitle: 'A tasting menu built around the finest ingredients of the season.',
  phone: '(212) 555-0831',
  email: 'reservations@northandpine.com',
  address: {
    street: '14 Commerce Street',
    city: 'New York',
    state: 'NY',
    zip: '10014',
    full: '14 Commerce Street, West Village, New York NY 10014',
  },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.2!2d-74.0030!3d40.7336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259e9b2d68155%3A0x4d4a3b8e46d7f5e3!2s14%20Commerce%20St%2C%20New%20York%2C%20NY%2010014!5e0!3m2!1sen!2sus!4v1700000000000',
  mapDirectionsUrl: 'https://maps.google.com/?q=14+Commerce+Street+West+Village+New+York+NY',
  hours: [
    { day: 'Monday', open: null, close: null },
    { day: 'Tuesday', open: null, close: null },
    { day: 'Wednesday', open: '6:00 PM', close: '10:00 PM' },
    { day: 'Thursday', open: '6:00 PM', close: '10:00 PM' },
    { day: 'Friday', open: '6:00 PM', close: '10:30 PM' },
    { day: 'Saturday', open: '5:30 PM', close: '10:30 PM' },
    { day: 'Sunday', open: '5:30 PM', close: '9:00 PM' },
  ],
  social: {
    instagram: 'https://instagram.com/northandpinenyc',
    facebook: 'https://facebook.com/northandpinenyc',
    yelp: 'https://yelp.com/biz/north-pine-new-york',
  },
  openTableId: null,
  reservationPhone: '(212) 555-0831',
  hero: {
    // Fine dining dining room — portrait crop reads differently from V1's full-bleed treatment
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=85',
    imageMobile: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'North & Pine — the dining room at 14 Commerce Street',
  },
  about: {
    headline: 'Restraint as a form of generosity',
    story: `North & Pine was never meant to be a destination. It was meant to be a conversation — between farmer and guest, between season and palate, between the old ways of cooking and something entirely new.\n\nChef Elena Voss spent a decade in some of New York's most celebrated kitchens before opening this 32-seat room on Commerce Street in 2021. The menu changes nightly. The welcome does not.`,
    chef: {
      name: 'Elena Voss',
      title: 'Chef & Partner',
      bio: 'Formerly of Eleven Madison Park and Blue Hill at Stone Barns. James Beard Award: Best Chef NYC, 2024.',
      photo: 'https://images.unsplash.com/photo-1595257841889-eca2678454e2?auto=format&fit=crop&w=600&q=80',
      photoAlt: 'Chef Elena Voss in the North & Pine kitchen',
    },
    ambiance: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    ambianceAlt: 'North & Pine dining room — clean lines, warm light',
  },
  menu: {
    note: 'Our menu changes nightly. The tasting menu is available for the entire table only. Dietary restrictions warmly accommodated with 48-hour notice.',
    dietaryKey: [
      { symbol: 'V', label: 'Vegetarian' },
      { symbol: 'VG', label: 'Vegan' },
      { symbol: 'GF', label: 'Gluten-Free' },
    ],
    categories: [
      {
        id: 'tasting',
        name: 'Tasting Menu',
        items: [
          { name: 'Tasting Menu — 7 Courses', description: 'Chef\'s nightly selection. Fully seasonal, sourced within 200 miles. Includes amuse-bouche, two starters, pasta or grain, main, cheese, dessert.', price: '215 pp' },
          { name: 'Wine Pairing', description: 'Sommelier-selected pairing, one pour per course', price: '95 pp' },
          { name: 'Non-Alcoholic Pairing', description: 'House-pressed juices, teas, and shrubs paired to each course', price: '55 pp' },
        ],
      },
      {
        id: 'bar',
        name: 'Bar Menu',
        items: [
          { name: 'Steak Tartare', description: 'Dry-aged beef, cured egg yolk, house brioche, smoked bone marrow butter', price: '28' },
          { name: 'Hiramasa Crudo', description: 'Yellowtail, blood orange, fennel, Castelvetrano olive', price: '26' },
          { name: 'Ricotta Gnudi', description: 'Sheep\'s milk ricotta, brown butter, sage, Grana Padano', price: '22', dietary: ['vegetarian'] },
          { name: 'Duck Confit Flatbread', description: 'House-cured duck, caramelized onion, gruyère, frisée', price: '24' },
        ],
      },
      {
        id: 'starters',
        name: 'À La Carte — First',
        items: [
          { name: 'Hudson Valley Foie Gras', description: 'Pan-seared, compressed apple, black pepper brioche toast, Madeira reduction', price: '42' },
          { name: 'Winter Beet Mosaic', description: 'Chioggia, golden, candy stripe beets, whipped chèvre, toasted hazelnuts, sherry', price: '22', dietary: ['vegetarian', 'gluten-free'] },
          { name: 'Diver Scallop Crudo', description: 'Maine scallop, yuzu kosho, cucumber water, micro shiso', price: '32', dietary: ['gluten-free'] },
        ],
      },
      {
        id: 'mains',
        name: 'À La Carte — Main',
        items: [
          { name: 'Dry-Aged Duck', description: '21-day dry-aged Muscovy breast, pommes purée, black garlic jus, charred leek', price: '68', dietary: ['gluten-free'] },
          { name: 'Wild Halibut', description: 'Pacific halibut, sunchoke purée, celery root, beurre blanc, caviar', price: '72', dietary: ['gluten-free'] },
          { name: 'The Vegetable Course', description: "Chef's selection of three vegetable preparations from the day's harvest", price: '52', dietary: ['vegan', 'gluten-free'] },
        ],
      },
      {
        id: 'drinks',
        name: 'Cocktails',
        items: [
          { name: 'Commerce Street Martini', description: 'Botanist gin, Lillet Blanc, lemon oil, Castelvetrano olive', price: '22' },
          { name: 'Fall in the West Village', description: 'Calvados, honey, lemon, thyme, egg white', price: '21' },
          { name: 'Non-Alcoholic: Garden Press', description: 'Celery, cucumber, green apple, ginger, lime', price: '14', dietary: ['vegan', 'gluten-free'] },
        ],
      },
    ],
  },
  gallery: [
    { url: 'https://images.unsplash.com/photo-1476224203421-74177f72b58c?auto=format&fit=crop&w=900&q=80', alt: 'Precision-plated pasta course', span: 'tall' },
    { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80', alt: 'North & Pine dining room', span: 'normal' },
    { url: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?auto=format&fit=crop&w=900&q=80', alt: 'Seasonal ingredient study', span: 'normal' },
    { url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80', alt: 'Chef\'s tasting: wood-fire course', span: 'normal' },
    { url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80', alt: 'Seafood course — dressed', span: 'tall' },
    { url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80', alt: 'The 32-seat dining room', span: 'normal' },
    { url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80', alt: 'Dessert course', span: 'normal' },
    { url: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80', alt: 'Dry-aged duck, plated', span: 'normal' },
  ],
  seo: {
    title: 'North & Pine | Contemporary American | West Village, New York',
    description: 'A 32-seat contemporary American restaurant in New York\'s West Village. Nightly tasting menu by Chef Elena Voss. Open Wed–Sun.',
    ogImage: 'https://images.unsplash.com/photo-1476224203421-74177f72b58c?auto=format&fit=crop&w=1200&q=80',
    canonicalUrl: 'https://restaurants.dcrader.dev/v2-modern-minimal',
  },
};
