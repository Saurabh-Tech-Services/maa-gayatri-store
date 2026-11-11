const mongoose = require('mongoose');

function generateSlug(name) {
    return name.toLowerCase().trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
}

const brandSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, trim: true },
    slug: { type: String, unique: true },
    logo: { type: String, default: '' }, // URL to logo in S3
}, { timestamps: true });

brandSchema.pre('save', function(next) {
    if (!this.slug || this.isModified('name')) {
        this.slug = generateSlug(this.name);
    }
    next();
});

module.exports = mongoose.model('Brand', brandSchema);
