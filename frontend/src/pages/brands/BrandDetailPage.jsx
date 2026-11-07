import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Meta from '../../components/Meta';
import StructuredData from '../../components/StructuredData';
import { formatCurrency } from '../../utils/formatCurrency';
import './BrandDetailPage.css';

// Brand-specific CSS — import both; theme class activates the right one
import './BrandBikaji.css';
import './BrandHaldirams.css';

const SITE = 'https://maa-gayatri-store.vercel.app';

// Brand config: slug -> { displayName, logo, description, themeClass }
const BRAND_CONFIG = {
    'bikaji': {
        displayName: 'Bikaji',
        logo: '/brands/bikaji.webp',
        description: 'Bikaji is one of India\'s leading snack and namkeen manufacturers. Known for bhujia, namkeen, sweets, papad and packaged snacks — all available at Maa Gayatri General Store, Tribeniganj.',
        themeClass: 'brand-theme-bikaji',
        seoTitle: 'Bikaji Products in Tribeniganj | Maa Gayatri General Store',
        seoDesc: 'Buy Bikaji bhujia, namkeen, sweets and snacks at Maa Gayatri General Store, NH 376, Tribeniganj, Supaul, Bihar. Check available products and prices.',
        seoKeywords: 'Bikaji Tribeniganj, Bikaji namkeen Tribeniganj, Bikaji bhujia shop Supaul Bihar, Bikaji products near me',
    },
    'haldirams': {
        displayName: "Haldiram's",
        logo: '/brands/haldiram.webp',
        description: "Haldiram's is India's most popular brand for namkeen, snacks, sweets and ready-to-eat foods. Find Haldiram's products at fair prices at Maa Gayatri General Store, Tribeniganj.",
        themeClass: 'brand-theme-haldirams',
        seoTitle: "Haldiram's Products in Tribeniganj | Maa Gayatri General Store",
        seoDesc: "Buy Haldiram's namkeen, bhujia, sweets and snacks at Maa Gayatri General Store, NH 376, Tribeniganj, Supaul, Bihar. Genuine products at honest prices.",
        seoKeywords: "Haldiram's Tribeniganj, Haldiram namkeen Tribeniganj, Haldiram bhujia shop Supaul Bihar, Haldiram's products near me",
    },
};

// Map slug to actual brand name used in DB
const SLUG_TO_BRAND = {
    'bikaji': 'Bikaji',
    'haldirams': "Haldiram's",
};

const BrandDetailPage = () => {
    const { slug } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sort, setSort] = useState('name-asc');

    const config = BRAND_CONFIG[slug];
    const brandName = SLUG_TO_BRAND[slug] || slug;

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const encoded = encodeURIComponent(brandName);
                const { data } = await axios.get(`/api/products/brand/${encoded}`);
                setProducts(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error('Could not fetch brand products:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [slug, brandName]);

    const sortedProducts = useMemo(() => {
        const sorted = [...products];
        switch (sort) {
            case 'price-asc':
                sorted.sort((a, b) => (a.price - a.price * a.discount / 100) - (b.price - b.price * b.discount / 100));
                break;
            case 'price-desc':
                sorted.sort((a, b) => (b.price - b.price * b.discount / 100) - (a.price - a.price * a.discount / 100));
                break;
            case 'discount':
                sorted.sort((a, b) => (b.discount || 0) - (a.discount || 0));
                break;
            case 'name-asc':
            default:
                sorted.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }
        return sorted;
    }, [products, sort]);

    const displayName = config?.displayName || brandName;
    const themeClass = config?.themeClass || '';

    const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE + "/" },
            { "@type": "ListItem", "position": 2, "name": "Brands", "item": SITE + "/brands" },
            { "@type": "ListItem", "position": 3, "name": displayName, "item": `${SITE}/brands/${slug}` }
        ]
    };

    return (
        <>
            <Meta
                title={config?.seoTitle || `${displayName} Products | Maa Gayatri General Store`}
                description={config?.seoDesc || `Buy ${displayName} products at Maa Gayatri General Store, Tribeniganj, Supaul, Bihar.`}
                keywords={config?.seoKeywords || `${displayName} Tribeniganj, ${displayName} products Supaul Bihar`}
                canonical={`${SITE}/brands/${slug}`}
            />
            <StructuredData schema={breadcrumb} />

            <div className={`brand-detail-page ${themeClass}`}>
                {/* Back link */}
                <Link to="/brands" className="brand-back-link">
                    ← All Brands
                </Link>

                {/* Hero */}
                <section className="brand-detail-hero">
                    <div className="brand-detail-hero-inner">
                        {config?.logo ? (
                            <img
                                src={config.logo}
                                alt={displayName}
                                className="brand-detail-logo"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                        ) : (
                            <div className="brand-detail-logo-fallback">
                                {displayName.charAt(0)}
                            </div>
                        )}
                        <h1>{displayName} at Maa Gayatri General Store</h1>
                        <p>{config?.description || `Shop ${displayName} products at Maa Gayatri General Store, NH 376, High School Road, Tribeniganj, Supaul, Bihar.`}</p>
                        <div className="brand-product-count">
                            {products.length} product{products.length !== 1 ? 's' : ''} available
                        </div>
                    </div>
                </section>

                {/* Products */}
                <section className="brand-products-section">
                    <div className="brand-products-inner">
                        {loading ? (
                            <div className="preloader"><p>Loading products...</p></div>
                        ) : products.length === 0 ? (
                            <div className="brand-empty">
                                <div className="brand-empty-icon">📦</div>
                                <h3>No Products Found</h3>
                                <p>We currently have no {displayName} products listed online. Visit our store or call +91 90067 41663 to check in-store availability.</p>
                                <Link to="/brands" className="brand-back-link" style={{ display: 'inline-flex', marginLeft: 0 }}>
                                    ← Browse All Brands
                                </Link>
                            </div>
                        ) : (
                            <>
                                <div className="brand-products-header">
                                    <h2>{displayName} Products</h2>
                                    <select
                                        className="brand-sort-select"
                                        value={sort}
                                        onChange={(e) => setSort(e.target.value)}
                                    >
                                        <option value="name-asc">Name: A → Z</option>
                                        <option value="price-asc">Price: Low → High</option>
                                        <option value="price-desc">Price: High → Low</option>
                                        <option value="discount">Best Discount</option>
                                    </select>
                                </div>
                                <div className="brand-products-grid">
                                    {sortedProducts.map((product) => {
                                        const finalPrice = product.price - (product.price * (product.discount || 0) / 100);
                                        return (
                                            <Link
                                                key={product._id}
                                                to={`/product/${product.slug}`}
                                                className="brand-product-card"
                                            >
                                                <img
                                                    src={product.images?.[0] || '/logo.png'}
                                                    alt={product.name}
                                                    className="brand-product-card-img"
                                                />
                                                <div className="brand-product-card-body">
                                                    <h3>{product.name}</h3>
                                                    <p className="brand-product-category">
                                                        {product.category?.name || ''}
                                                    </p>
                                                    <div className="brand-product-price">
                                                        <span className="brand-product-final">
                                                            {formatCurrency(finalPrice)}
                                                        </span>
                                                        {product.discount > 0 && (
                                                            <>
                                                                <span className="brand-product-mrp">
                                                                    {formatCurrency(product.price)}
                                                                </span>
                                                                <span className="brand-product-off">
                                                                    {product.discount}% off
                                                                </span>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
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

export default BrandDetailPage;

