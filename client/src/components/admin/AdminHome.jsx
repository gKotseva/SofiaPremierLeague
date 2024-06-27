import { useState } from 'react';
import './Admin.modules.css';
import { postManagers, postStaff } from '../../services/adminService';

export function AdminHome() {
    const [playersFormValues, setPlayersFormValues] = useState({})
    const [teamsFormValues, setTeamsFormValues] = useState({})
    const [managersFormValues, setManagersFormValues] = useState({})
    const [staffFormValues, setStaffFormValues] = useState({})
    const [fileName, setFileName] = useState('Няма избран файл');

    // const handlePlayerChange = (e) => {}
    // const handleTeamChange = (e) => {}
    const handleManagersChange = (e) => {
        const { name, value } = e.target;
        setManagersFormValues(previousValues => ({
            ...previousValues,
            [name]: value,
        }));
    }

    const handleManagerFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name || 'Няма избран файл');
            const formData = new FormData();
            formData.append('name', managersFormValues.name);
            formData.append('file', file);
            setManagersFormValues(formData);
        } else {
            setFileName('Няма избран файл');
        }
    };

    const handleStaffChange = (e) => {
        const { name, value } = e.target;
        setStaffFormValues({ [name]: value });
    }

    const onSubmit = async (e, endpoint) => {
        e.preventDefault();

        switch (endpoint) {
            // case 'players':
            //     Object.keys(playerFormData).forEach((key) => {
            //         formData.append(key, playerFormData[key]);
            //     });
            //     break;
            // case 'teams':
            //     Object.keys(teamFormData).forEach((key) => {
            //         formData.append(key, teamFormData[key]);
            //     });
            //     break;
            case 'managers':
                await postManagers(managersFormValues)
                break;
            case 'staff':
                await postStaff(staffFormValues)
                break;
            default:
                return;
        }

    };

    return (
        <>
            <div className="form-container">
                {/* <form className="input-form" onSubmit={(e) => onSubmit(e, 'players')}>
                    <h3>Добави играч</h3>
                    <label>Име<input type="text" name="name" onChange={handlePlayerChange} /></label>
                    <label>Номер<input type="number" name="number" onChange={handlePlayerChange} /></label>
                    <div className="file-input-container">
                        <label className="custom-file-label" htmlFor="file-input">Снимка</label>
                        <input
                            type="file"
                            id="file-input"
                            className="file-input"
                            name="photo"
                            onChange={(e) => handleFileChange(e, setPlayerFormData)}
                        />
                        <span className="file-name"></span>
                    </div>
                    <button type="submit">Добави</button>
                </form>
                <form className="input-form" onSubmit={(e) => onSubmit(e, 'teams')}>
                    <h3>Добави отбор</h3>
                    <label>Име<input type="text" name="teamName" onChange={handleTeamChange} /></label>
                    <div className="file-input-container">
                        <label className="custom-file-label" htmlFor="team-photo-input">Снимка отбор</label>
                        <input
                            type="file"
                            id="team-photo-input"
                            className="file-input"
                            name="teamPhoto"
                            onChange={(e) => handleFileChange(e, setTeamFormData)}
                        />
                        <span className="file-name"></span>
                    </div>
                    <div className="file-input-container">
                        <label className="custom-file-label" htmlFor="team-logo-input">Лого</label>
                        <input
                            type="file"
                            id="team-logo-input"
                            className="file-input"
                            name="teamLogo"
                            onChange={(e) => handleFileChange(e, setTeamFormData)}
                        />
                        <span className="file-name"></span>
                    </div>
                    <button type="submit">Добави</button>
                </form> */}
                <form className="input-form" onSubmit={(e) => onSubmit(e, 'managers')}>
                    <h3>Добави мениджър</h3>
                    <label>Име<input type="text" name="name" value={managersFormValues.name} onChange={handleManagersChange} /></label>
                    <div className="file-input-container">
                        <label className="custom-file-label" htmlFor="manager-photo-input">Снимка</label>
                        <input
                            type="file"
                            id="manager-photo-input"
                            className="file-input"
                            name="file"
                            onChange={(e) => handleManagerFileChange(e, setManagersFormValues)}
                        />
                        <span className="file-name">{fileName}</span>
                    </div>
                    <button type="submit">Добави</button>
                </form>
                <form className="input-form" onSubmit={(e) => onSubmit(e, 'staff')}>
                    <h3>Добави персонал</h3>
                    <label>Име<input type="text" name="name" value={staffFormValues.name} onChange={handleStaffChange} /></label>
                    <button type="submit">Добави</button>
                </form>
            </div>
        </>
    );

}
