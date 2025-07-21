import React, { useState, useEffect } from 'react';
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
import wool_coat from './assets/wool coat.png';
import leather_jacket from './assets/leather jacket.png';
import scarf from './assets/scarf.png';
import gown from './assets/gown.png';
import pearlbag from './assets/pearl bag.png';
import DisclosurePage from './pages/DisclosurePage';
import OffersPage from './pages/OffersPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import ShippingPage from './pages/ShippingPage';
import SitemapPage from './pages/SiteMapPage';
import EditProfilePage from './pages/EditProfilePage';
import Header from './pages/Header';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ProductDescPage from './ProductDescPage';

function App() {
  const [cartitems, setcartitems]=useState([]);
  const [wishlistitems, setwishlistitems]=useState([]);

  useEffect(()=> {
    const fetchcart=async ()=> {
      try {
        const res=await fetch('/api/cart');
        const data=await res.json();
        setcartitems(data);
      } catch (error) {
        console.error('Failed to fetch cart:', error);
      }
    };

    const fetchwishlist=async ()=> {
      try {
        const res=await fetch('/api/wishlist');
        const data=await res.json();
        setwishlistitems(data);
      } catch (error) {
        console.error('Failed to fetch wishlist:', error);
      }
    };

    fetchcart();
    fetchwishlist();
  }, []);

  const tocart=async (wishlistitem)=> {
    try {
      const existingcartitem=cartitems.find(item=> item.id===wishlistitem.id);

      if (existingcartitem) {
        await fetch(/*add ot cart*/);
        setcartitems(cartitems.map(item=>
          item.id===wishlistitem.id
            ? { ...item, quantity:item.quantity + 1 }
            :item
        ));
      } else {
        const cartitem={ ...wishlistitem, quantity:1 };
        await fetch(/*?*/);
        setcartitems([...cartitems, cartitem]);
      }

      await fetch(/*delete wishlist item*/);
      setwishlistitems(wishlistitems.filter(item=> item.id !==wishlistitem.id));
    } catch (err) {
      console.error('Error moving item to cart:', err);
    }
  };

  return (
    <Router>
      <div>
        <Header 
          cartCount={cartitems.length}
          wishlistCount={wishlistitems.length}
        />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cart" element={<CartPage cartitems={cartitems} setcartitems={setcartitems} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/work-with-us" element={<WorkWithUsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/wishlist" element={
            <WishlistPage 
              wishlistitems={wishlistitems}
              setwishlistitems={setwishlistitems}
              ontocart={tocart}
            />
          } />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/product/:productid" element={<ProductDescPage />} />
        </Routes>

        <FooterSection />
      </div>
    </Router>
  );
}

export default App;
