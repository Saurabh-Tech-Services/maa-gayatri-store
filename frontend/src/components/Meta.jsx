import React from 'react';
import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords, author, canonical, ogImage, ogType, twitterCard, noIndex }) => {
    const siteUrl = window.location.origin;
    const currentUrl = window.location.href;
    const defaultTitle = 'Maa Gayatri General Store - Your One-Stop Online Shop';
    const defaultDescription = 'Discover a wide range of products at Maa Gayatri General Store. We offer the best prices on electronics, fashion, home goods, and more. Shop now for great deals!';
    const defaultKeywords = 'e-commerce, online shopping, electronics, fashion, home goods, deals, discounts';
    const defaultAuthor = 'Saurabh Kumar';
    const defaultOgImage = `${siteUrl}/og.png`;
    const defaultOgType = 'website';
    const defaultTwitterCard = 'summary_large_image';

    const finalOgImage = ogImage ? (ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`) : defaultOgImage;

    return (
        <Helmet>
            <title>{title || defaultTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <meta name="author" content={author || defaultAuthor} />
            <link rel="canonical" href={canonical || currentUrl} />
            {noIndex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <meta name="robots" content="index, follow" />
            )}
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/site.webmanifest" />

            {/* Open Graph Tags */}
            <meta property="og:title" content={title || defaultTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={finalOgImage} />
            <meta property="og:url" content={canonical || currentUrl} />
            <meta property="og:type" content={ogType || defaultOgType} />
            <meta property="og:site_name" content="Maa Gayatri General Store" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content={twitterCard || defaultTwitterCard} />
            <meta name="twitter:title" content={title || defaultTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={finalOgImage} />
        </Helmet>
    );
};

export default Meta;
