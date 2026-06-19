// =============================================================================
// RAWSA — Flavor data (single source of truth)
// -----------------------------------------------------------------------------
// Adding a future / seasonal flavor = append one object here. Every section of
// the site (Hero switcher, Flavor gallery, Product family lineup) reads from
// this array, so the brand scales without touching component code.
//
// Color tokens map to the CSS custom properties driven by FlavorContext:
//   primary   -> --flavor-primary   (bottle accent, buttons, highlights)
//   tint      -> --flavor-bg-accent (section / hero wash background)
//   gradient  -> --flavor-gradient  (deeper shade for gradients & hovers)
//
// `image` is the front bottle render in /public/assets. For a future flavor
// whose render isn't ready yet, set `image: null` — the UI falls back to a
// generated gradient "bottle" so nothing 404s. Drop the PNG in later and set
// the path; it just works.
// =============================================================================

export const flavors = [
  {
    id: 'orange',
    name: 'Orange',
    fruit: 'Valencia Orange',
    tagline: 'Sun-ripened citrus zing',
    description:
      'Bright, juicy Valencia oranges pressed into a crisp, zesty refresher that wakes up the senses.',
    notes: ['Citrus', 'Zesty', 'Bright'],
    emoji: '🍊',
    primary: '#FF7A00',
    tint: '#FFF3E6',
    gradient: '#FF5100',
    image: '/assets/Orange.png',
    back: '/assets/OrangeBack.png',
  },
  {
    id: 'mango',
    name: 'Mango',
    fruit: 'Alphonso Mango',
    tagline: 'The king of fruits, bottled',
    description:
      'Lush Alphonso mangoes deliver a velvety, golden sweetness — the taste of an Indian summer.',
    notes: ['Tropical', 'Velvety', 'Sweet'],
    emoji: '🥭',
    primary: '#FFB300',
    tint: '#FFFBE6',
    gradient: '#FF9A00',
    image: '/assets/Mango.png',
    back: '/assets/MangoBack.png',
  },
  {
    id: 'appy',
    name: 'Appy Rush',
    fruit: 'Crisp Apple',
    tagline: 'Orchard-fresh rush',
    description:
      'Hand-picked apples pressed for a crisp, sparkling lift that hits clean and finishes light.',
    notes: ['Crisp', 'Fresh', 'Light'],
    emoji: '🍏',
    primary: '#4CAF50',
    tint: '#E8F5E9',
    gradient: '#2E7D32',
    image: '/assets/AppyRush.png',
    back: '/assets/AppyRush Back.png',
  },
  {
    id: 'guava',
    name: 'Pink Guava',
    fruit: 'Pink Guava',
    tagline: 'Soft, blushing tropics',
    description:
      'Ripe pink guava brings a delicate, floral sweetness with a smooth, blush-toned finish.',
    notes: ['Floral', 'Smooth', 'Exotic'],
    emoji: '🌸',
    primary: '#FF6F91',
    tint: '#FFF0F2',
    gradient: '#E91E63',
    image: '/assets/PinkGuava.png',
    back: '/assets/PinkGuavaBack.png',
  },
  {
    id: 'tamarind',
    name: 'Sweet Tamarind',
    fruit: 'Sweet Tamarind',
    tagline: 'Nostalgic Indian tang',
    description:
      'A sweet-and-tangy tamarind classic — the bittersweet nostalgia of an Indian street favourite.',
    notes: ['Tangy', 'Warm', 'Nostalgic'],
    emoji: '🟤',
    primary: '#A9684E',
    tint: '#F6EFEA',
    gradient: '#5D4037',
    image: '/assets/SweetTamarinda.png',
    back: '/assets/SweetTamarindaBack.png',
  },
];

export const defaultFlavor = flavors[0];

export const getFlavor = (id) =>
  flavors.find((f) => f.id === id) ?? defaultFlavor;
