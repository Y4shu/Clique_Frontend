import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Search, User, ShoppingBag, Menu, Heart } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from './assets/clique_logo.png';
import './styles/Header.css';

function Header({ cartCount = 3, wishlistCount = 3, loggedin = false, menumove }) {
  const navigate = useNavigate();
  const location = useLocation();

  const currentpath = useMemo(() => {
    const path = location.pathname === '/' ? 'home' : location.pathname.slice(1);
    return path || 'home';
  }, [location.pathname]);

  const safenav = (path) => {
    if (typeof path === 'string') {
      try {
        navigate(path);
      } catch (error) {
        console.error(`Navigation error: ${path}`, error);
      }
    }
  };

  const activated = (page) => currentpath === page;
  const navbclasss = (page) => `navLink${activated(page) ? ' act' : ''}`;
  const iconclass = (page) => `iconb${activated(page) ? ' aicon' : ''}`;

  return (
    <header className="header">
      <div className="headercontent">
        <div
          className="logo"
          onClick={() => safenav('/')}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          <img src={logo} alt="CLIQUE Logo" className="logoImage" />
          CLIQUE
        </div>

        <nav className="nav hiddenm">
          <div className="navlinks">
            {['home', 'products', 'about', 'cart'].map((page) => (
              <button
                key={page}
                className={navbclasss(page)}
                onClick={() => safenav(`/${page === 'home' ? '' : page}`)}
                onMouseEnter={(e) => !activated(page) && (e.currentTarget.style.color = '#f9fafb')}
                onMouseLeave={(e) => !activated(page) && (e.currentTarget.style.color = '#ffffff')}
                style={{ cursor: activated(page) ? 'default' : 'pointer' }}
              >
                {page === 'about' ? 'About Us' : page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </div>
        </nav>

        <div className="headerActions">
          <button className="iconb" onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>
            <Search size={20} />
          </button>

          <button onClick={() => safenav('/wishlist')} className={iconclass('wishlist')}>
            <Heart size={20} />
            <span className="cartthingy">{wishlistCount}</span>
          </button>

          <button onClick={() => safenav('/profile')} className={iconclass('profile')}>
            <User size={20} />
          </button>

          <button onClick={() => safenav('/cart')} className={iconclass('cart')}>
            <ShoppingBag size={20} />
            <span className="cartthingy">{cartCount}</span>
          </button>

          {loggedin ? (
            <button onClick={menumove} className="iconb" onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>
              <Menu size={20} />
            </button>
          ) : (
            <>
              <button onClick={() => safenav('/login')} className="authibutton">Login</button>
              <button onClick={() => safenav('/signup')} className="signUpButton">Sign up</button>
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
  menumove: PropTypes.func,
};

export default Header;