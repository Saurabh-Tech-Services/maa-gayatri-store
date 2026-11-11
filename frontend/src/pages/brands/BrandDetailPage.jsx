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

const BrandDetailPage = () => {
    const { slug } = useParams();
    const [brand, setBrand] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sort, setSort] = useState('name-asc');

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchBrandAndProducts = async () => {
            setLoading(true);
            try {
                // Fetch brand info from Brand model
                const { data: brandData } = await axios.get(`/api/brands/slug/${slug}`);
                setBrand(brandData);

                // Fetch products by brand name
                const encoded = encodeURIComponent(brandData.name);
                const { data: productsData } = await axios.get(`/api/products/brand/${encoded}`);
                setProducts(Array.isArray(productsData) ? productsData : []);
            } catch (err) {
                console.error('Could not fetch brand or products:', err);
                setBrand(null);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };
        fetchBrandAndProducts();
    }, [slug]);

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

    const displayName = brand?.name || slug;
    const themeClass = `brand-theme-${slug}`;

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
                title={`${displayName} Products in Tribeniganj | Maa Gayatri General Store`}
                description={`Buy ${displayName} products at Maa Gayatri General Store, NH 376, Tribeniganj, Supaul, Bihar. Check available products and prices.`}
                keywords={`${displayName} Tribeniganj, ${displayName} products Supaul Bihar, ${displayName} shop near me`}
                canonical={`${SITE}/brands/${slug}`}
            />
            <StructuredData schema={breadcrumb} />

            <div className={`brand-detail-page ${themeClass}`}>
                {/* Back link */}
                <Link to="/brands" className="brand-back-link">
                    &#8592; All Brands
                </Link>

                {/* Hero */}
                <section className="brand-detail-hero">
                    <div className="brand-detail-hero-inner">
                        {brand?.logo ? (
                            <img
                                src={brand.logo}
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
                        <p>Shop {displayName} products at Maa Gayatri General Store, NH 376, High School Road, Tribeniganj, Supaul, Bihar.</p>
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
                                <div className="brand-empty-icon">&#128230;</div>
                                <h3>No Products Found</h3>
                                <p>We currently have no {displayName} products listed online. Visit our store or call +91 90067 41663 to check in-store availability.</p>
                                <Link to="/brands" className="brand-back-link" style={{ display: 'inline-flex', marginLeft: 0 }}>
                                    &#8592; Browse All Brands
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
                                        <option value="name-asc">Name: A &#8594; Z</option>
                                        <option value="price-asc">Price: Low &#8594; High</option>
                                        <option value="price-desc">Price: High &#8594; Low</option>
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
