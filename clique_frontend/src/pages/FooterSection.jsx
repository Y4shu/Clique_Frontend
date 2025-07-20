import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './styles/FooterSection.css';

function FooterSection({ loggedin, menumove }) {
  const navigate = useNavigate();

  const safenav = (path) => {
    if (typeof path === 'string') {
      try {
        navigate(path);
      } catch (e) {
        console.error('Footer navigation error:', e);
      }
    } else {
      console.warn('Invalid navigation path:', path);
    }
  };
//mc compile
  const footerData = [
    {
      title: 'WHO ARE WE',
      links: [
        { label: 'About Us', path: '/about' },
        { label: 'Careers', path: '/careers' },
        { label: 'Press', path: '/press' },
      ],
    },
    {
      title: 'HELP',
      links: [
        { label: 'Shipping & Return Policy', path: '/shipping' },
        { label: 'Get in Touch', path: '/contact' },
        { label: 'Terms & Conditions', path: '/terms' },
        { label: 'Privacy Policy', path: '/privacy' },
      ],
    },
    {
      title: 'QUICKLINKS',
      links: [
        { label: 'Offers', path: '/offers' },
        { label: 'Sitemap', path: '/sitemap' },
        { label: 'Style Files', path: '/style-files' },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="topSection">
        <div className="topContent">
          <div className="downloadSection">
            <h3 className="downloadTitle">DOWNLOAD OUR APP</h3>
            <div className="appButtons">
              <img
                src="/images/google-play-badge.svg"
                alt="Google Play"
                className="appButton"
              />
              <img
                src="/images/app-store-badge.svg"
                alt="App Store"
                className="appButton"
              />
            </div>
          </div>

          <div className="helpSection">
            <h3 className="helpTitle">FOR ANY HELP, YOU MAY CALL US AT</h3>
            <div className="helpPhone">+91 4778349067</div>
            <div className="helpHours">
              (Mon to Sat: 10am to 10pm, Sun: 10am to 7pm)
            </div>
          </div>
        </div>
      </div>

      <div className="mainFooter">
        <div className="footerGrid">
          {footerData.map((col) => (
            <div key={col.title} className="footerColumn">
              <h4 className="columnTitle">{col.title}</h4>
              <div className="columnLinks">
                {col.links.map((lnk) => (
                  <button
                    key={lnk.path}
                    className={`footerLink ${
                      lnk.label === 'Get in Touch' ? 'contactHighlight' : ''
                    }`}
                    onClick={() => safenav(lnk.path)}
                  >
                    {lnk.label}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="footerColumn">
            <h4 className="columnTitle">FOLLOW US</h4>
            <div className="socialLinks">
              <button
                onClick={() =>
                  window.open('https://instagram.com', '_blank', 'noopener noreferrer')
                }
                className="socialIcon"
                aria-label="Instagram"
              >
                📷
              </button>
              <button
                onClick={() =>
                  window.open('https://twitter.com', '_blank', 'noopener noreferrer')
                }
                className="socialIcon"
                aria-label="Twitter"
              >
                🐦
              </button>
            </div>
          </div>
        </div>

        <div className="bottomSection">
          <div className="footerNote">
            © 2025 CLIQUE Fashion. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

FooterSection.propTypes = {
  loggedin: PropTypes.bool,
  menumove: PropTypes.func,
};

export default FooterSection;

