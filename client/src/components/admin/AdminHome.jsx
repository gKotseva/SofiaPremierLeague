import { useState } from 'react';
import './Admin.modules.css'

export function AdminHome () {
    const [fileName, setFileName] = useState('Няма избран файл');

    const handleFileChange = (event) => {
        setFileName(event.target.files[0]?.name || 'Няма избран файл');
    };

    return (
        <>
        <div className="form-container">
            <form className="input-form">
                <h3>Добави играч</h3>
                <label>Име<input type="text" /></label>
                <label>Номер<input type="number" /></label>
                <div className="file-input-container">
                    <label className="custom-file-label" htmlFor="file-input">Снимка</label>
                    <input 
                        type="file" 
                        id="file-input" 
                        className="file-input" 
                        onChange={handleFileChange}
                    />
                    <span className="file-name">{fileName}</span>
                </div>
                <button type="submit">Добави</button>
            </form>
            <form className="input-form">
                <h3>Добави отбор</h3>
                <label>Име<input type="text" /></label>
                <div className="file-input-container">
                    <label className="custom-file-label" htmlFor="file-input">Снимка отбор</label>
                    <input 
                        type="file" 
                        id="file-input" 
                        className="file-input" 
                        onChange={handleFileChange}
                    />
                    <span className="file-name">{fileName}</span>
                </div>
                <div className="file-input-container">
                    <label className="custom-file-label" htmlFor="file-input">Лого</label>
                    <input 
                        type="file" 
                        id="file-input" 
                        className="file-input" 
                        onChange={handleFileChange}
                    />
                    <span className="file-name">{fileName}</span>
                </div>
                <button type="submit">Добави</button>
            </form>
            <form className="input-form">
                <h3>Добави мениджър</h3>
                <label>Име<input type="text" /></label>
                <div className="file-input-container">
                    <label className="custom-file-label" htmlFor="file-input">Снимка</label>
                    <input 
                        type="file" 
                        id="file-input" 
                        className="file-input" 
                        onChange={handleFileChange}
                    />
                    <span className="file-name">{fileName}</span>
                </div>
                <button type="submit">Добави</button>
            </form>
            <form className="input-form">
                <h3>Добави персонал</h3>
                <label>Име<input type="text" /></label>
                <button type="submit">Добави</button>
            </form>
        </div>
        </>
    )
}