import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { Cart } from './pages/Cart';
import { Toaster } from 'sonner@2.0.3';

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Catalog />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Layout>
          <Toaster position="top-center" richColors />
        </Router>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
