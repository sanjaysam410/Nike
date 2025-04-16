import { useParams } from 'react-router-dom';
import { getOrderDetails } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Package, Truck, CheckCircle } from 'lucide-react';

export function OrderTrackingPage() {
  const { orderId } = useParams<{ orderId: string }>();
  const orderDetails = orderId ? getOrderDetails(orderId) : null;

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Order Not Found</h1>
            <p className="text-gray-600">Please check your order ID and try again.</p>
          </div>
        </div>
      </div>
    );
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Processing':
        return <Package className="h-6 w-6" />;
      case 'Shipped':
      case 'Out for Delivery':
        return <Truck className="h-6 w-6" />;
      case 'Delivered':
        return <CheckCircle className="h-6 w-6" />;
      default:
        return <Package className="h-6 w-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Order Tracking</h1>
          
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-600">Order ID</p>
                <p className="font-medium">{orderDetails.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Order Date</p>
                <p className="font-medium">
                  {new Date(orderDetails.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Tracking Number</p>
                <p className="font-medium">{orderDetails.trackingNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Estimated Delivery</p>
                <p className="font-medium">{orderDetails.estimatedDelivery}</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Order Status</h2>
              <div className="relative">
                <div className="absolute left-2.5 top-0 h-full w-0.5 bg-gray-200"></div>
                {orderDetails.updates.map((update, index) => (
                  <div key={index} className="relative pl-8 pb-8 last:pb-0">
                    <div className="absolute left-0 top-2 w-5 h-5 bg-black rounded-full flex items-center justify-center">
                      {getStatusIcon(update.status)}
                    </div>
                    <div>
                      <p className="font-medium">{update.status}</p>
                      <p className="text-sm text-gray-600">
                        {new Date(update.date).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Current Location</h2>
              <p className="text-gray-700">{orderDetails.currentLocation}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
              <p className="text-gray-700">{orderDetails.shippingAddress}</p>
            </div>

            {orderDetails.items.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold mb-4">Order Items</h2>
                <div className="divide-y">
                  {orderDetails.items.map((item, index) => (
                    <div key={index} className="py-4 flex items-center">
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
                  <div className="pt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>${orderDetails.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="text-center">
            <Button onClick={() => window.print()} variant="outline">
              Print Order Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}