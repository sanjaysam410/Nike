import { Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useOrderStore } from '@/lib/store';

export function OrdersPage() {
  const orders = useOrderStore((state) => state.orders);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">My Orders</h1>
          
          {orders.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <Package className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <h2 className="text-xl font-semibold mb-2">No orders yet</h2>
              <p className="text-gray-600 mb-4">When you place an order, it will appear here.</p>
              <Link to="/" className="text-black font-medium hover:underline">
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Order #{order.id}</p>
                        <p className="text-sm text-gray-600">
                          Placed on {new Date(order.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${order.total.toFixed(2)}</p>
                        <p className={`text-sm ${
                          order.status === 'Delivered' ? 'text-green-600' : 
                          order.status === 'Processing' ? 'text-blue-600' :
                          'text-orange-600'
                        }`}>
                          {order.status}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4 overflow-x-auto pb-2">
                      {order.items.map((item, index) => (
                        <div key={index} className="w-20 flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-20 object-cover rounded"
                          />
                          <p className="text-xs text-gray-600 mt-1 truncate">{item.name}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 flex justify-between items-center">
                      <Link
                        to={`/order-tracking/${order.id}`}
                        className="text-sm font-medium hover:underline"
                      >
                        Track Order
                      </Link>
                      <div className="text-sm text-gray-600">
                        <span className="mr-2">Tracking #:</span>
                        <span className="font-medium">{order.trackingNumber}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}