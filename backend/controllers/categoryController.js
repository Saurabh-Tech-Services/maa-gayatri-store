const Category = require('../models/categoryModel');
const asyncHandler = require('express-async-handler');

// Helper: generate slug (mirrors model logic)
function generateSlug(name) {
    return name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
}

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
const getCategories = asyncHandler(async (req, res) => {
    const categories = await Category.find({});
    res.json(categories);
});

// @desc    Get category by slug (or fallback to _id)
// @route   GET /api/categories/slug/:slug
// @access  Public
const getCategoryBySlug = asyncHandler(async (req, res) => {
    const { slug } = req.params;
    let category = await Category.findOne({ slug });
    // Fallback: try matching by _id (for old links)
    if (!category && slug.match(/^[0-9a-fA-F]{24}$/)) {
        category = await Category.findById(slug);
    }
    if (category) {
        res.json(category);
    } else {
        res.status(404);
        throw new Error('Category not found.');
    }
});

// @desc    Create a new category
// @route   POST /api/categories
// @access  Private/Admin
const createCategory = asyncHandler(async (req, res) => {
    const { name, imageUrl } = req.body;
    let imageLocation = '';

    if (req.file) {
        imageLocation = req.file.location;
    } else if (imageUrl) {
        imageLocation = imageUrl;
    } else {
        res.status(400);
        throw new Error('No image file or image URL provided.');
    }

    const categoryExists = await Category.findOne({ name });
    if (categoryExists) {
        res.status(400);
        throw new Error('Category already exists.');
    }

    const category = await Category.create({
        name,
        image: imageLocation,
    });

    res.status(201).json(category);
});

// @desc    Update a category
// @route   PUT /api/categories/:id
// @access  Private/Admin
const updateCategory = asyncHandler(async (req, res) => {
    const { name, imageUrl } = req.body;
    const category = await Category.findById(req.params.id);

    if (category) {
        category.name = name || category.name;
        if (req.file) {
            category.image = req.file.location;
        } else if (imageUrl) {
            category.image = imageUrl;
        }
        const updatedCategory = await category.save();
        res.json(updatedCategory);
    } else {
        res.status(404);
        throw new Error('Category not found.');
    }
});

// @desc    Delete a category
// @route   DELETE /api/categories/:id
// @access  Private/Admin
const deleteCategory = asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (category) {
        await Category.deleteOne({ _id: req.params.id });
        res.json({ message: 'Category removed' });
    } else {
        res.status(404);
        throw new Error('Category not found.');
    }
});

module.exports = {
    getCategories,
    getCategoryBySlug,
    createCategory,
    updateCategory,
    deleteCategory,
};
