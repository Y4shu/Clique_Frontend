import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProfilePage from './pages/ProfilePage';
import WorkWithUsPage from './pages/WorkWithUsPage';
import WishlistPage from './pages/WishlistPage';
import OrdersPage from './pages/OrdersPage';
import SideMenu from './pages/SideMenu';
import ContactPage from './pages/ContactPage';
import FooterSection from './pages/FooterSection';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DisclosurePage from './pages/DisclosurePage';
import OffersPage from './pages/OffersPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import ShippingPage from './pages/ShippingPage';
import SitemapPage from './pages/SiteMapPage';
import EditProfilePage from './pages/EditProfilePage';
import wool_coat from './assets/wool coat.png';
import leather_jacket from './assets/leather jacket.png';
import scarf from './assets/scarf.png';
import gown from './assets/gown.png';
import pearlbag from './assets/pearl bag.png';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [cartItems, setCartItems] = React.useState([
    {
      id: 1,
      name: "Premium Leather Jacket",
      price: 299.99,
      quantity: 1,
      image: {leather_jacket},
      size: "M",
      color: "Charcoal Black"
    },
    {
      id: 2,
      name: "Scandavian Silk Scarf",
      price: 89.99,
      quantity: 2,
      image: {scarf},
      size: "One Size",
      color: "Blue Floral Print"
    },
    {
      id: 3,
      name: "Noven Wool Coat",
      price: 449.99,
      quantity: 1,
      image: {wool_coat},
      size: "L",
      color: "Burnt Butter"
    }
  ]);

  const [wishlistItems, setWishlistItems] = React.useState([
    {
      id: 4,
      name: "Fairy Evening Gown",
      price: 199.99,
      image: {gown},
      size: "M",
      color: "Ruby Red",
      inStock: true
    },
    {
      id: 5,
      name: "Pearl Cluth Bag",
      price: 299.99,
      image: {pearlbag},
      size: "One Size",
      color: "Pearly Wihte",
      inStock: true
    },
    {
      id: 6,
      name: "TearDrop Pearl Necklace",
      price: 79.99,
      image: {teardroppearlnecklace},
      size: "One Size",
      color: "Gold",
      inStock: true
    }
  ]);

  const moveToCart = (wishlistItem) => {
    const existingCartItem = cartItems.find(item => item.id === wishlistItem.id);
    
    if (existingCartItem) {
      setCartItems(cartItems.map(item => 
        item.id === wishlistItem.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      const cartItem = {
        ...wishlistItem,
        quantity: 1
      };
      setCartItems([...cartItems, cartItem]);
    }
    
    setWishlistItems(wishlistItems.filter(item => item.id !== wishlistItem.id));
  };

  return (
    <Router>
      <div>
      <Header 
          cartCount={cartItems.length}
          wishlistCount={wishlistItems.length}
          onNavigateToLanding={() => window.location.href = '/'}
          onNavigateToProducts={() => window.location.href = '/products'}
          onNavigateToAbout={() => window.location.href = '/about'}
          onNavigateToCart={() => window.location.href = '/cart'}
          onNavigateToProfile={() => window.location.href = '/profile'}
          onNavigateToWishlist={() => window.location.href = '/wishlist'}
          onNavigateToLogin={() => window.location.href = '/login'}
          onNavigateToSignup={() => window.location.href = '/signup'}
        />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/work-with-us" element={<WorkWithUsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/wishlist" element={
            <WishlistPage 
              wishlistItems={wishlistItems}
              setWishlistItems={setWishlistItems}
              onMoveToCart={moveToCart}
            />
          } />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
        </Routes>

        <FooterSection />
      </div>
    </Router>
  );
}

export default App;
