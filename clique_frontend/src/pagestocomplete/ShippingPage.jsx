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
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '16px'
  },
  tableHeader: {
    backgroundColor: '#1f2937',
    padding: '12px',
    textAlign: 'left',
    borderBottom: '1px solid #374151',
    color: '#ffffff',
    fontWeight: 'bold'
  },
  tableCell: {
    padding: '12px',
    borderBottom: '1px solid #374151',
    color: '#d1d5db'
  }
};

function ShippingPage({ onNavigateToLanding, onNavigateToCart, onNavigateToAbout, onNavigateToProducts, onNavigateToProfile, isLoggedIn, onToggleMenu }) {
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
          Shipping & <span style={styles.titleAccent}>Return Policy</span>
        </h1>

        <div style={styles.content}>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Shipping Information</h2>
            <p style={styles.text}>
              We offer multiple shipping options to ensure your CLIQUE fashion reaches you quickly and safely.
            </p>
            
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.tableHeader}>Shipping Method</th>
                  <th style={styles.tableHeader}>Delivery Time</th>
                  <th style={styles.tableHeader}>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.tableCell}>Standard Shipping</td>
                  <td style={styles.tableCell}>5-7 business days</td>
                  <td style={styles.tableCell}>Free on orders over ₹2,000</td>
                </tr>
                <tr>
                  <td style={styles.tableCell}>Express Shipping</td>
                  <td style={styles.tableCell}>2-3 business days</td>
                  <td style={styles.tableCell}>₹199</td>
                </tr>
                <tr>
                  <td style={styles.tableCell}>Overnight Shipping</td>
                  <td style={styles.tableCell}>Next business day</td>
                  <td style={styles.tableCell}>₹499</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Order Processing</h2>
            <ul style={styles.list}>
              <li style={styles.listItem}>Orders are processed within 1-2 business days</li>
              <li style={styles.listItem}>You will receive a confirmation email with tracking information</li>
              <li style={styles.listItem}>Orders placed on weekends will be processed on the next business day</li>
              <li style={styles.listItem}>Custom or personalized items may take additional processing time</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Return Policy</h2>
            <p style={styles.text}>
              We want you to love your CLIQUE purchase. If you're not completely satisfied, we offer easy returns.
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>30-day return window from delivery date</li>
              <li style={styles.listItem}>Items must be unworn, unwashed, and in original condition</li>
              <li style={styles.listItem}>Original tags and packaging must be included</li>
              <li style={styles.listItem}>Free return shipping for defective or incorrect items</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Exchange Policy</h2>
            <p style={styles.text}>
              Need a different size or color? We make exchanges simple:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Free exchanges within 30 days</li>
              <li style={styles.listItem}>Subject to availability</li>
              <li style={styles.listItem}>One exchange per item</li>
              <li style={styles.listItem}>Price differences may apply for upgraded items</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>International Shipping</h2>
            <p style={styles.text}>
              We ship to select international destinations. International orders may be subject to customs duties and taxes.
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Delivery time: 7-14 business days</li>
              <li style={styles.listItem}>Shipping costs calculated at checkout</li>
              <li style={styles.listItem}>Customer responsible for customs fees</li>
              <li style={styles.listItem}>Returns may incur additional shipping costs</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Contact Us</h2>
            <p style={styles.text}>
              Questions about your order or our shipping policy? Contact us at blahblah@clique.com or call +91 4778349067.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingPage;