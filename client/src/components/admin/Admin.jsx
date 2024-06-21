import React from 'react';
import { AdminSide } from './AdminSide';
import './Admin.modules.css';
import AdminTable from './AdminTable';
import { Outlet, useLocation } from 'react-router-dom';
import { AdminHome } from './AdminHome';


export function Admin() {
    const location = useLocation();
    const isMainAdminPath = location.pathname === '/admin';

    return (
        <div className="container">
                <AdminSide />
                <div className='main-content'>
                    {isMainAdminPath ? <AdminHome /> : <AdminTable />}
                </div>
        </div>  
    );
}
