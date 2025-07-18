import React from 'react';
import Header from '../pages/Header';

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#000000',
    color: '#ffffff'
  },
  hero: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8))'
  },
  heroContent: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    padding: '0 16px',
    maxWidth: '1152px',
    margin: '0 auto'
  },
  badge: {
    display: 'inline-block',
    marginBottom: '32px',
    backgroundColor: 'rgba(31, 41, 55, 0.8)',
    color: '#d1d5db',
    padding: '12px 24px',
    borderRadius: '9999px',
    fontSize: '14px',
    fontWeight: '500',
    border: '1px solid #374151',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    margin: '45px'
  },
  mainHeadline: {
    fontSize: '80px',
    fontWeight: 'bold',
    lineHeight: '1.1',
    marginBottom: '32px'
  },
  headlineText: {
    color: '#ffffff',
    display: 'block',
    marginBottom: '8px'
  },
  typingText: {
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'block'
  },
  subtitle: {
    fontSize: '16px',
    color: '#6b7280',
    marginBottom: '48px',
    maxWidth: '768px',
    margin: '0 auto 48px auto',
    lineHeight: '1.6',
    opacity: 0.6
  },
  ctaButtons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px'
  },
  primaryButton: {
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    color: '#000000',
    padding: '16px 32px',
    borderRadius: '8px',
    fontSize: '18px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
  },
  secondaryButton: {
    border: '2px solid #4b5563',
    color: '#ffffff',
    padding: '16px 32px',
    borderRadius: '8px',
    fontSize: '18px',
    fontWeight: '600',
    background: 'transparent',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }
};

function LandingPage({ 
  onNavigateToLanding,
  onNavigateToCart, 
  onNavigateToAbout, 
  onNavigateToProducts, 
  onNavigateToProfile, 
  onNavigateToWishlist,
  onNavigateToLogin, 
  onNavigateToSignup, 
  isLoggedIn, 
  onToggleMenu 
}) {
  return (
    <div style={styles.container}>
      <Header
        currentPage="home"
        //onNavigateToLanding={onNavigateToLanding}
        onNavigateToProducts={onNavigateToProducts}
        onNavigateToAbout={onNavigateToAbout}
        onNavigateToCart={onNavigateToCart}
        onNavigateToProfile={onNavigateToProfile}
        onNavigateToWishlist={onNavigateToWishlist}
        onNavigateToLogin={onNavigateToLogin}
        onNavigateToSignup={onNavigateToSignup}
        isLoggedIn={isLoggedIn}
        onToggleMenu={onToggleMenu}
        cartCount={3}
      />

      {/* Hero Section */}
      <main style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        
        <div style={styles.heroContent}>
          <div style={styles.badge}>
            Latest Collection 2025
          </div>

          <h1 style={styles.mainHeadline}>
            <span style={styles.headlineText}>People are going to Stare -</span>
            <span style={{...styles.typingText}} className="typing-animation">Make it worth the While</span>
          </h1>

          <p style={styles.subtitle}>
            Unveiling a fashion destination where trends blend seamlessly with your individual 
            style aspirations. Discover today!
          </p>

          <div style={styles.ctaButtons} className="mobile-flex-col desktop-flex-row">
            <button 
              onClick={onNavigateToProducts}
              style={styles.primaryButton}
              onMouseEnter={(e) => {
                e.target.style.opacity = '0.9';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = '1';
                e.target.style.transform = 'scale(1)';
              }}
            >
              New collection
            </button>
            <button 
              onClick={onNavigateToCart}
              style={styles.secondaryButton}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'rgba(251, 191, 36, 0.8)';
                e.target.style.background = 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)';
                e.target.style.color = '#000000';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = '#4b5563';
                e.target.style.background = 'transparent';
                e.target.style.color = '#ffffff';
              }}
            >
              View Cart
            </button>
          </div>
        </div>
      </main>

      {/* Spacer before footer */}
      <div style={{height: '80px'}}></div>
    </div>
  );
}

export default LandingPage;
