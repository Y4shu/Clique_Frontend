import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Search, User, ShoppingBag, Menu, Heart } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from './assets/clique_logo.png';
import './Header.css';

function NavButton({ path, label, currentPath, navigate }) {
  const isActive = currentPath === path;

  return (
    <button
      onClick={() => navigate(`/${path}`)}
      className={isActive ? 'navLink active' : 'navLink'}
      onMouseEnter={(e) => { if (!isActive) e.target.style.color = '#f9fafb'; }}
      onMouseLeave={(e) => { if (!isActive) e.target.style.color = '#ffffff'; }}
      style={{ cursor: isActive ? 'default' : 'pointer' }}
    >
      {label}
    </button>
  );
}

function Header({ cartCount = 3, wishlistCount = 3, loggedin = false, onToggleMenu }) {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = useMemo(() => location.pathname === '/' ? 'home' : location.pathname.slice(1), [location.pathname]);

  const iconClass = (page) => currentPath === page ? 'iconButton activeIcon' : 'iconButton';

  return (
    <header className="header">
      <div className="headerContent">

        <div
          className="logo"
          onClick={() => navigate('/')}
          onMouseEnter={(e) => e.target.style.opacity = '0.8'}
          onMouseLeave={(e) => e.target.style.opacity = '1'}
        >
          <img src={logo} alt="CLIQUE Logo" className="logoImage" />
          CLIQUE
        </div>

        <nav className="nav mobile-hidden">
          <div className="navLinks">
            <NavButton path="home" label="Home" currentPath={currentPath} navigate={navigate} />
            <NavButton path="products" label="Products" currentPath={currentPath} navigate={navigate} />
            <NavButton path="about" label="About Us" currentPath={currentPath} navigate={navigate} />
            <NavButton path="cart" label="Cart" currentPath={currentPath} navigate={navigate} />
          </div>
        </nav>

        <div className="headerActions">
          <button className="iconButton" onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>
            <Search size={20} />
          </button>

          <button onClick={() => navigate('/wishlist')} className={iconClass('wishlist')}>
            <Heart size={20} />
            <span className="cartBadge">{wishlistCount}</span>
          </button>

          <button onClick={() => navigate('/profile')} className={iconClass('profile')}>
            <User size={20} />
          </button>

          <button onClick={() => navigate('/cart')} className={iconClass('cart')}>
            <ShoppingBag size={20} />
            <span className="cartBadge">{cartCount}</span>
          </button>

          {loggedin ? (
            <button onClick={onToggleMenu} className="iconButton" onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>
              <Menu size={20} />
            </button>
          ) : (
            <>
              <button onClick={() => navigate('/login')} className="authButton">Login</button>
              <button onClick={() => navigate('/signup')} className="signUpButton">Sign up</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  cartCount: PropTypes.number,
  wishlistCount: PropTypes.number,
  loggedin: PropTypes.bool,
  onToggleMenu: PropTypes.func
};

export default Header; 
export { NavButton };
