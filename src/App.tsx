/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Cambiamos BrowserRouter por HashRouter aquí:
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import PharmacyPage from './pages/PharmacyPage';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/farmacia" element={<PharmacyPage />} />
        </Routes>
        <CartDrawer />
      </Router>
    </CartProvider>
  );
}