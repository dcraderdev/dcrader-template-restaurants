// V5: Ember — Prime Steaks & Spirits, River North Chicago
// Theme: Dark Elegant (near-black, gold, Cormorant Garamond, moody luxury)
import type { RestaurantConfig } from './types';
import heroImg from '../../assets/restaurants/v5/hero.jpg';
import chefImg from '../../assets/restaurants/v5/chef.jpg';
import ambianceImg from '../../assets/restaurants/v5/ambiance.jpg';
import g3 from '../../assets/restaurants/v5/g3-carpaccio.jpg';
import g4 from '../../assets/restaurants/v5/g4-whisky.jpg';
import g5 from '../../assets/restaurants/v5/g5-tartare.jpg';
import g6 from '../../assets/restaurants/v5/g6-vault.jpg';
import g7 from '../../assets/restaurants/v5/g7-dessert.jpg';
import g8 from '../../assets/restaurants/v5/g8-latenight.jpg';

export const restaurant: RestaurantConfig = {
  name: 'Ember',
  cuisine: 'Prime Steaks & Spirits',
  city: 'River North, Chicago',
  tagline: 'Prime Steaks & Spirits · Chicago',
  heroHeadline: 'The Art of\nFire & Smoke',
  heroSubtitle: 'Dry-aged beef. Japanese whisky. The river glowing at midnight.',
  phone: '(312) 555-0588',
  email: 'reservations@embersteak.com',
  address: {
    street: '612 N. State Street',
    city: 'Chicago',
    state: 'IL',
    zip: '60654',
    full: '612 N. State Street, River North, Chicago IL 60654',
  },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.4!2d-87.6284!3d41.8919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca82b2fbded%3A0x3e0a92d73f5a7df6!2s612%20N%20State%20St%2C%20Chicago%2C%20IL%2060654!5e0!3m2!1sen!2sus!4v1700000000000',
  mapDirectionsUrl: 'https://maps.google.com/?q=612+N+State+Street+River+North+Chicago+IL',
  hours: [
    { day: 'Monday', open: '5:00 PM', close: '11:00 PM' },
    { day: 'Tuesday', open: '5:00 PM', close: '11:00 PM' },
    { day: 'Wednesday', open: '5:00 PM', close: '11:00 PM' },
    { day: 'Thursday', open: '5:00 PM', close: '12:00 AM' },
    { day: 'Friday', open: '5:00 PM', close: '1:00 AM' },
    { day: 'Saturday', open: '4:00 PM', close: '1:00 AM' },
    { day: 'Sunday', open: null, close: null },
  ],
  social: {
    instagram: 'https://instagram.com/embersteak',
    facebook: 'https://facebook.com/embersteak',
    yelp: 'https://yelp.com/biz/ember-chicago',
  },
  openTableId: null,
  reservationPhone: '(312) 555-0588',
  hero: {
    image: heroImg,
    imageMobile: heroImg,
    imageAlt: 'Ember — a dry-aged prime cut, kissed by fire',
  },
  about: {
    headline: 'Patience. Heat. Craft.',
    story: `Great steak cannot be rushed. Chef James Callahan learned this truth at sixteen, apprenticed to a third-generation Chicago butcher named Gino Ferriolo. Forty years of knife work later, James built Ember around a single obsession: the 45-day dry-aging program that transforms USDA Prime into something transcendent.\n\nEmber opened in 2018 in a restored River North warehouse. The ceilings are eighteen feet of original brick. The bar carries 240 Japanese and American whiskies. The steaks are carved tableside.`,
    chef: {
      name: 'James Callahan',
      title: 'Executive Chef & Partner',
      bio: 'Former butcher, Chicago native. 40-year career spanning Alinea, Blackbird, and three decades behind the block at Callahan & Sons Meats.',
      photo: chefImg,
      photoAlt: 'Chef James Callahan in the Ember dry-aging vault',
    },
    ambiance: ambianceImg,
    ambianceAlt: 'Ember dining room — original brick, candlelight, whisky wall',
  },
  menu: {
    note: 'All beef is USDA Prime, dry-aged in-house 28–45 days. Prices reflect whole cuts; we carve tableside at your request. Consuming raw or undercooked beef may increase risk of foodborne illness.',
    dietaryKey: [
      { symbol: 'V', label: 'Vegetarian' },
      { symbol: 'GF', label: 'Gluten-Free' },
    ],
    categories: [
      {
        id: 'starters',
        name: 'To Start',
        items: [
          { name: 'Ember Oysters', description: 'Half dozen East Coast oysters, mignonette, cocktail sauce, horseradish', price: '24', dietary: ['gluten-free'] },
          { name: 'Beef Tartare', description: '28-day dry-aged tenderloin, cured yolk, Dijon, capers, grilled sourdough', price: '28' },
          { name: 'Wagyu Carpaccio', description: 'A5 Wagyu, black truffle, Parmigiano, arugula, extra-virgin olive oil', price: '38', dietary: ['gluten-free'] },
          { name: 'Chicago Wedge', description: 'Iceberg, crispy pancetta, gorgonzola, cherry tomatoes, house blue cheese dressing', price: '18', dietary: ['gluten-free'] },
          { name: 'Lobster Bisque', description: 'Maine lobster, cognac cream, chive crème fraîche', price: '22', dietary: ['gluten-free'] },
        ],
      },
      {
        id: 'steaks',
        name: 'Prime Cuts',
        items: [
          { name: 'Filet Mignon — 8 oz.', description: '28-day dry-aged USDA Prime, béarnaise or au poivre sauce', price: '72', dietary: ['gluten-free'] },
          { name: 'Bone-In Ribeye — 22 oz.', description: '35-day dry-aged USDA Prime, bone-in, compound butter', price: '98', dietary: ['gluten-free'] },
          { name: "Chef's Porterhouse — 36 oz.", description: '45-day dry-aged USDA Prime, carved tableside (for two)', price: '185', dietary: ['gluten-free'] },
          { name: 'A5 Japanese Wagyu — 4 oz.', description: 'Miyazaki Prefecture, marble score 10–12, wasabi, ponzu', price: '185', dietary: ['gluten-free'] },
          { name: 'Dry-Aged NY Strip — 16 oz.', description: '35-day dry-aged USDA Prime, hand-cut, roasted garlic butter', price: '88', dietary: ['gluten-free'] },
        ],
      },
      {
        id: 'sides',
        name: 'Accompaniments',
        items: [
          { name: 'Truffle Mac & Cheese', description: 'Three-cheese, black truffle, crispy shallot', price: '18', dietary: ['vegetarian'] },
          { name: 'Ember Hash Browns', description: 'Cast iron potato cake, caramelized onion, crème fraîche', price: '14', dietary: ['vegetarian', 'gluten-free'] },
          { name: 'Creamed Spinach', description: 'Flash-wilted, cream, nutmeg, shaved Parmesan', price: '13', dietary: ['vegetarian', 'gluten-free'] },
          { name: 'Bone Marrow', description: 'Roasted marrow, gremolata, toast points', price: '22' },
        ],
      },
      {
        id: 'cocktails',
        name: 'Ember Cocktails',
        items: [
          { name: 'Ember Old Fashioned', description: 'Bulleit Rye, angostura & mole bitters, smoked demerara, orange peel', price: '24' },
          { name: 'River North Martini', description: 'Roku gin, dry vermouth, house olive brine, lemon oil', price: '22' },
          { name: 'Shiso & Smoke', description: 'Nikka Coffey Malt, shiso-infused Campari, yuzu, smoked ice', price: '26' },
          { name: 'Black Manhattan', description: 'Michter\'s Rye, Averna amaro, Punt e Mes, Luxardo cherry', price: '24' },
        ],
      },
      {
        id: 'whisky',
        name: 'Whisky & Spirits',
        items: [
          { name: 'Japanese Whisky Selection', description: 'Nikka, Yamazaki, Hibiki, Hakushu — over 80 expressions', price: 'From $24' },
          { name: 'American Single Malt', description: 'Curated selection of USA craft distillers', price: 'From $18' },
          { name: 'Scotch — Single Malt', description: 'Highland, Speyside, and Islay expressions', price: 'From $20' },
          { name: 'Champagne & Sparkling', description: 'Grower producers, vintage Champagnes, and blanc de blancs', price: 'From $28' },
        ],
      },
    ],
  },
  gallery: [
    { url: heroImg, alt: 'Dry-aged ribeye, carved tableside', span: 'tall' },
    { url: ambianceImg, alt: 'Ember dining room — brick, candlelight', span: 'normal' },
    { url: g3, alt: 'Wagyu carpaccio', span: 'normal' },
    { url: g4, alt: 'The whisky wall at Ember bar', span: 'wide' },
    { url: g5, alt: 'Beef tartare, house preparation', span: 'normal' },
    { url: g6, alt: 'Dry-aging vault, in-house program', span: 'tall' },
    { url: g7, alt: 'Ember dessert — dark chocolate', span: 'normal' },
    { url: g8, alt: 'Late-night dining, River North', span: 'normal' },
  ],
  seo: {
    title: 'Ember | Prime Steaks & Spirits | River North, Chicago',
    description: '45-day dry-aged prime beef, 240 Japanese and American whiskies, and a lounge open until 1 AM. River North\'s most celebrated steakhouse. Mon–Sat.',
    ogImage: heroImg,
    canonicalUrl: 'https://restaurants.dcrader.dev/v5-dark-elegant',
  },
};
