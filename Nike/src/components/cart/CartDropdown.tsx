import { ShoppingBag, X } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

export function CartDropdown() {
  const { items, removeItem, updateQuantity, total } = useCartStore();

  return (
    <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl z-50">
      <div className="p-4 border-b">
        <h3 className="font-semibold">Shopping Cart ({items.length})</h3>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {items.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            Your cart is empty
          </div>
        ) : (
          <div className="divide-y">
            {items.map((item) => (
              <div key={item.id} className="p-4 flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  {item.size && (
                    <p className="text-gray-600 text-sm">Size: {item.size}</p>
                  )}
                  <div className="flex items-center space-x-2 mt-2">
                    <select
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="border rounded p-1"
                    >
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {items.length > 0 && (
        <div className="p-4 border-t">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total:</span>
            <span className="font-semibold">${total().toFixed(2)}</span>
          </div>
          <Link to="/checkout">
            <Button className="w-full">Checkout</Button>
          </Link>
        </div>
      )}
    </div>
  );
}