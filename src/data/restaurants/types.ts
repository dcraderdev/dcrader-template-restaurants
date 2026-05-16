// Shared interfaces for all restaurant data configs.
// Each variant has its own file in src/data/restaurants/vN.ts.

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
  url: string;
  alt: string;
  span?: 'normal' | 'tall' | 'wide';
}

export interface HoursEntry {
  day: string;
  open: string | null;
  close: string | null;
}

export interface RestaurantConfig {
  name: string;
  cuisine: string;
  city: string;
  tagline: string;
  heroHeadline: string;
  heroSubtitle: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  mapEmbedUrl: string;
  mapDirectionsUrl: string;
  hours: HoursEntry[];
  social: {
    instagram: string;
    facebook: string;
    yelp: string;
  };
  openTableId: string | null;
  reservationPhone: string;
  hero: {
    image: string;
    imageMobile: string;
    imageAlt: string;
  };
  about: {
    headline: string;
    story: string;
    chef: {
      name: string;
      title: string;
      bio: string;
      photo: string;
      photoAlt: string;
    };
    ambiance: string;
    ambianceAlt: string;
  };
  menu: {
    note: string;
    dietaryKey: Array<{ symbol: string; label: string }>;
    categories: MenuCategory[];
  };
  gallery: GalleryItem[];
  seo: {
    title: string;
    description: string;
    ogImage: string;
    canonicalUrl: string;
  };
}
