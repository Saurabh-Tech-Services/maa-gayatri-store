import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Meta from '../components/Meta';
import StructuredData from '../components/StructuredData';
import './BrandsPage.css';

const SITE = 'https://maa-gayatri-store.vercel.app';

// Map brand names to their logo files in /brands/
const BRAND_LOGOS = {
    'Bikaji':     '/brands/bikaji.webp',
    'Bikano':     '/brands/bikano.webp',
    'Britannia':  '/brands/Britannia.webp',
    'Dabur':      '/brands/dabur.webp',
    'Fortune':    '/brands/fortune.webp',
    "Haldiram's": '/brands/haldiram.webp',
    'Parle':      '/brands/parle.webp',
    'Patanjali':  '/brands/patanjali.webp',
    'Tata':       '/brands/tata.webp',
};

function brandSlug(name) {
    return name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
}

const BrandsPage = () => {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const { data } = await axios.get('/api/products/brands');
                setBrands(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error('Could not fetch brands:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchBrands();
    }, []);

    const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE + "/" },
            { "@type": "ListItem", "position": 2, "name": "Brands", "item": SITE + "/brands" }
        ]
    };

    return (
        <>
            <Meta
                title="Grocery & FMCG Brands Available in Tribeniganj | Maa Gayatri Store"
                description="Shop your favourite grocery and FMCG brands at Maa Gayatri General Store in Tribeniganj, Supaul, Bihar. Tata, Amul, Britannia, Fortune, Nestl&eacute;, Haldiram's, Bikaji and more."
                keywords="brands Tribeniganj, grocery brands Supaul Bihar, FMCG brands Maa Gayatri Store, Tata Amul Britannia Fortune Dabur"
                canonical={`${SITE}/brands`}
            />
            <StructuredData schema={breadcrumb} />

            <div className="brands-page">
                {/* Hero */}
                <section className="brands-hero">
                    <div className="brands-hero-inner">
                        <h1>Shop Your Favourite Brands</h1>
                        <p>
                            Genuine FMCG and grocery brands available at Maa Gayatri General Store,
                            NH 376, High School Road, Tribeniganj, Supaul, Bihar.
                        </p>
                    </div>
                </section>

                {/* Brand grid */}
                <section className="brands-section">
                    <div className="brands-section-inner">
                        {loading ? (
                            <div className="preloader"><p>Loading brands...</p></div>
                        ) : (
                            <>
                                <p className="brands-count">
                                    {brands.length} brand{brands.length !== 1 ? 's' : ''} available
                                </p>
                                <div className="brands-grid">
                                    {brands.map((brand) => {
                                        const logo = BRAND_LOGOS[brand.name];
                                        const slug = brandSlug(brand.name);
                                        return (
                                            <Link
                                                key={brand.name}
                                                to={`/brands/${slug}`}
                                                className="brand-card"
                                            >
                                                {logo ? (
                                                    <img
                                                        src={logo}
                                                        alt={brand.name}
                                                        className="brand-card-logo"
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                            e.target.nextSibling.style.display = 'flex';
                                                        }}
                                                    />
                                                ) : null}
                                                <div
                                                    className="brand-card-fallback"
                                                    style={logo ? { display: 'none' } : {}}
                                                >
                                                    {brand.name.charAt(0)}
                                                </div>
                                                <h3>{brand.name}</h3>
                                                <p className="brand-card-count">
                                                    {brand.count} product{brand.count !== 1 ? 's' : ''}
                                                </p>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </>
                        )}
                    </div>
                </section>
            </div>
        </>
    );
};

export default BrandsPage;

