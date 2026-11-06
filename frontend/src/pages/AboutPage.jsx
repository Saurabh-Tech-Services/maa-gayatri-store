import React from 'react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta';
import {
  FaShippingFast, FaShieldAlt, FaLeaf, FaTags,
  FaStar, FaStore, FaBoxOpen, FaHandshake
} from 'react-icons/fa';
import './AboutPage.css';

/* ── Testimonials ──────────────────────────── */
const testimonials = [
  {
    quote: "Maa Gayatri ki dukaan se saman lena bahut aasan ho gaya hai. Quality hamesha achhi rehti hai aur delivery bhi jaldi aati hai. Bahut badhiya!",
    author: "Priya Devi",
    location: "Supaul, Bihar",
    rating: 5,
  },
  {
    quote: "Fresh grocery items, branded products, sab kuch ek jagah milta hai. Aata, dal, masale, ghee — sab original. Parivaar ke liye sabse bharosemand dukaan.",
    author: "Ramesh Kumar",
    location: "Triveniganj",
    rating: 5,
  },
  {
    quote: "Owner bahut cooperative hain. Jab bhi koi issue hota hai, turant solve ho jaata hai. Genuinely the best general store in our area!",
    author: "Sunita Sharma",
    location: "Supaul",
    rating: 5,
  },
];

/* ── Brands (slugs — user drops .png files in /public/brands/) ── */
const brands = [
  { name: 'Tata',       slug: 'tata' },
  { name: 'Aashirvaad', slug: 'aashirvaad' },
  { name: 'Fortune',    slug: 'fortune' },
  { name: 'Amul',       slug: 'amul' },
  { name: 'Britannia',  slug: 'britannia' },
  { name: 'Parle',      slug: 'parle' },
  { name: 'Nestlé',     slug: 'nestle' },
  { name: 'Dettol',     slug: 'dettol' },
  { name: 'Surf Excel', slug: 'surf-excel' },
  { name: 'Colgate',    slug: 'colgate' },
  { name: 'Dabur',      slug: 'dabur' },
  { name: "Haldiram's", slug: 'haldirams' },
  { name: 'Everest',    slug: 'everest' },
  { name: 'MDH',        slug: 'mdh' },
  { name: 'Saffola',    slug: 'saffola' },
  { name: 'Vim',        slug: 'vim' },
  { name: 'Patanjali',  slug: 'patanjali' },
  { name: 'Cadbury',    slug: 'cadbury' },
];

/* ── Category offerings ───────────────────── */
const categories = [
  { emoji: '🌾', title: 'Grains & Pulses',     desc: 'Premium quality rice, wheat, dal, chana, and all staple grains for daily cooking.' },
  { emoji: '🛢️', title: 'Oils & Ghee',         desc: 'Pure mustard oil, groundnut oil, refined oil, and desi ghee from trusted brands.' },
  { emoji: '🌶️', title: 'Masala & Spices',     desc: 'Whole spices, blended masalas, haldi, mirch, dhania — fresh and aromatic.' },
  { emoji: '🍪', title: 'Biscuits & Snacks',   desc: 'Parle-G, Marie, Britannia, namkeen, chips, and favourite Indian snack brands.' },
  { emoji: '🧴', title: 'Personal Care',        desc: 'Soap, shampoo, toothpaste, face wash, and daily hygiene products for the whole family.' },
  { emoji: '🧹', title: 'Household Essentials', desc: 'Detergents, dish wash, floor cleaners, and all home care products.' },
  { emoji: '🍼', title: 'Baby & Health',        desc: 'Baby food, health drinks, ORS, glucose, and nutrition products for all ages.' },
  { emoji: '🪔', title: 'Puja Samagri',        desc: 'Agarbatti, dhoop, camphor, puja oil, gangajal, and all religious essentials.' },
];

/* ── Why choose us ───────────────────────── */
const whyUs = [
  { icon: <FaStore />,       title: 'Established Since 1992',  desc: 'Over 30 years of trust and service to families across Supaul district.' },
  { icon: <FaShieldAlt />,   title: '100% Original Products',  desc: 'Every product on our shelf is sourced from verified, authorised distributors.' },
  { icon: <FaBoxOpen />,     title: '2000+ Products',          desc: 'Groceries, household, personal care, baby care, puja samagri — all in one store.' },
  { icon: <FaHandshake />,   title: 'Fair Pricing Always',     desc: 'No hidden costs. MRP-compliant pricing with seasonal offers and bulk discounts.' },
  { icon: <FaShippingFast />,title: 'Fast Local Delivery',     desc: 'Same-day or next-day delivery within Triveniganj, Supaul and surrounding areas.' },
  { icon: <FaLeaf />,        title: 'Fresh & Quality Assured', desc: 'Regular stock rotation ensures you always get fresh, within-expiry products.' },
];

const StarRating = ({ count }) => (
  <span className="about-stars" aria-label={`${count} stars`}>
    {Array.from({ length: count }).map((_, i) => <FaStar key={i} />)}
  </span>
);

const AboutPage = () => (
  <>
    <Meta
      title="About Us | Maa Gayatri General Store — Groceries & Daily Essentials, Supaul Bihar"
      description="Maa Gayatri General Store is a trusted general & grocery store in Supaul, Bihar since 1992. Shop rice, dal, masala, oil, ghee, biscuits, personal care & household products. 2000+ daily-use items. Fast delivery. 100% original brands."
      keywords="general store Supaul, grocery store Bihar, daily use products, masala spices, Maa Gayatri store, Triveniganj shop, rice dal oil ghee, online grocery Supaul"
    />

    <div className="about-page">

      {/* ── Hero ─────────────────────────── */}
      <header className="about-hero">
        <div className="about-hero-content">
          <div className="about-hero-badges">
            <span className="hero-badge">Est. 1992</span>
            <span className="hero-badge">2000+ Products</span>
            <span className="hero-badge">100% Original</span>
          </div>
          <h1>Maa Gayatri General Store — Your Trusted Grocery &amp; Daily Essentials Shop</h1>
          <p>Supaul's favourite neighbourhood store for groceries, masala, oil, ghee, household &amp; personal care products. Serving families across Bihar since 1992.</p>
        </div>
      </header>

      {/* ── Stats strip ──────────────────── */}
      <div className="about-stats-strip">
        <div className="container about-stats-inner">
          <div className="about-stat"><strong>30+</strong><span>Years of Trust</span></div>
          <div className="about-stat"><strong>2000+</strong><span>Products</span></div>
          <div className="about-stat"><strong>50+</strong><span>Trusted Brands</span></div>
          <div className="about-stat"><strong>10000+</strong><span>Happy Families</span></div>
        </div>
      </div>

      <div className="container">

        {/* ── Our Story ────────────────────── */}
        <section className="about-section">
          <div className="about-story-grid">
            <div className="about-story-text">
              <h2 className="section-title left-align">Our Story</h2>
              <p>
                Maa Gayatri General Store was founded in <strong>1992</strong> in Triveniganj, Supaul, Bihar — with a simple
                mission: to provide every family with <strong>quality daily-use products at fair prices</strong>, under one roof.
              </p>
              <p>
                What started as a small neighbourhood kirana shop has grown into a full-fledged <strong>general &amp; grocery store</strong>
                stocking over <strong>2,000 products</strong> — from staple grains, lentils, and cooking oils to masalas, spices,
                biscuits, beverages, personal care, household cleaners, baby products, and puja samagri.
              </p>
              <p>
                We work directly with <strong>authorised distributors</strong> of leading FMCG brands like Tata, Aashirvaad, Amul,
                Britannia, Dabur, Dettol, Patanjali and many more — ensuring every product you buy is <strong>100% genuine,
                fresh, and fairly priced</strong>.
              </p>
            </div>
            <div className="about-story-visual">
              <div className="about-story-card">
                <div className="story-card-icon">🏪</div>
                <h3>NH 376, Triveniganj</h3>
                <p>Supaul, Bihar – 852139</p>
                <hr />
                <p>📞 +91 90067 41663</p>
                <p>🕗 Mon–Sun · 8 AM – 10 PM</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Product Categories ─────────── */}
        <section className="about-section">
          <h2 className="section-title">What We Stock</h2>
          <p className="section-subtitle">
            Everything your family needs for the kitchen, home, and daily life — from leading Indian brands.
          </p>
          <div className="about-category-grid">
            {categories.map((cat, i) => (
              <div className="about-category-card" key={i}>
                <span className="about-cat-emoji">{cat.emoji}</span>
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why Choose Us ──────────────── */}
        <section className="about-section">
          <h2 className="section-title">Why Families Choose Us</h2>
          <div className="offer-grid">
            {whyUs.map((w, i) => (
              <div className="offer-card" key={i}>
                <span className="offer-icon">{w.icon}</span>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ── Owner Message ──────────────────── */}
      <section className="about-section owner-section">
        <div className="container">
          <h2 className="section-title">A Message from Our Owner</h2>
          <div className="owner-card">
            <div className="owner-photo-wrap">
              <img src="/about/owner.webp" alt="Shatrudhna Chaudhari — Owner, Maa Gayatri General Store" className="owner-photo" />
              <div className="owner-name-block">
                <strong>Shatrudhna Chaudhari</strong>
                <span>Founder &amp; Owner</span>
              </div>
            </div>
            <div className="owner-message-wrap">
              <span className="owner-quote-mark">"</span>
              <blockquote className="owner-quote">
                जब हमने मां गायत्री जनरल स्टोर की शुरुआत की, तो हमारा एकमात्र लक्ष्य था — हर परिवार को
                असली, शुद्ध और किफायती सामान एक ही छत के नीचे देना।
                <br /><br />
                पिछले <strong>30 से अधिक वर्षों</strong> में हमने हजारों परिवारों का भरोसा जीता है।
                हम हर उत्पाद की गुणवत्ता की जांच खुद करते हैं — चाहे वो राशन हो, मसाला हो, या
                घरेलू सामान। हमारी दुकान में आने वाला हर ग्राहक हमारे परिवार का हिस्सा है।
                <br /><br />
                हम वादा करते हैं कि आपको हमेशा <strong>100% असली सामान, उचित दाम पर</strong> मिलेगा।
                धन्यवाद आपके अटूट विश्वास के लिए।
              </blockquote>
              <span className="owner-quote-mark close">"</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brands ─────────────────────── */}
      <section className="about-section brands-section">
        <div className="container">
          <h2 className="section-title">Brands Available In-Store</h2>
          <p className="section-subtitle">
            We stock products from India's most trusted FMCG brands — all sourced from authorised distributors.
          </p>
          <div className="brands-grid">
            {brands.map((brand) => (
              <div className="brand-logo-card" key={brand.slug}>
                <img
                  src={`/brands/${brand.slug}.png`}
                  alt={`${brand.name} — available at Maa Gayatri General Store`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="brand-fallback" style={{ display: 'none' }}>
                  <span>{brand.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────── */}
      <section className="about-section testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonial-carousel-container">
            <div className="testimonial-grid">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div className="testimonial-card" key={i}>
                  <p className="testimonial-quote">"{t.quote}"</p>
                  <div className="testimonial-author">
                    <StarRating count={t.rating} />
                    <h4>{t.author}</h4>
                    <span className="testimonial-location">{t.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────── */}
      <div className="container">
        <section className="about-section cta-section">
          <h2>Shop Daily Essentials Online</h2>
          <p>Rice, Dal, Masala, Oil, Ghee, Biscuits &amp; more — order now and get fast delivery to your door.</p>
          <Link to="/" className="auth-button">Start Shopping</Link>
        </section>
      </div>

    </div>
  </>
);

export default AboutPage;
