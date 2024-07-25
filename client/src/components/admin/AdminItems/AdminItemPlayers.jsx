import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AdminContext } from '../AdminContext';

import './AdminItems.modules.css'


export function AdminItemPlayers() {
    const { data } = useContext(AdminContext);
    const { id } = useParams();

    const item = data.find((item) => item.id === parseInt(id));

    if (!item) {
        return <p>Item not found</p>;
    }

    return (
        <div>
            <div className='player-heading'>
                <div className='player-information'>
                    <h1>Редактиране</h1>
                    <h3>{item.name}</h3>
                    <p>{item.player_number}</p>
                </div>
                <img src={item.image} alt={item.name} />
            </div>
            <div className='player-contents'>
                <div>
                    <h1>Номер</h1>
                    <ul>
                        <li>{item.player_number}</li>
                    </ul>
                </div>
            {item.teams && item.teams.trim() && (
                <div>
                    <h1>Отбори</h1>
                    <ul>
                        {item.teams.split(', ').map((team, index) => (
                            <li key={index}>{team}</li>
                        ))}
                    </ul>
                    <button>Добави отбор</button>
                </div>
            )}
            {item.position_name && item.position_name.trim() && (
                <div>
                    <h1>Позиции</h1>
                    <ul>
                        {item.position_name.split(', ').map((position, index) => (
                            <li key={index}>{position}</li>
                        ))}
                    </ul>
                    <button>Добави позиция</button>
                </div>
            )}
            {item.leagues && item.leagues.trim() && (
                <div>
                    <h1>Лиги</h1>
                    <ul>
                        {item.leagues.split(', ').map((league, index) => (
                            <li key={index}>{league}</li>
                        ))}
                    </ul>
                    <button>Добави лига</button>
                </div>
            )}
            {item.seasons && item.seasons.trim() && (
                <div>
                    <h1>Сезони</h1>
                    <ul>
                        {item.seasons.split(', ').map((season, index) => (
                            <li key={index}>{season}</li>
                        ))}
                    </ul>
                    <button>Добави сезон</button>
                </div>
            )}
            </div>
        </div>

    );
}
