import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/header';
import { Footer } from './components/layout/footer';
import { ChatBot } from './components/chat/ChatBot';
import { HomePage } from './pages/home';
import { FeaturedPage } from './pages/featured';
import { CategoryPage } from './pages/category';
import { ProductPage } from './pages/product/[id]';
import { CheckoutPage } from './pages/checkout';
import { OrderTrackingPage } from './pages/order-tracking';
import { LoginPage } from './pages/profile/login';
import { SettingsPage } from './pages/profile/settings';
import { OrdersPage } from './pages/profile/orders';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<FeaturedPage />} />
            <Route path="/men" element={<CategoryPage category="men" />} />
            <Route path="/women" element={<CategoryPage category="women" />} />
            <Route path="/kids" element={<CategoryPage category="kids" />} />
            <Route path="/sale" element={<CategoryPage category="sale" />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-tracking/:orderId" element={<OrderTrackingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/orders" element={<OrdersPage />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;