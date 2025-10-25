import { Product, Review } from '../types/product';

export const products: Product[] = [
  {
    id: 'laptop-001',
    name: 'Professional Ultrabook Pro 15',
    category: 'Electronics',
    brand: 'TechMaster',
    price: 1299.99,
    originalPrice: 1499.99,
    rating: 4.7,
    reviews: 234,
    description: 'High-performance ultrabook perfect for professionals and students. Features the latest processor, stunning display, and all-day battery life.',
    features: [
      '15.6" 4K OLED Display',
      'Intel Core i7 12th Gen',
      '16GB RAM, 512GB SSD',
      'All-day battery life (12+ hours)',
      'Thunderbolt 4 ports',
      'Backlit keyboard'
    ],
    images: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
      'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800'
    ],
    inStock: true,
    tags: ['laptop', 'ultrabook', 'professional', 'featured']
  },
  {
    id: 'headphone-001',
    name: 'Wireless Noise-Canceling Headphones',
    category: 'Electronics',
    brand: 'AudioPro',
    price: 299.99,
    originalPrice: 349.99,
    rating: 4.8,
    reviews: 567,
    description: 'Premium wireless headphones with industry-leading noise cancellation. Perfect for travel, work, and music enthusiasts.',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Premium sound quality',
      'Comfortable over-ear design',
      'Bluetooth 5.0',
      'Foldable design with case'
    ],
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800',
      'https://images.unsplash.com/photo-1545127398-14699f92334b?w=800'
    ],
    inStock: true,
    tags: ['headphones', 'audio', 'wireless', 'featured']
  },
  {
    id: 'watch-001',
    name: 'Smart Fitness Watch Pro',
    category: 'Wearables',
    brand: 'FitTech',
    price: 249.99,
    rating: 4.6,
    reviews: 892,
    description: 'Advanced fitness tracker with heart rate monitoring, GPS, and smart notifications. Your perfect workout companion.',
    features: [
      'Heart rate & SpO2 monitoring',
      'Built-in GPS',
      'Water resistant (50m)',
      '7-day battery life',
      'Sleep tracking',
      'Multiple sport modes'
    ],
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800'
    ],
    inStock: true,
    tags: ['smartwatch', 'fitness', 'wearable', 'featured']
  },
  {
    id: 'camera-001',
    name: 'Mirrorless Camera Kit',
    category: 'Electronics',
    brand: 'PhotoPro',
    price: 1899.99,
    rating: 4.9,
    reviews: 345,
    description: 'Professional mirrorless camera with 24MP sensor and 4K video recording. Includes versatile 18-55mm lens.',
    features: [
      '24.2MP APS-C sensor',
      '4K video recording',
      'In-body stabilization',
      'Fast autofocus system',
      'Weather-sealed body',
      'Includes 18-55mm lens'
    ],
    images: [
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800',
      'https://images.unsplash.com/photo-1606980707229-7d0c4a909c2c?w=800',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800'
    ],
    inStock: true,
    tags: ['camera', 'photography', 'professional']
  },
  {
    id: 'phone-001',
    name: 'Smartphone Pro Max',
    category: 'Electronics',
    brand: 'MobileTech',
    price: 999.99,
    rating: 4.7,
    reviews: 1234,
    description: 'Flagship smartphone with stunning display, powerful performance, and exceptional camera system.',
    features: [
      '6.7" AMOLED display',
      'Triple camera system',
      '256GB storage',
      '5G connectivity',
      'All-day battery',
      'Fast wireless charging'
    ],
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
      'https://images.unsplash.com/photo-1592286927505-b04b6d40cff1?w=800',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800'
    ],
    inStock: true,
    tags: ['smartphone', 'mobile', 'featured']
  },
  {
    id: 'tablet-001',
    name: 'Pro Tablet 12.9"',
    category: 'Electronics',
    brand: 'TechMaster',
    price: 799.99,
    rating: 4.8,
    reviews: 456,
    description: 'Powerful tablet for creativity and productivity. Perfect for artists, students, and professionals.',
    features: [
      '12.9" Liquid Retina display',
      'Stylus support',
      '128GB storage',
      'All-day battery',
      'Desktop-class apps',
      'Quad speakers'
    ],
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800',
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800',
      'https://images.unsplash.com/photo-1585790050230-5dd28404f38a?w=800'
    ],
    inStock: true,
    tags: ['tablet', 'productivity', 'creativity']
  },
  {
    id: 'speaker-001',
    name: 'Smart Speaker Home',
    category: 'Electronics',
    brand: 'AudioPro',
    price: 99.99,
    rating: 4.5,
    reviews: 789,
    description: 'Voice-controlled smart speaker with rich sound and smart home integration.',
    features: [
      '360° sound',
      'Voice assistant built-in',
      'Smart home control',
      'Multi-room audio',
      'Compact design',
      'WiFi & Bluetooth'
    ],
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800',
      'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=800',
      'https://images.unsplash.com/photo-1598331668193-a2f45d2b89d3?w=800'
    ],
    inStock: true,
    tags: ['speaker', 'smart home', 'audio']
  },
  {
    id: 'keyboard-001',
    name: 'Mechanical Gaming Keyboard RGB',
    category: 'Accessories',
    brand: 'GameGear',
    price: 149.99,
    rating: 4.6,
    reviews: 543,
    description: 'Professional mechanical keyboard with customizable RGB lighting and premium switches.',
    features: [
      'Mechanical switches',
      'Customizable RGB',
      'Programmable keys',
      'Aluminum frame',
      'Detachable cable',
      'Anti-ghosting'
    ],
    images: [
      'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800',
      'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800'
    ],
    inStock: true,
    tags: ['keyboard', 'gaming', 'accessories']
  },
  {
    id: 'mouse-001',
    name: 'Wireless Ergonomic Mouse',
    category: 'Accessories',
    brand: 'TechMaster',
    price: 79.99,
    rating: 4.7,
    reviews: 321,
    description: 'Comfortable ergonomic mouse designed for all-day use with precision tracking.',
    features: [
      'Ergonomic design',
      'Wireless connectivity',
      '6-month battery life',
      'Precision sensor',
      'Customizable buttons',
      'Works on any surface'
    ],
    images: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800',
      'https://images.unsplash.com/photo-1563297007-0686b7003af7?w=800',
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800'
    ],
    inStock: true,
    tags: ['mouse', 'ergonomic', 'accessories']
  },
  {
    id: 'backpack-001',
    name: 'Tech Laptop Backpack',
    category: 'Accessories',
    brand: 'TravelGear',
    price: 89.99,
    rating: 4.5,
    reviews: 234,
    description: 'Durable laptop backpack with multiple compartments and USB charging port.',
    features: [
      'Fits 15.6" laptops',
      'USB charging port',
      'Water resistant',
      'Anti-theft design',
      'Comfortable straps',
      'Multiple pockets'
    ],
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800',
      'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=800'
    ],
    inStock: true,
    tags: ['backpack', 'travel', 'accessories']
  },
  {
    id: 'charger-001',
    name: 'Fast Wireless Charger',
    category: 'Accessories',
    brand: 'PowerTech',
    price: 39.99,
    rating: 4.4,
    reviews: 456,
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    features: [
      '15W fast charging',
      'Qi-certified',
      'LED indicator',
      'Non-slip surface',
      'Overcharge protection',
      'Compact design'
    ],
    images: [
      'https://images.unsplash.com/photo-1591290619762-d4c3b8e7e3e3?w=800',
      'https://images.unsplash.com/photo-1583571597821-2b7e2a0e0b97?w=800',
      'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=800'
    ],
    inStock: true,
    tags: ['charger', 'wireless', 'accessories']
  },
  {
    id: 'cable-001',
    name: 'USB-C Cable 3-Pack',
    category: 'Accessories',
    brand: 'PowerTech',
    price: 19.99,
    rating: 4.6,
    reviews: 678,
    description: 'Durable USB-C cables in multiple lengths for all your charging needs.',
    features: [
      '3ft, 6ft, 10ft lengths',
      'Fast charging support',
      'Data transfer 480Mbps',
      'Reinforced connectors',
      'Universal compatibility',
      'Tangle-free design'
    ],
    images: [
      'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=800',
      'https://images.unsplash.com/photo-1591290619792-d4c3b8e7e8e3?w=800',
      'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800'
    ],
    inStock: true,
    tags: ['cable', 'usb-c', 'accessories']
  }
];

export const reviews: Review[] = [
  {
    id: 'rev-001',
    productId: 'laptop-001',
    author: 'John Doe',
    rating: 5,
    date: '2025-10-15',
    title: 'Amazing laptop for work and play',
    comment: 'This laptop exceeded my expectations. The display is stunning and the performance is incredible. Perfect for my daily work and occasional gaming.',
    verified: true
  },
  {
    id: 'rev-002',
    productId: 'laptop-001',
    author: 'Sarah Smith',
    rating: 4,
    date: '2025-10-10',
    title: 'Great value for money',
    comment: 'Very impressed with the build quality and performance. Battery life is as advertised. Only minor complaint is the weight.',
    verified: true
  },
  {
    id: 'rev-003',
    productId: 'headphone-001',
    author: 'Mike Johnson',
    rating: 5,
    date: '2025-10-20',
    title: 'Best headphones I\'ve owned',
    comment: 'The noise cancellation is phenomenal. Sound quality is top-notch. Comfortable for long listening sessions.',
    verified: true
  },
  {
    id: 'rev-004',
    productId: 'headphone-001',
    author: 'Emily Chen',
    rating: 5,
    date: '2025-10-18',
    title: 'Perfect for travel',
    comment: 'I use these on every flight. The ANC blocks out all the airplane noise. Battery lasts the entire trip.',
    verified: true
  },
  {
    id: 'rev-005',
    productId: 'watch-001',
    author: 'David Lee',
    rating: 4,
    date: '2025-10-12',
    title: 'Great fitness tracker',
    comment: 'Accurate heart rate monitoring and GPS. Love the sleep tracking feature. Would give 5 stars if the battery lasted longer.',
    verified: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};

export const getReviewsByProductId = (productId: string): Review[] => {
  return reviews.filter(r => r.productId === productId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.tags.includes('featured'));
};

export const getCategories = (): string[] => {
  return Array.from(new Set(products.map(p => p.category)));
};

export const getBrands = (): string[] => {
  return Array.from(new Set(products.map(p => p.brand)));
};
