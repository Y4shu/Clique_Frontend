import React, { useState } from 'react';
import { ArrowLeft, Heart, ShoppingBag, Trash2, Plus } from 'lucide-react';
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
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '32px'
  },
  wishlistSection: {
    display: 'flex',
    flexDirection: 'column'
  },
  pageTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '32px'
  },
  emptyWishlist: {
    textAlign: 'center',
    padding: '64px 0'
  },
  emptyWishlistIcon: {
    width: '64px',
    height: '64px',
    color: '#4b5563',
    margin: '0 auto 16px'
  },
  emptyWishlistTitle: {
    fontSize: '20px',
    fontWeight: '500',
    color: '#9ca3af',
    marginBottom: '8px'
  },
  emptyWishlistText: {
    color: '#6b7280'
  },
  wishlistItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  wishlistItem: {
    backgroundColor: '#111827',
    borderRadius: '12px',
    padding: '24px',
    border: '1px solid #374151'
  },
  itemContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px'
  },
  itemImage: {
    width: '96px',
    height: '96px',
    objectFit: 'cover',
    borderRadius: '8px'
  },
  itemDetails: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  itemName: {
    fontSize: '18px',
    fontWeight: '600'
  },
  itemMeta: {
    display: 'flex',
    gap: '16px',
    fontSize: '14px',
    color: '#9ca3af'
  },
  itemPrice: {
    fontSize: '20px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  itemActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  addToCartButton: {
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
  removeButton: {
    padding: '8px',
    color: '#9ca3af',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s ease'
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  sidebarCard: {
    backgroundColor: '#111827',
    borderRadius: '12px',
    padding: '24px',
    border: '1px solid #374151'
  },
  sidebarTitle: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  sidebarIcon: {
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '12px'
  },
  summaryLabel: {
    color: '#9ca3af'
  },
  summaryValue: {
    color: '#ffffff'
  },
  totalValue: {
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: 'bold'
  },
  actionButton: {
    width: '100%',
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    color: '#000000',
    padding: '12px',
    borderRadius: '8px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    marginTop: '16px',
    transition: 'opacity 0.3s ease'
  },
  secondaryButton: {
    width: '100%',
    border: '2px solid #374151',
    color: '#ffffff',
    padding: '12px',
    borderRadius: '8px',
    fontWeight: '600',
    background: 'transparent',
    cursor: 'pointer',
    marginTop: '8px',
    transition: 'all 0.3s ease'
  }
};

function WishlistPage({ 
  onNavigateToLanding, 
  onNavigateToCart, 
  onNavigateToAbout, 
  onNavigateToProducts, 
  onNavigateToProfile,
  onNavigateToWishlist,
  onNavigateToLogin,
  onNavigateToSignup,
  isLoggedIn, 
  onToggleMenu,
  wishlistItems = [],
  onAddToCart,
  onRemoveFromWishlist,
  onSaveForLater
}) {

  const addAllToCart = () => {
    const inStockItems = wishlistItems.filter(item => item.inStock);
    console.log('Adding all in-stock items to cart:', inStockItems);
    alert(`${inStockItems.length} items added to cart!`);
  };

  const totalValue = wishlistItems.reduce((sum, item) => sum + item.price, 0);
  const inStockCount = wishlistItems.filter(item => item.inStock).length;

  return (
    <div style={styles.container}>
      {/* Header */}
      <Header
        currentPage="wishlist"
        onNavigateToLanding={onNavigateToLanding}
        onNavigateToProducts={onNavigateToProducts}
        onNavigateToAbout={onNavigateToAbout}
        onNavigateToCart={onNavigateToCart}
        onNavigateToProfile={onNavigateToProfile}
        onNavigateToWishlist={onNavigateToWishlist}
        onNavigateToLogin={onNavigateToLogin}
        onNavigateToSignup={onNavigateToSignup}
        isLoggedIn={isLoggedIn}
        onToggleMenu={onToggleMenu}
        cartCount={0}
        wishlistCount={wishlistItems.length}
      />

      <div style={styles.mainContent}>
        {/* Back button and title */}
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
          <span>Continue Shopping</span>
        </button>

        <div style={styles.contentGrid} className="mobile-flex-col">
          {/* Wishlist Items */}
          <div style={styles.wishlistSection}>
            <h1 style={styles.pageTitle}>My Wishlist</h1>
            
            {wishlistItems.length === 0 ? (
              <div style={styles.emptyWishlist}>
                <Heart style={styles.emptyWishlistIcon} />
                <h3 style={styles.emptyWishlistTitle}>Your wishlist is empty</h3>
                <p style={styles.emptyWishlistText}>Save items you love for later</p>
              </div>
            ) : (
              <div style={styles.wishlistItems}>
                {wishlistItems.map((item) => (
                  <div key={item.id} style={styles.wishlistItem}>
                    <div style={styles.itemContent}>
                      <img 
                        src={item.image} 
                        alt={item.name}
                        style={styles.itemImage}
                      />
                      
                      <div style={styles.itemDetails}>
                        <h3 style={styles.itemName}>{item.name}</h3>
                        <div style={styles.itemMeta}>
                          <span>Size: {item.size}</span>
                          <span>Color: {item.color}</span>
                          <span style={{color: item.inStock ? '#10b981' : '#ef4444'}}>
                            {item.inStock ? 'In Stock' : 'Out of Stock'}
                          </span>
                        </div>
                        <p style={styles.itemPrice}>${item.price}</p>
                      </div>

                      <div style={styles.itemActions}>
                        <button
                          onClick={() => onAddToCart(item)}
                          disabled={!item.inStock}
                          style={{
                            ...styles.addToCartButton,
                            opacity: item.inStock ? 1 : 0.5,
                            cursor: item.inStock ? 'pointer' : 'not-allowed'
                          }}
                          onMouseEnter={(e) => {
                            if (item.inStock) e.target.style.opacity = '0.9';
                          }}
                          onMouseLeave={(e) => {
                            if (item.inStock) e.target.style.opacity = '1';
                          }}
                        >
                          <ShoppingBag size={16} />
                          <span>Add to Cart</span>
                        </button>

                        {!item.inStock && (
                          <button
                            onClick={() => onSaveForLater(item)}
                            style={{
                              ...styles.addToCartButton,
                              background: 'transparent',
                              border: '2px solid #374151',
                              color: '#ffffff'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.borderColor = 'hsl(45, 100%, 85%)';
                              e.target.style.color = 'hsl(45, 100%, 85%)';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.borderColor = '#374151';
                              e.target.style.color = '#ffffff';
                            }}
                          >
                            <span>Save for Later</span>
                          </button>
                        )}

                        <button
                          onClick={() => onRemoveFromWishlist(item.id)}
                          style={styles.removeButton}
                          onMouseEnter={(e) => e.target.style.color = '#ef4444'}
                          onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div style={styles.sidebar}>
            {/* Wishlist Summary */}
            <div style={styles.sidebarCard}>
              <h3 style={styles.sidebarTitle}>
                <Heart size={20} style={styles.sidebarIcon} />
                Wishlist Summary
              </h3>
              <div>
                <div style={styles.summaryRow}>
                  <span style={styles.summaryLabel}>Total Items</span>
                  <span style={styles.summaryValue}>{wishlistItems.length}</span>
                </div>
                <div style={styles.summaryRow}>
                  <span style={styles.summaryLabel}>In Stock</span>
                  <span style={styles.summaryValue}>{inStockCount}</span>
                </div>
                <div style={styles.summaryRow}>
                  <span style={styles.summaryLabel}>Total Value</span>
                  <span style={styles.totalValue}>${totalValue.toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={addAllToCart}
                disabled={inStockCount === 0}
                style={{
                  ...styles.actionButton,
                  opacity: inStockCount > 0 ? 1 : 0.5,
                  cursor: inStockCount > 0 ? 'pointer' : 'not-allowed'
                }}
                onMouseEnter={(e) => {
                  if (inStockCount > 0) e.target.style.opacity = '0.9';
                }}
                onMouseLeave={(e) => {
                  if (inStockCount > 0) e.target.style.opacity = '1';
                }}
              >
                Add All to Cart ({inStockCount})
              </button>

              <button 
                onClick={onNavigateToProducts}
                style={styles.secondaryButton}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'hsl(45, 100%, 85%)';
                  e.target.style.background = 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)';
                  e.target.style.color = '#000000';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#374151';
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#ffffff';
                }}
              >
                Continue Shopping
              </button>
            </div>

            {/* Recently Viewed */}
            <div style={styles.sidebarCard}>
              <h3 style={styles.sidebarTitle}>
                Recently Viewed
              </h3>
              <p style={{color: '#9ca3af', fontSize: '14px'}}>
                Items you've recently looked at will appear here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistPage;