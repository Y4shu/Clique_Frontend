import React, { useState } from 'react';
import LandingPage from './LandingPage';
import CartPage from './CartPage';
import AboutPage from './AboutPage';
import ProductsPage from './ProductsPage';
import ProfilePage from './ProfilePage';
import WorkWithUsPage from './WorkWithUsPage';
import SideMenu from './SideMenu';
import ContactPage from './ContactPage';
import FooterSection from './FooterSection';
import LoginPage from './LoginPage';

import DisclosurePage from './DisclosurePage';//will add these
import OffersPage from './OffersPage';
import PrivacyPage from './PrivacyPage';
import TermsPage from './TermsPage';
import ShippingPage from './ShippingPage';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [loggedin, setloggedin] = useState(false);
  const [issidemenuopen, setissidemenuopen] = useState(false);

  const togglesidemenu = () => {
    setissidemenuopen(!issidemenuopen);
  };

  const handleLogin = () => {
    setloggedin(true);
    setCurrentPage('landing');
  };

  if (currentPage === 'login') {
    return (
      <LoginPage 
        toLanding={() => setCurrentPage('landing')}
        onLogin={handleLogin}
        toSignup={() => setCurrentPage('signup')}
      />
    );
  }

  if (currentPage === 'signup') {
    return (
      <SignupPage 
        toLanding={() => setCurrentPage('landing')}
        onLogin={handleLogin}
        toLogin={() => setCurrentPage('login')}
      />
    );
  }

  if (currentPage === 'contact') {
    return (
      <>
        <ContactPage 
          toLanding={() => setCurrentPage('landing')}
          toCart={() => setCurrentPage('cart')}
          toAbout={() => setCurrentPage('about')}
          toProducts={() => setCurrentPage('products')}
          toProfile={() => setCurrentPage('profile')}
          loggedin={loggedin}
          onToggleMenu={togglesidemenu}
        />
        <SideMenu 
          isOpen={issidemenuopen}
          onClose={() => setissidemenuopen(false)}
          toProfile={() => setCurrentPage('profile')}
          toCart={() => setCurrentPage('cart')}
        />
      </>
    );
  }

  if (currentPage === 'landing') {
    return (
      <>
        <LandingPage 
          toCart={() => setCurrentPage('cart')}
          toAbout={() => setCurrentPage('about')}
          toProducts={() => setCurrentPage('products')}
          toProfile={() => setCurrentPage('profile')}
          toLogin={() => setCurrentPage('login')}
          toSignup={() => setCurrentPage('signup')}
          toLanding={() => setCurrentPage('landing')}
          loggedin={loggedin}
          onToggleMenu={togglesidemenu}
        />
        <FooterSection 
          toContact={() => setCurrentPage('contact')}
          toAbout={() => setCurrentPage('about')}
        />
        <SideMenu 
          isOpen={issidemenuopen}
          onClose={() => setissidemenuopen(false)}
          toProfile={() => setCurrentPage('profile')}
          toCart={() => setCurrentPage('cart')}
        />
      </>
    );
  }

  if (currentPage === 'cart') {
    return (
      <>
        <CartPage 
          toLanding={() => setCurrentPage('landing')}
          toAbout={() => setCurrentPage('about')}
          toProducts={() => setCurrentPage('products')}
          toProfile={() => setCurrentPage('profile')}
          loggedin={loggedin}
          onToggleMenu={togglesidemenu}
        />
        <FooterSection 
          toContact={() => setCurrentPage('contact')}
          toAbout={() => setCurrentPage('about')}
        />
        <SideMenu 
          isOpen={issidemenuopen}
          onClose={() => setissidemenuopen(false)}
          toProfile={() => setCurrentPage('profile')}
          toCart={() => setCurrentPage('cart')}
        />
      </>
    );
  }

  if (currentPage === 'about') {
    return (
      <>
        <AboutPage 
          toLanding={() => setCurrentPage('landing')}
          toCart={() => setCurrentPage('cart')}
          toProducts={() => setCurrentPage('products')}
          toProfile={() => setCurrentPage('profile')}
          toWorkWithUs={() => setCurrentPage('workwithus')}
          loggedin={loggedin}
          onToggleMenu={togglesidemenu}
        />
        <FooterSection 
          toContact={() => setCurrentPage('contact')}
          toAbout={() => setCurrentPage('about')}
          toDisclosure={() => setCurrentPage('disclosure')}
          toOffers={() => setCurrentPage('offers')}
          toPrivacy={() => setCurrentPage('privacy')}
          toTerms={() => setCurrentPage('terms')}
        />
        <SideMenu 
          isOpen={issidemenuopen}
          onClose={() => setissidemenuopen(false)}
          toProfile={() => setCurrentPage('profile')}
          toCart={() => setCurrentPage('cart')}
        />
      </>
    );
  }

  if (currentPage === 'products') {
    return (
      <>
        <ProductsPage 
          toLanding={() => setCurrentPage('landing')}
          toCart={() => setCurrentPage('cart')}
          toAbout={() => setCurrentPage('about')}
          toProfile={() => setCurrentPage('profile')}
          loggedin={loggedin}
          onToggleMenu={togglesidemenu}
        />
        <FooterSection 
          toContact={() => setCurrentPage('contact')}
          toAbout={() => setCurrentPage('about')}
          toDisclosure={() => setCurrentPage('disclosure')}
          toOffers={() => setCurrentPage('offers')}
          toPrivacy={() => setCurrentPage('privacy')}
          toTerms={() => setCurrentPage('terms')}
        />
        <SideMenu 
          isOpen={issidemenuopen}
          onClose={() => setissidemenuopen(false)}
          toProfile={() => setCurrentPage('profile')}
          toCart={() => setCurrentPage('cart')}
        />
      </>
    );
  }

  if (currentPage === 'profile') {
    return (
      <>
        <ProfilePage 
          toLanding={() => setCurrentPage('landing')}
          toCart={() => setCurrentPage('cart')}
          toAbout={() => setCurrentPage('about')}
          toProducts={() => setCurrentPage('products')}
          loggedin={loggedin}
          onToggleMenu={togglesidemenu}
        />
        <FooterSection 
          toContact={() => setCurrentPage('contact')}
          toAbout={() => setCurrentPage('about')}
          toDisclosure={() => setCurrentPage('disclosure')}
          toOffers={() => setCurrentPage('offers')}
          toPrivacy={() => setCurrentPage('privacy')}
          toTerms={() => setCurrentPage('terms')}
        />
        <SideMenu 
          isOpen={issidemenuopen}
          onClose={() => setissidemenuopen(false)}
          toProfile={() => setCurrentPage('profile')}
          toCart={() => setCurrentPage('cart')}
        />
      </>
    );
  }

  if (currentPage === 'workwithus') {
    return (
      <>
        <WorkWithUsPage 
          toLanding={() => setCurrentPage('landing')}
          toCart={() => setCurrentPage('cart')}
          toAbout={() => setCurrentPage('about')}
          toProducts={() => setCurrentPage('products')}
          toProfile={() => setCurrentPage('profile')}
          loggedin={loggedin}
          onToggleMenu={togglesidemenu}
        />
        <FooterSection 
          toContact={() => setCurrentPage('contact')}
          toAbout={() => setCurrentPage('about')}
          toDisclosure={() => setCurrentPage('disclosure')}
          toOffers={() => setCurrentPage('offers')}
          toPrivacy={() => setCurrentPage('privacy')}
          toTerms={() => setCurrentPage('terms')}
        />
        <SideMenu 
          isOpen={issidemenuopen}
          onClose={() => setissidemenuopen(false)}
          toProfile={() => setCurrentPage('profile')}
          toCart={() => setCurrentPage('cart')}
        />
      </>
    );
  }

  if (currentPage === 'disclosure') {
    return (
      <>
        <WorkWithUsPage 
          toLanding={() => setCurrentPage('landing')}
          toCart={() => setCurrentPage('cart')}
          toAbout={() => setCurrentPage('about')}
          toProducts={() => setCurrentPage('products')}
          toProfile={() => setCurrentPage('profile')}
          loggedin={loggedin}
          onToggleMenu={togglesidemenu}
        />
        <FooterSection 
          toContact={() => setCurrentPage('contact')}
          toAbout={() => setCurrentPage('about')}
          //toDisclosure={() => setCurrentPage('disclosure')}
          toOffers={() => setCurrentPage('offers')}
          toPrivacy={() => setCurrentPage('privacy')}
          toTerms={() => setCurrentPage('terms')}
        />
        <SideMenu 
          isOpen={issidemenuopen}
          onClose={() => setissidemenuopen(false)}
          toProfile={() => setCurrentPage('profile')}
          toCart={() => setCurrentPage('cart')}
        />
      </>
    );
  }
  if (currentPage === 'offers') {
    return (
      <>
        <WorkWithUsPage 
          toLanding={() => setCurrentPage('landing')}
          toCart={() => setCurrentPage('cart')}
          toAbout={() => setCurrentPage('about')}
          toProducts={() => setCurrentPage('products')}
          toProfile={() => setCurrentPage('profile')}
          loggedin={loggedin}
          onToggleMenu={togglesidemenu}
        />
        <FooterSection 
          toContact={() => setCurrentPage('contact')}
          toAbout={() => setCurrentPage('about')}
          toDisclosure={() => setCurrentPage('disclosure')}
          //toOffers={() => setCurrentPage('offers')}
          toPrivacy={() => setCurrentPage('privacy')}
          toTerms={() => setCurrentPage('terms')}
        />
        <SideMenu 
          isOpen={issidemenuopen}
          onClose={() => setissidemenuopen(false)}
          toProfile={() => setCurrentPage('profile')}
          toCart={() => setCurrentPage('cart')}
        />
      </>
    );
  }
  if (currentPage === 'privacy') {
    return (
      <>
        <WorkWithUsPage 
          toLanding={() => setCurrentPage('landing')}
          toCart={() => setCurrentPage('cart')}
          toAbout={() => setCurrentPage('about')}
          toProducts={() => setCurrentPage('products')}
          toProfile={() => setCurrentPage('profile')}
          loggedin={loggedin}
          onToggleMenu={togglesidemenu}
        />
        <FooterSection 
          toContact={() => setCurrentPage('contact')}
          toAbout={() => setCurrentPage('about')}
          toDisclosure={() => setCurrentPage('disclosure')}
          toOffers={() => setCurrentPage('offers')}
          //toPrivacy={() => setCurrentPage('privacy')}
          toTerms={() => setCurrentPage('terms')}
        />
        <SideMenu 
          isOpen={issidemenuopen}
          onClose={() => setissidemenuopen(false)}
          toProfile={() => setCurrentPage('profile')}
          toCart={() => setCurrentPage('cart')}
        />
      </>
    );
  }
  if (currentPage === 'terms') {
    return (
      <>
        <WorkWithUsPage 
          toLanding={() => setCurrentPage('landing')}
          toCart={() => setCurrentPage('cart')}
          toAbout={() => setCurrentPage('about')}
          toProducts={() => setCurrentPage('products')}
          toProfile={() => setCurrentPage('profile')}
          loggedin={loggedin}
          onToggleMenu={togglesidemenu}
        />
        <FooterSection 
          toContact={() => setCurrentPage('contact')}
          toAbout={() => setCurrentPage('about')}
          toDisclosure={() => setCurrentPage('disclosure')}
          toOffers={() => setCurrentPage('offers')}
          toPrivacy={() => setCurrentPage('privacy')}
          //toTerms={() => setCurrentPage('terms')}
        />
        <SideMenu 
          isOpen={issidemenuopen}
          onClose={() => setissidemenuopen(false)}
          toProfile={() => setCurrentPage('profile')}
          toCart={() => setCurrentPage('cart')}
        />
      </>
    );
  }

  return null;
}

export default App;