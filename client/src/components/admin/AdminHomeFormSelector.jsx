import React from 'react';
import './Admin.modules.css';

export function FormSelector({ handleFormSelection }) {
    const options = [
        { bg: "играч", en: "players" },
        { bg: "отбор", en: "teams" },
        { bg: "мениджър", en: "managers" },
        { bg: "персонал", en: "staff" },
        { bg: "лига", en: "leagues" },
        { bg: "сезон", en: "seasons" },
    ];

    return (
        <div className="dropdown-container">
            <h3 className="dropdown-name">ДОБАВИ</h3>
            <div className="dropdown-options">
                <ul>
                    {options.map((option, index) => (
                        <li key={index} onClick={() => handleFormSelection(option.en)}>
                            {option.bg}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
