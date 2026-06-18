export interface Product {
  id: string;
  brand: string;
  name: string;
  price: string;
  priceNum: number;
  image: string;
  category: 'NIKE' | 'ADIDAS' | 'VANS' | 'PUMA' | 'SOLOMON';
  isNew?: boolean;
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    brand: 'PUMA',
    name: 'Speedcat OG',
    price: '900K',
    priceNum: 900000,
    image: '/assets/products/puma-speedcat.png',
    category: 'PUMA',
    isNew: true,
    isFeatured: true,
  },
  {
    id: '2',
    brand: 'ADIDAS',
    name: 'Samba OG',
    price: '900K',
    priceNum: 900000,
    image: '/assets/products/adidas-samba.png',
    category: 'ADIDAS',
    isNew: true,
    isFeatured: true,
  },
  {
    id: '3',
    brand: 'NIKE',
    name: 'Dunk Low',
    price: '900K',
    priceNum: 900000,
    image: '/assets/products/nike-dunk.png',
    category: 'NIKE',
    isNew: true,
    isFeatured: true,
  },
  {
    id: '4',
    brand: 'VANS',
    name: 'Old Skool',
    price: '750K',
    priceNum: 750000,
    image: '/assets/products/vans-oldskool.png',
    category: 'VANS',
    isNew: false,
  },
  {
    id: '5',
    brand: 'SOLOMON',
    name: 'XT-6',
    price: '1.1JT',
    priceNum: 1100000,
    image: '/assets/products/salomon-xt6.png',
    category: 'SOLOMON',
    isNew: false,
  },
];

export const brands = ['NIKE', 'ADIDAS', 'VANS', 'PUMA', 'SOLOMON'] as const;
export type BrandFilter = 'ALL' | typeof brands[number];
