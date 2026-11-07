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

const dryFruits = [
    { icon: '🌰', title: 'Badam (Almonds)', desc: 'Available in multiple pack sizes. Rich in protein and healthy fats.' },
    { icon: '🥜', title: 'Kaju (Cashews)', desc: 'Whole cashews ideal for snacking, cooking and sweets.' },
    { icon: '🍇', title: 'Kishmish (Raisins)', desc: 'Dried raisins for direct snacking, kheer, halwa and desserts.' },
    { icon: '🌿', title: 'Akhrot (Walnuts)', desc: 'Brain-healthy walnuts, great for salads, cakes and direct consumption.' },
    { icon: '💚', title: 'Pista (Pistachios)', desc: 'Premium pistachios for snacking and use in Indian sweets.' },
    { icon: '🌴', title: 'Khajoor (Dates)', desc: 'Natural dates -- high in energy, ideal for vrat and healthy snacking.' },
    { icon: '🥜', title: 'Moongphali (Peanuts)', desc: 'Roasted and raw peanuts in various pack sizes at affordable prices.' },
    { icon: '⬜', title: 'Makhana (Fox Nuts)', desc: 'Light and nutritious makhana -- popular for vrat and healthy snacking.' },
];

const storageTips = [
    { icon: '🌡️', title: 'Store in a Cool Place', desc: 'Keep dry fruits away from direct sunlight and heat. A cool, dark pantry or the refrigerator works best.' },
    { icon: '🫙', title: 'Airtight Containers', desc: 'Transfer dry fruits to airtight glass or food-grade plastic containers after opening to prevent moisture and pests.' },
    { icon: '❄️', title: 'Refrigerate Cashews & Almonds', desc: 'Nuts with higher oil content like cashews and almonds stay fresh longer in the fridge.' },
    { icon: '🏷️', title: 'Check Best Before Date', desc: 'Always check the best before date and buy from a trusted store to ensure freshness and quality.' },
];

const faqs = [
    { q: 'Where can I buy dry fruits in Tribeniganj?', a: 'Maa Gayatri General Store on NH 376, High School Road, Tribeniganj stocks badam, kaju, kishmish, akhrot, pista, khajoor, moongphali and makhana. We carry multiple pack sizes at competitive prices.' },
    { q: 'What dry fruits are available at your store?', a: 'We stock: Badam (Almonds), Kaju (Cashews), Kishmish (Raisins), Akhrot (Walnuts), Pista (Pistachios), Khajoor (Dates), Moongphali (Peanuts) and Makhana (Fox Nuts).' },
    { q: 'Are the dry fruits genuine and fresh?', a: 'Yes. We source quality dry fruits and store them properly. We recommend buying in reasonable quantities and storing in airtight containers at home to maintain freshness.' },
    { q: 'What pack sizes do you offer?', a: 'We carry various pack sizes. Please call or WhatsApp +91 90067 41663 to check current availability of specific sizes before visiting.' },
    { q: 'Are dry fruits good for vrat (fasting)?', a: 'Yes. Makhana, dates, almonds, cashews and raisins are all commonly consumed during vrat (fasting days) in Indian traditions. We stock all of these.' },
    { q: 'How should I store dry fruits at home?', a: 'Store dry fruits in airtight containers in a cool, dark place. Nuts with higher oil content such as cashews and almonds keep best when refrigerated. Avoid moisture and direct sunlight.' },
    { q: 'Can I call to check prices before visiting?', a: 'Yes. Call or WhatsApp us at +91 90067 41663 and we can tell you current prices and availability for any dry fruit.' },
];

const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE + "/" },
        { "@type": "ListItem", "position": 2, "name": "Dry Fruits in Tribeniganj", "item": SITE + "/dry-fruits-tribeniganj" }
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

const DryFruitsTribeniganj = () => (
    <>
        <Meta
            title="Dry Fruits in Tribeniganj - Quality & Value | Maa Gayatri Store"
            description="Explore dry fruits, nuts and seeds at Maa Gayatri General Store in Tribeniganj. Badam, kaju, kishmish, akhrot, pista, khajoor, moongphali and makhana available."
            keywords="dry fruits shop Tribeniganj, dry fruits price Tribeniganj, buy almonds Tribeniganj, cashews raisins Tribeniganj, nuts seeds shop Supaul Bihar, makhana dry fruits near me"
            canonical={`${SITE}/dry-fruits-tribeniganj`}
        />
        <StructuredData schema={[breadcrumb, faqSchema]} />

        <div className="seo-page">
            {/* Hero */}
            <section className="seo-hero" style={{ background: 'linear-gradient(135deg, #2e7d32 0%, #4caf50 60%, #2e7d32 100%)' }}>
                <div className="seo-hero-inner">
                    <div className="seo-hero-badges">
                        <span className="seo-badge">Dry Fruits & Nuts</span>
                        <span className="seo-badge">Tribeniganj, Supaul</span>
                        <span className="seo-badge">8 Varieties Available</span>
                    </div>
                    <h1>Quality Dry Fruits and Nuts in Tribeniganj</h1>
                    <p className="seo-hero-desc">
                        Badam, kaju, kishmish, akhrot, pista, khajoor, moongphali and makhana -- all available
                        at Maa Gayatri General Store on NH 376, High School Road, Tribeniganj.
                    </p>
                    <div className="seo-hero-address">
                        📍 NH 376, High School Road, Tribeniganj, Supaul, Bihar - 852139
                    </div>
                    <div className="seo-hero-cta">
                        <a href={MAPS} target="_blank" rel="noopener noreferrer" className="seo-btn-primary">🗺️ Get Directions</a>
                        <a href={WA} target="_blank" rel="noopener noreferrer" className="seo-btn-secondary">💬 WhatsApp for Prices</a>
                    </div>
                </div>
            </section>

            {/* Dry fruits list */}
            <section className="seo-section">
                <div className="seo-section-inner">
                    <h2 className="seo-section-title">Dry Fruits We Stock</h2>
                    <p className="seo-section-subtitle">
                        Eight varieties of dry fruits and nuts available in multiple pack sizes.
                        Prices vary -- call ahead to confirm current pricing.
                    </p>
                    <div className="seo-cards-grid">
                        {dryFruits.map((item, i) => (
                            <div key={i} className="seo-card" style={{ borderLeftColor: '#2e7d32' }}>
                                <div className="seo-card-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#777', textAlign: 'center' }}>
                        📞 Call <a href={TEL} style={{ color: '#2e7d32', fontWeight: 600 }}>+91 90067 41663</a> to check current prices and pack sizes before visiting.
                    </p>
                </div>
            </section>

            {/* Storage tips */}
            <section className="seo-section seo-section-alt">
                <div className="seo-section-inner">
                    <h2 className="seo-section-title">How to Store Dry Fruits at Home</h2>
                    <p className="seo-section-subtitle">
                        Proper storage keeps dry fruits fresh and nutritious for longer.
                    </p>
                    <div className="seo-cards-grid">
                        {storageTips.map((tip, i) => (
                            <div key={i} className="seo-card" style={{ borderLeftColor: '#4caf50' }}>
                                <div className="seo-card-icon">{tip.icon}</div>
                                <h3>{tip.title}</h3>
                                <p>{tip.desc}</p>
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
                                    <a href={TEL} style={{ color: '#2e7d32', fontWeight: 600 }}>+91 90067 41663</a>
                                </div>
                            </div>
                            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="seo-map-link" style={{ background: '#2e7d32' }}>
                                🗺️ Open in Google Maps
                            </a>
                        </div>
                        <div>
                            <h3 style={{ marginBottom: '1rem', color: '#1a3a5c', fontSize: '1.1rem', fontWeight: 700 }}>Good to Know</h3>
                            <ul style={{ paddingLeft: '1.2rem', fontSize: '0.95rem', lineHeight: 2, color: '#555' }}>
                                <li>Dry fruits available year-round</li>
                                <li>Multiple pack sizes stocked</li>
                                <li>Ideal for vrat (fasting) days</li>
                                <li>Perfect for gifting and sweets</li>
                                <li>Call to check festive season stock</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="seo-section seo-section-alt">
                <div className="seo-section-inner">
                    <h2 className="seo-section-title" style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
                    <p className="seo-section-subtitle" style={{ textAlign: 'center', margin: '0 auto 2rem' }}>
                        Common questions about dry fruits in Tribeniganj.
                    </p>
                    <SeoFaq items={faqs} />
                </div>
            </section>

            {/* CTA */}
            <section className="seo-cta-section" style={{ background: 'linear-gradient(135deg, #2e7d32, #1b5e20)' }}>
                <h2>Visit for Quality Dry Fruits in Tribeniganj</h2>
                <p>Call ahead to check prices and availability for specific varieties.</p>
                <div className="seo-cta-actions">
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="seo-whatsapp-btn">💬 WhatsApp: +91 90067 41663</a>
                    <a href={MAPS} target="_blank" rel="noopener noreferrer" className="seo-btn-primary">🗺️ Get Directions</a>
                </div>
            </section>
        </div>
    </>
);

export default DryFruitsTribeniganj;

