export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  images: string[];
  sizes: string[];
  colors: string[];
  category: string;
  subcategory: string;
  featured?: boolean;
}