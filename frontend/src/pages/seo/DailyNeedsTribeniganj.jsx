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

const sections = [
    {
        icon: '🌾', title: 'Everyday Groceries',
        items: ['Atta, maida, suji', 'Rice (basmati & regular)', 'Dal (arhar, chana, moong, masoor)', 'Sugar, salt, tea, coffee'],
    },
    {
        icon: '🥫', title: 'Packaged & Ready Foods',
        items: ['Maggi, noodles, vermicelli', 'Namkeen, chips, biscuits', 'Jams, pickle, ketchup', 'Instant mixes & soups'],
    },
    {
        icon: '🧴', title: 'Personal Care',
        items: ['Colgate, Dettol, Lifebuoy, Lux', 'Shampoo, conditioner, soap', 'Talcum powder, deodorant', 'Toothbrush, razors, cotton'],
    },
    {
        icon: '🧹', title: 'Home & Cleaning',
        items: ['Surf Excel, Rin, Ariel', 'Vim, Colin, Lizol', 'Dustbin bags, scrubbers', 'Air fresheners, candles'],
    },
    {
        icon: '🥛', title: 'Beverages',
        items: ['Nescafé, Bru, Red Label', 'Lipton, Taj Mahal tea', 'Horlicks, Boost, Complan', 'Fruit drinks, squashes'],
    },
    {
        icon: '👶', title: 'Baby & Kids',
        items: ['Baby diapers & wipes', 'Baby soap & shampoo', 'Baby powder & lotion', 'Kids snacks and biscuits'],
    },
];

const faqs = [
    { q: 'What daily essentials are available at Maa Gayatri General Store?', a: 'We stock a comprehensive range including atta, rice, dal, spices, oil, ghee, sugar, salt, biscuits, namkeen, beverages, personal care products (soaps, shampoos, toothpaste) and home cleaning products (detergent, floor cleaner). Most household needs are available under one roof.' },
    { q: 'Do you stock personal care products?', a: 'Yes. We stock Colgate, Dettol, Lifebuoy, Lux, Dove, Himalaya, Dabur and many other personal care brands. You will find soaps, shampoos, toothpastes, face wash and other grooming products.' },
    { q: 'Are cleaning and home care products available?', a: 'Yes. We stock Surf Excel, Rin, Ariel, Vim, Colin, Lizol and other HUL and Godrej cleaning products regularly.' },
    { q: 'Do you stock baby care products?', a: 'We stock a selection of baby care essentials including diapers, baby soap, shampoo, powder and lotion from popular brands. Call ahead to confirm specific product availability.' },
    { q: 'What are your store hours?', a: 'We are open Monday to Sunday from 8 AM to 10 PM, including all public holidays.' },
    { q: 'Is the store near Tribeniganj Bus Stand?', a: 'Yes. We are located on NH 376, High School Road, which is very close to the Bus Stand area in Tribeniganj. It is easy to reach from all directions.' },
    { q: 'Can I call to check if a specific product is in stock?', a: 'Yes, please call or WhatsApp us at +91 90067 41663 and we will confirm availability before you visit.' },
];

const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE + "/" },
        { "@type": "ListItem", "position": 2, "name": "Daily Needs Store in Tribeniganj", "item": SITE + "/daily-needs-store-tribeniganj" }
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

const DailyNeedsTribeniganj = () => (
    <>
        <Meta
            title="Daily Needs Store in Tribeniganj | Maa Gayatri General Store"
            description="Shop everyday essentials in Tribeniganj -- groceries, snacks, beverages, personal care, cleaning products and household items at Maa Gayatri General Store."
            keywords="daily needs store Tribeniganj, daily essentials Tribeniganj, household items shop Tribeniganj, general store Tribeniganj, supermarket Supaul Bihar"
            canonical={`${SITE}/daily-needs-store-tribeniganj`}
        />
        <StructuredData schema={[breadcrumb, faqSchema]} />

        <div className="seo-page">
            {/* Hero */}
            <section className="seo-hero">
                <div className="seo-hero-inner">
                    <div className="seo-hero-badges">
                        <span className="seo-badge">Daily Essentials</span>
                        <span className="seo-badge">Tribeniganj, Supaul</span>
                        <span className="seo-badge">8 AM - 10 PM</span>
                    </div>
                    <h1>Everyday Essentials Under One Roof in Tribeniganj</h1>
                    <p className="seo-hero-desc">
                        From groceries and snacks to personal care and household cleaning -- Maa Gayatri
                        General Store is your one-stop daily needs shop in Tribeniganj, Bihar.
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

            {/* Product sections */}
            <section className="seo-section">
                <div className="seo-section-inner">
                    <h2 className="seo-section-title">What We Stock</h2>
                    <p className="seo-section-subtitle">
                        A comprehensive range of everyday items for your family -- all genuine branded products at fair prices.
                    </p>
                    <div className="seo-cards-grid">
                        {sections.map((s, i) => (
                            <div key={i} className="seo-card">
                                <div className="seo-card-icon">{s.icon}</div>
                                <h3>{s.title}</h3>
                                <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.9rem', color: '#666', lineHeight: 1.7 }}>
                                    {s.items.map((item, j) => <li key={j}>{item}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Store info */}
            <section className="seo-section seo-section-alt">
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
                                    <strong>Timings</strong>Monday - Sunday: 8:00 AM - 10:00 PM (Open daily)
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
                                    <strong>Payments</strong>Cash · UPI · Paytm · Google Pay · PhonePe
                                </div>
                            </div>
                            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="seo-map-link">🗺️ Open in Google Maps</a>
                        </div>
                        <div>
                            <h3 style={{ marginBottom: '1rem', color: '#1a3a5c', fontSize: '1.1rem', fontWeight: 700 }}>Quick Links</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <Link to="/all-categories" style={{ color: '#2e86c1', textDecoration: 'none', fontWeight: 600 }}>→ Browse All Categories</Link>
                                <Link to="/products/offers" style={{ color: '#2e86c1', textDecoration: 'none', fontWeight: 600 }}>→ Today's Offers</Link>
                                <Link to="/grocery-store-tribeniganj" style={{ color: '#2e86c1', textDecoration: 'none', fontWeight: 600 }}>→ Grocery Store Tribeniganj</Link>
                                <Link to="/pooja-items-tribeniganj" style={{ color: '#2e86c1', textDecoration: 'none', fontWeight: 600 }}>→ Pooja Items Tribeniganj</Link>
                                <Link to="/dry-fruits-tribeniganj" style={{ color: '#2e86c1', textDecoration: 'none', fontWeight: 600 }}>→ Dry Fruits Tribeniganj</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="seo-section">
                <div className="seo-section-inner">
                    <h2 className="seo-section-title" style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
                    <p className="seo-section-subtitle" style={{ textAlign: 'center', margin: '0 auto 2rem' }}>
                        Answers to common questions from daily shoppers in Tribeniganj.
                    </p>
                    <SeoFaq items={faqs} />
                </div>
            </section>

            {/* CTA */}
            <section className="seo-cta-section">
                <h2>Shop Your Daily Needs at Maa Gayatri</h2>
                <p>Open every day -- 8 AM to 10 PM -- NH 376, High School Road, Tribeniganj.</p>
                <div className="seo-cta-actions">
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="seo-whatsapp-btn">💬 WhatsApp: +91 90067 41663</a>
                    <a href={MAPS} target="_blank" rel="noopener noreferrer" className="seo-btn-primary">🗺️ Get Directions</a>
                </div>
            </section>
        </div>
    </>
);

export default DailyNeedsTribeniganj;

