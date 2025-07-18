import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
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
  heroSection: {
    textAlign: 'center',
    marginBottom: '48px'
  },
  heroTitle: {
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
  heroSubtitle: {
    color: '#9ca3af',
    fontSize: '18px',
    maxWidth: '512px',
    margin: '0 auto',
    lineHeight: '1.6'
  },
  contactContainer: {
    backgroundColor: '#111827',
    borderRadius: '12px',
    padding: '32px',
    border: '1px solid #374151'
  },
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '48px'
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  },
  contactInfoTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '24px'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  contactIcon: {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: '600',
    color: '#000000'
  },
  contactDetails: {
    display: 'flex',
    flexDirection: 'column'
  },
  contactLabel: {
    color: '#9ca3af',
    fontSize: '14px'
  },
  contactValue: {
    color: '#ffffff'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#d1d5db',
    marginBottom: '8px'
  },
  input: {
    width: '100%',
    backgroundColor: '#1f2937',
    border: '1px solid #374151',
    borderRadius: '8px',
    padding: '12px 16px',
    color: '#ffffff',
    fontSize: '16px',
    transition: 'border-color 0.3s ease'
  },
  textarea: {
    width: '100%',
    backgroundColor: '#1f2937',
    border: '1px solid #374151',
    borderRadius: '8px',
    padding: '12px 16px',
    color: '#ffffff',
    fontSize: '16px',
    resize: 'none',
    transition: 'border-color 0.3s ease'
  },
  submitButton: {
    width: '100%',
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    color: '#000000',
    padding: '12px',
    borderRadius: '8px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }
};

function ContactPage({ 
  onNavigateToLanding, 
  onNavigateToCart, 
  onNavigateToAbout, 
  onNavigateToProducts, 
  onNavigateToProfile, 
  isLoggedIn, 
  onToggleMenu 
}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <Header
        currentPage="contact"
        onNavigateToLanding={onNavigateToLanding}
        onNavigateToProducts={onNavigateToProducts}
        onNavigateToAbout={onNavigateToAbout}
        onNavigateToCart={onNavigateToCart}
        onNavigateToProfile={onNavigateToProfile}
        isLoggedIn={isLoggedIn}
        onToggleMenu={onToggleMenu}
        cartCount={3}
      />

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

        {/* Contact Us Content */}
        <div style={styles.heroSection}>
          <h1 style={styles.heroTitle}>
            Get in <span style={styles.titleAccent}>Touch</span>
          </h1>
          <p style={styles.heroSubtitle}>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div style={styles.contactContainer}>
          <div style={styles.contactGrid} className="mobile-flex-col">
            {/* Contact Info */}
            <div style={styles.contactInfo}>
              <div>
                <h3 style={styles.contactInfoTitle}>Contact Information</h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                  <div style={styles.contactItem}>
                    <div style={styles.contactIcon}>📧</div>
                    <div style={styles.contactDetails}>
                      <p style={styles.contactLabel}>Email</p>
                      <p style={styles.contactValue}>blahblah@clique.com</p>
                    </div>
                  </div>
                  <div style={styles.contactItem}>
                    <div style={styles.contactIcon}>📞</div>
                    <div style={styles.contactDetails}>
                      <p style={styles.contactLabel}>Phone</p>
                      <p style={styles.contactValue}>+91 4778349067</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form style={styles.form} onSubmit={handleSubmit}>
                <div style={styles.formRow} className="mobile-flex-col">
                  <div style={styles.formGroup}>
                    <label htmlFor="firstName" style={styles.label}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      style={styles.input}
                      placeholder="Your first name"
                      onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                      onBlur={(e) => e.target.style.borderColor = '#374151'}
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label htmlFor="lastName" style={styles.label}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      style={styles.input}
                      placeholder="Your last name"
                      onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                      onBlur={(e) => e.target.style.borderColor = '#374151'}
                    />
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label htmlFor="email" style={styles.label}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={styles.input}
                    placeholder="your.email@example.com"
                    onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                    onBlur={(e) => e.target.style.borderColor = '#374151'}
                  />
                </div>

                <div style={styles.formGroup}>
                  <label htmlFor="message" style={styles.label}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    style={styles.textarea}
                    placeholder="Tell us how we can help you..."
                    onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                    onBlur={(e) => e.target.style.borderColor = '#374151'}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  style={styles.submitButton}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = '0.9';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = '1';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;