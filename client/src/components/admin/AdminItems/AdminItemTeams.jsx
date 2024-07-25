import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AdminContext } from '../AdminContext';

import './AdminItems.modules.css'

export function AdminItemTeams() {
    const { data } = useContext(AdminContext);
    const { id } = useParams();

    const item = data.find((item) => item.id === parseInt(id));

    if (!item) {
        return <p>Item not found</p>;
    }

    console.log(item)

    return (
        <div>
            <div className='teams-heading'>
                <div className='teams-information'>
                    <h1>Редактиране</h1>
                    <h3>{item.team_name}</h3>
                </div>
            <img src={item.logo_image} alt={item.name} className='team-logo'/>
            <img src={item.team_image} alt={item.name} className='team' />
            </div>
        </div>

    );
}
