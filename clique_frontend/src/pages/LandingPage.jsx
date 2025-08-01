import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './styles/landingpage.css';

function LandingPage({ isLoggedIn, onToggleMenu, cartCount, wishlistCount }) {
  const navigate = useNavigate();

  useEffect(() => { 
    //yahan pe agar koi data aye
  }, []);

  return (
    <div className="landing-container">
      <Header
        cartCount={cartCount}
        wishlistCount={wishlistCount}
        loggedin={isLoggedIn}
        menumove={onToggleMenu}
      />

      <main className="landinghero">
        <div className="herokaoverlay" />

        <div className="herocontent">
          <button className="herothingy" onClick={() => navigate('/products')}>
            Latest Collection 2025
          </button>

          <h1 className="heroheadline">
            <span className="headlinestatic">People are going to Stare -</span>
            <span className="headlinedynamic typing-animation">Make it Worth the While</span>
          </h1>

          <p className="herosubtit">
            Unveiling a fashion destination where trends blend seamlessly with your individual
            style aspirations. Discover today!
          </p>

          <div className="herocta">
            <button
              className="ctaprim"
              onClick={() => navigate('/products')}
            >
              New Collection
            </button>
            <button
              className="ctasec"
              onClick={() => navigate('/cart')}
            >
              View Cart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;

