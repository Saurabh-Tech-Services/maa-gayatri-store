import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import BrandModal from '../../components/admin/BrandModal';
import ConfirmationModal from '../../components/ConfirmationModal';
import Meta from '../../components/Meta';
import './AdminBrandPage.css';

const AdminBrandPage = () => {
    const [brands, setBrands] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingBrand, setEditingBrand] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [brandToDelete, setBrandToDelete] = useState(null);
    const [isSaving, setIsSaving] = useState(false);

    const token = JSON.parse(localStorage.getItem('adminInfo'))?.token;
    const config = { headers: { Authorization: `Bearer ${token}` } };

    const fetchBrands = async () => {
        try {
            const { data } = await axios.get('/api/brands');
            setBrands(Array.isArray(data) ? data : []);
        } catch (error) {
            toast.error('Failed to fetch brands.');
        }
    };

    useEffect(() => {
        fetchBrands();
    }, []);

    const filteredBrands = brands.filter(b =>
        b.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSaveBrand = async (formData, brandId) => {
        setIsSaving(true);
        try {
            const requestConfig = { ...config, headers: { ...config.headers, 'Content-Type': 'multipart/form-data' } };
            if (brandId) {
                await axios.put(`/api/brands/${brandId}`, formData, requestConfig);
                toast.success('Brand updated successfully!');
            } else {
                await axios.post('/api/brands', formData, requestConfig);
                toast.success('Brand added successfully!');
            }
            setIsModalOpen(false);
            setEditingBrand(null);
            fetchBrands();
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to save brand.');
        } finally {
            setIsSaving(false);
        }
    };

    const handleDeleteClick = (brandId) => {
        setBrandToDelete(brandId);
        setShowConfirmModal(true);
    };

    const confirmDeleteBrand = async () => {
        try {
            await axios.delete(`/api/brands/${brandToDelete}`, config);
            toast.success('Brand deleted successfully!');
            fetchBrands();
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to delete brand.');
        } finally {
            setShowConfirmModal(false);
            setBrandToDelete(null);
        }
    };

    return (
        <>
            <Meta title="Admin: Brand Management" noIndex={true} />
            <div>
                <div className="brand-page-header">
                    <h1>Brand Management</h1>
                    <div className="search-and-add">
                        <input
                            type="text"
                            placeholder="Search brands..."
                            className="admin-search-input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="auth-button" onClick={() => { setEditingBrand(null); setIsModalOpen(true); }}>
                            Add New Brand
                        </button>
                    </div>
                </div>
                <div className="admin-brand-grid">
                    {filteredBrands.map(brand => (
                        <div key={brand._id} className="admin-brand-card">
                            {brand.logo ? (
                                <img src={brand.logo} alt={brand.name} className="admin-brand-card-logo" />
                            ) : (
                                <div className="admin-brand-card-fallback">{brand.name.charAt(0)}</div>
                            )}
                            <h3>{brand.name}</h3>
                            <div className="brand-slug">/{brand.slug}</div>
                            <div className="admin-brand-actions">
                                <button onClick={() => { setEditingBrand(brand); setIsModalOpen(true); }}><FiEdit /></button>
                                <button onClick={() => handleDeleteClick(brand._id)}><FiTrash2 /></button>
                            </div>
                        </div>
                    ))}
                </div>
                {filteredBrands.length === 0 && !searchTerm && (
                    <p style={{ textAlign: 'center', color: '#888', marginTop: '2rem' }}>
                        No brands yet. Click "Add New Brand" to create one.
                    </p>
                )}
                <BrandModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSave={handleSaveBrand}
                    brand={editingBrand}
                    isSaving={isSaving}
                />
                <ConfirmationModal
                    isOpen={showConfirmModal}
                    onClose={() => setShowConfirmModal(false)}
                    onConfirm={confirmDeleteBrand}
                    title="Delete Brand"
                    message="Are you sure? Products with this brand will have their brand field cleared."
                />
            </div>
        </>
    );
};

export default AdminBrandPage;

