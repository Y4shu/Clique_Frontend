import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Search, User, ShoppingBag, Menu, Heart } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from './assets/clique_logo.png';
import '.styles/Header.css';

function NavButton({ path, label, currentPath, navigate }) {
  const active = currentPath === path;

  return (
    <button
      onClick={() => navigate(`/${path}`)}
      className={active ? 'navLink active' : 'navspeclink'}
      onMouseEnter={(e) => { if (!active) e.target.style.color = '#f9fafb'; }}
      onMouseLeave={(e) => { if (!active) e.target.style.color = '#ffffff'; }}
      style={{ cursor: active ? 'default' : 'pointer' }}
    >
      {label}
    </button>
  );
}

function Header({ cartCount = 3, wishlistCount = 3, loggedin = false, menumove }) {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = useMemo(() => location.pathname === '/' ? 'home' : location.pathname.slice(1), [location.pathname]);

  const iconClass = (page) => currentPath === page ? 'iconb aicon' : 'iconb';

  return (
    <header className="header">
      <div className="headercontent">

        <div
          className="logo"
          onClick={() => navigate('/')}
          onMouseEnter={(e) => e.target.style.opacity = '0.8'}
          onMouseLeave={(e) => e.target.style.opacity = '1'}
        >
          <img src={logo} alt="CLIQUE Logo" className="logoImage" />
          CLIQUE
        </div>

        <nav className="nav hiddenm">
          <div className="navlinks">
            <NavButton path="home" label="Home" currentPath={currentPath} navigate={navigate} />
            <NavButton path="products" label="Products" currentPath={currentPath} navigate={navigate} />
            <NavButton path="about" label="About Us" currentPath={currentPath} navigate={navigate} />
            <NavButton path="cart" label="Cart" currentPath={currentPath} navigate={navigate} />
          </div>
        </nav>

        <div className="headerActions">
          <button className="iconb" onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>
            <Search size={20} />
          </button>

          <button onClick={() => navigate('/wishlist')} className={iconClass('wishlist')}>
            <Heart size={20} />
            <span className="cartthingy">{wishlistCount}</span>
          </button>

          <button onClick={() => navigate('/profile')} className={iconClass('profile')}>
            <User size={20} />
          </button>

          <button onClick={() => navigate('/cart')} className={iconClass('cart')}>
            <ShoppingBag size={20} />
            <span className="cartthingy">{cartCount}</span>
          </button>

          {loggedin ? (
            <button onClick={menumove} className="iconb" onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>
              <Menu size={20} />
            </button>
          ) : (
            <>
              <button onClick={() => navigate('/login')} className="authibutton">Login</button>
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
  menumove: PropTypes.func
};

export default Header; 
export { NavButton };
