/** Bakery-supplied photography, optimised and hosted locally as WebP files. */
const photo = (name: string) => `/images/goodness-delights/${name}.webp`;

// Stock images remain for sample recipes without a confirmed matching photo.
const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&h=900&q=80`;

export const HERO = photo("white-orchid-celebration-cake");
export const CUSTOM_CAKE_PROMO = photo("unicorn-rainbow-cake");
export const OUR_STORY = photo("white-and-gold-floral-cake");
export const ABOUT_CRAFT = photo("ivory-and-gold-wedding-cake");
export const ABOUT_CREATION = photo("white-ruffle-wedding-cake");
export const CAT_CAKES = photo("white-and-gold-floral-cake");
export const CAT_CUPCAKES = photo("pastel-cupcake-box");
export const CAT_COOKIES = photo("decorated-birthday-biscuits");
export const CAT_BROWNIES = u("photo-1515037893149-de7f840978e2");

/** Alt text stays beside its image so changes in gallery order remain accessible. */
export const GALLERY = [
  {
    "src": "/images/goodness-delights/white-orchid-celebration-cake.webp",
    "alt": "A white celebration cake with orchids, gold lettering and ruffles"
  },
  {
    "src": "/images/goodness-delights/unicorn-rainbow-cake.webp",
    "alt": "A pastel unicorn cake with a rainbow decoration"
  },
  {
    "src": "/images/goodness-delights/pastel-cupcake-box.webp",
    "alt": "Pastel pink and blue cupcakes with colourful toppers"
  },
  {
    "src": "/images/goodness-delights/white-and-gold-floral-cake.webp",
    "alt": "A white birthday cake with gold accents, flowers and a butterfly"
  },
  {
    "src": "/images/goodness-delights/decorated-birthday-biscuits.webp",
    "alt": "Colourfully decorated birthday biscuits in a presentation box"
  },
  {
    "src": "/images/goodness-delights/teddy-balloon-baby-shower-cake.webp",
    "alt": "A teddy bear baby shower cake with a blue hot-air balloon"
  },
  {
    "src": "/images/goodness-delights/ivory-and-gold-wedding-cake.webp",
    "alt": "A three-tier ivory wedding cake with gold accents"
  },
  {
    "src": "/images/goodness-delights/white-ruffle-wedding-cake.webp",
    "alt": "A white two-tier wedding cake with ruffles and gold initials"
  },
  {
    "src": "/images/goodness-delights/paw-patrol-tiered-cake.webp",
    "alt": "A blue three-tier Paw Patrol birthday cake"
  },
  {
    "src": "/images/goodness-delights/traditional-pot-celebration-cake.webp",
    "alt": "A two-tier celebration cake with a traditional pot topper"
  },
  {
    "src": "/images/goodness-delights/black-and-gold-birthday-cake.webp",
    "alt": "A black and white birthday cake with a gold number 40"
  },
  {
    "src": "/images/goodness-delights/pink-barbie-birthday-cake.webp",
    "alt": "A pink Barbie birthday cake with a silver number four"
  },
  {
    "src": "/images/goodness-delights/dinosaur-birthday-cake.webp",
    "alt": "A dinosaur birthday cake with a large number four"
  },
  {
    "src": "/images/goodness-delights/pink-character-bento-cake-set.webp",
    "alt": "A pink Hello Kitty bento cake with matching cupcakes"
  },
  {
    "src": "/images/goodness-delights/colourful-bento-cake-set.webp",
    "alt": "A colourful bento birthday cake with matching cupcakes"
  },
  {
    "src": "/images/goodness-delights/rainbow-teddy-cake.webp",
    "alt": "A yellow and pink teddy bear cake with a rainbow"
  },
  {
    "src": "/images/goodness-delights/red-themed-cupcake-box.webp",
    "alt": "A box of red birthday cupcakes with character toppers"
  },
  {
    "src": "/images/goodness-delights/blue-character-birthday-cake.webp",
    "alt": "A blue character birthday cake with colourful decorations"
  },
  {
    "src": "/images/goodness-delights/barbie-celebration-cake.webp",
    "alt": "A pink Barbie celebration cake with a rainbow and decorations"
  },
  {
    "src": "/images/goodness-delights/themed-cupcake-box.webp",
    "alt": "A box of cupcakes with colourful character toppers"
  },
  {
    "src": "/images/goodness-delights/biscuit-assortment.webp",
    "alt": "An assortment of biscuits packed in white trays"
  },
  {
    "src": "/images/goodness-delights/scones-and-biscuits.webp",
    "alt": "Golden scones with an assortment of biscuits"
  },
  {
    "src": "/images/goodness-delights/scones-in-blue-bowls.webp",
    "alt": "Fresh scones in two blue bowls"
  },
  {
    "src": "/images/goodness-delights/fresh-scones.webp",
    "alt": "Two bowls of golden freshly baked scones"
  },
  {
    "src": "/images/goodness-delights/freshly-baked-scones.webp",
    "alt": "Rows of golden freshly baked scones cooling on a tray"
  }
];

export const CAKE_ROSE = [
  photo("white-and-gold-floral-cake"),
  photo("white-orchid-celebration-cake"),
];

export const CUPCAKE_VANILLA = [
  photo("pastel-cupcake-box"),
  photo("themed-cupcake-box"),
  photo("red-themed-cupcake-box"),
];

export const COOKIE = [
  photo("decorated-birthday-biscuits"),
];

export const CAKE_CHOC = [
  u("photo-1534534622665-065d8ce6f9cc"),
  u("photo-1578985545062-69928b1d9587"),
  u("photo-1588195538326-c5b1e9f80a1b"),
];

export const BROWNIE = [
  u("photo-1515037893149-de7f840978e2"),
  u("photo-1606313564200-e75d5e30476c"),
];

export const CUPCAKE_VEGAN = [
  u("photo-1488477181946-6428a0291777"),
  u("photo-1551500693-f3e9e7842948"),
];

export const CAKE_LEMON = [
  u("photo-1578985545062-69928b1d9587"),
  u("photo-1535141192574-5f8a8b5e5b5e"),
];

export const CAKE_REDVELVET = [
  u("photo-1535141192574-5f8a8b5e5b5e"),
  u("photo-1464349095431-e9a21285b5f3"),
];

export const COOKIE_CHOC = [
  u("photo-1499636136210-6f4ee915583e"),
  u("photo-1558961363-fa8fdf82db35"),
];
