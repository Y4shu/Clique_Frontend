import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ArrowLeft} from 'lucide-react';
import axios from 'axios';
import Header from './Header';
import FooterSection from './FooterSection';
import '.styles/TermsPage.css';

function TermsPage({loggedin = false, menumove = () => {}}) {
  const navigate = useNavigate();
  const [cartcount, setcartcount] = useState(0);
  const [wishlistcount, setwishlistcount] = useState(0);

  useEffect(() => {
    axios
      .get('/api/v1/user/cartAndwishlistcount', {withCredentials:true})
      .then(res => {
        setcartcount(res.data.cart_length || 0);
        setwishlistcount(res.data.wish_length || 0);
     })
      .catch(err => {
        console.error('Failed to fetch cart and wishlist count:', err);
     });
 }, []);

  return (
    <div className="terms-container">
      <Header
        cartcount={cartcount}
        wishlistcount={wishlistcount}
        loggedin={loggedin}
        menumove={menumove}
      />

      <div className="main-content">
        <button onClick={() => navigate('/')} className="backb">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>

        <h1 className="title">
          Terms & <span className="titleacc">Conditions</span>
        </h1>

        <div className="content-box">
          <div className="sec">
            <h2 className="sec-title">1. Acceptance of Terms</h2>
            <p className="text">
              By accessing and using the CLIQUE website and services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </div>

          <div className="sec">
            <h2 className="sec-title">2. Use License</h2>
            <p className="text">
              Permission is granted to temporarily download one copy of the materials on CLIQUE's website for personal, non-commercial transitory viewing only.
            </p>
            <ul className="list">
              <li className="list-item">This is the grant of a license, not a transfer of title</li>
              <li className="list-item">Under this license you may not modify or copy the materials</li>
              <li className="list-item">Use the materials for any commercial purpose or for any public display</li>
              <li className="list-item">Attempt to reverse engineer any software contained on the website</li>
            </ul>
          </div>

          <div className="sec">
            <h2 className="sec-title">3. Disclaimer</h2>
            <p className="text">
              The materials on CLIQUE's website are provided on an 'as is' basis. CLIQUE makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div className="sec">
            <h2 className="sec-title">4. Limitations</h2>
            <p className="text">
              In no event shall CLIQUE or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CLIQUE's website, even if CLIQUE or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </div>

          <div className="sec">
            <h2 className="sec-title">5. Privacy Policy</h2>
            <p className="text">
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our service.
            </p>
          </div>

          <div className="sec">
            <h2 className="sec-title">6. Governing Law</h2>
            <p className="text">
              These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </div>

          <div className="sec">
            <h2 className="sec-title">Contact Information</h2>
            <p className="text">
              If you have any questions about these Terms & Conditions, please contact us at blahblah@clique.com or call us at +91 4778349067.
            </p>
          </div>
        </div>
      </div>

      <FooterSection loggedin={loggedin} menumove={menumove} />
    </div>
  );
}

export default TermsPage;
