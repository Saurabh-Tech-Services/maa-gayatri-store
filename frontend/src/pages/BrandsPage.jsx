import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Meta from '../components/Meta';
import StructuredData from '../components/StructuredData';
import './BrandsPage.css';

const SITE = 'https://maa-gayatri-store.vercel.app';

const BrandsPage = () => {
    const [brands, setBrands] = useState([]);
    const [productCounts, setProductCounts] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                // Fetch brands from Brand model + product counts from aggregation
                const [brandsRes, countsRes] = await Promise.all([
                    axios.get('/api/brands'),
                    axios.get('/api/products/brands')
                ]);
                const brandsList = Array.isArray(brandsRes.data) ? brandsRes.data : [];
                setBrands(brandsList);

                // Build a name -> count map from the aggregation endpoint
                const countsList = Array.isArray(countsRes.data) ? countsRes.data : [];
                const countsMap = {};
                countsList.forEach(item => {
                    countsMap[item.name] = item.count || 0;
                });
                setProductCounts(countsMap);
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
                                        const count = productCounts[brand.name] || 0;
                                        return (
                                            <Link
                                                key={brand._id}
                                                to={`/brands/${brand.slug}`}
                                                className="brand-card"
                                            >
                                                {brand.logo ? (
                                                    <img
                                                        src={brand.logo}
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
                                                    style={brand.logo ? { display: 'none' } : {}}
                                                >
                                                    {brand.name.charAt(0)}
                                                </div>
                                                <h3>{brand.name}</h3>
                                                <p className="brand-card-count">
                                                    {count} product{count !== 1 ? 's' : ''}
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
