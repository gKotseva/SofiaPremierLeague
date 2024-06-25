import { useState } from 'react';
import './Admin.modules.css';
import { postManagers, postStaff } from '../../services/adminService.js';

export function AdminHome() {
    const [fileName, setFileName] = useState('Няма избран файл');
    const [playerFormData, setPlayerFormData] = useState({
        name: '',
        number: '',
    });
    const [teamFormData, setTeamFormData] = useState({
        teamName: '',
        teamPhoto: null,
        teamLogo: null,
    });
    const [managerFormData, setManagerFormData] = useState({
        name: '',
        file: null,
    });
    const [staffFormData, setStaffFormData] = useState({
        name: '',
    });

    const handlePlayerChange = (e) => {
        const { name, value } = e.target;
        setPlayerFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handlePlayerPhotoChange = (event) => {
        const file = event.target.files[0];
        setFileName(file ? file.name : 'Няма избран файл');
        setPlayerFormData(prevFormData => ({
            ...prevFormData,
            playerPhoto: file,
        }));
    };

    const handleTeamChange = (e) => {
        const { name, value } = e.target;
        setTeamFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleTeamPhotoChange = (event) => {
        const file = event.target.files[0];
        setFileName(file ? file.name : 'Няма избран файл');
        setTeamFormData(prevFormData => ({
            ...prevFormData,
            teamPhoto: file,
        }));
    };

    const handleTeamLogoChange = (event) => {
        const file = event.target.files[0];
        setFileName(file ? file.name : 'Няма избран файл');
        setTeamFormData(prevFormData => ({
            ...prevFormData,
            teamLogo: file,
        }));
    };

    const handleManagerChange = (e) => {
        const { name, value } = e.target;
        setManagerFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleManagerFileChange = (event) => {
        const file = event.target.files[0];
        setFileName(file ? file.name : 'Няма избран файл');
        setManagerFormData(prevFormData => ({
            ...prevFormData,
            file: file,
        }));
    };

    const handleStaffChange = (e) => {
        const { name, value } = e.target;
        setStaffFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const onSubmit = async (e, formName) => {
        e.preventDefault();

        switch (formName) {
            case 'players':
                break;
            case 'teams':
                break;
            case 'managers':
                await postManagers(managerFormData);
                break;
            case 'staff':
                await postStaff(staffFormData);
                break;
            case 'matches':
                break;
            default:
                console.error('Unknown form name:', formName);
        }
    };

    return (
        <>
            <div className="form-container">
                <form className="input-form">
                    <h3>Добави играч</h3>
                    <label>Име<input type="text" name="name" onChange={handlePlayerChange} /></label>
                    <label>Номер<input type="number" name="number" onChange={handlePlayerChange} /></label>
                    <div className="file-input-container">
                        <label className="custom-file-label" htmlFor="file-input">Снимка</label>
                        <input
                            type="file"
                            id="file-input"
                            className="file-input"
                            onChange={handlePlayerPhotoChange}
                        />
                        <span className="file-name">{fileName}</span>
                    </div>
                    <button type="submit" onClick={(e) => onSubmit(e, 'players')}>Добави</button>
                </form>
                <form className="input-form">
                    <h3>Добави отбор</h3>
                    <label>Име<input type="text" name="teamName" onChange={handleTeamChange} /></label>
                    <div className="file-input-container">
                        <label className="custom-file-label" htmlFor="team-photo-input">Снимка отбор</label>
                        <input
                            type="file"
                            id="team-photo-input"
                            className="file-input"
                            onChange={handleTeamPhotoChange}
                        />
                        <span className="file-name">{fileName}</span>
                    </div>
                    <div className="file-input-container">
                        <label className="custom-file-label" htmlFor="team-logo-input">Лого</label>
                        <input
                            type="file"
                            id="team-logo-input"
                            className="file-input"
                            onChange={handleTeamLogoChange}
                        />
                        <span className="file-name">{fileName}</span>
                    </div>
                    <button type="submit" onClick={(e) => onSubmit(e, 'teams')}>Добави</button>
                </form>
                <form className="input-form" onSubmit={(e) => onSubmit(e, 'managers')}>
                    <h3>Добави мениджър</h3>
                    <label>Име<input type="text" name="name" value={managerFormData.name} onChange={handleManagerChange} /></label>
                    <div className="file-input-container">
                        <label className="custom-file-label" htmlFor="manager-photo-input">Снимка</label>
                        <input
                            type="file"
                            id="manager-photo-input"
                            className="file-input"
                            onChange={handleManagerFileChange}
                            name="file"
                        />
                        <span className="file-name">{fileName}</span>
                    </div>
                    <button type="submit">Добави</button>
                </form>
                <form className="input-form" onSubmit={(e) => onSubmit(e, 'staff')}>
                    <h3>Добави персонал</h3>
                    <label>Име<input type="text" name="name" value={staffFormData.name} onChange={handleStaffChange} /></label>
                    <button type="submit">Добави</button>
                </form>
            </div>
        </>
    );
}
