import React, { useState, useEffect, useRef, useMemo } from 'react';
import axios from 'axios';
import { FiX, FiPlus } from 'react-icons/fi';
import ReactCrop, { centerCrop, makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import '../AddressModal.css'; // Reusing styles
import './ProductModal.css';

// Mirror backend slug logic (backend appends last-6 chars of _id for uniqueness)
function generateSlug(name) {
    return name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
}

const ProductModal = ({ isOpen, onClose, onSave, product, isSaving, showCloseButton = true }) => {
    const [formData, setFormData] = useState({
        name: '', description: '', category: '', price: 0, discount: 0, stock: 0,
        tags: '', shippingInfo: '', status: 'Published', brand: '', color: ''
    });
    const [specifications, setSpecifications] = useState([{ key: '', value: '' }]);
    const [defaultPhoto, setDefaultPhoto] = useState(null);
    const [additionalPhotos, setAdditionalPhotos] = useState([]);
    const [categories, setCategories] = useState([]);
    const [allSubCategories, setAllSubCategories] = useState([]);
    const [availableSubCategories, setAvailableSubCategories] = useState([]);
    const [selectedSubCategories, setSelectedSubCategories] = useState([]);
    const [finalPrice, setFinalPrice] = useState(0);
    const [defaultPhotoPreview, setDefaultPhotoPreview] = useState('');
    const [additionalPhotoPreviews, setAdditionalPhotoPreviews] = useState([]);
    const [removedImageUrls, setRemovedImageUrls] = useState([]);

    // Brand dropdown state
    const [allBrands, setAllBrands] = useState([]);
    const [brandSearch, setBrandSearch] = useState('');
    const [showBrandDropdown, setShowBrandDropdown] = useState(false);
    const [showNewBrandForm, setShowNewBrandForm] = useState(false);
    const [newBrandName, setNewBrandName] = useState('');
    const [newBrandLogo, setNewBrandLogo] = useState(null);
    const [creatingBrand, setCreatingBrand] = useState(false);
    const brandDropdownRef = useRef(null);

    // Cropper state
    const [upImg, setUpImg] = useState();
    const [crop, setCrop] = useState();
    const [croppingFor, setCroppingFor] = useState(null); // 'default' or 'additional'
    const imgRef = useRef(null);
    const additionalPhotosInputRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [categoriesRes, subCategoriesRes, brandsRes] = await Promise.all([
                    axios.get('/api/categories'),
                    axios.get('/api/subcategories'),
                    axios.get('/api/brands')
                ]);
                setCategories(categoriesRes.data);
                setAllSubCategories(subCategoriesRes.data);
                setAllBrands(Array.isArray(brandsRes.data) ? brandsRes.data : []);
            } catch (error) {
                console.error("Failed to fetch categories, sub-categories or brands", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name, description: product.description, category: product.category?._id || '',
                price: product.price, discount: product.discount, stock: product.stock,
                tags: product.tags.join(', '), shippingInfo: product.shippingInfo, status: product.status,
                brand: product.brand || '',
                color: product.color || ''
            });
            setSpecifications(product.specifications.length > 0 ? product.specifications : [{ key: '', value: '' }]);
            setSelectedSubCategories(product.subCategory || []);
            setDefaultPhotoPreview(product.images[0] || '');
            setAdditionalPhotoPreviews(product.images.slice(1));
        } else {
            setFormData({ name: '', description: '', category: '', price: 0, discount: 0, stock: 0, tags: '', shippingInfo: '', status: 'Published', brand: '', color: '' });
            setSpecifications([{ key: '', value: '' }]);
            setSelectedSubCategories([]);
            setDefaultPhotoPreview('');
            setAdditionalPhotoPreviews([]);
        }
        setAdditionalPhotos([]); // Always reset new photos
        setDefaultPhoto(null);
        setUpImg(null);
        setCroppingFor(null);
        setRemovedImageUrls([]); // Reset removed images list when modal opens
    }, [product, isOpen]);

    useEffect(() => {
        if (formData.category && allSubCategories.length > 0) {
            const filtered = allSubCategories.filter(sub =>
                sub.categories.some(cat => cat._id === formData.category)
            );
            setAvailableSubCategories(filtered);

            // Deselect sub-categories that are not in the new available list
            const availableIds = filtered.map(f => f._id);
            setSelectedSubCategories(prev => prev.filter(id => availableIds.includes(id)));
        } else {
            setAvailableSubCategories([]);
            setSelectedSubCategories([]);
        }
    }, [formData.category, allSubCategories]);

    useEffect(() => {
        const price = parseFloat(formData.price) || 0;
        const discount = parseFloat(formData.discount) || 0;
        setFinalPrice(price - (price * discount / 100));
    }, [formData.price, formData.discount]);

    // Close brand dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (brandDropdownRef.current && !brandDropdownRef.current.contains(e.target)) {
                setShowBrandDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredBrands = useMemo(() => {
        if (!brandSearch) return allBrands;
        return allBrands.filter(b => b.name.toLowerCase().includes(brandSearch.toLowerCase()));
    }, [allBrands, brandSearch]);

    const handleSelectBrand = (brandName) => {
        setFormData(prev => ({ ...prev, brand: brandName }));
        setBrandSearch('');
        setShowBrandDropdown(false);
    };

    const handleCreateBrand = async () => {
        if (!newBrandName.trim()) return;
        setCreatingBrand(true);
        try {
            const token = JSON.parse(localStorage.getItem('adminInfo'))?.token;
            const fd = new FormData();
            fd.append('name', newBrandName.trim());
            if (newBrandLogo) fd.append('logo', newBrandLogo);
            const { data } = await axios.post('/api/brands', fd, {
                headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
            });
            setAllBrands(prev => [...prev, data].sort((a, b) => a.name.localeCompare(b.name)));
            setFormData(prev => ({ ...prev, brand: data.name }));
            setNewBrandName('');
            setNewBrandLogo(null);
            setShowNewBrandForm(false);
            setShowBrandDropdown(false);
        } catch (err) {
            alert(err.response?.data?.message || 'Failed to create brand');
        } finally {
            setCreatingBrand(false);
        }
    };

    if (!isOpen) return null;

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSpecChange = (index, e) => {
        const newSpecs = [...specifications];
        newSpecs[index][e.target.name] = e.target.value;
        setSpecifications(newSpecs);
    };
    const addSpec = () => setSpecifications([...specifications, { key: '', value: '' }]);
    const removeSpec = (index) => setSpecifications(specifications.filter((_, i) => i !== index));

    const handleSubCategoryChange = (subCategoryId) => {
        setSelectedSubCategories(prev =>
            prev.includes(subCategoryId)
                ? prev.filter(id => id !== subCategoryId)
                : [...prev, subCategoryId]
        );
    };

    const onSelectFile = (e, type) => {
        if (e.target.files && e.target.files.length > 0) {
            setCrop(undefined);
            setCroppingFor(type);
            const reader = new FileReader();
            reader.addEventListener('load', () => setUpImg(reader.result?.toString() || ''));
            reader.readAsDataURL(e.target.files[0]);
        }
        e.target.value = null;
    };

    function onImageLoad(e) {
        imgRef.current = e.currentTarget;
        const { width, height } = e.currentTarget;
        const crop = centerCrop(makeAspectCrop({ unit: '%', width: 90 }, 1, width, height), width, height);
        setCrop(crop);
    }

    const getCroppedImg = () => {
        const image = imgRef.current;
        if (!image || !crop || !crop.width || !crop.height) return;
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
        const pixelRatio = window.devicePixelRatio;
        canvas.width = crop.width * pixelRatio;
        canvas.height = crop.height * pixelRatio;
        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(image, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, crop.width, crop.height);

        canvas.toBlob((blob) => {
            if (blob) {
                const croppedFile = new File([blob], 'cropped.jpg', { type: 'image/jpeg' });
                if (croppingFor === 'default') {
                    setDefaultPhoto(croppedFile);
                    setDefaultPhotoPreview(URL.createObjectURL(blob));
                } else {
                    setAdditionalPhotos(prev => [...prev, croppedFile]);
                    setAdditionalPhotoPreviews(prev => [...prev, URL.createObjectURL(blob)]);
                }
            }
            setUpImg(null);
            setCroppingFor(null);
        }, 'image/jpeg', 1);
    };

    const removeAdditionalPhoto = (index, isExisting) => {
        if (isExisting) {
            // Store URL of removed image to delete from S3
            const imageUrl = additionalPhotoPreviews[index];
            setRemovedImageUrls(prev => [...prev, imageUrl]);

            // Remove from preview
            setAdditionalPhotoPreviews(prev => prev.filter((_, i) => i !== index));
        } else {
            // Find the correct index in the new photos array
            const newIndex = index - (product?.images?.length - 1 || 0);
            setAdditionalPhotos(prev => prev.filter((_, i) => i !== newIndex));
            setAdditionalPhotoPreviews(prev => prev.filter((_, i) => i !== index));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach(key => data.append(key, formData[key]));
        data.append('specifications', JSON.stringify(specifications.filter(s => s.key && s.value)));
        data.append('subCategory', JSON.stringify(selectedSubCategories));

        // Add removed image URLs to formData
        data.append('removedImages', JSON.stringify(removedImageUrls));

        // Handle default image replacement
        if (defaultPhoto) {
            if (product && product.images.length > 0) {
                // If replacing default photo, add old URL to removed list
                data.append('removedImages', JSON.stringify([product.images[0]]));
            }
            data.append('defaultPhoto', defaultPhoto);
        }

        // Add new additional photos
        additionalPhotos.forEach(photo => data.append('additionalPhotos', photo));

        onSave(data, product?._id);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
                {/* Close button - now conditional */}
                {showCloseButton && (
                    <button className="modal-close-btn" onClick={onClose}>
                        <FiX />
                    </button>
                )}

                <h2>{product ? 'Edit Product' : 'Add New Product'}</h2>
                <form onSubmit={handleSubmit}>
                    {/* Form fields */}
                    {/* Live Slug Preview — above Product Title */}
                    <div className="form-group">
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <span style={{ fontSize: '0.78rem', color: '#888', fontWeight: 400 }}>URL Slug (auto-generated · unique suffix added on save)</span>
                        </label>
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: '0.4rem', border: '1px solid #f1efefff',
                            borderRadius: '6px', padding: '0.3rem 0.5rem',
                            fontFamily: 'monospace', fontSize: '0.85rem', color: '#06bd00ff', wordBreak: 'break-all'
                        }}>

                            <span style={{ color: '#aaa', flexShrink: 0 }}>/product/</span>
                            {formData.name
                                ? <span>{generateSlug(formData.name)}<span style={{ color: '#bbb' }}>-xxxxxx</span></span>
                                : <span style={{ color: '#ccc', fontStyle: 'italic' }}>your-product-name-xxxxxx</span>
                            }
                        </div>
                    </div>
                    <div className="form-group"><label>Product Title</label><input type="text" name="name" value={formData.name} onChange={handleChange} required /></div>
                    <div className="form-group"><label>Description</label><textarea name="description" value={formData.description} onChange={handleChange} rows="4"></textarea></div>
                    <div className="form-group"><label>Category</label><select name="category" value={formData.category} onChange={handleChange} required><option value="">Select Category</option>{categories.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}</select></div>

                    {availableSubCategories.length > 0 && (
                        <div className="form-group">
                            <label>Sub-Categories</label>
                            <div className="category-checkbox-group">
                                {availableSubCategories.map(sub => (
                                    <label key={sub._id} className="category-checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={selectedSubCategories.includes(sub._id)}
                                            onChange={() => handleSubCategoryChange(sub._id)}
                                        />
                                        {sub.name}
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="specifications-container">
                        <h4>Specifications</h4>
                        {specifications.map((spec, index) => (
                            <div key={index} className="spec-row">
                                <input type="text" name="key" placeholder="Key (e.g., Color)" value={spec.key} onChange={(e) => handleSpecChange(index, e)} />
                                <input type="text" name="value" placeholder="Value (e.g., Red)" value={spec.value} onChange={(e) => handleSpecChange(index, e)} />
                                <button type="button" onClick={() => removeSpec(index)}>Remove</button>
                            </div>
                        ))}
                        <button type="button" onClick={addSpec} className="add-spec-btn">Add Specification</button>
                    </div>

                    <div className="form-grid">
                        <div className="form-group"><label>MRP</label><input type="number" name="price" value={formData.price} onChange={handleChange} /></div>
                        <div className="form-group"><label>Discount (%)</label><input type="number" name="discount" value={formData.discount} onChange={handleChange} /></div>
                        <div className="form-group"><label>Final Price</label><input type="text" value={finalPrice.toFixed(2)} readOnly /></div>
                        <div className="form-group"><label>Stock</label><input type="number" name="stock" value={formData.stock} onChange={handleChange} /></div>

                        {/* Brand dropdown with search & create-new */}
                        <div className="form-group" ref={brandDropdownRef} style={{ position: 'relative' }}>
                            <label>Brand</label>
                            <div
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                                    border: '1px solid #ddd', borderRadius: '6px', padding: '0.4rem 0.6rem',
                                    cursor: 'pointer', background: '#fff', minHeight: '38px'
                                }}
                                onClick={() => setShowBrandDropdown(!showBrandDropdown)}
                            >
                                {formData.brand ? (
                                    <>
                                        {(() => { const b = allBrands.find(x => x.name === formData.brand); return b?.logo ? <img src={b.logo} alt="" style={{ width: 22, height: 22, objectFit: 'contain', borderRadius: 4 }} /> : null; })()}
                                        <span style={{ flex: 1 }}>{formData.brand}</span>
                                        <button type="button" onClick={(e) => { e.stopPropagation(); setFormData(prev => ({ ...prev, brand: '' })); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#999', fontSize: '1rem' }}>&times;</button>
                                    </>
                                ) : (
                                    <span style={{ color: '#aaa', flex: 1 }}>Select brand...</span>
                                )}
                            </div>
                            {showBrandDropdown && (
                                <div style={{
                                    position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 100,
                                    background: '#fff', border: '1px solid #ddd', borderRadius: '0 0 8px 8px',
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)', maxHeight: '260px', overflowY: 'auto'
                                }}>
                                    <div style={{ padding: '0.5rem', borderBottom: '1px solid #eee', position: 'sticky', top: 0, background: '#fff', zIndex: 1 }}>
                                        <input
                                            type="text"
                                            placeholder="Search brands..."
                                            value={brandSearch}
                                            onChange={(e) => setBrandSearch(e.target.value)}
                                            onClick={(e) => e.stopPropagation()}
                                            autoFocus
                                            style={{ width: '100%', padding: '0.4rem 0.6rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.9rem' }}
                                        />
                                    </div>
                                    {filteredBrands.map(b => (
                                        <div
                                            key={b._id}
                                            onClick={() => handleSelectBrand(b.name)}
                                            style={{
                                                display: 'flex', alignItems: 'center', gap: '0.6rem',
                                                padding: '0.55rem 0.75rem', cursor: 'pointer',
                                                background: formData.brand === b.name ? '#f0f6ff' : 'transparent',
                                                borderBottom: '1px solid #f5f5f5'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.background = '#f5f9ff'}
                                            onMouseLeave={(e) => e.currentTarget.style.background = formData.brand === b.name ? '#f0f6ff' : 'transparent'}
                                        >
                                            {b.logo ? <img src={b.logo} alt="" style={{ width: 24, height: 24, objectFit: 'contain', borderRadius: 4 }} /> : <span style={{ width: 24, height: 24, borderRadius: 4, background: '#e0e7ef', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, color: '#555' }}>{b.name.charAt(0)}</span>}
                                            <span style={{ fontSize: '0.9rem' }}>{b.name}</span>
                                        </div>
                                    ))}
                                    {filteredBrands.length === 0 && <div style={{ padding: '0.75rem', color: '#999', textAlign: 'center', fontSize: '0.85rem' }}>No brands found</div>}
                                    <div style={{ borderTop: '1px solid #eee', padding: '0.5rem' }}>
                                        {!showNewBrandForm ? (
                                            <button type="button" onClick={(e) => { e.stopPropagation(); setShowNewBrandForm(true); }} style={{ width: '100%', padding: '0.5rem', background: '#f0f6ff', border: '1px dashed #2e86c1', borderRadius: '4px', cursor: 'pointer', color: '#2e86c1', fontWeight: 600, fontSize: '0.85rem' }}>
                                                + Create New Brand
                                            </button>
                                        ) : (
                                            <div onClick={(e) => e.stopPropagation()} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                                <input type="text" placeholder="Brand name" value={newBrandName} onChange={(e) => setNewBrandName(e.target.value)} style={{ padding: '0.4rem 0.6rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.85rem' }} />
                                                <input type="file" accept="image/jpeg,image/jpg,image/png,image/webp,image/avif" onChange={(e) => { const f = e.target.files[0]; if (f && f.size > 1 * 1024 * 1024) { alert('Logo must be under 1 MB.'); e.target.value = null; return; } setNewBrandLogo(f); }} style={{ fontSize: '0.8rem' }} />
                                                <p style={{ fontSize: '0.7rem', color: '#999', margin: 0, lineHeight: 1.4 }}>AVIF, WebP, PNG, JPG · Max 1 MB</p>
                                                <div style={{ display: 'flex', gap: '0.4rem' }}>
                                                    <button type="button" onClick={handleCreateBrand} disabled={creatingBrand} style={{ flex: 1, padding: '0.4rem', background: '#2e86c1', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.82rem', fontWeight: 600 }}>{creatingBrand ? 'Creating...' : 'Create'}</button>
                                                    <button type="button" onClick={() => { setShowNewBrandForm(false); setNewBrandName(''); setNewBrandLogo(null); }} style={{ padding: '0.4rem 0.8rem', background: '#eee', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.82rem' }}>Cancel</button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="form-group"><label>Color</label><input type="text" name="color" value={formData.color} onChange={handleChange} /></div>
                    </div>

                    <div className="form-group">
                        <label>Default Photo</label>
                        <input type="file" onChange={(e) => onSelectFile(e, 'default')} accept="image/*" />
                        {defaultPhotoPreview && <img src={defaultPhotoPreview} alt="Default Preview" className="default-photo-preview" />}
                    </div>

                    <div className="form-group">
                        <label>Additional Photos</label>
                        <div className="photo-previews-container">
                            {additionalPhotoPreviews.map((photoUrl, index) => {
                                const isExisting = typeof photoUrl === 'string';
                                return (
                                    <div key={index} className="photo-preview-item">
                                        <img src={photoUrl} alt={`preview ${index}`} />
                                        <button type="button" className="remove-photo-btn" onClick={() => removeAdditionalPhoto(index, isExisting)}><FiX size={16} /></button>
                                    </div>
                                );
                            })}
                        </div>
                        <input
                            type="file"
                            multiple
                            ref={additionalPhotosInputRef}
                            onChange={(e) => onSelectFile(e, 'additional')}
                            style={{ display: 'none' }}
                            accept="image/*"
                        />
                        <button type="button" className="add-spec-btn" onClick={() => additionalPhotosInputRef.current.click()}>
                            <FiPlus /> Add More Photos
                        </button>
                    </div>

                    <div className="form-group"><label>Tags (comma-separated)</label><input type="text" name="tags" value={formData.tags} onChange={handleChange} /></div>
                    <div className="form-group"><label>Shipping Info</label><input type="text" name="shippingInfo" value={formData.shippingInfo} onChange={handleChange} /></div>
                    <div className="form-group"><label>Status</label><select name="status" value={formData.status} onChange={handleChange}><option value="Published">Published</option><option value="Draft">Draft</option><option value="Hidden">Hidden</option></select></div>

                    <div className="modal-actions">
                        <button type="submit" className="auth-button" disabled={isSaving}>
                            {isSaving ? 'Saving...' : 'Save Product'}
                        </button>
                        <button type="button" onClick={onClose} className="auth-button secondary">Cancel</button>
                    </div>
                </form>
            </div>

            {upImg && (
                <div
                    className="modal-overlay"
                    style={{
                        zIndex: 3500,
                        backgroundColor: 'rgba(0, 0, 0, 0.85)'
                    }}
                >
                    <div
                        className="modal-content"
                        style={{
                            maxWidth: '520px',
                            textAlign: 'center',
                            maxHeight: '90vh',
                            overflowY: 'auto'
                        }}
                    >
                        <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>Crop Product Image</h3>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
                            <ReactCrop crop={crop} onChange={c => setCrop(c)} aspect={1}>
                                <img
                                    src={upImg}
                                    onLoad={onImageLoad}
                                    alt="Crop me"
                                    style={{ maxHeight: '55vh', maxWidth: '100%', objectFit: 'contain' }}
                                />
                            </ReactCrop>
                        </div>
                        <div className="modal-actions" style={{ justifyContent: 'center', gap: '1rem' }}>
                            <button type="button" onClick={getCroppedImg} className="auth-button">
                                Crop & Apply
                            </button>
                            <button
                                type="button"
                                onClick={() => { setUpImg(null); setCroppingFor(null); }}
                                className="auth-button secondary"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductModal;
