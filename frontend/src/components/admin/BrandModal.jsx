import React, { useState, useEffect } from 'react';
import '../AddressModal.css';

function generateSlug(name) {
    return name.toLowerCase().trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
}

const BrandModal = ({ isOpen, onClose, onSave, brand, isSaving }) => {
    const [name, setName] = useState('');
    const [logo, setLogo] = useState(null);
    const [preview, setPreview] = useState('');

    useEffect(() => {
        if (isOpen) {
            setName(brand ? brand.name : '');
            setPreview(brand ? brand.logo : '');
            setLogo(null);
        }
    }, [isOpen, brand]);

    if (!isOpen) return null;

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 1 * 1024 * 1024) {
                alert('Logo must be under 1 MB.');
                e.target.value = null;
                return;
            }
            setLogo(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        if (logo) {
            formData.append('logo', logo);
        }
        onSave(formData, brand?._id);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{brand ? 'Edit Brand' : 'Add New Brand'}</h2>
                <form onSubmit={handleSubmit}>
                    {/* Slug preview */}
                    <div className="form-group">
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <span style={{ fontSize: '0.78rem', color: '#888', fontWeight: 400 }}>URL Slug (auto-generated)</span>
                        </label>
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: '0.4rem', border: '1px solid #f1efef',
                            borderRadius: '6px', padding: '0.3rem 0.5rem',
                            fontFamily: 'monospace', fontSize: '0.85rem', color: '#bd0000', wordBreak: 'break-all'
                        }}>
                            <span style={{ color: '#aaa', flexShrink: 0 }}>/brands/</span>
                            <span>{name ? generateSlug(name) : <span style={{ color: '#ccc', fontStyle: 'italic' }}>your-brand-name</span>}</span>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Brand Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="e.g. Haldiram's, Bikaji, Tata" />
                    </div>

                    <div className="form-group">
                        <label>Brand Logo</label>
                        <input type="file" onChange={handleLogoChange} accept="image/jpeg,image/jpg,image/png,image/webp,image/avif" />
                        <p style={{ fontSize: '0.75rem', color: '#888', marginTop: '0.35rem', lineHeight: 1.5 }}>
                            Accepted formats: AVIF, WebP, PNG, JPG, JPEG &nbsp;·&nbsp; Max size: 1 MB
                        </p>
                    </div>

                    {preview && (
                        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                            <img src={preview} alt="Logo preview" style={{ width: '80px', height: '80px', objectFit: 'contain', borderRadius: '8px', background: '#f8f9fa', padding: '0.5rem' }} />
                        </div>
                    )}

                    <div className="modal-actions">
                        <button type="submit" className="auth-button" disabled={isSaving}>
                            {isSaving ? 'Saving...' : 'Save Brand'}
                        </button>
                        <button type="button" onClick={onClose} className="auth-button secondary">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BrandModal;

