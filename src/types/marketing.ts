// Types untuk halaman marketing Hacara

export interface VendorType {
  id: string;
  name: string;
  category: string;
  rating: number;
  image: string;
  description: string;
  location: string;
}

export interface TestimonialType {
  id: string;
  name: string;
  eventType: string;
  image: string;
  quote: string;
  rating: number;
}

export interface EventCategoryType {
  id: string;
  name: string;
  image: string;
  description: string;
  vendorCount: number;
}

export interface FeatureType {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface FAQItemType {
  id: string;
  question: string;
  answer: string;
}

export interface LanguageType {
  id: 'id' | 'en';
  name: string;
  flag: string;
}

export interface TranslationsType {
  navbar: {
    home: string;
    about: string;
    features: string;
    vendors: string;
    testimonials: string;
    faq: string;
    contact: string;
    getStarted: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
    stats: {
      vendors: string;
      events: string;
      experience: string;
    };
  };
  features: {
    title: string;
    items: {
      search: { title: string; description: string };
      filter: { title: string; description: string };
      payment: { title: string; description: string };
      review: { title: string; description: string };
    };
  };
  categories: {
    title: string;
    viewVendors: string;
  };
  vendors: {
    title: string;
    viewDetail: string;
  };
  testimonials: {
    title: string;
  };
  faq: {
    title: string;
  };
  cta: {
    title: string;
    button: string;
  };
  footer: {
    contact: string;
    social: string;
    copyright: string;
  };
}