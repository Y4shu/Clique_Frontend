import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#000000',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '32px 16px'
  },
  formContainer: {
    backgroundColor: '#111827',
    borderRadius: '12px',
    padding: '48px',
    border: '1px solid #374151',
    width: '100%',
    maxWidth: '400px'
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
  logo: {
    textAlign: 'center',
    marginBottom: '32px'
  },
  logoText: {
    fontSize: '32px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '32px'
  },
  googleButton: {
    width: '100%',
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '12px',
    borderRadius: '8px',
    fontWeight: '600',
    border: '1px solid #374151',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginBottom: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontSize: '16px'
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    margin: '24px 0',
    color: '#9ca3af'
  },
  dividerLine: {
    flex: 1,
    height: '1px',
    backgroundColor: '#374151'
  },
  dividerText: {
    padding: '0 16px',
    fontSize: '14px',
    fontWeight: '500'
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
  submitButton: {
    width: '100%',
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    color: '#000000',
    padding: '12px',
    borderRadius: '8px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '16px'
  },
  switchText: {
    textAlign: 'center',
    color: '#9ca3af',
    marginTop: '24px'
  },
  switchLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: '500',
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    cursor: 'pointer'
  }
};

function SignupPage({ onNavigateToLanding, onLogin, onNavigateToLogin }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (formData.firstName && formData.lastName && formData.email && formData.password) {
      onLogin(); // Auto-login after successful signup
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleGoogleSignup = () => {
    // Placeholder for Google signup functionality
    console.log('Google signup clicked');
    // You can integrate with Google OAuth here
    alert('Google signup functionality would be implemented here');
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
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

        <div style={styles.logo}>
          <div style={styles.logoText}>CLIQUE</div>
        </div>

        <h1 style={styles.title}>Create Account</h1>

        <button
          onClick={handleGoogleSignup}
          style={styles.googleButton}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#f9fafb';
            e.target.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#ffffff';
            e.target.style.transform = 'scale(1)';
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
        </button>

        <div style={styles.divider}>
          <div style={styles.dividerLine}></div>
          <span style={styles.dividerText}>OR</span>
          <div style={styles.dividerLine}></div>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label htmlFor="firstName" style={styles.label}>
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                style={styles.input}
                placeholder="First name"
                onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                onBlur={(e) => e.target.style.borderColor = '#374151'}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="lastName" style={styles.label}>
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                style={styles.input}
                placeholder="Last name"
                onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                onBlur={(e) => e.target.style.borderColor = '#374151'}
              />
            </div>
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              Email
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
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              style={styles.input}
              placeholder="Create a password"
              onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
              onBlur={(e) => e.target.style.borderColor = '#374151'}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="confirmPassword" style={styles.label}>
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              style={styles.input}
              placeholder="Confirm your password"
              onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
              onBlur={(e) => e.target.style.borderColor = '#374151'}
            />
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
            Create Account
          </button>
        </form>

        <div style={styles.switchText}>
          Already have an account?{' '}
          <span 
            onClick={onNavigateToLogin}
            style={styles.switchLink}
            onMouseEnter={(e) => e.target.style.opacity = '0.8'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            Sign in
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;