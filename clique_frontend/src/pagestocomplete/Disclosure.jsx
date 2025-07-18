import React from 'react';
import { Search, User, ShoppingBag, ArrowLeft, Menu } from 'lucide-react';
import Header from '../pages/Header';

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

function DisclosurePage({ toLanding, toCart, toAbout, toProducts, toProfile, loggedin, onToggleMenu }) {
  return (
    <div style={styles.container}>

      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>
            <img 
              src={logo} 
              alt="CLIQUE Logo" 
              style={styles.logoImage}
            />
            CLIQUE
          </div>
          
          <nav style={styles.nav} className="mobile-hidden">
            <div style={styles.navLinks}>
              <button 
                onClick={toLanding}
                style={styles.navLink}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
              >
                Home
              </button>
              <button 
                onClick={toProducts}
                style={styles.navLink}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
              >
                Products
              </button>
              <button 
                onClick={toAbout}
                style={styles.navLink}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
              >
                About Us
              </button>
              <button 
                onClick={toCart}
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
              onClick={toProfile}
              style={styles.iconButton}
            >
              <User size={20} />
            </button>
            <button 
              onClick={toCart}
              style={styles.iconButton}
            >
              <ShoppingBag size={20} />
              <span style={styles.cartBadge}>3</span>
            </button>
            {loggedin ? (
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
          onClick={toLanding}
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
          Responsible <span style={styles.titleAccent}>Disclosure</span>
        </h1>

        <div style={styles.content}>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Our Commitment</h2>
            <p style={styles.text}>
              CLIQUE is committed to maintaining the security of our systems and protecting our customers' data. We welcome responsible disclosure of security vulnerabilities.
            </p>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Scope</h2>
            <p style={styles.text}>
              This policy applies to vulnerabilities in CLIQUE's systems, including:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>CLIQUE website and mobile applications</li>
              <li style={styles.listItem}>Customer data protection systems</li>
              <li style={styles.listItem}>Payment processing systems</li>
              <li style={styles.listItem}>Internal infrastructure that could affect customer security</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Reporting Guidelines</h2>
            <p style={styles.text}>
              If you discover a security vulnerability, please follow these guidelines:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Report the vulnerability to security@clique.com</li>
              <li style={styles.listItem}>Provide detailed information about the vulnerability</li>
              <li style={styles.listItem}>Allow us reasonable time to address the issue</li>
              <li style={styles.listItem}>Do not access or modify customer data</li>
              <li style={styles.listItem}>Do not publicly disclose the vulnerability until we've addressed it</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>What We Promise</h2>
            <ul style={styles.list}>
              <li style={styles.listItem}>Acknowledge receipt of your report within 48 hours</li>
              <li style={styles.listItem}>Provide regular updates on our progress</li>
              <li style={styles.listItem}>Credit you for the discovery (if desired)</li>
              <li style={styles.listItem}>Not pursue legal action for good faith security research</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Out of Scope</h2>
            <p style={styles.text}>
              The following are not covered by this policy:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Social engineering attacks</li>
              <li style={styles.listItem}>Physical attacks against CLIQUE facilities</li>
              <li style={styles.listItem}>Denial of service attacks</li>
              <li style={styles.listItem}>Spam or social engineering of CLIQUE employees</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Contact Information</h2>
            <p style={styles.text}>
              For security-related inquiries, please contact us at security@clique.com. For general inquiries, reach us at blahblah@clique.com or +91 4778349067.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisclosurePage;