const mongoose = require('mongoose');

// Generate slug from name
function generateSlug(name) {
    return name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
}

const reviewSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, required: true },
    comment: { type: String },
}, { timestamps: true });

const specificationSchema = new mongoose.Schema({
    key: { type: String, required: true },
    value: { type: String, required: true },
});

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, unique: true, sparse: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    subCategory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' }],
    brand: { type: String },
    color: { type: String },
    stock: { type: Number, required: true, default: 0 },
    images: [{ type: String, required: true }], // URLs to images in S3
    reviews: [reviewSchema],
    rating: { type: Number, default: 0 },
    specifications: [specificationSchema],
    tags: [String],
    shippingInfo: { type: String },
    status: { type: String, enum: ['Published', 'Draft', 'Hidden'], default: 'Published' },
}, { timestamps: true });

// Auto-generate slug before save (include _id suffix for uniqueness)
productSchema.pre('save', async function (next) {
    if (!this.slug || this.isModified('name')) {
        const base = generateSlug(this.name);
        // Append short id to guarantee uniqueness across same-name products
        const shortId = this._id.toString().slice(-6);
        this.slug = `${base}-${shortId}`;
    }
    next();
});

module.exports = mongoose.model('Product', productSchema);
