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
  productFormat: string;
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
  breadcrumbs: { label: string; href: string }[];
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
  domain: 'https://emeilleurcomplement.fr',
  siteName: 'Le Meilleur Complement',
  brand: 'Mush N Go',
  product: 'Brainstoorm',
  productCategory: 'Champignons Adaptogènes',
  productFormat: 'Poudre',
  tagline: 'Test complet et honnête de Brainstoorm',

  affiliateLink: 'https://taap.it/mushngo-brainstorm',
  promoCode: 'LMC15',
  originalPrice: '39,90 €',
  discountPrice: '33,90 €',
  rating: 9.7,

  author: {
    name: 'Tim',
    avatar: '/author-avatar.png',
    bio: 'Expert en compléments alimentaires et nutrition sportive. Testeur et rédacteur chez LMC depuis 2024. Spécialisé dans les champignons adaptogènes et la nootropie naturelle.',
  },

  seo: {
    title: 'Mush N Go Avis - Test Complet Brainstoorm',
    description: 'Mush N Go avis complet : notre test de 30 jours du Brainstoorm, café aux champignons adaptogènes. Composition, efficacité, prix et code promo -15% LMC15.',
    ogImage: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/69634d74b3e93e5fd12d108d_1_8789ecf0-bcc9-4b45-b2f9-c8bfca54ab16_1000x1000_crop_center.webp',
  },

  breadcrumbs: [
    { label: 'Champignons Adaptogènes', href: '/champignons-adaptogenes' },
    { label: 'Mush N Go', href: '/champignons-adaptogenes/mush-n-go' },
  ],

  quickSummary: {
    assets: [
      'Formule ultra-concentrée à 3475 mg de principes actifs par dose',
      'Extraction 12:1 des champignons pour une biodisponibilité maximale',
      'Café bio extrait au CO2 avec seulement 80 mg de caféine',
      'Certifié bio, vegan, sans gluten, sans OGM',
      'Code promo LMC15 pour -15% sur le site officiel',
    ],
    considerations: [
      'Disponible uniquement sur le site officiel en ligne',
      'Ruptures de stock fréquentes en raison de la demande élevée',
      'Le goût cacao peut déplaire aux amateurs de café classique',
    ],
  },

  pros: [
    'Formule ultra-concentrée 3475 mg de principes actifs par dose de 8 g',
    'Excellente tolérance digestive, pas d\'acidité ni de palpitations',
    'Goût cacao-noisette agréable, sans arrière-goût de champignon',
    'Effets perceptibles rapidement dès les premières prises',
    'Fabrication française, bio, vegan, sans gluten, sans OGM',
  ],

  cons: [
    'Disponible uniquement en ligne sur le site officiel',
    'Ruptures de stock fréquentes dues à la forte demande',
    'Goût trop chocolaté pour certains amateurs de café pur',
  ],

  faq: [
    {
      question: 'Quels sont les ingrédients de Brainstoorm Mush N Go ?',
      answer: 'Brainstoorm contient Lion\'s Mane (1000 mg), Cordyceps (1000 mg), Chaga (1000 mg), Maca (250 mg), Ashwagandha (200 mg), Rhodiola (25 mg), café bio extrait au CO2 (80 mg de caféine) et cacao cru (1307 mg). Chaque dose de 8 g contient 3475 mg de principes actifs extraits au ratio 12:1.',
    },
    {
      question: 'Au bout de combien de temps voit-on les résultats avec Brainstoorm ?',
      answer: 'Les premiers effets se ressentent généralement dès la première tasse grâce à la caféine combinée aux adaptogènes. Pour des bénéfices cognitifs durables (concentration, mémoire), un usage régulier de 2 à 4 semaines est nécessaire. Les effets maximaux sur la clarté mentale et la résistance au stress se manifestent après 30 jours de cure continue.',
    },
    {
      question: 'Y a-t-il des effets secondaires avec le café aux champignons Mush N Go ?',
      answer: 'Brainstoorm est bien toléré par la grande majorité des utilisateurs. Sa formulation inclut du café bio avec seulement 80 mg de caféine par dose (contre 95-120 mg pour un espresso classique), ce qui limite les risques de palpitations ou de nervosité. Les champignons adaptogènes sont reconnus pour leur excellente tolérance digestive. En cas de sensibilité aux champignons ou à la caféine, il est recommandé de commencer par une demi-dose.',
    },
    {
      question: 'Comment utiliser le code promo LMC15 pour Mush N Go ?',
      answer: 'Entrez le code LMC15 lors de votre commande sur le site officiel mushngo.fr. La réduction de 15% sera appliquée automatiquement à votre panier. Ce code est valable sur toutes les tailles de conditionnement (30, 60 ou 90 portions) tant que l\'offre est active sur notre page.',
    },
    {
      question: 'Où acheter Brainstoorm de Mush N Go au meilleur prix ?',
      answer: 'Brainstoorm est disponible exclusivement sur le site officiel mushngo.fr. C\'est le seul canal de distribution autorisé par la marque, ce qui garantit l\'authenticité du produit et les meilleures conditions de prix. Utilisez le code LMC15 pour bénéficier de -15% supplémentaires. Les formats de 60 et 90 portions offrent le meilleur rapport qualité-prix par dose.',
    },
    {
      question: 'Brainstoorm est-il adapté aux personnes sensibles à la caféine ?',
      answer: 'Avec seulement 80 mg de caféine par dose (extrait au CO2), Brainstoorm contient sensiblement moins de caféine qu\'un espresso classique (95-120 mg). Les adaptogènes comme l\'Ashwagandha et la Rhodiola modèrent l\'effet de la caféine, procurant une énergie stable sans le pic ni le crash. Néanmoins, il est déconseillé aux enfants, aux femmes enceintes ou allaitantes, et aux personnes suivant un traitement médical sans avis médical.',
    },
  ],

  tocItems: [
    { id: 'introduction', label: 'Introduction' },
    { id: 'marque', label: 'La marque Mush N Go' },
    { id: 'composition', label: 'Composition détaillée' },
    { id: 'efficacite', label: 'Efficacité et résultats' },
    { id: 'test-30-jours', label: 'Notre test 30 jours' },
    { id: 'avis-clients', label: 'Avis clients' },
    { id: 'prix', label: 'Prix et offres' },
    { id: 'verdict', label: 'Notre verdict' },
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
        'Formule ultra-concentrée : 3475 mg de principes actifs par portion de 8 g',
        'Extraction 12:1 des champignons pour une biodisponibilité maximale',
        'Café bio extrait au CO2 avec seulement 80 mg de caféine',
        'Certifié bio, vegan, sans gluten, sans OGM',
        'Trustpilot 9,7/10 avec plus de 170 avis vérifiés',
      ],
      cons: [
        'Disponible uniquement en ligne sur le site officiel',
        'Ruptures de stock fréquentes dues à la forte demande',
        'Goût cacao-noisette qui peut déplaire aux puristes du café',
      ],
      description: 'Mush N Go révolutionne la consommation de champignons adaptogènes avec une approche résolument moderne et pratique. Brainstoorm est un café aux champignons ultra-concentré à 3475 mg de principes actifs par dose (Lion\'s Mane, Cordyceps, Chaga, Maca, Ashwagandha, Rhodiola). Formule extraite au ratio 12:1, café bio CO2, fabrication française, certifiée bio, vegan et sans gluten. Trustpilot 9,7/10.',
    },
    {
      rank: 2,
      name: 'Super Café - Bonjour Drink',
      brand: 'Bonjour Drink',
      slug: 'bonjour-drink',
      image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/68d7c7d22051cb9faf0ade48_bonjour%20drink%202e%CC%80me%20image.avif',
      brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/68d666ee3daf1b2e78ab7a9a_logo%20Bonjour%20Drink.svg',
      rating: 9.7,
      reviewCount: 320,
      promoCode: 'LMC20',
      promoPercent: 20,
      originalPrice: '39,00 €',
      discountPrice: '31,20 €',
      affiliateLink: 'https://taap.it/bonjour-drink-lmc',
      origin: '🇫🇷 France',
      availability: 'En stock',
      productType: 'Poudre',
      pros: [
        'Formule complète : orge torréfiée + cacao + 2250 mg de champignons adaptogènes',
        'Co-fondée par des experts en santé holistique (Juliette Di Marco & Raphaël Dary)',
        'Coût ramené à seulement 1€ par tasse — l\'un des plus accessibles du marché',
        '100% naturel, vegan, sans additifs, fabriqué en France',
        'Deux déclinaisons : Super Café et Super Cacao pour varier les plaisirs',
      ],
      cons: [
        'Goût d\'orge torréfiée qui peut surprendre les amateurs de café classique',
        'N\'est pas un café au sens strict — alternative sans caféine',
        'Gamme encore limitée à deux produits',
      ],
      description: 'Bonjour Drink est né de la volonté de deux entrepreneurs français passionnés de santé holistique, Juliette Di Marco et Raphaël Dary, qui souhaitaient créer une alternative au café sans ses effets indésirables. Le résultat ? Le Super Café et le Super Cacao, deux boissons innovantes qui réunissent dans une seule tasse les bienfaits de trois champignons adaptogènes exceptionnels : le Lion\'s Mane pour la concentration, le Cordyceps pour l\'énergie physique et le Reishi pour la résistance au stress. Leur formule combine orge torréfiée, cacao et 2250 mg d\'extraits de champignons pour un rituel matinal sain, sans caféine, à seulement 1€ par tasse.',
    },
    {
      rank: 3,
      name: 'Super Café Évolutif - WAKE',
      brand: 'WAKE',
      slug: 'wake-super-cafe',
      image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/697aa86fc6c672a505d8fdeb_Frame%2012.webp',
      brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/692f76928a50c48f82cadc35_logo_wake.avif',
      rating: 8.9,
      reviewCount: 95,
      promoCode: 'LMC',
      promoPercent: 10,
      originalPrice: '19,95 €',
      discountPrice: '17,95 €',
      affiliateLink: 'https://taap.it/wake-super-cafe',
      origin: '🇫🇷 France',
      availability: 'En stock',
      productType: 'Poudre',
      pros: [
        'Prix très accessible : à partir de 17,95€ le sachet',
        'Formule innovante : arabica + orge torréfiée + collagène marin AAA + champignons',
        'Dosage évolutif adaptable selon les besoins et la sensibilité',
        'Marque parisienne avec une approche nutritionnelle moderne',
        'Peu de caféine grâce au mélange arabica + orge',
      ],
      cons: [
        'Nouveau sur le marché — moins de retours clients que les concurrents',
        'Format monoproduit, pas de déclinaison',
        'Collagène marin non adapté aux végétaliens stricts',
      ],
      description: 'Basée à Paris, Wake est née d\'une vision moderne de la nutrition : harmoniser nos besoins physiologiques avec les cycles naturels. Son Super Café est une boisson fonctionnelle innovante qui combine arabica premium, orge torréfiée, collagène marin AAA (1000 Da) et champignons adaptogènes bio (Lion\'s Mane, Cordyceps, Chaga). Le dosage est évolutif pour s\'adapter à votre sensibilité. Prix d\'entrée très accessible à 19,95€.',
    },
    {
      rank: 4,
      name: 'Super Coffee - Drink Dyna',
      brand: 'Drink Dyna',
      slug: 'drink-dyna',
      image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/69697e4bba6d906ecff4fd4e_Frame%201.webp',
      brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/69b2b2c55bedf6616bd8c52b_logo%20dyna.png',
      rating: 8.7,
      reviewCount: 120,
      promoCode: 'LMC',
      promoPercent: 10,
      originalPrice: '24,00 €',
      discountPrice: '21,60 €',
      affiliateLink: 'https://taap.it/Dyna-pack-decouverte-trio',
      origin: '🇫🇷 France',
      availability: 'En stock',
      productType: 'Poudre',
      pros: [
        'Haute dose de 2000 mg d\'extraits concentrés (Lion\'s Mane, KSM-66 Ashwagandha)',
        'Mélange café Arabica premium + adaptogènes pour énergie stable sans crash',
        'Transparence totale sur la composition et les dosages',
        'Pack découverte trio disponible pour tester plusieurs saveurs',
        'Marque française avec une identité forte et moderne',
      ],
      cons: [
        'Gamme de saveurs peut être déroutante au premier abord',
        'Caféine présente (Arabica) — déconseillé aux sensibles',
        'Moins concentré en champignons que Mush N Go (2000 mg vs 3475 mg)',
      ],
      description: 'Dyna réinvente le rituel matinal avec son Super Coffee, une fusion intelligente entre café Arabica premium et adaptogènes. Cette formule instantanée offre une énergie stable et une concentration décuplée sans le crash habituel. Elle combine 2000 mg d\'extraits concentrés de Lion\'s Mane et d\'Ashwagandha KSM-66. Formules disponibles en versions cacao, malt et matcha pour varier les rituels. Pack découverte trio à 24€.',
    },
    {
      rank: 5,
      name: 'Boisson Boost - French Mush',
      brand: 'French Mush',
      slug: 'french-mush',
      image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/68df9c4752b86513fd872399_BOOST_French_Mush.avif',
      brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/68df99d27d2df19761dbfa26_Group_1.svg',
      rating: 8.6,
      reviewCount: 85,
      promoCode: 'LMC',
      promoPercent: 12,
      originalPrice: '32,00 €',
      discountPrice: '28,16 €',
      affiliateLink: 'https://taap.it/french-mush-boisson-boost',
      origin: '🇫🇷 France',
      availability: 'En stock',
      productType: 'Poudre',
      pros: [
        'La référence française des champignons adaptogènes bio fabriqués en France',
        'Gamme complète : Lion\'s Mane, Cordyceps, Chaga, Reishi et Shiitaké',
        'Certifié biologique, extractions concentrées de haute qualité',
        'Poudres et gélules ultra-concentrées pour une flexibilité d\'utilisation',
        'Prix compétitif pour la qualité des extraits français',
      ],
      cons: [
        'Marque généraliste — pas un produit dédié "café"',
        'Moins de visibilité marketing que les concurrents',
        'Boisson Boost moins goûteuse que les formulations cacao/café',
      ],
      description: 'French Mush démocratise l\'accès aux champignons fonctionnels avec une gamme complète de champignons adaptogènes biologiques fabriqués en France : Lion\'s Mane pour la concentration, Cordyceps pour l\'énergie, Chaga pour les défenses immunitaires, Reishi et Shiitaké. Poudres et gélules ultra-concentrées certifiées bio. Leur boisson Boost combine plusieurs extraits pour un effet synergique complet.',
    },
    {
      rank: 6,
      name: 'Not Coffee - Clearly',
      brand: 'Clearly',
      slug: 'clearly-not-coffee',
      image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/68dfb594d12ef2866803e9e1_Clearly.avif',
      brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/68dfaffbcd9575da42dea912_67604f816f6f25a217f35605_Clearly_-_Dark_Blue_150x.avif',
      rating: 8.8,
      reviewCount: 65,
      promoCode: 'LMC',
      promoPercent: 15,
      originalPrice: '30,00 €',
      discountPrice: '25,50 €',
      affiliateLink: 'https://taap.it/clearly-not-coffee',
      origin: '🇳🇱 Pays-Bas',
      availability: 'En stock',
      productType: 'Poudre',
      pros: [
        'Marque néerlandaise certifiée BIO avec ingrédients premium sourcés mondialement',
        'Production contrôlée aux Pays-Bas avec transparence totale',
        'Formule conçue pour l\'énergie, la clarté mentale et la digestion',
        'Approche holistique : combat brouillard mental, fatigue et ballonnements',
        'Bonne note Trustpilot et communauté fidèle',
      ],
      cons: [
        'Origine européenne (Pays-Bas) — pas fabriqué en France',
        'Marque moins connue sur le marché français',
        'Prix légèrement supérieur à la moyenne pour un format standard',
      ],
      description: 'Clearly est une marque néerlandaise certifiée BIO qui place la qualité au rang #1. Fondée par des passionnés confrontés au brouillard mental, à la fatigue chronique et aux ballonnements, la marque a créé une formule qui combine champignons adaptogènes et superaliments pour l\'énergie, la clarté mentale et la digestion. Ingrédients sourcés chez les meilleurs producteurs mondiaux, production contrôlée aux Pays-Bas, transparence totale sur la composition.',
    },
  ],
};

export default config;
