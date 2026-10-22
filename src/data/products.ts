import { Product } from "@/types";
import {
  CAKE_ROSE, CAKE_CHOC, CUPCAKE_VANILLA, BROWNIE, COOKIE,
  CUPCAKE_VEGAN, CAKE_LEMON, CAKE_REDVELVET, COOKIE_CHOC,
} from "./images";

// NOTE: Replace with real product database / CMS queries when connecting a backend.
// Image URLs are real Unsplash photos (free license). Replace with professional
// product photography before launch.

export const products: Product[] = [
  {
    id: "p1",
    slug: "blush-rose-celebration-cake",
    name: "Blush Rose Celebration Cake",
    category: "Celebration Cakes",
    price: 685,
    shortDescription: "Hand-piped buttercream roses over vanilla sponge.",
    description:
      "A timeless centrepiece for birthdays, anniversaries and every milestone in between. Layers of soft vanilla bean sponge are filled with silky Italian buttercream and finished with hand-piped roses in shades of blush and rose gold.",
    images: CAKE_ROSE,
    dietary: ["vegetarian"],
    flavours: ["Vanilla Bean", "Madagascar Chocolate", "Lemon & Elderflower"],
    sizes: [
      { label: "6\" — serves 8–10" },
      { label: "8\" — serves 14–16", priceModifier: 220 },
      { label: "10\" — serves 22–26", priceModifier: 480 },
    ],
    leadTimeHours: 72,
    inStock: true,
    bestseller: true,
    popularity: 98,
    storageGuidance:
      "Store in a cool room away from direct sunlight. Refrigerate if your kitchen is warm and bring to room temperature 1 hour before serving.",
    allergenInfo:
      "Contains gluten, dairy and eggs. Prepared in a kitchen that also handles nuts.",
  },
  {
    id: "p2",
    slug: "gilded-chocolate-drip-cake",
    name: "Gilded Chocolate Drip Cake",
    category: "Celebration Cakes",
    price: 720,
    shortDescription: "Dark chocolate sponge, salted caramel drip, gold leaf.",
    description:
      "Rich Madagascar chocolate sponge layered with salted caramel ganache, finished with a glossy chocolate drip and delicate edible gold leaf. A showstopper for the chocolate lovers in your life.",
    images: CAKE_CHOC,
    dietary: ["vegetarian"],
    flavours: ["Madagascar Chocolate", "Salted Caramel"],
    sizes: [
      { label: "6\" — serves 8–10" },
      { label: "8\" — serves 14–16", priceModifier: 220 },
    ],
    leadTimeHours: 72,
    inStock: true,
    bestseller: true,
    popularity: 95,
    storageGuidance:
      "Best enjoyed within 3 days. Store in an airtight container at room temperature, away from heat.",
    allergenInfo: "Contains gluten, dairy, eggs and soy.",
  },
  {
    id: "p3",
    slug: "vanilla-bean-cupcake-box",
    name: "Vanilla Bean Cupcake Box",
    category: "Cupcakes",
    price: 165,
    shortDescription: "Classic vanilla cupcakes with swirled buttercream.",
    description:
      "Soft vanilla bean cupcakes, swirled with our signature vanilla buttercream and finished with a scattering of edible petals. Perfect for everyday treating or a small gathering.",
    images: CUPCAKE_VANILLA,
    dietary: ["vegetarian"],
    flavours: ["Vanilla Bean", "Strawberry", "Lemon"],
    sizes: [{ label: "Box of 6" }, { label: "Box of 12", priceModifier: 150 }],
    leadTimeHours: 24,
    inStock: true,
    bestseller: true,
    popularity: 90,
    storageGuidance: "Store in an airtight container for up to 3 days.",
    allergenInfo: "Contains gluten, dairy and eggs.",
  },
  {
    id: "p4",
    slug: "salted-caramel-brownie-box",
    name: "Salted Caramel Brownie Box",
    category: "Brownies",
    price: 145,
    shortDescription: "Fudgy brownies laced with salted caramel ribbons.",
    description:
      "Deeply fudgy dark chocolate brownies with ribbons of salted caramel running through every bite. Baked in small batches for a rich, gooey centre.",
    images: BROWNIE,
    dietary: ["vegetarian", "nut-free"],
    flavours: ["Salted Caramel", "Classic Fudge"],
    sizes: [{ label: "Box of 6" }, { label: "Box of 12", priceModifier: 120 }],
    leadTimeHours: 24,
    inStock: true,
    popularity: 88,
    storageGuidance: "Keep in an airtight container for up to 5 days.",
    allergenInfo: "Contains gluten, dairy and eggs. Nut-free kitchen line.",
  },
  {
    id: "p5",
    slug: "iced-gem-cookie-box",
    name: "Iced Gem Cookie Box",
    category: "Cookies",
    price: 120,
    shortDescription: "Hand-iced butter cookies in seasonal shapes.",
    description:
      "Buttery shortbread cookies, hand-iced in soft pastel tones. A delicate gift or a sweet addition to any celebration table.",
    images: COOKIE,
    dietary: ["vegetarian"],
    flavours: ["Vanilla Butter", "Lemon"],
    sizes: [{ label: "Box of 8" }, { label: "Box of 16", priceModifier: 100 }],
    leadTimeHours: 24,
    inStock: true,
    popularity: 80,
    storageGuidance: "Store in a cool, dry place for up to 7 days.",
    allergenInfo: "Contains gluten, dairy and eggs.",
  },
  {
    id: "p7",
    slug: "vegan-chocolate-cupcake-box",
    name: "Vegan Chocolate Cupcake Box",
    category: "Cupcakes",
    price: 175,
    shortDescription: "Rich plant-based chocolate cupcakes.",
    description:
      "Deeply chocolatey, entirely plant-based cupcakes topped with whipped vegan ganache. So rich and moist, you won't believe they're dairy-free.",
    images: CUPCAKE_VEGAN,
    dietary: ["vegan", "vegetarian"],
    flavours: ["Chocolate"],
    sizes: [{ label: "Box of 6" }],
    leadTimeHours: 24,
    inStock: true,
    isNew: true,
    popularity: 70,
    storageGuidance: "Store in an airtight container for up to 3 days.",
    allergenInfo: "Contains gluten and soy. Dairy-free and egg-free.",
  },
  {
    id: "p8",
    slug: "gluten-free-lemon-drizzle-cake",
    name: "Gluten-Free Lemon Drizzle Cake",
    category: "Celebration Cakes",
    price: 410,
    shortDescription: "Zesty lemon sponge, gluten-free, finished with drizzle icing.",
    description:
      "A light, zesty lemon sponge made with a delicate gluten-free flour blend, soaked in lemon syrup and finished with a tangy drizzle icing.",
    images: CAKE_LEMON,
    dietary: ["vegetarian", "gluten-free"],
    flavours: ["Lemon"],
    sizes: [
      { label: "6\" — serves 8–10" },
      { label: "8\" — serves 14–16", priceModifier: 180 },
    ],
    leadTimeHours: 48,
    inStock: true,
    popularity: 72,
    storageGuidance: "Refrigerate and bring to room temperature before serving.",
    allergenInfo: "Gluten-free. Contains dairy and eggs.",
  },
  {
    id: "p9",
    slug: "halal-red-velvet-cake",
    name: "Halal Red Velvet Cake",
    category: "Celebration Cakes",
    price: 650,
    shortDescription: "Classic red velvet, halal-certified ingredients.",
    description:
      "A velvety, lightly cocoa-spiced sponge layered with cream cheese frosting, prepared entirely with halal-certified ingredients.",
    images: CAKE_REDVELVET,
    dietary: ["vegetarian", "halal"],
    flavours: ["Red Velvet"],
    sizes: [
      { label: "6\" — serves 8–10" },
      { label: "8\" — serves 14–16", priceModifier: 200 },
    ],
    leadTimeHours: 72,
    inStock: true,
    popularity: 84,
    storageGuidance: "Refrigerate; serve at room temperature.",
    allergenInfo: "Contains gluten, dairy and eggs.",
  },
  {
    id: "p11",
    slug: "double-chocolate-chunk-cookie-box",
    name: "Double Chocolate Chunk Cookie Box",
    category: "Cookies",
    price: 130,
    shortDescription: "Thick, gooey cookies loaded with dark chocolate chunks.",
    description:
      "Thick, bakery-style cookies with crisp edges and a soft, gooey centre, loaded with generous chunks of dark chocolate.",
    images: COOKIE_CHOC,
    dietary: ["vegetarian"],
    flavours: ["Dark Chocolate"],
    sizes: [{ label: "Box of 6" }, { label: "Box of 12", priceModifier: 110 }],
    leadTimeHours: 24,
    inStock: true,
    bestseller: true,
    popularity: 92,
    storageGuidance: "Store in an airtight container for up to 5 days.",
    allergenInfo: "Contains gluten, dairy and eggs.",
  },
];

export const categories = [
  "Celebration Cakes",
  "Cupcakes",
  "Cookies",
  "Brownies",
] as const;

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, count = 4) {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, count);
}

