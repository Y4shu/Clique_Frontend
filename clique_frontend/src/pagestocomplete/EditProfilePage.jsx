import React, { useState } from 'react';
import { ArrowLeft, Save, User, Mail, Phone, MapPin, Calendar } from 'lucide-react';
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
  pageTitle: {
    fontSize: '36px',
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
  formContainer: {
    backgroundColor: '#111827',
    borderRadius: '12px',
    padding: '32px',
    border: '1px solid #374151'
  },
  avatarSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '32px'
  },
  avatar: {
    width: '120px',
    height: '120px',
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px'
  },
  changePhotoButton: {
    color: '#d1d5db',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    textDecoration: 'underline',
    transition: 'color 0.3s ease'
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
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  labelIcon: {
    color: '#9ca3af'
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
  buttonGroup: {
    display: 'flex',
    gap: '16px',
    marginTop: '16px'
  },
  saveButton: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    color: '#000000',
    padding: '12px',
    borderRadius: '8px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  cancelButton: {
    flex: 1,
    border: '2px solid #374151',
    color: '#ffffff',
    padding: '12px',
    borderRadius: '8px',
    fontWeight: '600',
    background: 'transparent',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }
};

function EditProfilePage({ 
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
  onUpdateProfile
}) {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1990-05-15',
    gender: 'male',
    address: '123 Fashion Street',
    city: 'Style City',
    state: 'SC',
    zipCode: '12345',
    country: 'United States',
    preferredStyle: 'Contemporary, Minimalist',
    bio: 'Fashion enthusiast with a passion for contemporary and minimalist styles.'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would save to backend
    console.log('Profile updated:', formData);
    if (onUpdateProfile) {
      onUpdateProfile(formData);
    }
    alert('Profile updated successfully!');
    onNavigateToProfile();
  };

  const handleCancel = () => {
    onNavigateToProfile();
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <Header
        currentPage="edit-profile"
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

        <h1 style={styles.pageTitle}>
          Edit <span style={styles.titleAccent}>Profile</span>
        </h1>

        <div style={styles.formContainer}>
          {/* Avatar Section */}
          <div style={styles.avatarSection}>
            <div style={styles.avatar}>
              <User size={60} color="#000000" />
            </div>
            <button 
              style={styles.changePhotoButton}
              onMouseEnter={(e) => e.target.style.color = '#ffffff'}
              onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
            >
              Change Profile Photo
            </button>
          </div>

          {/* Edit Form */}
          <form onSubmit={handleSubmit} style={styles.form}>
            {/* Name Fields */}
            <div style={styles.formRow} className="mobile-flex-col">
              <div style={styles.formGroup}>
                <label htmlFor="firstName" style={styles.label}>
                  <User size={16} style={styles.labelIcon} />
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
                  onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                  onBlur={(e) => e.target.style.borderColor = '#374151'}
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="lastName" style={styles.label}>
                  <User size={16} style={styles.labelIcon} />
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
                  onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                  onBlur={(e) => e.target.style.borderColor = '#374151'}
                />
              </div>
            </div>

            {/* Contact Fields */}
            <div style={styles.formRow} className="mobile-flex-col">
              <div style={styles.formGroup}>
                <label htmlFor="email" style={styles.label}>
                  <Mail size={16} style={styles.labelIcon} />
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
                  onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                  onBlur={(e) => e.target.style.borderColor = '#374151'}
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="phone" style={styles.label}>
                  <Phone size={16} style={styles.labelIcon} />
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={styles.input}
                  onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                  onBlur={(e) => e.target.style.borderColor = '#374151'}
                />
              </div>
            </div>

            {/* Personal Details */}
            <div style={styles.formRow} className="mobile-flex-col">
              <div style={styles.formGroup}>
                <label htmlFor="dateOfBirth" style={styles.label}>
                  <Calendar size={16} style={styles.labelIcon} />
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  style={styles.input}
                  onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                  onBlur={(e) => e.target.style.borderColor = '#374151'}
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="gender" style={styles.label}>
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  style={styles.select}
                  onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                  onBlur={(e) => e.target.style.borderColor = '#374151'}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
            </div>

            {/* Address Fields */}
            <div style={styles.formGroup}>
              <label htmlFor="address" style={styles.label}>
                <MapPin size={16} style={styles.labelIcon} />
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                style={styles.input}
                placeholder="Street address"
                onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                onBlur={(e) => e.target.style.borderColor = '#374151'}
              />
            </div>

            <div style={styles.formRow} className="mobile-flex-col">
              <div style={styles.formGroup}>
                <label htmlFor="city" style={styles.label}>
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  style={styles.input}
                  onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                  onBlur={(e) => e.target.style.borderColor = '#374151'}
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="state" style={styles.label}>
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  style={styles.input}
                  onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                  onBlur={(e) => e.target.style.borderColor = '#374151'}
                />
              </div>
            </div>

            <div style={styles.formRow} className="mobile-flex-col">
              <div style={styles.formGroup}>
                <label htmlFor="zipCode" style={styles.label}>
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  style={styles.input}
                  onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                  onBlur={(e) => e.target.style.borderColor = '#374151'}
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="country" style={styles.label}>
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  style={styles.input}
                  onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                  onBlur={(e) => e.target.style.borderColor = '#374151'}
                />
              </div>
            </div>

            {/* Preferences */}
            <div style={styles.formGroup}>
              <label htmlFor="preferredStyle" style={styles.label}>
                Preferred Style
              </label>
              <input
                type="text"
                id="preferredStyle"
                name="preferredStyle"
                value={formData.preferredStyle}
                onChange={handleInputChange}
                style={styles.input}
                placeholder="e.g., Contemporary, Minimalist, Vintage"
                onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                onBlur={(e) => e.target.style.borderColor = '#374151'}
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="bio" style={styles.label}>
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                rows="3"
                style={styles.textarea}
                placeholder="Tell us about yourself..."
                onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                onBlur={(e) => e.target.style.borderColor = '#374151'}
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div style={styles.buttonGroup}>
              <button
                type="button"
                onClick={handleCancel}
                style={styles.cancelButton}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'hsl(45, 100%, 85%)';
                  e.target.style.color = 'hsl(45, 100%, 85%)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#374151';
                  e.target.style.color = '#ffffff';
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={styles.saveButton}
                onMouseEnter={(e) => {
                  e.target.style.opacity = '0.9';
                  e.target.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = '1';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <Save size={16} />
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfilePage;