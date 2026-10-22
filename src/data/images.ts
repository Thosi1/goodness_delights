/**
 * Real Unsplash photo URLs for Goodness Delights Bakehouse.
 * All images are free under the Unsplash License (unsplash.com/license).
 * Photographers are credited in comments — attribution is appreciated though not required.
 *
 * NOTE: Replace these with your own professional product photography before launch.
 * Update next.config.js remotePatterns if you host images elsewhere.
 */

const u = (id: string, w = 900, h = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

// ─── Site-wide / pages ────────────────────────────────────────────────────────

/** Hero — elegant tiered cake with flowers. Photo: Jason Leung */
export const HERO = u("photo-1464349095431-e9a21285b5f3", 900, 1100);

/** Custom cake promo — naked drip cake. Photo: Thomas William */
export const CUSTOM_CAKE_PROMO = u("photo-1535141192574-5f8a8b5e5b5e", 800, 600);

/** Our Story — baker decorating. Photo: Brooke Lark */
export const OUR_STORY = u("photo-1556909114-f6e7ad7d3136", 800, 640);

/** About — kitchen scene. Photo: theme_photos */
export const ABOUT_KITCHEN = u("photo-1556909114-f6e7ad7d3136", 800, 600);

/** About — founder portrait placeholder. Photo: The Creative Exchange */
export const ABOUT_BAKER = u("photo-1556909114-f6e7ad7d3136", 700, 700);

// ─── Category thumbnails ──────────────────────────────────────────────────────

/** Celebration Cakes — Jason Leung white tiered cake */
export const CAT_CAKES = u("photo-1464349095431-e9a21285b5f3");

/** Cupcakes — Persnickety Prints retro cupcakes */
export const CAT_CUPCAKES = u("photo-1551500693-f3e9e7842948");

/** Cookies — Kari Shea sugar cookies */
export const CAT_COOKIES = u("photo-1558961363-fa8fdf82db35");

/** Brownies — Michelle Tsang fudge brownies */
export const CAT_BROWNIES = u("photo-1515037893149-de7f840978e2");

// ─── Gallery strip ────────────────────────────────────────────────────────────

export const GALLERY = [
  u("photo-1534534622665-065d8ce6f9cc"), // Ella Olsson — chocolate cake
  u("photo-1551500693-f3e9e7842948"),     // Persnickety Prints — cupcakes
  u("photo-1515037893149-de7f840978e2"), // Michelle Tsang — brownies
  u("photo-1491821893533-80f535044695"), // Brigitte Tohm — macaron box
  u("photo-1570476922354-81227cdbb76c"), // Melanie Kreutz — colourful macarons
  u("photo-1558961363-fa8fdf82db35"),    // Kari Shea — sugar cookies
];

// ─── Products ────────────────────────────────────────────────────────────────

/** Blush Rose Celebration Cake */
export const CAKE_ROSE = [
  u("photo-1464349095431-e9a21285b5f3"),
  u("photo-1535141192574-5f8a8b5e5b5e"),
  u("photo-1578985545062-69928b1d9587"),
];

/** Gilded Chocolate Drip Cake */
export const CAKE_CHOC = [
  u("photo-1534534622665-065d8ce6f9cc"),
  u("photo-1578985545062-69928b1d9587"),
  u("photo-1588195538326-c5b1e9f80a1b"),
];

/** Vanilla Bean Cupcakes */
export const CUPCAKE_VANILLA = [
  u("photo-1551500693-f3e9e7842948"),
  u("photo-1488477181946-6428a0291777"),
];

/** Salted Caramel Brownie Box */
export const BROWNIE = [
  u("photo-1515037893149-de7f840978e2"),
  u("photo-1606313564200-e75d5e30476c"),
];

/** Iced Gem Cookie Box */
export const COOKIE = [
  u("photo-1558961363-fa8fdf82db35"),
  u("photo-1499636136210-6f4ee915583e"),
];


/** Vegan Chocolate Cupcakes */
export const CUPCAKE_VEGAN = [
  u("photo-1488477181946-6428a0291777"),
  u("photo-1551500693-f3e9e7842948"),
];

/** Gluten-Free Lemon Drizzle Cake */
export const CAKE_LEMON = [
  u("photo-1578985545062-69928b1d9587"),
  u("photo-1535141192574-5f8a8b5e5b5e"),
];

/** Halal Red Velvet Cake */
export const CAKE_REDVELVET = [
  u("photo-1535141192574-5f8a8b5e5b5e"),
  u("photo-1464349095431-e9a21285b5f3"),
];


/** Double Chocolate Chunk Cookies */
export const COOKIE_CHOC = [
  u("photo-1499636136210-6f4ee915583e"),
  u("photo-1558961363-fa8fdf82db35"),
];
