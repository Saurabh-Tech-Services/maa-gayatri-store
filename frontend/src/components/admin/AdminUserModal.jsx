import React, { useState, useEffect, useRef } from 'react';
import PasswordField from '../PasswordField';
import ReactCrop, { centerCrop, makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import '../AddressModal.css'; // Reusing some styles

const AdminUserModal = ({ isOpen, onClose, onSave, mode, userData }) => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const [upImg, setUpImg] = useState(null);
    const [crop, setCrop] = useState();
    const [croppedImageFile, setCroppedImageFile] = useState(null);
    const [croppedPreview, setCroppedPreview] = useState(null);
    const imgRef = useRef(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            if (mode.startsWith('edit') && userData) {
                setFormData({ name: userData.name, email: userData.email, phone: userData.phone || '' });
            } else {
                setFormData({ name: '', email: '', phone: '' });
            }
            setPassword('');
            setConfirmPassword('');
            setCroppedImageFile(null);
            setCroppedPreview(null);
            setUpImg(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    }, [isOpen, mode, userData]);

    if (!isOpen) return null;

    function onSelectFile(e) {
        if (e.target.files && e.target.files.length > 0) {
            setCrop(undefined);
            const reader = new FileReader();
            reader.addEventListener('load', () => setUpImg(reader.result?.toString() || ''));
            reader.readAsDataURL(e.target.files[0]);
        }
    }

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
        const pixelRatio = window.devicePixelRatio || 1;
        canvas.width = crop.width * pixelRatio;
        canvas.height = crop.height * pixelRatio;
        const ctx = canvas.getContext('2d');
        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(
            image, 
            crop.x * scaleX, 
            crop.y * scaleY, 
            crop.width * scaleX, 
            crop.height * scaleY, 
            0, 
            0, 
            crop.width, 
            crop.height
        );
        canvas.toBlob((blob) => {
            if (blob) {
                const file = new File([blob], 'profile.jpg', { type: 'image/jpeg' });
                setCroppedImageFile(file);
                setCroppedPreview(URL.createObjectURL(blob));
            }
            setUpImg(null);
        }, 'image/jpeg', 0.95);
    };

    const handleCancelCrop = () => {
        setUpImg(null);
        if (!croppedImageFile && fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('phone', formData.phone);
        if (croppedImageFile) {
            data.append('profilePicture', croppedImageFile);
        }
        if (mode === 'add') {
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            data.append('password', password);
        }
        onSave(data, userData?._id);
    };

    return (
        <>
            {/* Main Form Modal */}
            <div className="modal-overlay">
                <div className="modal-content">
                    <h2>{mode.startsWith('edit') ? 'Update Profile' : 'Add New Admin'}</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Profile Picture</label>
                            <input 
                                ref={fileInputRef}
                                type="file" 
                                onChange={onSelectFile} 
                                accept="image/*" 
                            />
                            {croppedPreview && (
                                <div style={{ marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <img 
                                        src={croppedPreview} 
                                        alt="Preview" 
                                        style={{ 
                                            width: '56px', 
                                            height: '56px', 
                                            borderRadius: '50%', 
                                            objectFit: 'cover', 
                                            border: '2px solid #4CAF50',
                                            boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                                        }} 
                                    />
                                    <span style={{ fontSize: '13px', color: '#2E7D32', fontWeight: 500 }}>
                                        New profile picture ready
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input 
                                type="text" 
                                value={formData.name} 
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input 
                                type="email" 
                                value={formData.email} 
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label>Mobile (Optional)</label>
                            <input 
                                type="tel" 
                                value={formData.phone} 
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                            />
                        </div>
                        {mode === 'add' && (
                            <>
                                <div className="form-group">
                                    <label>Password</label>
                                    <PasswordField value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <PasswordField value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                </div>
                            </>
                        )}
                        <div className="modal-actions">
                            <button type="submit" className="auth-button">Save</button>
                            <button type="button" onClick={onClose} className="auth-button secondary">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Crop Modal - Rendered on top with z-index: 3500 */}
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
                        <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>Crop Profile Picture</h3>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
                            <ReactCrop crop={crop} onChange={c => setCrop(c)} aspect={1} circularCrop>
                                <img 
                                    src={upImg} 
                                    onLoad={onImageLoad} 
                                    alt="Crop preview" 
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
                                onClick={handleCancelCrop} 
                                className="auth-button secondary"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AdminUserModal;
