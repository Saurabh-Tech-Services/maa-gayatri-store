const mongoose = require('mongoose');

// Generate slug from name
function generateSlug(name) {
    return name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')   // remove special chars
        .replace(/\s+/g, '-')            // spaces → hyphens
        .replace(/-+/g, '-')             // collapse multiple hyphens
        .replace(/^-+|-+$/g, '');        // trim leading/trailing hyphens
}

const categorySchema = new mongoose.Schema({
    name:  { type: String, required: true, unique: true },
    slug:  { type: String, unique: true, sparse: true },
    image: { type: String, required: true }, // URL to image in S3
}, { timestamps: true });

// Auto-generate slug before save
categorySchema.pre('save', function (next) {
    if (!this.slug || this.isModified('name')) {
        this.slug = generateSlug(this.name);
    }
    next();
});

module.exports = mongoose.model('Category', categorySchema);
