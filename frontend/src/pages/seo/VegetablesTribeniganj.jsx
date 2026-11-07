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

const vegetables = [
    { icon: '🥔', title: 'Aalu (Potato)', desc: 'Commonly available. Used in most everyday Indian cooking.' },
    { icon: '🧅', title: 'Piyaj (Onion)', desc: 'Available regularly. Essential for most Indian curries and dishes.' },
    { icon: '🧄', title: 'Lahsun (Garlic)', desc: 'Fresh garlic for cooking. Available in bulbs.' },
    { icon: '🍃', title: 'Dry Tej Patta', desc: 'Bay leaves (dry) for tempering and flavouring curries and rice.' },
    { icon: '🌶️', title: 'Dry Red Chilli', desc: 'Whole dry red chillies for tempering and spice blends.' },
];

const faqs = [
    { q: 'Do you stock vegetables in Tribeniganj?', a: 'We stock a limited selection of everyday vegetables including aalu (potato), piyaj (onion), lahsun (garlic), dry tej patta (bay leaves) and dry red chilli. This is not a full vegetable market -- availability is limited and seasonal.' },
    { q: 'Is the vegetable stock available every day?', a: 'Availability can vary. We recommend calling us at +91 90067 41663 before visiting specifically for vegetables, to confirm that the items you need are in stock.' },
    { q: 'Do you stock fresh vegetables like tomato, brinjal and gourd?', a: 'Currently we stock only a limited range: potato, onion, garlic, dry bay leaves and dry red chilli. For a full fresh vegetable selection, please visit the local sabzi mandi in Tribeniganj.' },
    { q: 'What is the price of potatoes and onions in Tribeniganj?', a: 'Prices for staple vegetables like potatoes and onions change frequently based on market rates. Please call or WhatsApp +91 90067 41663 for current prices.' },
    { q: 'Where is the store located?', a: 'We are on NH 376, High School Road, Tribeniganj, Supaul, Bihar - 852139. We are open Monday to Sunday from 8 AM to 10 PM.' },
    { q: 'Do you stock spices along with vegetables?', a: 'Yes. While our vegetable selection is limited, we have a full range of dry spices and masalas -- haldi, jeera, dhaniya, garam masala, Everest, MDH, Catch and more.' },
];

const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE + "/" },
        { "@type": "ListItem", "position": 2, "name": "Vegetables in Tribeniganj", "item": SITE + "/vegetables-tribeniganj" }
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

const VegetablesTribeniganj = () => (
    <>
        <Meta
            title="Vegetables in Tribeniganj | Maa Gayatri General Store"
            description="Limited everyday vegetables available at Maa Gayatri General Store -- potato, onion, garlic and dry spices. NH 376, High School Road, Tribeniganj, Supaul."
            keywords="vegetables shop Tribeniganj, potato price Tribeniganj, onion shop Tribeniganj, sabzi Tribeniganj Supaul Bihar"
            canonical={`${SITE}/vegetables-tribeniganj`}
        />
        <StructuredData schema={[breadcrumb, faqSchema]} />

        <div className="seo-page">
            {/* Hero */}
            <section className="seo-hero" style={{ background: 'linear-gradient(135deg, #558b2f 0%, #8bc34a 60%, #558b2f 100%)' }}>
                <div className="seo-hero-inner">
                    <div className="seo-hero-badges">
                        <span className="seo-badge">Limited Availability</span>
                        <span className="seo-badge">Tribeniganj, Supaul</span>
                        <span className="seo-badge">Call Before Visiting</span>
                    </div>
                    <h1>Vegetables at Maa Gayatri Store, Tribeniganj</h1>
                    <p className="seo-hero-desc">
                        We stock a limited range of everyday vegetables -- potato, onion, garlic, dry bay
                        leaves and dry red chilli -- along with our full range of groceries and dry spices.
                    </p>
                    <div className="seo-hero-address">
                        📍 NH 376, High School Road, Tribeniganj, Supaul, Bihar - 852139
                    </div>
                    <div className="seo-hero-cta">
                        <a href={TEL} className="seo-btn-primary">📞 Call to Confirm Stock</a>
                        <a href={WA} target="_blank" rel="noopener noreferrer" className="seo-btn-secondary">💬 WhatsApp Us</a>
                    </div>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="seo-section">
                <div className="seo-section-inner">
                    <div className="seo-disclaimer">
                        ⚠️ <strong>Important:</strong> We stock only a limited selection of vegetables. Availability varies daily.
                        Please call <a href={TEL} style={{ color: '#7d6608', fontWeight: 700 }}>+91 90067 41663</a> to
                        confirm stock before visiting specifically for vegetables.
                    </div>

                    <h2 className="seo-section-title" style={{ marginTop: '2rem' }}>Vegetables We Stock</h2>
                    <p className="seo-section-subtitle">
                        A limited selection of everyday kitchen staples -- available subject to daily supply.
                    </p>
                    <div className="seo-cards-grid">
                        {vegetables.map((v, i) => (
                            <div key={i} className="seo-card" style={{ borderLeftColor: '#558b2f' }}>
                                <div className="seo-card-icon">{v.icon}</div>
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Spices section */}
            <section className="seo-section seo-section-alt">
                <div className="seo-section-inner">
                    <h2 className="seo-section-title">Full Range of Dry Spices & Masalas</h2>
                    <p className="seo-section-subtitle">
                        While our fresh vegetable selection is limited, we carry a comprehensive range of dry
                        spices and packaged masalas.
                    </p>
                    <div className="seo-items-grid">
                        {[
                            { icon: '🟡', title: 'Haldi Powder', desc: 'Turmeric' },
                            { icon: '🌿', title: 'Jeera', desc: 'Cumin seeds' },
                            { icon: '🟤', title: 'Dhaniya', desc: 'Coriander' },
                            { icon: '🔴', title: 'Lal Mirch', desc: 'Red chilli powder' },
                            { icon: '🟫', title: 'Garam Masala', desc: 'Everest, MDH, Catch' },
                            { icon: '🌶️', title: 'Sabji Masala', desc: 'Mixed veg masala' },
                            { icon: '🫙', title: 'Aamchur', desc: 'Dry mango powder' },
                            { icon: '⚫', title: 'Kali Mirch', desc: 'Black pepper' },
                        ].map((s, i) => (
                            <div key={i} className="seo-item-tile">
                                <div className="seo-item-tile-icon">{s.icon}</div>
                                <h4>{s.title}</h4>
                                <p>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <Link to="/all-categories" className="seo-btn-primary" style={{ background: '#558b2f', color: '#fff' }}>
                            Browse All Categories →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Store info */}
            <section className="seo-section">
                <div className="seo-section-inner">
                    <h2 className="seo-section-title">Store Information</h2>
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
                                    <a href={TEL} style={{ color: '#558b2f', fontWeight: 600 }}>+91 90067 41663</a>
                                </div>
                            </div>
                            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="seo-map-link" style={{ background: '#558b2f' }}>
                                🗺️ Open in Google Maps
                            </a>
                        </div>
                        <div>
                            <h3 style={{ marginBottom: '1rem', color: '#1a3a5c', fontSize: '1.1rem', fontWeight: 700 }}>Note for Vegetable Shoppers</h3>
                            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
                                We are primarily a grocery and general store. For a full range of fresh vegetables,
                                the local sabzi market in Tribeniganj is nearby. We complement your grocery shopping
                                with the staple vegetables, spices and dry goods you need.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="seo-section seo-section-alt">
                <div className="seo-section-inner">
                    <h2 className="seo-section-title" style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
                    <p className="seo-section-subtitle" style={{ textAlign: 'center', margin: '0 auto 2rem' }}>
                        About vegetables and spices at our store in Tribeniganj.
                    </p>
                    <SeoFaq items={faqs} />
                </div>
            </section>

            {/* CTA */}
            <section className="seo-cta-section" style={{ background: 'linear-gradient(135deg, #558b2f, #33691e)' }}>
                <h2>Call Before You Visit for Vegetables</h2>
                <p>Stock is limited and varies daily. +91 90067 41663 -- open 8 AM to 10 PM.</p>
                <div className="seo-cta-actions">
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="seo-whatsapp-btn">💬 WhatsApp Us</a>
                    <a href={TEL} className="seo-btn-primary">📞 Call Now</a>
                </div>
            </section>
        </div>
    </>
);

export default VegetablesTribeniganj;

