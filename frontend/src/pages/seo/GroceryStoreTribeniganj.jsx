import React from 'react';
import { Link } from 'react-router-dom';
import Meta from '../../components/Meta';
import StructuredData from '../../components/StructuredData';
import SeoFaq from './SeoFaq';
import './SeoPage.css';

const SITE = 'https://maa-gayatri-store.vercel.app';
const MAPS = 'https://share.google/tBXNALgEeSIAlHOWa';
const WA   = 'https://wa.me/919006741663';
const TEL  = 'tel:+919006741663';

const whyUs = [
    { icon: '🏪', title: 'Est. 1992', desc: 'Over 30 years serving families in Tribeniganj and surrounding areas.' },
    { icon: '✅', title: 'Genuine Brands', desc: 'Tata, Amul, Britannia, Fortune, Aashirvaad, Nestlé, Dabur and more -- all original.' },
    { icon: '💰', title: 'Fair Prices', desc: 'Competitive pricing on all staples, spices, snacks and household items.' },
    { icon: '📍', title: 'Prime Location', desc: 'NH 376, High School Road -- easy to reach from Bus Stand and surrounding villages.' },
    { icon: '⏰', title: 'Open Daily', desc: 'Mon-Sun, 8 AM to 10 PM. We are open every day including public holidays.' },
    { icon: '💳', title: 'All Payments', desc: 'Cash, UPI, Paytm, Google Pay and PhonePe accepted.' },
];

const categories = [
    { icon: '🌾', title: 'Staples & Grains', desc: 'Atta, rice, dal, maida, suji' },
    { icon: '🌶️', title: 'Spices & Masalas', desc: 'Haldi, jeera, dhaniya, garam masala' },
    { icon: '🛢️', title: 'Oils & Ghee', desc: 'Fortune, Saffola, Patanjali, Amul' },
    { icon: '🍪', title: 'Snacks & Namkeen', desc: 'Haldiram\'s, Parle, Britannia, biscuits' },
    { icon: '🥛', title: 'Dairy & Beverages', desc: 'Amul, Nescafé, Lipton, packaged milk' },
    { icon: '🧴', title: 'Personal Care', desc: 'Dettol, Colgate, Dove, Lifebuoy, Lux' },
    { icon: '🧹', title: 'Home & Cleaning', desc: 'Surf Excel, Rin, Vim, Godrej products' },
    { icon: '🪔', title: 'Pooja Samagri', desc: 'Agarbatti, dhoop, camphor, diya oil' },
    { icon: '🥜', title: 'Dry Fruits & Nuts', desc: 'Badam, kaju, kishmish, pista, akhrot' },
    { icon: '👶', title: 'Baby & Kids', desc: 'Baby food, diapers and essentials' },
];

const localities = [
    'High School Road, Tribeniganj',
    'Daparkha, Tribeniganj',
    'Medhiya, Tribeniganj',
    'Purani Bank Chowk, Tribeniganj',
    'Bus Stand, Tribeniganj',
    'Partapur, Tribeniganj',
    'Patarghatti, Tribeniganj',
    'Laharniya, Tribeniganj',
];

const brands = [
    'Tata', 'Aashirvaad', 'Fortune', 'Amul', 'Britannia', 'Parle',
    'Nestlé', 'Dettol', 'Colgate', 'Dabur', 'Haldiram\'s', 'Everest',
    'MDH', 'Saffola', 'Patanjali', 'Cadbury', 'Pillsbury', 'Catch',
    'HUL', 'Godrej', 'Bajaj', 'Whole Farm',
];

const faqs = [
    { q: 'Where is Maa Gayatri General Store located?', a: 'We are located on NH 376, High School Road, Tribeniganj, Supaul, Bihar - 852139. The store is easy to find near the Bus Stand and High School.' },
    { q: 'What are your store timings?', a: 'We are open Monday to Sunday, 8 AM to 10 PM. We are open every day including Sundays and public holidays.' },
    { q: 'Do you offer home delivery?', a: 'Currently we operate as a walk-in store. Customers can visit us at NH 376, High School Road, Tribeniganj to pick up their purchases.' },
    { q: 'Which brands do you stock?', a: 'We carry major FMCG brands including Tata, Amul, Britannia, Fortune, Aashirvaad, Nestlé, Dettol, Colgate, Dabur, Haldiram\'s, Everest, MDH, Saffola, Patanjali, Cadbury, Pillsbury, HUL, Godrej and many more.' },
    { q: 'What payment methods do you accept?', a: 'We accept Cash, UPI, Paytm, Google Pay and PhonePe. All major digital payment methods are accepted.' },
    { q: 'Do you stock pooja items?', a: 'Yes. We stock daily pooja essentials including agarbatti, dhoop, camphor, pooja oil, Gangajal, roli, kumkum, sindoor, supari, kalawa and coconut.' },
    { q: 'How can I contact the store before visiting?', a: 'You can call or WhatsApp us at +91 90067 41663 to check stock availability before visiting.' },
];

const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE + "/" },
        { "@type": "ListItem", "position": 2, "name": "Grocery Store in Tribeniganj", "item": SITE + "/grocery-store-tribeniganj" }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
};

const GroceryStoreTribeniganj = () => (
    <>
        <Meta
            title="Grocery Store in Tribeniganj, Supaul | Maa Gayatri General Store"
            description="Looking for a grocery shop in Tribeniganj? Visit Maa Gayatri General Store for groceries, rice, atta, pulses, spices, snacks and daily essentials. NH 376, High School Road."
            keywords="grocery store Tribeniganj, grocery shop Tribeniganj, kirana store Tribeniganj, general store Supaul Bihar, best grocery shop Tribeniganj, daily needs Tribeniganj"
            canonical={`${SITE}/grocery-store-tribeniganj`}
        />
        <StructuredData schema={[breadcrumb, faqSchema]} />

        <div className="seo-page">
            {/* Hero */}
            <section className="seo-hero">
                <div className="seo-hero-inner">
                    <div className="seo-hero-badges">
                        <span className="seo-badge">Est. 1992</span>
                        <span className="seo-badge">Tribeniganj, Supaul</span>
                        <span className="seo-badge">Open Daily 8 AM-10 PM</span>
                    </div>
                    <h1>Your Neighbourhood Grocery Store in Tribeniganj</h1>
                    <p className="seo-hero-desc">
                        Maa Gayatri General Store -- Tribeniganj's trusted kirana and general store since 1992.
                        Find all your daily groceries, staples, spices, snacks, household items and pooja
                        samagri under one roof.
                    </p>
                    <div className="seo-hero-address">
                        📍 NH 376, High School Road, Tribeniganj, Supaul, Bihar - 852139
                    </div>
                    <div className="seo-hero-cta">
                        <a href={MAPS} target="_blank" rel="noopener noreferrer" className="seo-btn-primary">
                            🗺️ Get Directions
                        </a>
                        <a href={WA} target="_blank" rel="noopener noreferrer" className="seo-btn-secondary">
                            💬 WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>

            {/* Why shop with us */}
            <section className="seo-section">
                <div className="seo-section-inner">
                    <h2 className="seo-section-title">Why Shop at Maa Gayatri General Store?</h2>
                    <p className="seo-section-subtitle">
                        For over three decades, families from Tribeniganj and nearby villages have relied on us
                        for quality, honest pricing and genuine branded products.
                    </p>
                    <div className="seo-cards-grid">
                        {whyUs.map((w, i) => (
                            <div key={i} className="seo-card">
                                <div className="seo-card-icon">{w.icon}</div>
                                <h3>{w.title}</h3>
                                <p>{w.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product categories */}
            <section className="seo-section seo-section-alt">
                <div className="seo-section-inner">
                    <h2 className="seo-section-title">Complete Grocery & Household Range</h2>
                    <p className="seo-section-subtitle">
                        Everything your household needs -- from daily staples to personal care and pooja items.
                    </p>
                    <div className="seo-items-grid">
                        {categories.map((c, i) => (
                            <div key={i} className="seo-item-tile">
                                <div className="seo-item-tile-icon">{c.icon}</div>
                                <h4>{c.title}</h4>
                                <p>{c.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <Link to="/all-categories" className="seo-btn-primary" style={{ background: '#1a5276', color: '#fff' }}>
                            Browse All Categories →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Brands */}
            <section className="seo-section">
                <div className="seo-section-inner">
                    <h2 className="seo-section-title">Popular Brands Available</h2>
                    <p className="seo-section-subtitle">
                        We stock only genuine branded products from India's most trusted FMCG companies.
                    </p>
                    <div className="seo-brands-grid">
                        {brands.map((b, i) => (
                            <div key={i} className="seo-brand-chip">{b}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Store info */}
            <section className="seo-section seo-section-alt">
                <div className="seo-section-inner">
                    <h2 className="seo-section-title">Store Address &amp; How to Reach Us</h2>
                    <div className="seo-store-box">
                        <div>
                            <div className="seo-store-detail">
                                <span className="seo-store-detail-icon">📍</span>
                                <div className="seo-store-detail-text">
                                    <strong>Address</strong>
                                    NH 376, High School Road, Tribeniganj, Supaul, Bihar - 852139
                                </div>
                            </div>
                            <div className="seo-store-detail">
                                <span className="seo-store-detail-icon">⏰</span>
                                <div className="seo-store-detail-text">
                                    <strong>Store Timings</strong>
                                    Monday - Sunday: 8:00 AM - 10:00 PM
                                </div>
                            </div>
                            <div className="seo-store-detail">
                                <span className="seo-store-detail-icon">📞</span>
                                <div className="seo-store-detail-text">
                                    <strong>Phone / WhatsApp</strong>
                                    <a href={TEL} style={{ color: '#2e86c1', fontWeight: 600 }}>+91 90067 41663</a>
                                </div>
                            </div>
                            <div className="seo-store-detail">
                                <span className="seo-store-detail-icon">💳</span>
                                <div className="seo-store-detail-text">
                                    <strong>Payment Methods</strong>
                                    Cash · UPI · Paytm · Google Pay · PhonePe
                                </div>
                            </div>
                            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="seo-map-link">
                                🗺️ Open in Google Maps
                            </a>
                        </div>
                        <div>
                            <h3 style={{ marginBottom: '1rem', color: '#1a3a5c', fontSize: '1.1rem', fontWeight: 700 }}>
                                Nearby Localities We Serve
                            </h3>
                            <ul className="seo-locality-list" style={{ '--bg': '#f0f6fb' }}>
                                {localities.map((l, i) => (
                                    <li key={i} style={{ background: '#f0f6fb', border: '1px solid #d0e4f4', color: '#1a3a5c' }}>
                                        {l}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="seo-section">
                <div className="seo-section-inner">
                    <h2 className="seo-section-title" style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
                    <p className="seo-section-subtitle" style={{ textAlign: 'center', margin: '0 auto 2rem' }}>
                        Common questions from shoppers in Tribeniganj and nearby areas.
                    </p>
                    <SeoFaq items={faqs} />
                </div>
            </section>

            {/* CTA */}
            <section className="seo-cta-section">
                <h2>Visit Us Today in Tribeniganj</h2>
                <p>NH 376, High School Road -- open every day, 8 AM to 10 PM.</p>
                <div className="seo-cta-actions">
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="seo-whatsapp-btn">
                        💬 WhatsApp: +91 90067 41663
                    </a>
                    <a href={MAPS} target="_blank" rel="noopener noreferrer" className="seo-btn-primary">
                        🗺️ Get Directions
                    </a>
                </div>
            </section>
        </div>
    </>
);

export default GroceryStoreTribeniganj;

