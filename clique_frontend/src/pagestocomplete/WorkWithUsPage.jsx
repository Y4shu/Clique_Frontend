import React, { useState } from 'react';
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
    color: '#ffffff'
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
  formContainer: {
    backgroundColor: '#111827',
    borderRadius: '12px',
    padding: '32px',
    border: '1px solid #374151'
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
  select: {
    width: '100%',
    backgroundColor: '#1f2937',
    border: '1px solid #374151',
    borderRadius: '8px',
    padding: '12px 16px',
    color: '#ffffff',
    fontSize: '16px',
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

function WorkWithUsPage({ onNavigateToLanding, onNavigateToCart, onNavigateToAbout, onNavigateToProducts, onNavigateToProfile, isLoggedIn, onToggleMenu }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    experience: '',
    whyWorkWithUs: '',
    additionalMessage: '',
    budget: '',
    howDidYouHear: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>CLIQUE</div>
          
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
          onClick={onNavigateToAbout}
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
          <span>Back to About</span>
        </button>

        {/* Work With Us Content */}
        <div style={styles.heroSection}>
          <h1 style={styles.heroTitle}>
            Let's Work <span style={styles.titleAccent}>Together</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Join our team of passionate creators and help shape the future of fashion. 
            We're always looking for talented individuals who share our vision.
          </p>
        </div>

        {/* Application Form */}
        <div style={styles.formContainer}>
          <form onSubmit={handleSubmit} style={styles.form}>
            {/* Name Fields */}
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

            {/* Company Field */}
            <div style={styles.formGroup}>
              <label htmlFor="company" style={styles.label}>
                Company (or Freelance) *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                style={styles.input}
                placeholder="Your current company or 'Freelance'"
                onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                onBlur={(e) => e.target.style.borderColor = '#374151'}
              />
            </div>

            {/* Experience Field */}
            <div style={styles.formGroup}>
              <label htmlFor="experience" style={styles.label}>
                Resume/Experience *
              </label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                required
                rows="4"
                style={styles.textarea}
                placeholder="Tell us about your professional experience, skills, and background..."
                onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                onBlur={(e) => e.target.style.borderColor = '#374151'}
              ></textarea>
            </div>

            {/* Why Work With Us */}
            <div style={styles.formGroup}>
              <label htmlFor="whyWorkWithUs" style={styles.label}>
                Why do you want to work with us? *
              </label>
              <textarea
                id="whyWorkWithUs"
                name="whyWorkWithUs"
                value={formData.whyWorkWithUs}
                onChange={handleInputChange}
                required
                rows="4"
                style={styles.textarea}
                placeholder="What attracts you to CLIQUE and how do you align with our vision..."
                onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                onBlur={(e) => e.target.style.borderColor = '#374151'}
              ></textarea>
            </div>

            {/* Budget and How Did You Hear */}
            <div style={styles.formRow} className="mobile-flex-col">
              <div style={styles.formGroup}>
                <label htmlFor="budget" style={styles.label}>
                  Budget Expected
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  style={styles.input}
                  placeholder="Your expected compensation"
                  onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                  onBlur={(e) => e.target.style.borderColor = '#374151'}
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="howDidYouHear" style={styles.label}>
                  How did you hear about us?
                </label>
                <select
                  id="howDidYouHear"
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleInputChange}
                  style={styles.select}
                  onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                  onBlur={(e) => e.target.style.borderColor = '#374151'}
                >
                  <option value="">Select an option</option>
                  <option value="social-media">Social Media</option>
                  <option value="website">Website</option>
                  <option value="referral">Referral</option>
                  <option value="job-board">Job Board</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Additional Message */}
            <div style={styles.formGroup}>
              <label htmlFor="additionalMessage" style={styles.label}>
                Additional Message
              </label>
              <textarea
                id="additionalMessage"
                name="additionalMessage"
                value={formData.additionalMessage}
                onChange={handleInputChange}
                rows="3"
                style={styles.textarea}
                placeholder="Any additional information you'd like to share..."
                onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                onBlur={(e) => e.target.style.borderColor = '#374151'}
              ></textarea>
            </div>

            {/* Submit Button */}
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
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WorkWithUsPage;