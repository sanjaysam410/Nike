import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useCartStore, type CartItem } from '@/lib/store';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductsByCategory } from '@/lib/products';

interface CategoryPageProps {
  category: 'men' | 'women' | 'kids' | 'sale';
}

const categoryData = {
  men: {
    title: "Men's Collection",
    description: "Performance and style for every athlete",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
  },
  women: {
    title: "Women's Collection",
    description: "Designed for every move",
    image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
  },
  kids: {
    title: "Kids' Collection",
    description: "Fun and comfort for young athletes",
    image: "https://images.unsplash.com/photo-1555274175-75f4056dfd05?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
  },
  sale: {
    title: "Sale",
    description: "Great deals on Nike gear",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
  }
};

export function CategoryPage({ category }: CategoryPageProps) {
  const data = categoryData[category];
  const products = getProductsByCategory(category);
  const addItem = useCartStore((state) => state.addItem);
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string }>({});

  const handleAddToCart = (product: any) => {
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize && product.sizes) {
      alert('Please select a size');
      return;
    }

    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      size: selectedSize
    };
    
    addItem(cartItem);
    alert('Item added to cart!');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${data.image})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">{data.title}</h1>
            <p className="text-xl mb-6">{data.description}</p>
            <Button size="lg">Shop Now</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`}>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <div className="flex items-center space-x-2">
                    <p className="text-gray-900">${product.price}</p>
                    {product.originalPrice && (
                      <p className="text-gray-500 line-through">${product.originalPrice}</p>
                    )}
                  </div>
                </div>
              </Link>
              {product.sizes && (
                <div className="mt-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Size
                  </label>
                  <select
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                    value={selectedSizes[product.id] || ''}
                    onChange={(e) => setSelectedSizes({
                      ...selectedSizes,
                      [product.id]: e.target.value
                    })}
                  >
                    <option value="">Select Size</option>
                    {product.sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <Button 
                variant="outline" 
                className="mt-4 w-full"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}