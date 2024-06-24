import { useEffect, useState } from 'react';
import './Admin.modules.css';
import { postStaff } from '../../services/adminService.js';

export function AdminHome() {
    const [fileName, setFileName] = useState('Няма избран файл');
    const [formData, setFormData] = useState({
        name: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFileName(file.name || 'Няма избран файл');
    };

    const onSubmit = async (e) => {
        e.preventDefault()

        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);

        const response = await postStaff(formData.name)
    }

    return (
        <>
            <div className="form-container">
                <form className="input-form">
                    <h3>Добави играч</h3>
                    <label>Име<input type="text" name="name"/></label>
                    <label>Номер<input type="number" /></label>
                    <div className="file-input-container">
                        <label className="custom-file-label" htmlFor="file-input">Снимка</label>
                        <input
                            type="file"
                            id="file-input"
                            className="file-input"
                        />
                        <span className="file-name">{fileName}</span>
                    </div>
                    <button type="submit">Добави</button>
                </form>
                <form className="input-form">
                    <h3>Добави отбор</h3>
                    <label>Име<input type="text" /></label>
                    <div className="file-input-container">
                        <label className="custom-file-label" htmlFor="team-photo-input">Снимка отбор</label>
                        <input
                            type="file"
                            id="team-photo-input"
                            className="file-input"
                            onChange={handleFileChange}
                        />
                        <span className="file-name">{fileName}</span>
                    </div>
                    <div className="file-input-container">
                        <label className="custom-file-label" htmlFor="team-logo-input">Лого</label>
                        <input
                            type="file"
                            id="team-logo-input"
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
                        <label className="custom-file-label" htmlFor="manager-photo-input">Снимка</label>
                        <input
                            type="file"
                            id="manager-photo-input"
                            className="file-input"
                            onChange={handleFileChange}
                        />
                        <span className="file-name">{fileName}</span>
                    </div>
                    <button type="submit">Добави</button>
                </form>
                <form className="input-form" onSubmit={onSubmit}>
                    <h3>Добави персонал</h3>
                    <label>Име<input type="text" name="name" value={formData.name} onChange={handleChange}/></label>
                    <button type="submit">Добави</button>
                </form>
            </div>
        </>
    );
}
