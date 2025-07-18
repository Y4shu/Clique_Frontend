import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Heart, Star, Users, Sparkles, ArrowLeft } from 'lucide-react';
import Header from './Header';
import clique_experience from './assets/clique_experience.jpg';
import clique_team from './assets/clique_team.jpg';
import bouqtique from './assets/bouqtique.jpg';
import '.styles/AboutPage.css';

function AboutPage({ loggedin, menumove, cartCount = 3 }) {
  const navigate = useNavigate();

  const values = useMemo(() => ([
    {
      icon: Heart,
      title: 'Passion for Style',
      description: 'Every piece we create comes from a deep love for fashion and an understanding of individual expression.',
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'We source the finest materials and work with skilled artisans to ensure every garment meets our exacting standards.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Our customers are at the heart of everything we do. Your style journey is our inspiration.',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'We constantly push boundaries, blending timeless elegance with contemporary trends.',
    },
  ]), []);

  const milestones = useMemo(() => ([
    { year: '2023', event: 'CLIQUE was founded with a vision to democratize high fashion' },
    { year: '2024', event: 'Introduced sustainable fashion initiatives and launched our first collection, gaining recognition in fashion circles' },
    { year: '2025', event: 'Expanded globally, reaching customers in over 25 countries' },
  ]), []);

  const handlenav = (path) => {
    if (typeof path === 'string') {
      navigate(path);
    } else {
      console.warn('Invalid navigation path:', path);
    }
  };

  return (
    <div className="about-container">
      <Header
        loggedin={loggedin}
        menumove={menumove}
        cartCount={cartCount}
      />

      <div className="main-content">
        <button 
          onClick={() => handlenav('/')}
          className="backb"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>
      </div>

      <section className="herosec">
        <div className="heroin">
          <div className="badge">Our Story</div>
          <h1 className="herotitle">
            Fashion is our <span className="heroacc">Language</span>
          </h1>
          <p className="herosubtit">
            CLIQUE was born from a simple belief: everyone deserves to express their unique style with confidence. We're not just a fashion brand – we're a movement that celebrates individuality and empowers self-expression.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="secin">
          <div className="secgrid">
            <div>
              <h2 className="sectitle">Where Dreams Meet Design</h2>
              <p className="sectext">
                It all started in a small studio in 2023, where our founders shared a vision of making high-quality, trend-setting fashion accessible to everyone.
              </p>
              <p className="sectext">
                From those humble beginnings, CLIQUE has grown into a global fashion destination, but our core values remain unchanged: quality, creativity, and inclusivity.
              </p>
              <button onClick={() => handlenav('/products')} className="primb">Explore Our Collections</button>
            </div>
            <div>
              {clique_experience ? (
                <img src={clique_experience} alt="Design process at CLIQUE" className="image" />
              ) : (
                <p className="sectext">Image not available</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="valsec">
        <div className="secin">
          <div className="textcenter">
            <h2 className="sectitle">What Drives Us</h2>
            <p className="sectext">Our values are the foundation of everything we create and every relationship we build</p>
          </div>
          <div className="valgrid">
            {values && values.length > 0 ? values.map((value, idx) => (
              <div key={idx} className="valcard">
                <div className="valicon"><value.icon size={24} /></div>
                <h3 className="valtitle">{value.title}</h3>
                <p className="valdesc">{value.description}</p>
              </div>
            )) : <p className="sectext">No values to display.</p>}
          </div>
        </div>
      </section>

      <section className="tlsec">
        <div className="secin">
          <div className="textcenter">
            <h2 className="sectitle">Our Journey</h2>
            <p className="sectext">From a small startup to a global fashion destination</p>
          </div>
          <div className="tlcontainer">
            {milestones && milestones.length > 0 ? milestones.map((milestone, idx) => (
              <div key={idx} className="tlitem">
                <div className="tlicon">{milestone.year.slice(-2)}</div>
                <div className="tlcontent">
                  <h3 className="tlyr">{milestone.year}</h3>
                  <p className="tlevent">{milestone.event}</p>
                </div>
              </div>
            )) : <p className="sectext">Timeline data unavailable.</p>}
          </div>
        </div>
      </section>

      <section className="valsec">
        <div className="secin">
          <div className="secgrid">
            <div>
              {clique_team ? (
                <img src={clique_team} alt="CLIQUE team" className="image" />
              ) : (
                <p className="sectext">Image not available</p>
              )}
            </div>
            <div>
              <h2 className="sectitle">Meet the Visionaries</h2>
              <p className="sectext">Our team brings together decades of experience in fashion design, retail, and technology.</p>
              <p className="sectext">From our creative directors to our customer service team, each member plays a vital role.</p>
              <button onClick={() => handlenav('/work-with-us')} className="secb">Join Our Team</button>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="secin">
          <div className="secgrid">
            <div>
              <h2 className="sectitle">The CLIQUE Experience</h2>
              <p className="sectext">Shopping with CLIQUE is more than just buying clothes – it's about discovering your personal style and expressing your identity.</p>
              <p className="sectext">Our personal stylists work with you to curate looks that reflect your personality.</p>
              <button onClick={() => handlenav('/products')} className="primb">Start Shopping</button>
            </div>
            <div>
              {bouqtique ? (
                <img src={bouqtique} alt="CLIQUE boutique interior" className="image" />
              ) : (
                <p className="section-text">Image not available</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="ctasec">
        <div className="heroin">
          <h2 className="ctatitle">Ready to Make it <span className="heroacc">Worth the While?</span></h2>
          <p className="ctasubtit">Join thousands of fashion enthusiasts who've discovered their signature style with CLIQUE</p>
          <div className="ctabuttons">
            <button onClick={() => handlenav('/products')} className="primb">Shop New Collection</button>
            <button onClick={() => handlenav('/work-with-us')} className="secb">Work With Us</button>
          </div>
        </div>
      </section>
    </div>
  );
}

AboutPage.propTypes = {
  loggedin: PropTypes.bool,
  menumove: PropTypes.func,
  cartCount: PropTypes.number
};

export default AboutPage;
