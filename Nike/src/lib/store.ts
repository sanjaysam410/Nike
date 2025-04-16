import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  total: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const items = get().items;
        const existingItem = items.find((i) => i.id === item.id);
        if (existingItem) {
          set({
            items: items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({ items: [...items, { ...item, quantity: 1 }] });
        }
      },
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        })),
      clearCart: () => set({ items: [] }),
      total: () =>
        get().items.reduce((total, item) => total + item.price * item.quantity, 0),
    }),
    {
      name: 'cart-storage',
    }
  )
);

export interface OrderDetails {
  id: string;
  status: string;
  createdAt: string;
  trackingNumber: string;
  estimatedDelivery: string;
  currentLocation: string;
  updates: Array<{ date: string; status: string }>;
  shippingAddress: string;
  items: CartItem[];
  total: number;
}

// Mock order database with persistent storage using zustand
export const useOrderStore = create<{
  orders: OrderDetails[];
  addOrder: (order: OrderDetails) => void;
  getOrder: (orderId: string) => OrderDetails | undefined;
}>()(
  persist(
    (set, get) => ({
      orders: [],
      addOrder: (order) => set((state) => ({ orders: [order, ...state.orders] })),
      getOrder: (orderId) => get().orders.find((order) => order.id === orderId),
    }),
    {
      name: 'order-storage',
    }
  )
);

// Generate random order details
export const generateOrderDetails = (orderId: string): OrderDetails => {
  const statuses = ['Processing', 'Shipped', 'Out for Delivery', 'Delivered'];
  const locations = [
    'Local Distribution Center',
    'Regional Sorting Facility',
    'Local Delivery Hub',
    'Out for Delivery',
    'Delivered'
  ];
  
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  const randomLocation = locations[Math.floor(Math.random() * locations.length)];
  
  const today = new Date();
  const deliveryDate = new Date(today.setDate(today.getDate() + Math.floor(Math.random() * 7) + 1));
  
  const trackingNumber = `NK${Math.random().toString(36).substring(2, 10).toUpperCase()}`;

  const updates = [
    { date: new Date(Date.now() - 86400000 * 2).toISOString(), status: 'Order Placed' },
    { date: new Date(Date.now() - 86400000).toISOString(), status: 'Order Confirmed' },
    { date: new Date().toISOString(), status: randomStatus }
  ];

  if (randomStatus === 'Shipped') {
    updates.push({ 
      date: new Date(Date.now() + 86400000).toISOString(),
      status: 'Package in Transit'
    });
  }

  if (randomStatus === 'Delivered') {
    updates.push(
      { 
        date: new Date(Date.now() - 86400000 * 2).toISOString(),
        status: 'Shipped'
      },
      { 
        date: new Date(Date.now() - 86400000).toISOString(),
        status: 'Out for Delivery'
      },
      { 
        date: new Date().toISOString(),
        status: 'Delivered'
      }
    );
  }

  return {
    id: orderId,
    status: randomStatus,
    createdAt: new Date().toISOString(),
    trackingNumber,
    estimatedDelivery: deliveryDate.toISOString().split('T')[0],
    currentLocation: randomLocation,
    updates: updates.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
    shippingAddress: '123 Nike Street, Sportstown, ST 12345',
    items: [],
    total: 0
  };
};

export const getOrderDetails = (orderId: string) => {
  const orderStore = useOrderStore.getState();
  let order = orderStore.getOrder(orderId);
  
  if (!order) {
    order = generateOrderDetails(orderId);
    orderStore.addOrder(order);
  }
  
  return order;
};

export const createOrder = (items: CartItem[], total: number, shippingAddress: string) => {
  const orderId = `NK${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
  const orderDetails = generateOrderDetails(orderId);
  orderDetails.items = items;
  orderDetails.total = total;
  orderDetails.shippingAddress = shippingAddress;
  
  const orderStore = useOrderStore.getState();
  orderStore.addOrder(orderDetails);
  
  return orderId;
};