import React from 'react';
import './Admin.modules.css';

export function FormSelector({ handleFormSelection }) {
    const optionsLists = [
        { bg: "играч", en: "players" },
        { bg: "отбор", en: "teams" },
        { bg: "мениджър", en: "managers" },
        { bg: "персонал", en: "staff" },
        { bg: "лига", en: "leagues" },
        { bg: "сезон", en: "seasons" },
    ];

    const optionsAwards = [
        {award: 'SELECT'},
        {award: 'ARABESK'},
        {award: 'KERELSKI'},
        {award: 'GRIPSOCKS'},
        {award: 'VR7 SERVICES'},
        {award: 'Barber Shop Marty'},
        {award: 'CAIRO'},
    ];

    return (
        <div className='main-dropdown-container'>
        <div className="dropdown-container">
            <h3 className="dropdown-name">ДОБАВИ В СПИСЪЦИ</h3>
            <div className="dropdown-options">
                <ul>
                    {optionsLists.map((option, index) => (
                        <li key={index} onClick={() => handleFormSelection(option.en)}>
                            {option.bg}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="dropdown-container">
                <h3 className="dropdown-name">ДОБАВИ В НАГРАДИ</h3>
                <div className="dropdown-options">
                    <ul>
                        {optionsAwards.map((option, index) => (
                            <li key={index} onClick={() => handleFormSelection(option.award)}>
                                {option.award}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            </div>
    );
}
