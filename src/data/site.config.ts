// ── Types ──────────────────────────────────────────────────────────────

export interface Product {
  rank: number;
  name: string;
  brand: string;
  slug: string;
  image: string;
  brandLogo: string;
  rating: number;
  reviewCount: number;
  promoCode: string;
  promoPercent: number;
  originalPrice: string;
  discountPrice: string;
  affiliateLink: string;
  origin: string;
  availability: string;
  productType: string;
  pros: string[];
  cons: string[];
  description: string;
}

export interface SiteConfig {
  domain: string;
  siteName: string;
  brand: string;
  product: string;
  productCategory: string;
  tagline: string;
  affiliateLink: string;
  promoCode: string;
  originalPrice: string;
  discountPrice: string;
  rating: number;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  seo: {
    title: string;
    description: string;
    ogImage: string;
  };
  quickSummary: {
    assets: string[];
    considerations: string[];
  };
  pros: string[];
  cons: string[];
  faq: { question: string; answer: string }[];
  products: Product[];
  tocItems: { id: string; label: string }[];
}

// ── Config ─────────────────────────────────────────────────────────────

const config: SiteConfig = {
  domain: 'https://example.com',
  siteName: 'LoremReview',
  brand: 'Lorem Brand',
  product: 'Lorem Supplement',
  productCategory: 'Compléments Alimentaires',
  tagline: 'Le guide complet pour faire le bon choix',

  affiliateLink: 'https://example.com/go',
  promoCode: 'LMC',
  originalPrice: '89,00 $',
  discountPrice: '80,00 $',
  rating: 9.8,

  author: {
    name: 'Tim',
    avatar: '/author-avatar.png',
    bio: 'Expert en compléments alimentaires et nutrition sportive. Testeur et rédacteur chez LMC depuis 2024.',
  },

  seo: {
    title: 'Lorem Supplement Review — Test Complet 2026',
    description: 'Découvrez notre analyse complète du Lorem Supplement. Avantages, inconvénients, prix et code promo exclusif. Comparatif avec les meilleures alternatives.',
    ogImage: '/og-image.svg',
  },

  quickSummary: {
    assets: [
      'Composition naturelle certifiée',
      'Résultats visibles dès les 2 premières semaines',
      'Garantie satisfait ou remboursé 60 jours',
      'Livraison gratuite en France',
      'Code promo -25% actif ce mois-ci',
    ],
    considerations: [
      'Prix supérieur à la moyenne du marché',
      'Disponibilité limitée dans certains pays',
      'Nécessite une prise quotidienne régulière',
    ],
  },

  pros: [
    'Ingrédients 100% naturels et traçables',
    'Formulation scientifiquement validée',
    'Pas d\'effets secondaires rapportés',
    'Packaging éco-responsable',
    'Service client réactif et disponible 7j/7',
    'Avis clients très positifs (4.8/5 en moyenne)',
  ],

  cons: [
    'Prix plus élevé que certains concurrents',
    'Non disponible en pharmacie physique',
    'Délai de livraison de 3 à 5 jours ouvrés',
    'Abonnement automatique si non annulé',
  ],

  faq: [
    {
      question: 'Quels sont les ingrédients principaux du Lorem Supplement ?',
      answer: 'Le Lorem Supplement contient un mélange exclusif de vitamines B, zinc, magnésium et extraits de plantes naturelles. Chaque ingrédient est soigneusement sélectionné pour sa qualité et son efficacité prouvée scientifiquement.',
    },
    {
      question: 'Combien de temps faut-il pour voir des résultats ?',
      answer: 'La plupart des utilisateurs constatent des résultats significatifs après 2 à 4 semaines d\'utilisation régulière. Les effets optimaux se manifestent généralement après 8 semaines de cure continue.',
    },
    {
      question: 'Y a-t-il des effets secondaires ?',
      answer: 'Le Lorem Supplement est formulé à partir d\'ingrédients naturels et ne présente généralement pas d\'effets secondaires. Cependant, il est toujours recommandé de consulter un professionnel de santé avant toute supplémentation.',
    },
    {
      question: 'La garantie satisfait ou remboursé fonctionne comment ?',
      answer: 'Lorem Brand offre une garantie de 60 jours. Si vous n\'êtes pas satisfait du produit, vous pouvez retourner les flacons vides ou non ouverts pour obtenir un remboursement intégral, sans condition.',
    },
    {
      question: 'Comment utiliser le code promo ?',
      answer: 'Entrez le code LOREM25 lors de votre commande sur le site officiel. La réduction de 25% sera appliquée automatiquement à votre panier. Ce code est valable tant que l\'offre est affichée sur notre page.',
    },
  ],

  tocItems: [
    { id: 'quick-summary', label: 'En bref' },
    { id: 'introduction', label: 'Introduction' },
    { id: 'composition', label: 'Composition & Ingrédients' },
    { id: 'efficacite', label: 'Efficacité & Résultats' },
    { id: 'prix', label: 'Prix & Offres' },
    { id: 'avis', label: 'Avis Clients' },
    { id: 'pros-cons', label: 'Avantages & Inconvénients' },
    { id: 'faq', label: 'Questions Fréquentes' },
    { id: 'conclusion', label: 'Conclusion' },
  ],

  products: [
    {
      rank: 1,
      name: 'Brainstoorm - Mush N Go',
      brand: 'Mush N Go',
      slug: 'brainstoorm-mush-n-go',
      image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/69634d74b3e93e5fd12d108d_1_8789ecf0-bcc9-4b45-b2f9-c8bfca54ab16_1000x1000_crop_center.webp',
      brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/68dd03c74aa741ba6fbc75d7_Logo%20mush%20n%20go.svg',
      rating: 9.7,
      reviewCount: 170,
      promoCode: 'LMC15',
      promoPercent: 15,
      originalPrice: '39,90 €',
      discountPrice: '33,90 €',
      affiliateLink: 'https://taap.it/mushngo-brainstorm',
      origin: '🇫🇷 France',
      availability: 'En stock',
      productType: 'Poudre',
      pros: [
        'Formule ultra-concentrée : 3475 mg de principes actifs par portion',
        'Excellente tolérance digestive, pas d\'acidité ni de palpitations',
        'Goût cacao-noisette agréable sans arrière-goût de champignon',
        'Effets perceptibles dès les premières tasses',
        'Fabrication française, bio, vegan, sans gluten',
      ],
      cons: [
        'Disponible uniquement en ligne',
        'Ruptures de stock fréquentes',
        'Goût trop chocolaté pour certains',
      ],
      description: 'Brainstoorm est un café aux champignons adaptogènes par Mush N Go. Formule à 3475 mg d\'actifs (Lion\'s Mane, Cordyceps, Chaga, Maca, Ashwagandha, Rhodiola). Fabrication française, bio, vegan.',
    },
    {
      rank: 2,
      name: 'Ipsum Vitality Max',
      brand: 'Ipsum Labs',
      slug: 'ipsum-vitality-max',
      image: '/logo.svg',
      brandLogo: '/logo.svg',
      rating: 7.9,
      reviewCount: 1850,
      promoCode: 'IPSUM15',
      promoPercent: 15,
      originalPrice: '59,90 €',
      discountPrice: '49,90 €',
      affiliateLink: 'https://example.com/go2',
      origin: '🇩🇪 Allemagne',
      availability: 'En stock',
      productType: 'Complément alimentaire',
      pros: [
        'Rapport qualité-prix intéressant',
        'Fabriqué en Allemagne',
        'Livraison rapide',
      ],
      cons: [
        'Goût parfois critiqué',
        'Moins d\'ingrédients actifs',
      ],
      description: 'L\'Ipsum Vitality Max se distingue par sa fabrication allemande et son excellent rapport qualité-prix. Une alternative solide pour ceux qui recherchent un produit fiable à un prix plus accessible.',
    },
    {
      rank: 3,
      name: 'Dolor Wellness Formula',
      brand: 'Dolor Health',
      slug: 'dolor-wellness-formula',
      image: '/logo.svg',
      brandLogo: '/logo.svg',
      rating: 7.2,
      reviewCount: 980,
      promoCode: 'DOLOR10',
      promoPercent: 10,
      originalPrice: '44,90 €',
      discountPrice: '39,90 €',
      affiliateLink: 'https://example.com/go3',
      origin: '🇬🇧 Royaume-Uni',
      availability: 'Stock limité',
      productType: 'Complément alimentaire',
      pros: [
        'Prix accessible',
        'Bonne tolérance digestive',
      ],
      cons: [
        'Stock souvent limité',
        'Pas de garantie remboursé',
        'Efficacité modérée',
      ],
      description: 'Le Dolor Wellness Formula est une option économique avec une bonne tolérance digestive. Idéal pour les budgets serrés, bien que ses résultats soient plus modestes.',
    },
    {
      rank: 4,
      name: 'Sit Amet Booster',
      brand: 'Sit Amet',
      slug: 'sit-amet-booster',
      image: '/logo.svg',
      brandLogo: '/logo.svg',
      rating: 6.5,
      reviewCount: 450,
      promoCode: '',
      promoPercent: 0,
      originalPrice: '39,90 €',
      discountPrice: '39,90 €',
      affiliateLink: 'https://example.com/go4',
      origin: '🇺🇸 États-Unis',
      availability: 'En stock',
      productType: 'Complément alimentaire',
      pros: [
        'Prix le plus bas du comparatif',
        'Disponible en parapharmacie',
      ],
      cons: [
        'Pas de code promo',
        'Délai de livraison long (10-15 jours)',
        'Résultats variables selon les utilisateurs',
      ],
      description: 'Le Sit Amet Booster est le plus abordable de notre comparatif. Ses résultats sont cependant variables et le délai de livraison depuis les États-Unis peut être un frein.',
    },
  ],
};

export default config;
