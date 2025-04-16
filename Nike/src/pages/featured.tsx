import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function FeaturedPage() {
  const products = [
    {
      id: 1,
      name: "Nike Air Force 1 '07",
      price: "$100",
      image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Nike Dunk Low",
      price: "$110",
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Nike Air Max 270",
      price: "$150",
      image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">New Arrivals</h1>
            <p className="text-xl mb-6">Discover the latest Nike innovations</p>
            <Button size="lg">Shop Collection</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
                <Button variant="outline" className="mt-2">
                  Add to Cart
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}