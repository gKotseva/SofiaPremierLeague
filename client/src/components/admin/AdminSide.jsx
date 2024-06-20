import React, { useContext } from 'react';
import './Admin.modules.css';
import { getPlayers, getMatches, getTeams, getManagers, getStaff } from '../../services/adminService';
import { Link, useNavigate } from 'react-router-dom';
import { AdminContext } from './AdminContext.jsx';

export function AdminSide() {
    const { fetchData } = useContext(AdminContext);
    const navigate = useNavigate();

    const handleFetchAndNavigate = async (endpoint, headers, type, path) => {
        await fetchData(endpoint, headers, type);
        navigate(path);
    };

    return (
        <>
        <div className="side-header">
            <div className="overlay">
                <Link to="/admin"><img src="./house.png" alt="home"></img></Link>
                <h1>начало</h1>
            </div>
            <div className='overlay'>
                <Link onClick={() => handleFetchAndNavigate(getPlayers, ['Снимка', 'Номер', 'Име', 'Позиция', 'Отбори'], 'players', '/admin/players')}><img src="./soccer-player.png" alt="players" /></Link>
                <h1>играчи</h1>
            </div>
            <div className='overlay'>
                <Link onClick={() => handleFetchAndNavigate(getTeams, ['Снимка', 'Име', 'Отборна снимка'], 'teams', '/admin/teams')}><img src="./football-club.png" alt="teams" /></Link>
                <h1>отбори</h1>
            </div>
            <div className='overlay'>
                <Link onClick={() => handleFetchAndNavigate(getMatches, ['Date', 'Location'], 'matches', '/admin/games')}><img src="./penalty-kick.png" alt="matches" /></Link>
                <h1>мачове</h1>
            </div>
            <div className='overlay'>
                <Link onClick={() => handleFetchAndNavigate(getManagers, ['Снимка', 'Име'], 'managers', '/admin/managers')}><img src="./team.png" alt="managers" /></Link>
                <h1>мениджъри</h1>
            </div>
            <div className='overlay'>
                <Link onClick={() => handleFetchAndNavigate(getStaff, ['Име'], 'staff', '/admin/staff')}><img src="./referee.png" alt="staff" /></Link>
                <h1>персонал</h1>
            </div>
        </div>
        </>
    );
}
