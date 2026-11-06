/**
 * Client-side slug helpers (mirrors backend logic).
 */

/** Build a URL-safe slug from any name string. */
export function generateSlug(name = '') {
    return name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
}

/** Return the category path: prefer slug, fallback to _id. */
export function categoryPath(cat) {
    if (!cat) return '/all-categories';
    const id = cat._id || cat;
    const slug = cat.slug || generateSlug(cat.name || '');
    return slug ? `/category/${slug}` : `/category/${id}`;
}

/** Return the product path: prefer slug, fallback to _id. */
export function productPath(product) {
    if (!product) return '/';
    return product.slug
        ? `/product/${product.slug}`
        : `/product/${product._id}`;
}

