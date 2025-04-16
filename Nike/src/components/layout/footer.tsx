import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">FIND A STORE</h3>
            <ul className="space-y-2">
              <li><Link to="/store-locator" className="text-gray-400 hover:text-white">Store Locator</Link></li>
              <li><Link to="/nike-app" className="text-gray-400 hover:text-white">Nike App</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">GET HELP</h3>
            <ul className="space-y-2">
              <li><Link to="/help/order-status" className="text-gray-400 hover:text-white">Order Status</Link></li>
              <li><Link to="/help/shipping" className="text-gray-400 hover:text-white">Shipping & Delivery</Link></li>
              <li><Link to="/help/returns" className="text-gray-400 hover:text-white">Returns</Link></li>
              <li><Link to="/help/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">ABOUT NIKE</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white">News</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/nike" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/nike" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/nike" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-sm text-gray-400">
          <p>&copy; 2024 Nike, Inc. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}