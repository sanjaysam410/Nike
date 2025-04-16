import { ShoppingBag, User, LogOut, Package, Settings } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { CartDropdown } from '../cart/CartDropdown';
import { useCartStore } from '@/lib/store';

export function Header() {
  const navigate = useNavigate();
  const items = useCartStore((state) => state.items);

  const handleLogout = () => {
    // TODO: Implement logout logic
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">NIKE</span>
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link to="/new" className="text-sm font-medium hover:text-gray-600">New & Featured</Link>
          <Link to="/men" className="text-sm font-medium hover:text-gray-600">Men</Link>
          <Link to="/women" className="text-sm font-medium hover:text-gray-600">Women</Link>
          <Link to="/kids" className="text-sm font-medium hover:text-gray-600">Kids</Link>
          <Link to="/sale" className="text-sm font-medium hover:text-gray-600">Sale</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative group">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex items-center space-x-2"
            >
              <User className="h-4 w-4" />
              <span className="hidden lg:inline">Account</span>
            </Button>
            <div className="absolute right-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
              <div className="bg-white rounded-lg shadow-xl z-50 py-2">
                <div className="px-4 py-3 border-b">
                  <p className="text-sm font-medium text-gray-900">Guest User</p>
                  <p className="text-sm text-gray-500">Sign in to your account</p>
                </div>
                <div className="py-1">
                  <Link
                    to="/login"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <User className="h-4 w-4 mr-3" />
                    Sign In
                  </Link>
                  <Link
                    to="/orders"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <Package className="h-4 w-4 mr-3" />
                    Orders
                  </Link>
                  <Link
                    to="/settings"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <Settings className="h-4 w-4 mr-3" />
                    Settings
                  </Link>
                  <button
                    className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4 mr-3" />
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <Button
              variant="outline"
              size="sm"
              className="relative flex items-center space-x-2"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="hidden lg:inline">Cart</span>
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Button>
            <div className="absolute right-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
              <CartDropdown />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}