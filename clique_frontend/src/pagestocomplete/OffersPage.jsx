import React from 'react';
import { Search, User, ShoppingBag, ArrowLeft, Menu } from 'lucide-react';

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#000000',
    color: '#ffffff'
  },
  header: {
    backgroundColor: '#000000',
    borderBottom: '1px solid #374151'
  },
  headerContent: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '64px'
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  logoImage: {
    width: '32px',
    height: '32px',
    borderRadius: '50%'
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1
  },
  navLinks: {
    display: 'flex',
    gap: '32px'
  },
  navLink: {
    color: '#d1d5db',
    textDecoration: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'color 0.3s ease'
  },
  headerActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  iconButton: {
    background: 'none',
    border: 'none',
    color: '#9ca3af',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    position: 'relative'
  },
  cartBadge: {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    color: '#000000',
    fontSize: '12px',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  authButton: {
    background: 'none',
    border: 'none',
    color: '#d1d5db',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'color 0.3s ease'
  },
  signUpButton: {
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    color: '#000000',
    padding: '8px 16px',
    borderRadius: '8px',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: 'opacity 0.3s ease'
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
  title: {
    fontSize: '80px',
    fontWeight: 'bold',
    marginBottom: '32px',
    textAlign: 'center'
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
    marginBottom: '48px',
    textAlign: 'center'
  },
  offersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
    marginBottom: '64px'
  },
  offerCard: {
    backgroundColor: '#111827',
    borderRadius: '12px',
    padding: '32px',
    border: '1px solid #374151',
    textAlign: 'center',
    transition: 'all 0.3s ease'
  },
  offerBadge: {
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    color: '#000000',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: 'bold',
    display: 'inline-block',
    marginBottom: '16px'
  },
  offerTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px'
  },
  offerDescription: {
    color: '#9ca3af',
    marginBottom: '24px',
    lineHeight: '1.6'
  },
  offerButton: {
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    color: '#000000',
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'opacity 0.3s ease'
  },
  promoSection: {
    backgroundColor: '#111827',
    borderRadius: '12px',
    padding: '48px',
    border: '1px solid #374151',
    textAlign: 'center'
  },
  promoTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '16px'
  },
  promoCode: {
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    color: '#000000',
    padding: '16px 32px',
    borderRadius: '8px',
    fontSize: '24px',
    fontWeight: 'bold',
    display: 'inline-block',
    marginBottom: '16px'
  },
  promoText: {
    color: '#9ca3af',
    fontSize: '16px'
  }
};

function OffersPage({ onNavigateToLanding, onNavigateToCart, onNavigateToAbout, onNavigateToProducts, onNavigateToProfile, isLoggedIn, onToggleMenu }) {
  const offers = [
    {
      badge: "NEW CUSTOMER",
      title: "Welcome Offer",
      description: "Get 20% off on your first purchase. Valid on all items except sale products.",
      code: "WELCOME20"
    },
    {
      badge: "LIMITED TIME",
      title: "Flash Sale",
      description: "Up to 50% off on selected items. Hurry, limited stock available!",
      code: "FLASH50"
    },
    {
      badge: "FREE SHIPPING",
      title: "No Delivery Charges",
      description: "Free shipping on all orders above ₹2,000. No minimum purchase required for premium members.",
      code: "FREESHIP"
    },
    {
      badge: "SEASONAL",
      title: "Winter Collection",
      description: "Special discount on winter wear. Stay warm and stylish with our latest collection.",
      code: "WINTER25"
    },
    {
      badge: "VIP MEMBERS",
      title: "Exclusive Access",
      description: "Early access to new collections and exclusive member-only discounts.",
      code: "VIP15"
    },
    {
      badge: "BULK ORDER",
      title: "Corporate Discounts",
      description: "Special pricing for bulk orders. Perfect for corporate events and team uniforms.",
      code: "BULK30"
    }
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>
            <img 
              src="https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop" 
              alt="CLIQUE Logo" 
              style={styles.logoImage}
            />
            CLIQUE
          </div>
          
          <nav style={styles.nav} className="mobile-hidden">
            <div style={styles.navLinks}>
              <button 
                onClick={onNavigateToLanding}
                style={styles.navLink}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
              >
                Home
              </button>
              <button 
                onClick={onNavigateToProducts}
                style={styles.navLink}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
              >
                Products
              </button>
              <button 
                onClick={onNavigateToAbout}
                style={styles.navLink}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
              >
                About Us
              </button>
              <button 
                onClick={onNavigateToCart}
                style={styles.navLink}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
              >
                Cart
              </button>
            </div>
          </nav>
          
          <div style={styles.headerActions}>
            <button style={styles.iconButton}>
              <Search size={20} />
            </button>
            <button 
              onClick={onNavigateToProfile}
              style={styles.iconButton}
            >
              <User size={20} />
            </button>
            <button 
              onClick={onNavigateToCart}
              style={styles.iconButton}
            >
              <ShoppingBag size={20} />
              <span style={styles.cartBadge}>3</span>
            </button>
            {isLoggedIn ? (
              <button 
                onClick={onToggleMenu}
                style={styles.iconButton}
              >
                <Menu size={20} />
              </button>
            ) : (
              <>
                <button style={styles.authButton}>Login</button>
                <button style={styles.signUpButton}>Sign up</button>
              </>
            )}
          </div>
        </div>
      </header>

      <div style={styles.mainContent}>
        {/* Back button */}
        <button 
          onClick={onNavigateToLanding}
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

        <h1 style={styles.title}>
          Exclusive <span style={styles.titleAccent}>Offers</span>
        </h1>
        <p style={styles.subtitle}>
          Discover amazing deals and special discounts on your favorite fashion items
        </p>

        {/* Offers Grid */}
        <div style={styles.offersGrid}>
          {offers.map((offer, index) => (
            <div 
              key={index} 
              style={styles.offerCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(251, 191, 36, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={styles.offerBadge}>{offer.badge}</div>
              <h3 style={styles.offerTitle}>{offer.title}</h3>
              <p style={styles.offerDescription}>{offer.description}</p>
              <button 
                onClick={onNavigateToProducts}
                style={styles.offerButton}
                onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
                Shop Now
              </button>
            </div>
          ))}
        </div>

        {/* Promo Code Section */}
        <div style={styles.promoSection}>
          <h2 style={styles.promoTitle}>
            Special Promo <span style={styles.titleAccent}>Code</span>
          </h2>
          <div style={styles.promoCode}>CLIQUE20</div>
          <p style={styles.promoText}>
            Use this code at checkout to get 20% off on your entire order. Valid until the end of this month!
          </p>
        </div>
      </div>
    </div>
  );
}

export default OffersPage;