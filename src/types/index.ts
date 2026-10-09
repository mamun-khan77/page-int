export type GarageCategorySlug =
  | 'adas-calibration'
  | 'detection-tool'
  | 'wheel-equipment'
  | 'maintenance-equipment'
  | 'lifting-equipment';

export type EVCategorySlug =
  | '2-wheeler'
  | '3-wheeler'
  | 'ev-battery'
  | 'ev-motor'
  | 'ev-controller'
  | 'ev-charger'
  | 'ev-spare-parts'
  | 'ev-accessories';

export type CategorySlug = GarageCategorySlug | EVCategorySlug;

export type ProductType = 'garage-equipment' | 'electric-vehicle';

export type VehicleType = '2-wheeler' | '3-wheeler' | 'component' | 'accessory';

export type Availability = 'Available' | 'Out of Stock' | 'Coming Soon';

export interface Specification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: CategorySlug;
  categoryName: string;
  brand: string;
  image: string;
  gallery: string[];
  description: string;
  shortDescription: string;
  specifications: Specification[];
  features: string[];
  applications: string[];
  availability: Availability;
  featured: boolean;
  trending: boolean;
  popular: boolean;

  // Extended EV Architecture fields
  productType?: ProductType;
  isEV?: boolean;
  vehicleType?: VehicleType;
  subcategory?: string;
  price?: string;
  relatedProducts?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: CategorySlug;
  description: string;
  image: string;
  icon: string;
  productType?: ProductType;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  designation: string;
  company: string;
  rating: number;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  excerpt: string;
  content: string[];
  image: string;
  readTime: string;
}

export interface ValueProp {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}
