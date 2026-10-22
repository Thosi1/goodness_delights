export type DietaryTag =
  | "vegetarian"
  | "vegan"
  | "gluten-free"
  | "nut-free"
  | "halal";

export type ProductCategory =
  | "Celebration Cakes"
  | "Cupcakes"
  | "Cookies"
  | "Brownies";

export interface ProductOption {
  label: string;
  priceModifier?: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  compareAtPrice?: number;
  shortDescription: string;
  description: string;
  images: string[];
  dietary: DietaryTag[];
  flavours: string[];
  sizes: ProductOption[];
  leadTimeHours: number;
  inStock: boolean;
  bestseller?: boolean;
  isNew?: boolean;
  popularity: number;
  storageGuidance: string;
  allergenInfo: string;
}

export interface CartLineItem {
  cartItemId: string;
  productId: string;
  name: string;
  image: string;
  unitPrice: number;
  quantity: number;
  size?: string;
  flavour?: string;
  personalisedMessage?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  occasion: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

