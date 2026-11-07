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

const localities = [
    {
        name: 'High School Road, Tribeniganj',
        distance: 'Our store is on High School Road',
        desc: 'We are located right on NH 376, High School Road. This is our primary location serving the entire Tribeniganj town.',
    },
    {
        name: 'Daparkha, Tribeniganj',
        distance: '~1-2 km from store',
        desc: 'Residents of Daparkha can reach us easily by walking or a short cycle/auto ride along the NH 376 road.',
    },
    {
        name: 'Medhiya, Tribeniganj',
        distance: '~2-3 km from store',
        desc: 'Medhiya residents regularly shop at our store for groceries, spices and household items. Easy road access from Medhiya.',
    },
    {
        name: 'Purani Bank Chowk, Tribeniganj',
        distance: '~1 km from store',
        desc: 'Purani Bank Chowk is close to our NH 376 store. A short walk or quick auto ride brings you to our doorstep.',
    },
    {
        name: 'Bus Stand, Tribeniganj',
        distance: 'Very close to store',
        desc: 'Our store is conveniently located near the Tribeniganj Bus Stand -- easy to stop by before or after your journey.',
    },
    {
        name: 'Partapur, Tribeniganj',
        distance: '~2-3 km from store',
        desc: 'Partapur families come to us for branded groceries, dry fruits and pooja items that may not be easily available locally.',
    },
    {
        name: 'Patarghatti, Tribeniganj',
        distance: '~2-4 km from store',
        desc: 'We serve customers from Patarghatti who prefer quality branded products at honest prices.',
    },
    {
        name: 'Laharniya, Tribeniganj',
        distance: '~3-5 km from store',
        desc: 'Laharniya residents visit Maa Gayatri General Store for a full range of FMCG goods, staples and dry fruits not easily found nearby.',
    },
];

const faqs = [
    { q: 'Which areas does Maa Gayatri General Store serve?', a: 'We serve the entire Tribeniganj area including High School Road, Daparkha, Medhiya, Purani Bank Chowk, Bus Stand, Partapur, Patarghatti and Laharniya. All customers are welcome to visit our store in person.' },
    { q: 'Is the store accessible from the Tribeniganj Bus Stand?', a: 'Yes. Our store is located on NH 376, High School Road, very close to the Tribeniganj Bus Stand. It is easily accessible on foot or by auto.' },
    { q: 'Do you offer home delivery to these localities?', a: 'Currently we operate as a walk-in store only. All customers from these localities are welcome to visit us at NH 376, High School Road, Tribeniganj.' },
    { q: 'Is Supaul district served?', a: 'Our store is located in Tribeniganj, which is in Supaul district. Customers from across Supaul district are welcome to visit us.' },
    { q: 'How do I reach your store from Supaul town?', a: 'From Supaul town, take the NH 107 or state roads towards Tribeniganj (approximately 25-30 km). Our store is on NH 376, High School Road, Tribeniganj - 852139.' },
    { q: 'What are your store timings?', a: 'We are open Monday to Sunday from 8 AM to 10 PM -- every day including public holidays.' },
];

const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE + "/" },
        { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": SITE + "/service-areas" }
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

const ServiceAreas = () => (
    <>
        <Meta
            title="Areas Served - Tribeniganj & Supaul | Maa Gayatri General Store"
            description="Maa Gayatri General Store serves Tribeniganj and surrounding localities including Daparkha, Medhiya, Purani Bank Chowk, Bus Stand, Partapur, Patarghatti and Laharniya."
            keywords="grocery store near Tribeniganj, general store Supaul Bihar, Daparkha grocery, Medhiya grocery, Partapur general store, kirana store near Tribeniganj"
            canonical={`${SITE}/service-areas`}
        />
        <StructuredData schema={[breadcrumb, faqSchema]} />

        <div className="seo-page">
            {/* Hero */}
            <section className="seo-hero" style={{ background: 'linear-gradient(135deg, #37474f 0%, #546e7a 60%, #37474f 100%)' }}>
                <div className="seo-hero-inner">
                    <div className="seo-hero-badges">
                        <span className="seo-badge">Tribeniganj</span>
                        <span className="seo-badge">Supaul District</span>
                        <span className="seo-badge">Walk-in Store</span>
                    </div>
                    <h1>Areas Served by Maa Gayatri General Store</h1>
                    <p className="seo-hero-desc">
                        Conveniently located on NH 376, High School Road, Tribeniganj -- serving families
                        from across Tribeniganj town and surrounding localities since 1992.
                    </p>
                    <div className="seo-hero-address">
                        📍 NH 376, High School Road, Tribeniganj, Supaul, Bihar - 852139
                    </div>
                    <div className="seo-hero-cta">
                        <a href={MAPS} target="_blank" rel="noopener noreferrer" className="seo-btn-primary">🗺️ Get Directions</a>
                        <a href={WA} target="_blank" rel="noopener noreferrer" className="seo-btn-secondary">💬 WhatsApp Us</a>
                    </div>
                </div>
            </section>

            {/* Locality cards */}
            <section className="seo-section">
                <div className="seo-section-inner">
                    <h2 className="seo-section-title">Localities We Serve</h2>
                    <p className="seo-section-subtitle">
                        Customers from all these localities visit Maa Gayatri General Store for
                        groceries, dry fruits, pooja items and household essentials.
                    </p>
                    <div className="seo-cards-grid">
                        {localities.map((loc, i) => (
                            <div key={i} className="seo-card" style={{ borderLeftColor: '#546e7a' }}>
                                <h3>📍 {loc.name}</h3>
                                <p style={{ fontSize: '0.82rem', color: '#888', marginBottom: '0.4rem', fontStyle: 'italic' }}>
                                    {loc.distance}
                                </p>
                                <p>{loc.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What we offer */}
            <section className="seo-section seo-section-alt">
                <div className="seo-section-inner">
                    <h2 className="seo-section-title">What to Expect When You Visit</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
                        {[
                            { icon: '🛒', title: '500+ Products', desc: 'Groceries, spices, dry fruits, snacks, beverages, personal care and household items -- all under one roof.' },
                            { icon: '✅', title: 'Genuine Brands', desc: 'All products are original branded goods -- Tata, Amul, Britannia, Fortune, Dettol, Nestlé and many more.' },
                            { icon: '💰', title: 'Fair & Honest Pricing', desc: 'Competitive pricing with no price gouging. We serve our community with honesty since 1992.' },
                            { icon: '💳', title: 'All Payments', desc: 'Pay with cash, UPI, Paytm, Google Pay or PhonePe -- all accepted without extra charges.' },
                        ].map((w, i) => (
                            <div key={i} className="seo-card">
                                <div className="seo-card-icon">{w.icon}</div>
                                <h3>{w.title}</h3>
                                <p>{w.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Directions */}
            <section className="seo-section">
                <div className="seo-section-inner">
                    <h2 className="seo-section-title">How to Reach Us</h2>
                    <div className="seo-store-box">
                        <div>
                            <div className="seo-store-detail">
                                <span className="seo-store-detail-icon">📍</span>
                                <div className="seo-store-detail-text">
                                    <strong>Address</strong>NH 376, High School Road, Tribeniganj, Supaul, Bihar - 852139
                                </div>
                            </div>
                            <div className="seo-store-detail">
                                <span className="seo-store-detail-icon">⏰</span>
                                <div className="seo-store-detail-text">
                                    <strong>Open</strong>Monday - Sunday: 8:00 AM - 10:00 PM
                                </div>
                            </div>
                            <div className="seo-store-detail">
                                <span className="seo-store-detail-icon">📞</span>
                                <div className="seo-store-detail-text">
                                    <strong>Phone / WhatsApp</strong>
                                    <a href={TEL} style={{ color: '#546e7a', fontWeight: 600 }}>+91 90067 41663</a>
                                </div>
                            </div>
                            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="seo-map-link" style={{ background: '#546e7a' }}>
                                🗺️ Open in Google Maps
                            </a>
                        </div>
                        <div>
                            <h3 style={{ marginBottom: '1rem', color: '#1a3a5c', fontSize: '1.1rem', fontWeight: 700 }}>Directions</h3>
                            <ul style={{ paddingLeft: '1.2rem', fontSize: '0.95rem', lineHeight: 2, color: '#555' }}>
                                <li>From Bus Stand: Short walk along NH 376 towards High School</li>
                                <li>From Purani Bank Chowk: 5-10 minutes by auto or cycle</li>
                                <li>From Daparkha/Medhiya: Take NH 376, 5-15 minutes</li>
                                <li>From Supaul town: NH 107 → Tribeniganj → NH 376</li>
                                <li>Landmark: Near High School, NH 376, Tribeniganj</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick links to other SEO pages */}
            <section className="seo-section seo-section-alt">
                <div className="seo-section-inner">
                    <h2 className="seo-section-title">What We Offer</h2>
                    <div className="seo-cards-grid" style={{ '--min': '200px' }}>
                        {[
                            { to: '/grocery-store-tribeniganj', icon: '🛒', title: 'Grocery Store' },
                            { to: '/daily-needs-store-tribeniganj', icon: '🏠', title: 'Daily Essentials' },
                            { to: '/pooja-items-tribeniganj', icon: '🪔', title: 'Pooja Items' },
                            { to: '/dry-fruits-tribeniganj', icon: '🥜', title: 'Dry Fruits' },
                            { to: '/vegetables-tribeniganj', icon: '🥔', title: 'Vegetables' },
                            { to: '/all-categories', icon: '📦', title: 'All Categories' },
                        ].map((link, i) => (
                            <Link key={i} to={link.to} style={{ textDecoration: 'none' }}>
                                <div className="seo-item-tile">
                                    <div className="seo-item-tile-icon">{link.icon}</div>
                                    <h4>{link.title}</h4>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="seo-section">
                <div className="seo-section-inner">
                    <h2 className="seo-section-title" style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
                    <p className="seo-section-subtitle" style={{ textAlign: 'center', margin: '0 auto 2rem' }}>
                        About our location and the areas we serve.
                    </p>
                    <SeoFaq items={faqs} />
                </div>
            </section>

            {/* CTA */}
            <section className="seo-cta-section" style={{ background: 'linear-gradient(135deg, #37474f, #263238)' }}>
                <h2>Visit Maa Gayatri General Store</h2>
                <p>Serving Tribeniganj &amp; surrounding areas since 1992 -- open daily 8 AM to 10 PM.</p>
                <div className="seo-cta-actions">
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="seo-whatsapp-btn">💬 WhatsApp: +91 90067 41663</a>
                    <a href={MAPS} target="_blank" rel="noopener noreferrer" className="seo-btn-primary">🗺️ Get Directions</a>
                </div>
            </section>
        </div>
    </>
);

export default ServiceAreas;

