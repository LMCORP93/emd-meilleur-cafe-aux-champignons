// ── Types ──────────────────────────────────────────────────────────────

export interface Product {
  rank: number;
  name: string;
  brand: string;
  slug: string;
  image: string;
  rating: number;
  promoCode: string;
  originalPrice: string;
  discountPrice: string;
  affiliateLink: string;
  origin: string;
  availability: string;
  pros: string[];
  cons: string[];
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
  promoCode: 'LOREM25',
  originalPrice: '69,90 €',
  discountPrice: '49,90 €',
  rating: 8.7,

  author: {
    name: 'Marie Dupont',
    avatar: '/favicon.svg',
    bio: 'Journaliste santé et bien-être. Spécialisée dans les compléments alimentaires depuis 2019.',
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
    { id: 'introduction', label: 'Introduction' },
    { id: 'quick-summary', label: 'Résumé rapide' },
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
      name: 'Lorem Supplement Pro',
      brand: 'Lorem Brand',
      slug: 'lorem-supplement-pro',
      image: '/favicon.svg',
      rating: 8.7,
      promoCode: 'LOREM25',
      originalPrice: '69,90 €',
      discountPrice: '49,90 €',
      affiliateLink: 'https://example.com/go',
      origin: '🇫🇷 France',
      availability: 'En stock',
      pros: [
        'Composition premium certifiée',
        'Résultats prouvés cliniquement',
        'Garantie 60 jours',
        'Code promo -25% disponible',
      ],
      cons: [
        'Prix élevé sans promo',
        'Livraison 3-5 jours',
      ],
    },
    {
      rank: 2,
      name: 'Ipsum Vitality Max',
      brand: 'Ipsum Labs',
      slug: 'ipsum-vitality-max',
      image: '/favicon.svg',
      rating: 7.9,
      promoCode: 'IPSUM15',
      originalPrice: '59,90 €',
      discountPrice: '49,90 €',
      affiliateLink: 'https://example.com/go2',
      origin: '🇩🇪 Allemagne',
      availability: 'En stock',
      pros: [
        'Rapport qualité-prix intéressant',
        'Fabriqué en Allemagne',
        'Livraison rapide',
      ],
      cons: [
        'Goût parfois critiqué',
        'Moins d\'ingrédients actifs',
      ],
    },
    {
      rank: 3,
      name: 'Dolor Wellness Formula',
      brand: 'Dolor Health',
      slug: 'dolor-wellness-formula',
      image: '/favicon.svg',
      rating: 7.2,
      promoCode: 'DOLOR10',
      originalPrice: '44,90 €',
      discountPrice: '39,90 €',
      affiliateLink: 'https://example.com/go3',
      origin: '🇬🇧 Royaume-Uni',
      availability: 'Stock limité',
      pros: [
        'Prix accessible',
        'Bonne tolérance digestive',
      ],
      cons: [
        'Stock souvent limité',
        'Pas de garantie remboursé',
        'Efficacité modérée',
      ],
    },
    {
      rank: 4,
      name: 'Sit Amet Booster',
      brand: 'Sit Amet',
      slug: 'sit-amet-booster',
      image: '/favicon.svg',
      rating: 6.5,
      promoCode: '',
      originalPrice: '39,90 €',
      discountPrice: '39,90 €',
      affiliateLink: 'https://example.com/go4',
      origin: '🇺🇸 États-Unis',
      availability: 'En stock',
      pros: [
        'Prix le plus bas du comparatif',
        'Disponible en parapharmacie',
      ],
      cons: [
        'Pas de code promo',
        'Délai de livraison long (10-15 jours)',
        'Résultats variables selon les utilisateurs',
      ],
    },
  ],
};

export default config;
