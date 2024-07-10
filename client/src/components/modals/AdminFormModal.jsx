import React from 'react';
import './AdminFormModal.modules.css';

const AdminFormModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="admin-modal-overlay" onClick={onClose}>
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