import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  footer: {
    backgroundColor: '#111827',
    color: '#ffffff',
    padding: '48px 0 24px'
  },
  topSection: {
    backgroundColor: '#1f2937',
    padding: '24px 0',
    textAlign: 'center'
  },
  topContent: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '24px'
  },
  downloadSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  downloadTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '16px'
  },
  appButtons: {
    display: 'flex',
    gap: '12px'
  },
  appButton: {
    height: '48px',
    borderRadius: '8px',
    overflow: 'hidden'
  },
  helpSection: {
    textAlign: 'center'
  },
  helpTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px'
  },
  helpPhone: {
    fontSize: '24px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '4px'
  },
  helpHours: {
    color: '#9ca3af',
    fontSize: '14px'
  },
  mainFooter: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 16px'
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '32px',
    marginBottom: '32px'
  },
  footerColumn: {
    display: 'flex',
    flexDirection: 'column'
  },
  columnTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#ffffff'
  },
  columnLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  footerLink: {
    color: '#9ca3af',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'color 0.3s ease'
  },
  contactHighlight: {
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: 'bold'
  },
  bottomSection: {
    borderTop: '1px solid #374151',
    paddingTop: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px'
  },
  socialLinks: {
    display: 'flex',
    gap: '16px'
  },
  socialIcon: {
    width: '40px',
    height: '40px',
    backgroundColor: '#374151',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease'
  }
};

function FooterSection() {
  return (
    <footer style={styles.footer}>
      <div style={styles.topSection}>
        <div style={styles.topContent}>
          <div style={styles.downloadSection}>
            <h3 style={styles.downloadTitle}>DOWNLOAD OUR APP</h3>
            <div style={styles.appButtons}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" style={styles.appButton} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" style={styles.appButton} />
            </div>
          </div>

          <div style={styles.helpSection}>
            <h3 style={styles.helpTitle}>FOR ANY HELP, YOU MAY CALL US AT</h3>
            <div style={styles.helpPhone}>+91 4778349067</div>
            <div style={styles.helpHours}>(Monday to Saturday: 10 am - 10 pm, Sunday: 10 am - 7 pm)</div>
          </div>
        </div>
      </div>

      <div style={styles.mainFooter}>
        <div style={styles.footerGrid}>
          {/* WHO ARE WE */}
          <div style={styles.footerColumn}>
            <h4 style={styles.columnTitle}>WHO ARE WE</h4>
            <div style={styles.columnLinks}>
              <Link to="/about" style={styles.footerLink}>About Us</Link>
              <Link to="/careers" style={styles.footerLink}>Careers</Link>
              <Link to="/press" style={styles.footerLink}>Press</Link>
            </div>
          </div>

          {/* HELP */}
          <div style={styles.footerColumn}>
            <h4 style={styles.columnTitle}>HELP</h4>
            <div style={styles.columnLinks}>
              <Link to="/shipping" style={styles.footerLink}>Shipping & Return Policy</Link>
              <Link to="/contact" style={styles.contactHighlight}>Get in Touch</Link>
              <Link to="/terms" style={styles.footerLink}>Terms & Conditions</Link>
              <Link to="/privacy" style={styles.footerLink}>Privacy Policy</Link>
              <Link to="/disclosure" style={styles.footerLink}>Responsible Disclosure</Link>
              <Link to="/sell-on-clique" style={styles.footerLink}>Sell on CLIQUE Fashion</Link>
            </div>
          </div>

          <div style={styles.footerColumn}>
            <h4 style={styles.columnTitle}>QUICKLINKS</h4>
            <div style={styles.columnLinks}>
              <Link to="/offers" style={styles.footerLink}>Offers</Link>
              <Link to="/sitemap" style={styles.footerLink}>Sitemap</Link>
              <Link to="/style-files" style={styles.footerLink}>Style Files</Link>
            </div>
          </div>

          {/* FOLLOW US */}
          <div style={styles.footerColumn}>
            <h4 style={styles.columnTitle}>FOLLOW US</h4>
            <div style={styles.socialLinks}>
              <a href="#" style={styles.socialIcon}>📷</a>
              <a href="#" style={styles.socialIcon}>🐦</a>
            </div>
          </div>
        </div>

        <div style={styles.bottomSection}>
          <div style={{ color: '#9ca3af', fontSize: '14px' }}>
            © 2025 CLIQUE Fashion. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
