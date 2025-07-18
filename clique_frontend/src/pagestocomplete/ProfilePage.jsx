import React, { useState } from 'react';
import { User, ArrowLeft, Edit, Heart, Package, CreditCard, MapPin, Plus, Wallet, Star, ShoppingBag } from 'lucide-react';
import Header from '../pages/Header';

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#000000',
    color: '#ffffff'
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
  profileHeader: {
    backgroundColor: '#111827',
    borderRadius: '12px',
    padding: '32px',
    border: '1px solid #374151',
    marginBottom: '32px'
  },
  profileInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px'
  },
  avatar: {
    width: '96px',
    height: '96px',
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileDetails: {
    flex: 1
  },
  profileName: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '8px'
  },
  memberSince: {
    color: '#9ca3af',
    marginBottom: '16px'
  },
  editButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    color: '#000000',
    padding: '8px 16px',
    borderRadius: '8px',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: 'opacity 0.3s ease'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '24px',
    marginBottom: '32px'
  },
  statCard: {
    backgroundColor: '#111827',
    borderRadius: '12px',
    padding: '24px',
    border: '1px solid #374151',
    textAlign: 'center'
  },
  statIcon: {
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: '0 auto 12px'
  },
  statNumber: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '4px'
  },
  statLabel: {
    color: '#9ca3af'
  },
  section: {
    backgroundColor: '#111827',
    borderRadius: '12px',
    padding: '32px',
    border: '1px solid #374151',
    marginBottom: '32px'
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px'
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  sectionIcon: {
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  addButton: {
    fontSize: '14px',
    color: '#d1d5db',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    transition: 'color 0.3s ease'
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px'
  },
  infoItem: {
    display: 'flex',
    flexDirection: 'column'
  },
  infoLabel: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#d1d5db',
    marginBottom: '8px'
  },
  infoValue: {
    color: '#ffffff'
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  listItem: {
    backgroundColor: '#1f2937',
    padding: '16px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  addressItem: {
    backgroundColor: '#1f2937',
    padding: '16px',
    borderRadius: '8px'
  },
  addressLabel: {
    fontWeight: 'bold',
    marginBottom: '4px'
  }
};

function ProfilePage({
  onNavigateToLanding,
  onNavigateToCart,
  onNavigateToAbout,
  onNavigateToProducts,
  onNavigateToOrders,
  onNavigateToWishlist,
  isLoggedIn,
  onToggleMenu,
}) {
  const [cards, setCards] = useState([
    { number: '**** **** **** 1234', expiry: '08/26' },
  ]);
  const [upiIds, setUpiIds] = useState([{ id: 'john.doe@upi' }]);
  const [addresses, setAddresses] = useState([
    { label: 'Home', address: '123 Fashion Street, Style City, SC 12345' },
  ]);
  const creditPoints = 820;

  const handleAddCard = () => {
    setCards([...cards, { number: '**** **** **** 9999', expiry: '01/30' }]);
  };

  const handleAddUpi = () => {
    setUpiIds([...upiIds, { id: 'newuser@upi' }]);
  };

  const handleAddAddress = () => {
    setAddresses([
      ...addresses,
      { label: 'New', address: '456 Luxe Lane, Metro City, MC 54321' },
    ]);
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <Header
        currentPage="profile"
        onNavigateToLanding={onNavigateToLanding}
        onNavigateToProducts={onNavigateToProducts}
        onNavigateToAbout={onNavigateToAbout}
        onNavigateToCart={onNavigateToCart}
        //onNavigateToProfile={onNavigateToProfile}
        isLoggedIn={isLoggedIn}
        onToggleMenu={onToggleMenu}
        cartCount={3}
      />

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Back Button */}
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

        {/* Profile Header */}
        <div style={styles.profileHeader}>
          <div style={styles.profileInfo}>
            <div style={styles.avatar}>
              <User size={48} color="#000000" />
            </div>
            <div style={styles.profileDetails}>
              <h1 style={styles.profileName}>John Doe</h1>
              <p style={styles.memberSince}>Member since 2023</p>
              <button 
                onClick={onNavigateToEditProfile}
                style={styles.editButton}
                onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
                <Edit size={16} />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <button
              onClick={onNavigateToOrders}
              style={{
                ...styles.statCard,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(251, 191, 36, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Package size={32} style={styles.statIcon} />
              <h3 style={styles.statNumber}>12</h3>
              <p style={styles.statLabel}>Orders</p>
            </button>
          </div>
          <div style={styles.statCard}>
            <button
              onClick={onNavigateToWishlist}
              style={{
                ...styles.statCard,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(251, 191, 36, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Heart size={32} style={styles.statIcon} />
              <h3 style={styles.statNumber}>8</h3>
              <p style={styles.statLabel}>Wishlist Items</p>
            </button>
          </div>
          <div style={styles.statCard}>
            <Star size={32} style={styles.statIcon} />
            <h3 style={styles.statNumber}>12</h3>
            <h3 style={styles.statNumber}>{creditPoints}</h3>
            <p style={styles.statLabel}>CLIQUE Credit Points</p>
          </div>
        </div>

        {/* Personal Information */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Personal Information</h2>
          <div style={styles.infoGrid}>
            <div style={styles.infoItem}>
              <label style={styles.infoLabel}>Email</label>
              <p style={styles.infoValue}>john.doe@example.com</p>
            </div>
            <div style={styles.infoItem}>
              <label style={styles.infoLabel}>Phone</label>
              <p style={styles.infoValue}>+1 (555) 123-4567</p>
            </div>
            <div style={styles.infoItem}>
              <label style={styles.infoLabel}>Preferred Style</label>
              <p style={styles.infoValue}>Contemporary, Minimalist</p>
            </div>
          </div>
        </div>

        {/* Saved Cards */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>
              <CreditCard size={24} style={styles.sectionIcon} /> Saved Cards
            </h2>
            <button 
              onClick={handleAddCard} 
              style={styles.addButton}
              onMouseEnter={(e) => e.target.style.color = '#ffffff'}
              onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
            >
              <Plus size={16} /> Add Card
            </button>
          </div>
          <div style={styles.list}>
            {cards.map((card, index) => (
              <div key={index} style={styles.listItem}>
                <span>{card.number}</span>
                <span style={{color: '#9ca3af'}}>{card.expiry}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Saved UPI IDs */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>
              <Wallet size={24} style={styles.sectionIcon} /> Saved UPI IDs
            </h2>
            <button 
              onClick={handleAddUpi} 
              style={styles.addButton}
              onMouseEnter={(e) => e.target.style.color = '#ffffff'}
              onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
            >
              <Plus size={16} /> Add UPI
            </button>
          </div>
          <div style={styles.list}>
            {upiIds.map((upi, index) => (
              <div key={index} style={styles.listItem}>
                <span>{upi.id}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Saved Addresses */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>
              <MapPin size={24} style={styles.sectionIcon} /> Saved Addresses
            </h2>
            <button 
              onClick={handleAddAddress} 
              style={styles.addButton}
              onMouseEnter={(e) => e.target.style.color = '#ffffff'}
              onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
            >
              <Plus size={16} /> Add Address
            </button>
          </div>
          <div style={styles.list}>
            {addresses.map((addr, index) => (
              <div key={index} style={styles.addressItem}>
                <div style={styles.addressLabel}>{addr.label}:</div>
                <div>{addr.address}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;