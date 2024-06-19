import React from 'react';
import { AdminSide } from './AdminSide';
import './Admin.modules.css';
import AdminTable from './AdminTable';

export function Admin() {
    return (
        <div className="container">
            <div className="side-header">
                <AdminSide />
            </div>
            <div className="main-table">
                <AdminTable />
            </div>
        </div>  
    );
}
