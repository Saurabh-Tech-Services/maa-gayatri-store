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

const poojaItems = [
    { icon: '🪔', title: 'Diya & Pooja Oil', desc: 'Sesame oil, groundnut oil and mustard oil for diya and pooja lamps.' },
    { icon: '🌸', title: 'Agarbatti & Dhoop', desc: 'Popular agarbatti brands, dhoop sticks and dhoop cones for daily puja.' },
    { icon: '🕯️', title: 'Camphor / Kapoor', desc: 'Pure camphor tablets for aarti, havan and purification rituals.' },
    { icon: '🏺', title: 'Gangajal', desc: 'Packaged Gangajal for daily worship and special religious occasions.' },
    { icon: '🔴', title: 'Roli, Kumkum & Sindoor', desc: 'Essential tilak and sindoor items for daily puja and festivals.' },
    { icon: '🥥', title: 'Coconut & Supari', desc: 'Whole coconuts, supari and paan essentials for religious rituals.' },
    { icon: '🧵', title: 'Kalawa (Sacred Thread)', desc: 'Red-yellow kalawa for pooja and tying during religious ceremonies.' },
    { icon: '✨', title: 'Festival Essentials', desc: 'Havan samagri, camphor, diyas and seasonal pooja items stocked during festivals.' },
];

const faqs = [
    { q: 'Where can I find pooja samagri in Tribeniganj?', a: 'Maa Gayatri General Store on NH 376, High School Road stocks a wide range of daily pooja items including agarbatti, dhoop, camphor, diya oil, Gangajal, roli, kumkum, sindoor, supari and kalawa.' },
    { q: 'Do you stock agarbatti and dhoop?', a: 'Yes. We stock popular agarbatti and dhoop brands suitable for daily puja and special occasions. Multiple fragrance variants are available.' },
    { q: 'Is camphor / Kapoor available?', a: 'Yes, we stock pure camphor tablets (Kapoor) which are used for aarti, havan and home purification rituals.' },
    { q: 'Do you stock Gangajal?', a: 'Yes, packaged Gangajal is available for daily worship and special religious occasions.' },
    { q: 'What festival pooja items do you stock?', a: 'During festivals like Diwali, Chhath Puja, Navratri and others, we stock special havan samagri, additional diya varieties, camphor, marigold agarbatti, and other seasonal items. It is recommended to call ahead during festival season to confirm availability.' },
    { q: 'Do you stock pooja oil for diya?', a: 'Yes. We stock sesame oil (til ka tel), groundnut oil and mustard oil commonly used in diyas and pooja lamps.' },
    { q: 'What are your store hours?', a: 'We are open Monday to Sunday from 8 AM to 10 PM -- every day including public holidays and festivals.' },
];

const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE + "/" },
        { "@type": "ListItem", "position": 2, "name": "Pooja Items in Tribeniganj", "item": SITE + "/pooja-items-tribeniganj" }
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

const PoojaItemsTribeniganj = () => (
    <>
        <Meta
            title="Pooja Samagri Shop in Tribeniganj | Maa Gayatri General Store"
            description="Find everyday pooja essentials in Tribeniganj -- agarbatti, dhoop, camphor, pooja oil, Gangajal, roli, kumkum and other religious items at Maa Gayatri General Store."
            keywords="pooja items Tribeniganj, pooja samagri Tribeniganj, agarbatti shop Tribeniganj, camphor Kapoor Tribeniganj, religious items Supaul Bihar, puja samagri near me"
            canonical={`${SITE}/pooja-items-tribeniganj`}
        />
        <StructuredData schema={[breadcrumb, faqSchema]} />

        <div className="seo-page">
            {/* Hero */}
            <section className="seo-hero" style={{ background: 'linear-gradient(135deg, #6d4c41 0%, #bf360c 60%, #6d4c41 100%)' }}>
                <div className="seo-hero-inner">
                    <div className="seo-hero-badges">
                        <span className="seo-badge">Pooja Samagri</span>
                        <span className="seo-badge">Tribeniganj, Supaul</span>
                        <span className="seo-badge">Daily Pooja Essentials</span>
                    </div>
                    <h1>Pooja Samagri Shop in Tribeniganj</h1>
                    <p className="seo-hero-desc">
                        Find all your daily worship essentials at Maa Gayatri General Store -- agarbatti, dhoop,
                        camphor, diya oil, Gangajal, roli, kumkum, sindoor, supari and more.
                        Available in Tribeniganj, Supaul, Bihar.
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

            {/* Pooja items grid */}
            <section className="seo-section">
                <div className="seo-section-inner">
                    <h2 className="seo-section-title">Daily Pooja Essentials Available</h2>
                    <p className="seo-section-subtitle">
                        Everything you need for your daily puja and special religious occasions -- all available
                        at our store in Tribeniganj.
                    </p>
                    <div className="seo-cards-grid">
                        {poojaItems.map((item, i) => (
                            <div key={i} className="seo-card" style={{ borderLeftColor: '#bf360c' }}>
                                <div className="seo-card-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Festival section */}
            <section className="seo-section seo-section-alt">
                <div className="seo-section-inner">
                    <h2 className="seo-section-title">Festival & Seasonal Pooja Items</h2>
                    <p className="seo-section-subtitle">
                        We stock special pooja items and havan samagri during major festivals.
                        Call ahead to confirm seasonal availability.
                    </p>
                    <div className="seo-items-grid">
                        {[
                            { icon: '🪔', title: 'Diwali', desc: 'Diyas, candles, camphor, agarbatti' },
                            { icon: '🌊', title: 'Chhath Puja', desc: 'Pooja thali items, gangajal, sugarcan' },
                            { icon: '🌸', title: 'Navratri', desc: 'Havan samagri, camphor, red dupatta' },
                            { icon: '🎋', title: 'Holi', desc: 'Gulal, pichkari, dry colour, puja items' },
                            { icon: '🌺', title: 'Teej & Vrat', desc: 'Pooja items, fruits, sattu, religious accessories' },
                            { icon: '📿', title: 'Daily Puja', desc: 'Agarbatti, diya, camphor for everyday worship' },
                        ].map((f, i) => (
                            <div key={i} className="seo-item-tile">
                                <div className="seo-item-tile-icon">{f.icon}</div>
                                <h4>{f.title}</h4>
                                <p>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Store info */}
            <section className="seo-section">
                <div className="seo-section-inner">
                    <h2 className="seo-section-title">Visit Us in Tribeniganj</h2>
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
                                    <strong>Timings</strong>Monday - Sunday: 8:00 AM - 10:00 PM
                                </div>
                            </div>
                            <div className="seo-store-detail">
                                <span className="seo-store-detail-icon">📞</span>
                                <div className="seo-store-detail-text">
                                    <strong>Phone / WhatsApp</strong>
                                    <a href={TEL} style={{ color: '#bf360c', fontWeight: 600 }}>+91 90067 41663</a>
                                </div>
                            </div>
                            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="seo-map-link" style={{ background: '#bf360c' }}>
                                🗺️ Open in Google Maps
                            </a>
                        </div>
                        <div>
                            <h3 style={{ marginBottom: '1rem', color: '#1a3a5c', fontSize: '1.1rem', fontWeight: 700 }}>Also Available</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <Link to="/grocery-store-tribeniganj" style={{ color: '#2e86c1', textDecoration: 'none', fontWeight: 600 }}>→ Groceries & Staples</Link>
                                <Link to="/dry-fruits-tribeniganj" style={{ color: '#2e86c1', textDecoration: 'none', fontWeight: 600 }}>→ Dry Fruits & Nuts</Link>
                                <Link to="/daily-needs-store-tribeniganj" style={{ color: '#2e86c1', textDecoration: 'none', fontWeight: 600 }}>→ Daily Household Items</Link>
                                <Link to="/all-categories" style={{ color: '#2e86c1', textDecoration: 'none', fontWeight: 600 }}>→ Browse All Categories</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="seo-section seo-section-alt">
                <div className="seo-section-inner">
                    <h2 className="seo-section-title" style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
                    <p className="seo-section-subtitle" style={{ textAlign: 'center', margin: '0 auto 2rem' }}>
                        Common questions about pooja items in Tribeniganj.
                    </p>
                    <SeoFaq items={faqs} />
                </div>
            </section>

            {/* CTA */}
            <section className="seo-cta-section" style={{ background: 'linear-gradient(135deg, #bf360c, #6d4c41)' }}>
                <h2>Visit for Your Pooja Needs in Tribeniganj</h2>
                <p>Call to confirm stock -- especially during festival season.</p>
                <div className="seo-cta-actions">
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="seo-whatsapp-btn">💬 WhatsApp: +91 90067 41663</a>
                    <a href={TEL} className="seo-btn-primary">📞 Call Now</a>
                </div>
            </section>
        </div>
    </>
);

export default PoojaItemsTribeniganj;

