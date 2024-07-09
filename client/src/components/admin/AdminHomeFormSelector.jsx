import { useState } from 'react';
import './Admin.modules.css';

export function FormSelector({ selectedForm, handleFormSelection }) {

    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { bg: "играч", en: "players" },
        { bg: "отбор", en: "teams" },
        { bg: "мениджър", en: "managers" },
        { bg: "персонал", en: "staff" }
    ];

    const handleOptionClick = (option) => {
        setSelectedOption(option.en)
        handleFormSelection(option.en)
    };

    return (
        <div className="dropdown-container">
            <h3 className="dropdown-name">ДОБАВИ</h3>
            <div className="dropdown-options">
                <ul>
                    {options.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick(option)}>
                            {option.bg}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}