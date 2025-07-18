import React, { useState } from 'react';
import { ArrowLeft, Package, Truck, CheckCircle, Clock, Eye, RotateCcw } from 'lucide-react';
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
  pageTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '32px'
  },
  filterTabs: {
    display: 'flex',
    gap: '16px',
    marginBottom: '32px',
    borderBottom: '1px solid #374151',
    paddingBottom: '16px'
  },
  filterTab: {
    padding: '8px 16px',
    background: 'none',
    border: 'none',
    color: '#9ca3af',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    borderRadius: '8px'
  },
  activeTab: {
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: '600'
  },
  ordersGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  orderCard: {
    backgroundColor: '#111827',
    borderRadius: '12px',
    padding: '24px',
    border: '1px solid #374151'
  },
  orderHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '16px'
  },
  orderInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  orderNumber: {
    fontSize: '18px',
    fontWeight: '600'
  },
  orderDate: {
    color: '#9ca3af',
    fontSize: '14px'
  },
  orderStatus: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '500'
  },
  statusDelivered: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    color: '#10b981'
  },
  statusShipped: {
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    color: '#3b82f6'
  },
  statusProcessing: {
    backgroundColor: 'rgba(251, 191, 36, 0.1)',
    color: '#fbbf24'
  },
  statusCancelled: {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    color: '#ef4444'
  },
  orderItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '16px'
  },
  orderItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '12px',
    backgroundColor: '#1f2937',
    borderRadius: '8px'
  },
  itemImage: {
    width: '60px',
    height: '60px',
    objectFit: 'cover',
    borderRadius: '6px'
  },
  itemDetails: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  itemName: {
    fontSize: '16px',
    fontWeight: '500'
  },
  itemMeta: {
    fontSize: '14px',
    color: '#9ca3af'
  },
  itemPrice: {
    fontSize: '16px',
    fontWeight: '600',
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  orderFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '16px',
    borderTop: '1px solid #374151'
  },
  orderTotal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  totalLabel: {
    color: '#9ca3af',
    fontSize: '14px'
  },
  totalAmount: {
    fontSize: '20px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  orderActions: {
    display: 'flex',
    gap: '12px'
  },
  actionButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  primaryAction: {
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    color: '#000000'
  },
  secondaryAction: {
    border: '1px solid #374151',
    color: '#d1d5db',
    background: 'transparent'
  },
  emptyState: {
    textAlign: 'center',
    padding: '64px 0'
  },
  emptyIcon: {
    width: '64px',
    height: '64px',
    color: '#4b5563',
    margin: '0 auto 16px'
  },
  emptyTitle: {
    fontSize: '20px',
    fontWeight: '500',
    color: '#9ca3af',
    marginBottom: '8px'
  },
  emptyText: {
    color: '#6b7280'
  }
};

function OrdersPage({ 
  onNavigateToLanding, 
  onNavigateToCart, 
  onNavigateToAbout, 
  onNavigateToProducts, 
  onNavigateToProfile,
  isLoggedIn, 
  onToggleMenu 
}) {
  const [activeFilter, setActiveFilter] = useState('all');

  const orders = [
    {
      id: 'ORD-2025-001',
      date: '2025-01-15',
      status: 'delivered',
      total: 449.97,
      items: [
        {
          id: 1,
          name: 'Premium Leather Jacket',
          price: 299.99,
          quantity: 1,
          image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
          size: 'M',
          color: 'Black'
        },
        {
          id: 2,
          name: 'Designer Silk Scarf',
          price: 89.99,
          quantity: 1,
          image: 'https://images.pexels.com/photos/6069116/pexels-photo-6069116.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
          size: 'One Size',
          color: 'Navy'
        }
      ]
    },
    {
      id: 'ORD-2025-002',
      date: '2025-01-12',
      status: 'shipped',
      total: 199.99,
      items: [
        {
          id: 3,
          name: 'Elegant Evening Dress',
          price: 199.99,
          quantity: 1,
          image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
          size: 'S',
          color: 'Black'
        }
      ]
    },
    {
      id: 'ORD-2025-003',
      date: '2025-01-10',
      status: 'processing',
      total: 379.98,
      items: [
        {
          id: 4,
          name: 'Luxury Handbag',
          price: 299.99,
          quantity: 1,
          image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
          size: 'One Size',
          color: 'Brown'
        },
        {
          id: 5,
          name: 'Statement Necklace',
          price: 79.99,
          quantity: 1,
          image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
          size: 'One Size',
          color: 'Gold'
        }
      ]
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered': return <CheckCircle size={16} />;
      case 'shipped': return <Truck size={16} />;
      case 'processing': return <Clock size={16} />;
      case 'cancelled': return <RotateCcw size={16} />;
      default: return <Package size={16} />;
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'delivered': return { ...styles.orderStatus, ...styles.statusDelivered };
      case 'shipped': return { ...styles.orderStatus, ...styles.statusShipped };
      case 'processing': return { ...styles.orderStatus, ...styles.statusProcessing };
      case 'cancelled': return { ...styles.orderStatus, ...styles.statusCancelled };
      default: return styles.orderStatus;
    }
  };

  const filteredOrders = activeFilter === 'all' 
    ? orders 
    : orders.filter(order => order.status === activeFilter);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <Header
        currentPage="orders"
        onNavigateToLanding={onNavigateToLanding}
        onNavigateToProducts={onNavigateToProducts}
        onNavigateToAbout={onNavigateToAbout}
        onNavigateToCart={onNavigateToCart}
        onNavigateToProfile={onNavigateToProfile}
        isLoggedIn={isLoggedIn}
        onToggleMenu={onToggleMenu}
        cartCount={3}
        wishlistCount={8}
      />

      <div style={styles.mainContent}>
        {/* Back button */}
        <button 
          onClick={onNavigateToProfile}
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
          <span>Back to Profile</span>
        </button>

        <h1 style={styles.pageTitle}>My Orders</h1>

        {/* Filter Tabs */}
        <div style={styles.filterTabs}>
          {['all', 'processing', 'shipped', 'delivered'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                ...styles.filterTab,
                ...(activeFilter === filter ? styles.activeTab : {})
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== filter) e.target.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== filter) e.target.style.color = '#9ca3af';
              }}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <div style={styles.emptyState}>
            <Package style={styles.emptyIcon} />
            <h3 style={styles.emptyTitle}>No orders found</h3>
            <p style={styles.emptyText}>
              {activeFilter === 'all' 
                ? "You haven't placed any orders yet" 
                : `No ${activeFilter} orders found`}
            </p>
          </div>
        ) : (
          <div style={styles.ordersGrid}>
            {filteredOrders.map((order) => (
              <div key={order.id} style={styles.orderCard}>
                {/* Order Header */}
                <div style={styles.orderHeader}>
                  <div style={styles.orderInfo}>
                    <div style={styles.orderNumber}>Order {order.id}</div>
                    <div style={styles.orderDate}>Placed on {formatDate(order.date)}</div>
                  </div>
                  <div style={getStatusStyle(order.status)}>
                    {getStatusIcon(order.status)}
                    <span>{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span>
                  </div>
                </div>

                {/* Order Items */}
                <div style={styles.orderItems}>
                  {order.items.map((item) => (
                    <div key={item.id} style={styles.orderItem}>
                      <img 
                        src={item.image} 
                        alt={item.name}
                        style={styles.itemImage}
                      />
                      <div style={styles.itemDetails}>
                        <div style={styles.itemName}>{item.name}</div>
                        <div style={styles.itemMeta}>
                          Size: {item.size} • Color: {item.color} • Qty: {item.quantity}
                        </div>
                      </div>
                      <div style={styles.itemPrice}>${item.price}</div>
                    </div>
                  ))}
                </div>

                {/* Order Footer */}
                <div style={styles.orderFooter}>
                  <div style={styles.orderActions}>
                    <button 
                      style={{...styles.actionButton, ...styles.secondaryAction}}
                      onMouseEnter={(e) => {
                        e.target.style.borderColor = 'hsl(45, 100%, 85%)';
                        e.target.style.color = 'hsl(45, 100%, 85%)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderColor = '#374151';
                        e.target.style.color = '#d1d5db';
                      }}
                    >
                      <Eye size={14} />
                      View Details
                    </button>
                    {order.status === 'delivered' && (
                      <button 
                        style={{...styles.actionButton, ...styles.primaryAction}}
                        onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                        onMouseLeave={(e) => e.target.style.opacity = '1'}
                      >
                        <RotateCcw size={14} />
                        Reorder
                      </button>
                    )}
                  </div>
                  <div style={styles.orderTotal}>
                    <div style={styles.totalLabel}>Total</div>
                    <div style={styles.totalAmount}>${order.total.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default OrdersPage;