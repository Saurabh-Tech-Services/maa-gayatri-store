const Brand = require('../models/brandModel');
const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');

// @desc    Get all brands
// @route   GET /api/brands
// @access  Public
const getBrands = asyncHandler(async (req, res) => {
    const brands = await Brand.find({}).sort({ name: 1 });
    res.json(brands);
});

// @desc    Get brand by slug
// @route   GET /api/brands/slug/:slug
// @access  Public
const getBrandBySlug = asyncHandler(async (req, res) => {
    const { slug } = req.params;
    let brand = await Brand.findOne({ slug });
    // Fallback: try matching by _id (for old links)
    if (!brand && slug.match(/^[0-9a-fA-F]{24}$/)) {
        brand = await Brand.findById(slug);
    }
    if (brand) {
        res.json(brand);
    } else {
        res.status(404);
        throw new Error('Brand not found.');
    }
});

// @desc    Create a new brand
// @route   POST /api/brands
// @access  Private/Admin
const createBrand = asyncHandler(async (req, res) => {
    const { name } = req.body;

    const brandExists = await Brand.findOne({ name });
    if (brandExists) {
        res.status(400);
        throw new Error('Brand already exists.');
    }

    const brand = await Brand.create({
        name,
        logo: req.file ? req.file.location : '',
    });

    res.status(201).json(brand);
});

// @desc    Update a brand
// @route   PUT /api/brands/:id
// @access  Private/Admin
const updateBrand = asyncHandler(async (req, res) => {
    const { name } = req.body;
    const brand = await Brand.findById(req.params.id);

    if (brand) {
        brand.name = name || brand.name;
        if (req.file) {
            brand.logo = req.file.location;
        }
        const updatedBrand = await brand.save();
        res.json(updatedBrand);
    } else {
        res.status(404);
        throw new Error('Brand not found.');
    }
});

// @desc    Delete a brand
// @route   DELETE /api/brands/:id
// @access  Private/Admin
const deleteBrand = asyncHandler(async (req, res) => {
    const brand = await Brand.findById(req.params.id);
    if (brand) {
        // Clear brand name from all products that reference this brand
        await Product.updateMany(
            { brand: brand.name },
            { $set: { brand: '' } }
        );

        await Brand.deleteOne({ _id: req.params.id });
        res.json({ message: 'Brand removed' });
    } else {
        res.status(404);
        throw new Error('Brand not found.');
    }
});

module.exports = {
    getBrands,
    getBrandBySlug,
    createBrand,
    updateBrand,
    deleteBrand,
};
