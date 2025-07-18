//Sample page he tu manage nav
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from '../pages/Header';

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#000000',
    color: '#ffffff'
  },
  mainContent: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '32px 16px'
  },
  backButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#9ca3af',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '32px',
    transition: 'all 0.3s ease'
  },
  contentCenter: {
    textAlign: 'center',
    padding: '80px 0'
  },
  pageTitle: {
    fontSize: '80px',
    fontWeight: 'bold',
    marginBottom: '24px'
  },
  titleAccent: {
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  subtitle: {
    color: '#9ca3af',
    fontSize: '18px',
    marginBottom: '32px'
  },
  comingSoonBadge: {
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    color: '#000000',
    padding: '12px 32px',
    borderRadius: '8px',
    fontWeight: '600',
    display: 'inline-block'
  }
};

function ProductsPage({  toLanding,  toCart,  toAbout,  toProfile,  loggedin, onToggleMenu }) {
  return (
    <div style={styles.container}>
 
      <Header
        currentPage="products"
         toLanding={ toLanding}
        // toProducts={ toProducts}
         toAbout={ toAbout}
         toCart={ toCart}
         toProfile={ toProfile}
         loggedin={ loggedin}
        onToggleMenu={onToggleMenu}
        cartCount={3}
      />

      <div style={styles.mainContent}>
        <button 
          onClick={ toLanding}
          style={styles.backButton}
          onMouseEnter={(e) => {
            e.target.style.background = 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)';
            e.target.style.webkitBackgroundClip = 'text';
            e.target.style.webkitTextFillColor = 'transparent';
            e.target.style.backgroundClip = 'text';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'none';
            e.target.style.webkitBackgroundClip = 'initial';
            e.target.style.webkitTextFillColor = 'initial';
            e.target.style.backgroundClip = 'initial';
            e.target.style.color = '#9ca3af';
          }}
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>

        <div style={styles.contentCenter}>
          <h1 style={styles.pageTitle}>
            Our <span style={styles.titleAccent}>Collections</span>
          </h1>
          <p style={styles.subtitle}>
            Discover our latest fashion pieces and timeless classics
          </p>
          <div style={styles.comingSoonBadge}>
            Products Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;