import React from 'react';
import { Outlet } from 'react-router-dom';
import { AdminSide } from './AdminSide';
import './Admin.modules.css';
import { AdminHome } from './AdminHome';

export function Admin() {
    return (
        <div className="container">
            <AdminSide />
            <div className='main-content'>
                <Outlet />
            </div>
        </div>
    );
}
