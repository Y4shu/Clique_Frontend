import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ArrowLeft, User, Edit, Package, Heart, Star, CreditCard, Wallet, MapPin, Plus} from 'lucide-react';
import Header from '../components/Header';
import './styles/profilepage.css';

function ProfilePage({ loggedin, onToggleMenu, cartcount, wishlistcount }) {
  const navigate = useNavigate();
  const [user, setuser] = useState(null);
  const [cards, setcards] = useState([]);
  const [upiIds, setupiIds] = useState([]);
  const [addresses, setaddresses] = useState([]);
  const [creditpoints, setcreditpoints] = useState(0);

  useEffect(() => {
    async function fetchprofile() {
      try {
        //idhar api
        setuser(data.user); setcards(data.cards);setupiIds(data.upiIds);setaddresses(data.addresses);
        setcreditpoints(data.creditpoints);
      } catch (e) {
        console.error(e);
      }
    }
    fetchprofile();
  }, []);

  const adding = (setter, item) =>
    setter(prev => [...prev, item]);

  const nav = (path) => typeof path === 'string' && navigate(path);

  if (!user) return <div className="loading">Loading profile…</div>;

  return (
    <div className="profile-container">
      <Header
        currentPage="profile"
        cartcount={cartcount}
        wishlistcount={wishlistcount}
        loggedin={loggedin}
        menumove={onToggleMenu}
      />

      <div className="profile-main">
        <button className="backb" onClick={() => nav('/')}>
          <ArrowLeft size={20} /> Back to Home
        </button>

        <div className="profileheader">
          <div className="profileinfo">
            <div className="avatar"><User size={48} /></div>
            <div>
              <h1 className="profilename">{user.name}</h1>
              <p className="membersince">Member since {user.joinYear}</p>
              <button className="editb" onClick={() => nav('/profile/edit')}>
                <Edit size={16} /> Edit Profile
              </button>
            </div>
          </div>
        </div>

        <div className="profilestats">
          <div className="statcard" onClick={() => nav('/orders')}>
            <Package className="staticon" size={32} />
            <h3 className="statno">{user.ordersCount} Orders</h3>
          </div>
          <div className="statcard" onClick={() => nav('/wishlist')}>
            <Heart className="staticon" size={32} />
            <h3 className="statno">{user.wishlistcount} Wishlist Items</h3>
          </div>
          <div className="statcard">
            <Star className="staticon" size={32} />
            <h3 className="statno">{creditpoints} Points</h3>
          </div>
        </div>

        <div className="profilesec">
          <h2>Personal Information</h2>
          <div className="infogrid">
            <div className="infoitem">
              <label>Email</label>
              <p>{user.email}</p>
            </div>
            <div className="infoitem">
              <label>Phone</label>
              <p>{user.phone}</p>
            </div>
            <div className="infoitem">
              <label>Preferred Style</label>
              <p>{user.stylePref}</p>
            </div>
          </div>
        </div>

        {[
          { title: 'Saved Cards', icon: CreditCard, data: cards, setter: setcards, key: 'number' },
          { title: 'Saved UPI IDs', icon: Wallet, data: upiIds, setter: setupiIds, key: 'id' },
          { title: 'Saved Addresses', icon: MapPin, data: addresses, setter: setaddresses, key: 'address' }
        ].map((section, idx) => (
          <div key={idx} className="profilesec">
            <div className="secheader">
              <h2><section.icon size={24} /> {section.title}</h2>
              <button className="addb" onClick={() => adding(section.setter, section.title === 'Saved Addresses' ? { label: 'New', address: '...' } : { [section.key]: '...' })}>
                <Plus size={16} /> Add
              </button>
            </div>
            <div className="list">
              {section.data.map((item, index) => (
                <div key={index} className="listitem">
                  <span>{item[section.key]}</span>
                  {item.expiry && <span>{item.expiry}</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfilePage;
