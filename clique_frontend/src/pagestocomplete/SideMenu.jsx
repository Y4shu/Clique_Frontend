import React from 'react';
import { X, User, Heart, ShoppingBag, Shirt, Users, Footprints, Watch, Palette } from 'lucide-react';

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
    opacity: 0,
    visibility: 'hidden',
    transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'
  },
  overlayOpen: {
    opacity: 1,
    visibility: 'visible'
  },
  sideMenu: {
    position: 'fixed',
    top: 0,
    right: '-400px',
    width: '400px',
    height: '100vh',
    backgroundColor: '#000000',
    borderLeft: '1px solid #374151',
    transition: 'right 0.3s ease-in-out',
    zIndex: 1000
  },
  sideMenuOpen: {
    right: 0
  },
  menuContent: {
    padding: '24px'
  },
  menuHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '32px'
  },
  menuTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#ffffff'
  },
  closeButton: {
    background: 'none',
    border: 'none',
    color: '#9ca3af',
    cursor: 'pointer',
    transition: 'color 0.3s ease'
  },
  profileSection: {
    marginBottom: '32px',
    paddingBottom: '24px',
    borderBottom: '1px solid #374151'
  },
  profileInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '16px'
  },
  avatar: {
    width: '64px',
    height: '64px',
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileDetails: {
    display: 'flex',
    flexDirection: 'column'
  },
  profileName: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#ffffff'
  },
  profileStatus: {
    color: '#9ca3af',
    fontSize: '14px'
  },
  viewProfileButton: {
    width: '100%',
    textAlign: 'left',
    color: '#d1d5db',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'all 0.3s ease'
  },
  section: {
    marginBottom: '32px'
  },
  sectionTitle: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#9ca3af',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '16px'
  },
  menuList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    width: '100%',
    textAlign: 'left',
    color: '#d1d5db',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    padding: '8px 0',
    transition: 'all 0.3s ease'
  }
};

function SideMenu({ isOpen, onClose, onNavigateToProfile, onNavigateToCart }) {
  const categories = [
    { name: "Women's", icon: Users },
    { name: "Men's", icon: Shirt },
    { name: "Footwear", icon: Footprints },
    { name: "Accessories", icon: Watch },
    { name: "Makeup", icon: Palette }
  ];

  const handleViewProfile = () => {
    onNavigateToProfile();
    onClose();
  };

  const handleViewCart = () => {
    onNavigateToCart();
    onClose();
  };

  const handleHover = (e, isEntering) => {
    if (isEntering) {
      e.target.style.background = 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)';
      e.target.style.webkitBackgroundClip = 'text';
      e.target.style.webkitTextFillColor = 'transparent';
      e.target.style.backgroundClip = 'text';
    } else {
      e.target.style.background = 'none';
      e.target.style.webkitBackgroundClip = 'initial';
      e.target.style.webkitTextFillColor = 'initial';
      e.target.style.backgroundClip = 'initial';
      e.target.style.color = '#d1d5db';
    }
  };

  return (
    <>
      {/* Overlay */}
      <div 
        style={{
          ...styles.overlay,
          ...(isOpen ? styles.overlayOpen : {})
        }}
        onClick={onClose}
      ></div>

      {/* Side Menu */}
      <div style={{
        ...styles.sideMenu,
        ...(isOpen ? styles.sideMenuOpen : {})
      }}>
        <div style={styles.menuContent}>
          {/* Header */}
          <div style={styles.menuHeader}>
            <h2 style={styles.menuTitle}>Menu</h2>
            <button 
              onClick={onClose}
              style={styles.closeButton}
              onMouseEnter={(e) => e.target.style.color = '#ffffff'}
              onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
            >
              <X size={24} />
            </button>
          </div>

          {/* Profile Section */}
          <div style={styles.profileSection}>
            <div style={styles.profileInfo}>
              <div style={styles.avatar}>
                <User size={32} color="#000000" />
              </div>
              <div style={styles.profileDetails}>
                <h3 style={styles.profileName}>John Doe</h3>
                <p style={styles.profileStatus}>VIP Member</p>
              </div>
            </div>
            <button 
              onClick={handleViewProfile}
              style={styles.viewProfileButton}
              onMouseEnter={(e) => handleHover(e, true)}
              onMouseLeave={(e) => handleHover(e, false)}
            >
              View Profile
            </button>
          </div>

          {/* Quick Actions */}
          <div style={styles.section}>
            <h4 style={styles.sectionTitle}>Quick Actions</h4>
            <div style={styles.menuList}>
              <button 
                style={styles.menuItem}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                <Heart size={20} />
                <span>Wishlist (8)</span>
              </button>
              <button 
                onClick={handleViewCart}
                style={styles.menuItem}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                <ShoppingBag size={20} />
                <span>Cart (3)</span>
              </button>
            </div>
          </div>

          {/* Product Categories */}
          <div style={styles.section}>
            <h4 style={styles.sectionTitle}>Categories</h4>
            <div style={styles.menuList}>
              {categories.map((category, index) => (
                <button 
                  key={index}
                  style={styles.menuItem}
                  onMouseEnter={(e) => handleHover(e, true)}
                  onMouseLeave={(e) => handleHover(e, false)}
                >
                  <category.icon size={20} />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideMenu;