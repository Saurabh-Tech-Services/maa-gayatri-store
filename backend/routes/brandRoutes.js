const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');
const {
    getBrands, getBrandBySlug, createBrand, updateBrand, deleteBrand
} = require('../controllers/brandController');

router.route('/').get(getBrands).post(protect, admin, upload.single('logo'), createBrand);
router.route('/slug/:slug').get(getBrandBySlug);
router.route('/:id').put(protect, admin, upload.single('logo'), updateBrand).delete(protect, admin, deleteBrand);

module.exports = router;
