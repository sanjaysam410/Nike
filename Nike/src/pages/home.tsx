import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Just Do It</h1>
            <p className="text-xl mb-8">Gear up with the latest Nike innovations for your best run yet.</p>
            <Link to="/new">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Trending Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Nike Air Max",
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                price: "$150",
                link: "/new"
              },
              {
                title: "Nike Zoom",
                image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                price: "$130",
                link: "/new"
              },
              {
                title: "Nike Free Run",
                image: "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                price: "$120",
                link: "/new"
              }
            ].map((product, index) => (
              <Link to={product.link} key={index} className="group cursor-pointer">
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium">{product.title}</h3>
                  <p className="text-gray-600">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Men', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', link: '/men' },
              { name: 'Women', image: 'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', link: '/women' },
              { name: 'Kids', image: 'https://images.unsplash.com/photo-1555274175-75f4056dfd05?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', link: '/kids' },
              { name: 'Sale', image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', link: '/sale' }
            ].map((category, index) => (
              <Link
                to={category.link}
                key={index}
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}