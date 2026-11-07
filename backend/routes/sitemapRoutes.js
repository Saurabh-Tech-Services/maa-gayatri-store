const express = require('express');
const router = express.Router();
const Category = require('../models/categoryModel');
const Product = require('../models/productModel');

const SITE_URL = 'https://maa-gayatri-store.vercel.app';

// Static pages with their change frequency and priority
const STATIC_PAGES = [
    { loc: '/',                                    changefreq: 'daily',   priority: '1.0' },
    { loc: '/about',                               changefreq: 'monthly', priority: '0.8' },
    { loc: '/contact',                             changefreq: 'monthly', priority: '0.7' },
    { loc: '/all-categories',                      changefreq: 'weekly',  priority: '0.9' },
    { loc: '/products/offers',                     changefreq: 'daily',   priority: '0.9' },
    { loc: '/grocery-store-tribeniganj',           changefreq: 'monthly', priority: '0.9' },
    { loc: '/daily-needs-store-tribeniganj',       changefreq: 'monthly', priority: '0.8' },
    { loc: '/pooja-items-tribeniganj',             changefreq: 'monthly', priority: '0.8' },
    { loc: '/dry-fruits-tribeniganj',              changefreq: 'monthly', priority: '0.8' },
    { loc: '/vegetables-tribeniganj',              changefreq: 'weekly',  priority: '0.7' },
    { loc: '/service-areas',                       changefreq: 'monthly', priority: '0.7' },
    { loc: '/brands',                              changefreq: 'weekly',  priority: '0.7' },
    { loc: '/blog',                                changefreq: 'weekly',  priority: '0.7' },
    { loc: '/blog/pooja-samagri-list',             changefreq: 'monthly', priority: '0.6' },
    { loc: '/blog/different-types-of-dals',        changefreq: 'monthly', priority: '0.6' },
    { loc: '/blog/indian-spices-guide',            changefreq: 'monthly', priority: '0.6' },
    { loc: '/blog/dry-fruits-uses-and-storage',    changefreq: 'monthly', priority: '0.6' },
    { loc: '/terms',                               changefreq: 'yearly',  priority: '0.3' },
    { loc: '/privacy',                             changefreq: 'yearly',  priority: '0.3' },
    { loc: '/return-policy',                       changefreq: 'yearly',  priority: '0.3' },
    { loc: '/cancellation-policy',                 changefreq: 'yearly',  priority: '0.3' },
    { loc: '/cookie-policy',                       changefreq: 'yearly',  priority: '0.3' },
    { loc: '/faq',                                 changefreq: 'monthly', priority: '0.5' },
];

function toISODate(date) {
    return (date ? new Date(date) : new Date()).toISOString().split('T')[0];
}

function buildUrl(loc, lastmod, changefreq, priority) {
    return `  <url>
    <loc>${SITE_URL}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

// GET /api/sitemap  — returns full sitemap XML
router.get('/', async (req, res) => {
    try {
        const [categories, products] = await Promise.all([
            Category.find({}).select('slug updatedAt').lean(),
            Product.find({ status: 'Published' }).select('slug updatedAt').lean(),
        ]);

        const today = toISODate();

        const staticUrls = STATIC_PAGES.map(p =>
            buildUrl(p.loc, today, p.changefreq, p.priority)
        );

        const categoryUrls = categories
            .filter(c => c.slug)
            .map(c =>
                buildUrl(`/category/${c.slug}`, toISODate(c.updatedAt), 'weekly', '0.8')
            );

        const productUrls = products
            .filter(p => p.slug)
            .map(p =>
                buildUrl(`/product/${p.slug}`, toISODate(p.updatedAt), 'weekly', '0.7')
            );

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...categoryUrls, ...productUrls].join('\n')}
</urlset>`;

        res.header('Content-Type', 'application/xml; charset=utf-8');
        res.header('Cache-Control', 'public, max-age=3600'); // cache 1 hour
        res.send(xml);
    } catch (error) {
        console.error('Sitemap generation error:', error);
        res.status(500).send('<?xml version="1.0"?><error>Sitemap generation failed</error>');
    }
});

module.exports = router;

