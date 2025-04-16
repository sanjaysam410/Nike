import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore, createOrder } from '@/lib/store';
import { Button } from '@/components/ui/button';

export function CheckoutPage() {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCartStore();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const shippingAddress = `${formData.address}, ${formData.city}, ${formData.state} ${formData.zipCode}, ${formData.country}`;
    const orderId = createOrder(items, total(), shippingAddress);
    clearCart();
    navigate(`/order-tracking/${orderId}`);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Add some items to your cart to proceed with checkout.</p>
            <Button onClick={() => navigate('/')}>Continue Shopping</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="divide-y">
              {items.map((item) => (
                <div key={item.id} className="py-4 flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 object-cover rounded"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    {item.size && <p className="text-gray-600">Size: {item.size}</p>}
                  </div>
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>${total().toFixed(2)}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full border rounded-md p-2"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full border rounded-md p-2"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Address</label>
                <input
                  type="text"
                  required
                  className="w-full border rounded-md p-2"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">City</label>
                <input
                  type="text"
                  required
                  className="w-full border rounded-md p-2"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">State</label>
                <input
                  type="text"
                  required
                  className="w-full border rounded-md p-2"
                  value={formData.state}
                  onChange={(e) =>
                    setFormData({ ...formData, state: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">ZIP Code</label>
                <input
                  type="text"
                  required
                  className="w-full border rounded-md p-2"
                  value={formData.zipCode}
                  onChange={(e) =>
                    setFormData({ ...formData, zipCode: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Country</label>
                <input
                  type="text"
                  required
                  className="w-full border rounded-md p-2"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                />
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-4 mt-8">Payment Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Card Number</label>
                <input
                  type="text"
                  required
                  placeholder="1234 5678 9012 3456"
                  className="w-full border rounded-md p-2"
                  value={formData.cardNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, cardNumber: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Expiry Date</label>
                <input
                  type="text"
                  required
                  placeholder="MM/YY"
                  className="w-full border rounded-md p-2"
                  value={formData.expiry}
                  onChange={(e) =>
                    setFormData({ ...formData, expiry: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">CVV</label>
                <input
                  type="text"
                  required
                  placeholder="123"
                  className="w-full border rounded-md p-2"
                  value={formData.cvv}
                  onChange={(e) =>
                    setFormData({ ...formData, cvv: e.target.value })
                  }
                />
              </div>
            </div>

            <Button type="submit" className="w-full mt-8">
              Place Order (${total().toFixed(2)})
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}