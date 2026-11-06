import React, { useState, useEffect, useMemo } from 'react';
import '../AddressModal.css'; // Reusing styles

// Mirror backend slug logic
function generateSlug(name) {
    return name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
}

const CategoryModal = ({ isOpen, onClose, onSave, category }) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState('');
    const [inputType, setInputType] = useState('file'); // 'file' or 'url'
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        if (isOpen) {
            setName(category ? category.name : '');
            setPreview(category ? category.image : '');
            setImage(null);
            setImageUrl(category && category.image.startsWith('http') ? category.image : '');
            setInputType(category && category.image.startsWith('http') ? 'url' : 'file');
        }
    }, [isOpen, category]);

    if (!isOpen) return null;

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        if (inputType === 'file' && image) {
            formData.append('image', image);
        } else if (inputType === 'url' && imageUrl) {
            formData.append('imageUrl', imageUrl);
        }
        onSave(formData, category?._id);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{category ? 'Edit Category' : 'Add New Category'}</h2>
                <form onSubmit={handleSubmit}>
                    {/* Live Slug Preview — above Category Name */}
                    <div className="form-group">
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <span style={{ fontSize: '0.78rem', color: '#888', fontWeight: 400 }}>URL Slug (auto-generated)</span>
                        </label>
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: '0.4rem', border: '1px solid #f1efefff',
                            borderRadius: '6px', padding: '0.3rem 0.5rem',
                            fontFamily: 'monospace', fontSize: '0.85rem', color: '#bd0000ff', wordBreak: 'break-all'
                        }}>
                            <span style={{ color: '#aaa', flexShrink: 0 }}>/category/</span>
                            <span>{name ? generateSlug(name) : <span style={{ color: '#ccc', fontStyle: 'italic' }}>your-category-name</span>}</span>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Category Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Image Source</label>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <label><input type="radio" name="inputType" value="file" checked={inputType === 'file'} onChange={() => setInputType('file')} /> File Upload</label>
                            <label><input type="radio" name="inputType" value="url" checked={inputType === 'url'} onChange={() => setInputType('url')} /> Image URL</label>
                        </div>
                    </div>

                    {inputType === 'file' ? (
                        <div className="form-group">
                            <label>Category Image</label>
                            <input type="file" onChange={handleImageChange} accept="image/*" />
                        </div>
                    ) : (
                        <div className="form-group">
                            <label>Image URL</label>
                            <input type="url" value={imageUrl} onChange={(e) => { setImageUrl(e.target.value); setPreview(e.target.value); }} placeholder="https://example.com/image.jpg" />
                        </div>
                    )}

                    {preview && <img src={preview} alt="Preview" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} />}
                    <div className="modal-actions">
                        <button type="submit" className="auth-button">Save</button>
                        <button type="button" onClick={onClose} className="auth-button secondary">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CategoryModal;
