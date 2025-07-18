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
    maxWidth: '768px',
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
    fontSize: '48px',
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
  content: {
    backgroundColor: '#111827',
    borderRadius: '12px',
    padding: '32px',
    border: '1px solid #374151',
    lineHeight: '1.6'
  },
  section: {
    marginBottom: '32px'
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  text: {
    color: '#d1d5db',
    marginBottom: '16px'
  },
  list: {
    color: '#d1d5db',
    paddingLeft: '20px',
    marginBottom: '16px'
  },
  listItem: {
    marginBottom: '8px'
  }
};

function PrivacyPage({ onNavigateToLanding, onNavigateToCart, onNavigateToAbout, onNavigateToProducts, onNavigateToProfile, isLoggedIn, onToggleMenu }) {
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
          Privacy <span style={styles.titleAccent}>Policy</span>
        </h1>

        <div style={styles.content}>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Information We Collect</h2>
            <p style={styles.text}>
              We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Personal information (name, email, phone number)</li>
              <li style={styles.listItem}>Payment information (credit card details, billing address)</li>
              <li style={styles.listItem}>Shipping and delivery information</li>
              <li style={styles.listItem}>Communication preferences</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>How We Use Your Information</h2>
            <p style={styles.text}>
              We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Process and fulfill your orders</li>
              <li style={styles.listItem}>Send you order confirmations and shipping updates</li>
              <li style={styles.listItem}>Provide customer support</li>
              <li style={styles.listItem}>Send marketing communications (with your consent)</li>
              <li style={styles.listItem}>Improve our website and services</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Information Sharing</h2>
            <p style={styles.text}>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Service providers who assist us in operating our website</li>
              <li style={styles.listItem}>Payment processors for transaction processing</li>
              <li style={styles.listItem}>Shipping companies for order delivery</li>
              <li style={styles.listItem}>Legal requirements or to protect our rights</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Data Security</h2>
            <p style={styles.text}>
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Your Rights</h2>
            <p style={styles.text}>
              You have the right to access, update, or delete your personal information. You may also opt out of marketing communications at any time.
            </p>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Contact Us</h2>
            <p style={styles.text}>
              If you have any questions about this Privacy Policy, please contact us at blahblah@clique.com or call us at +91 4778349067.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPage;