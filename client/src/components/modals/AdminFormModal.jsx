import React from 'react';
import './AdminFormModal.modules.css';

const AdminFormModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="admin-modal-overlay" onClick={handleOverlayClick}>
            <div className="admin-modal">
                <button className="admin-modal-close" onClick={onClose}>×</button>
                <div className="admin-modal-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AdminFormModal;
