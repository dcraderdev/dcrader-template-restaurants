// V3: Hen & Hearth — Farm-to-Table, Woodstock Vermont
// Theme: Rustic Farm (warm parchment, earthy greens/browns, Libre Baskerville)
import type { RestaurantConfig } from './types';

export const restaurant: RestaurantConfig = {
  name: 'Hen & Hearth',
  cuisine: 'Farm-to-Table',
  city: 'Woodstock, Vermont',
  tagline: 'Farm-to-Table · Woodstock, VT',
  heroHeadline: 'From Our Farm\nto Your Table',
  heroSubtitle: 'Cooked over fire. Grown down the road. Ready when you are.',
  phone: '(802) 555-0347',
  email: 'hello@henandhearth.com',
  address: {
    street: '3 Orchard Lane',
    city: 'Woodstock',
    state: 'VT',
    zip: '05091',
    full: '3 Orchard Lane, Woodstock, VT 05091',
  },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11540.2!2d-72.5196!3d43.6245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb4e70a2d6b5bf3%3A0x5a37df0a3c4f0a12!2s3%20Orchard%20Ln%2C%20Woodstock%2C%20VT%2005091!5e0!3m2!1sen!2sus!4v1700000000000',
  mapDirectionsUrl: 'https://maps.google.com/?q=3+Orchard+Lane+Woodstock+VT+05091',
  hours: [
    { day: 'Monday', open: null, close: null },
    { day: 'Tuesday', open: null, close: null },
    { day: 'Wednesday', open: null, close: null },
    { day: 'Thursday', open: '5:30 PM', close: '9:30 PM' },
    { day: 'Friday', open: '5:30 PM', close: '9:30 PM' },
    { day: 'Saturday', open: '5:00 PM', close: '10:00 PM' },
    { day: 'Sunday', open: '10:00 AM', close: '2:00 PM' },
  ],
  social: {
    instagram: 'https://instagram.com/henandhearth',
    facebook: 'https://facebook.com/henandhearth',
    yelp: 'https://yelp.com/biz/hen-and-hearth-woodstock',
  },
  openTableId: null,
  reservationPhone: '(802) 555-0347',
  hero: {
    // Rustic farm, warm, wood-fire kitchen feel
    image: '/images/photos/photo-1473093226795-af9932fe5856-1600.jpg',
    imageMobile: '/images/photos/photo-1473093226795-af9932fe5856-800.jpg',
    imageAlt: 'Hen & Hearth — fresh ingredients from Connelly Farm spread across a wooden table',
  },
  about: {
    headline: 'Forty acres, one kitchen',
    story: `Connelly Farm has been in the family since 1962. When Birdie Connelly took over in 2015, she had one question: why were they driving their vegetables three hours to a restaurant that would charge $28 for a salad, when they could just build the restaurant here?\n\nHen & Hearth opened its doors in 2017 in a converted 19th-century timber barn overlooking the orchard. The menu is written Wednesday morning, once Birdie walks the farm. The fireplace has been burning every service since opening night.`,
    chef: {
      name: 'Birdie Connelly',
      title: 'Chef & Farmer',
      bio: 'Fourth-generation Vermont farmer and self-taught cook. Runs 40 acres of vegetables, herbs, and heritage breeds with her family.',
      photo: '/images/photos/photo-1607631568010-a87245c0daf8-400.jpg',
      photoAlt: 'Chef Birdie Connelly at the wood-fire hearth',
    },
    ambiance: '/images/photos/photo-1516450360452-9312f5e86fc7-800.jpg',
    ambianceAlt: 'Hen & Hearth dining room in the restored timber barn',
  },
  menu: {
    note: 'Menu written each Wednesday based on the week\'s harvest. Items subject to change based on availability. Everything is grown, raised, or foraged within 30 miles.',
    dietaryKey: [
      { symbol: 'V', label: 'Vegetarian' },
      { symbol: 'VG', label: 'Vegan' },
      { symbol: 'GF', label: 'Gluten-Free' },
    ],
    categories: [
      {
        id: 'starters',
        name: 'From the Garden',
        items: [
          { name: 'Heirloom Tomato Board', description: 'Eight varieties, cultured cream, black salt, herb vinaigrette, grilled bread', price: '16', dietary: ['vegetarian'] },
          { name: 'Farm Egg, Wood-Roasted Leek', description: 'Soft-cooked farm egg, roasted leek, crème fraîche, chive, rye breadcrumbs', price: '14', dietary: ['vegetarian'] },
          { name: 'Seasonal Soup', description: "Chef Birdie's choice — ask your server what came in today", price: '12', dietary: ['vegan', 'gluten-free'] },
          { name: 'Crispy Chicken Liver', description: 'Heritage breed liver, pickled watermelon radish, apple butter, sourdough toast', price: '17' },
        ],
      },
      {
        id: 'mains',
        name: 'From the Hearth',
        items: [
          { name: 'Wood-Roasted Half Chicken', description: 'Heritage breed, roasted over applewood, farm herb jus, root vegetable mash', price: '34', dietary: ['gluten-free'] },
          { name: 'Smoked Pork Chop', description: 'Connelly Farm Berkshire, house-smoked, apple cider reduction, braised greens', price: '38', dietary: ['gluten-free'] },
          { name: 'Cast Iron Trout', description: 'Local trout, lemon-brown butter, watercress, haricots verts', price: '32', dietary: ['gluten-free'] },
          { name: 'Wood-Roasted Vegetables', description: "Seasonal market board — what's best today, roasted in the hearth", price: '26', dietary: ['vegan', 'gluten-free'] },
          { name: 'Farmhouse Pasta', description: 'House-made egg pasta, foraged mushrooms, mascarpone, thyme, toasted hazelnuts', price: '28', dietary: ['vegetarian'] },
        ],
      },
      {
        id: 'sides',
        name: 'From the Field',
        items: [
          { name: 'Roasted Root Vegetables', description: 'Turnips, carrots, beets, honey-thyme glaze', price: '10', dietary: ['vegan', 'gluten-free'] },
          { name: 'Farm Greens', description: 'Morning-picked lettuces, apple cider vinaigrette', price: '9', dietary: ['vegan', 'gluten-free'] },
          { name: 'Griddled Cornbread', description: 'Skillet cornbread, farmhouse butter, wildflower honey', price: '8', dietary: ['vegetarian'] },
        ],
      },
      {
        id: 'sweets',
        name: 'Sweets',
        items: [
          { name: "Birdie's Apple Crisp", description: 'Connelly orchard apples, oat crumble, vanilla bean ice cream (house-churned)', price: '12', dietary: ['vegetarian'] },
          { name: 'Farmhouse Cheese Board', description: 'Three Vermont artisan cheeses, seasonal preserves, honey, walnut bread', price: '18', dietary: ['vegetarian'] },
          { name: 'Chocolate Pot de Crème', description: 'Single-origin dark chocolate, whipped cream, fleur de sel', price: '11', dietary: ['vegetarian', 'gluten-free'] },
        ],
      },
      {
        id: 'drinks',
        name: 'Drinks',
        items: [
          { name: 'Vermont Hard Cider', description: 'Cold Hollow Cider Co., draft pour', price: '9', dietary: ['vegan', 'gluten-free'] },
          { name: 'Harvest Whiskey Sour', description: 'Vermont whiskey, farm apple cider, lemon, honey, egg white', price: '15' },
          { name: 'Vermont Sparkling Wine List', description: 'We carry local méthode champenoise producers', price: 'From $12' },
          { name: 'Switchel (non-alc)', description: 'Apple cider vinegar, ginger, honey, lemon — a Vermont tradition', price: '7', dietary: ['vegan', 'gluten-free'] },
        ],
      },
    ],
  },
  gallery: [
    { url: '/images/photos/photo-1473093226795-af9932fe5856-800.jpg', alt: 'Farm harvest — morning pickup', span: 'wide' },
    { url: '/images/photos/photo-1555396273-367ea4eb4db5-800.jpg', alt: 'Farmhouse pasta, foraged mushrooms', span: 'normal' },
    { url: '/images/photos/photo-1516450360452-9312f5e86fc7-800.jpg', alt: 'The timber barn dining room', span: 'tall' },
    { url: '/images/photos/photo-1551782450-17144efb9c50-800.jpg', alt: 'Heirloom tomato board', span: 'normal' },
    { url: '/images/photos/photo-1490645935967-10de6ba17061-800.jpg', alt: "Birdie's apple crisp, warm from the oven", span: 'normal' },
    { url: '/images/photos/photo-1565299624946-b28f40a0ae38-800.jpg', alt: 'Wood-fire hearth', span: 'normal' },
    { url: '/images/photos/photo-1504674900247-0877df9cc836-800.jpg', alt: 'Cast iron trout, farm herbs', span: 'tall' },
    { url: '/images/photos/photo-1600891964092-4316c288032e-800.jpg', alt: 'Smoked Berkshire pork chop', span: 'normal' },
  ],
  seo: {
    title: 'Hen & Hearth | Farm-to-Table Restaurant | Woodstock, Vermont',
    description: 'Farm-to-table dining in Woodstock, VT. Menu written weekly from Connelly Farm\'s 40-acre harvest. Wood-fire cooking, seasonal ingredients. Open Thu–Sun.',
    ogImage: '/images/photos/photo-1473093226795-af9932fe5856-800.jpg',
    canonicalUrl: 'https://restaurants.dcrader.dev/v3-rustic-farm',
  },
};
