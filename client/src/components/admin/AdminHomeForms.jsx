import { useState } from 'react';
import './Admin.modules.css';
import { postManagers, postPlayers, postStaff, postTeams } from '../../services/adminService';

export function AdminForms() {
    const [playersFormValues, setPlayersFormValues] = useState({ fileName: 'Няма избран файл' })
    const [teamsFormValues, setTeamsFormValues] = useState({ teamPhotoFileName: 'Няма избран файл', teamLogoFileName: 'Няма избран файл' })
    const [managersFormValues, setManagersFormValues] = useState({ fileName: 'Няма избран файл' })
    const [staffFormValues, setStaffFormValues] = useState({})

    const handlePlayerChange = (e) => {
        const { name, value } = e.target;
        setPlayersFormValues({
            ...playersFormValues,
            [name]: value
        })
    }

    const handlePlayersFileChange = (e) => {
        const { name, files } = e.target;
        setPlayersFormValues(prevState => ({
            ...prevState,
            [name]: files[0],
            fileName: files[0]?.name || 'Няма избран файл'
        }));

        const formData = new FormData();
        formData.append('name', playersFormValues.name);
        formData.append('number', playersFormValues.number);
        formData.append('photo', playersFormValues.photo);
    }

    const handleTeamChange = (e) => {
        setTeamsFormValues({
            ...teamsFormValues,
            teamName: e.target.value,
        });
    };

    const handleTeamsFileChange = (e) => {
        const { name, files } = e.target;
        setTeamsFormValues(prevState => ({
            ...prevState,
            [name]: files[0],
            [`${name}FileName`]: files[0]?.name || 'Няма избран файл'
        }));

        const formData = new FormData();
        formData.append('teamName', teamsFormValues.teamName);
        formData.append('teamPhoto', teamsFormValues.teamPhoto);
        formData.append('teamLogo', teamsFormValues.teamLogo);

        console.log(teamsFormValues)

    };

    const handleManagersChange = (e) => {
        const { name, value } = e.target;
        setManagersFormValues(previousValues => ({
            ...previousValues,
            [name]: value,
        }));
    }

    const handleManagerFileChange = (e) => {
        const { name, files } = e.target;
        setManagersFormValues(prevState => ({
            ...prevState,
            [name]: files[0],
            fileName: files[0]?.name || 'Няма избран файл'
        }));

        const formData = new FormData();
        formData.append('file', managersFormValues.file);
    };

    const handleStaffChange = (e) => {
        const { name, value } = e.target;
        setStaffFormValues({ [name]: value });
    }

    const onSubmit = async (e, endpoint) => {
        e.preventDefault();

        switch (endpoint) {
            case 'players':
                postPlayers(playersFormValues)
                break;
            case 'teams':
                await postTeams(teamsFormValues)
                break;
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
                <form className="input-form" onSubmit={(e) => onSubmit(e, 'players')}>
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
                            onChange={(e) => handlePlayersFileChange(e, setPlayersFormValues)}
                        />
                        <span className="file-name">{playersFormValues.fileName}</span>
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
                            onChange={(e) => handleTeamsFileChange(e, setTeamsFormValues)}
                        />
                        <span className="file-name">{teamsFormValues.teamPhotoFileName}</span>
                    </div>
                    <div className="file-input-container">
                        <label className="custom-file-label" htmlFor="team-logo-input">Лого</label>
                        <input
                            type="file"
                            id="team-logo-input"
                            className="file-input"
                            name="teamLogo"
                            onChange={(e) => handleTeamsFileChange(e, setTeamsFormValues)}
                        />
                        <span className="file-name">{teamsFormValues.teamLogoFileName}</span>
                    </div>
                    <button type="submit">Добави</button>
                </form>
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
                        <span className="file-name">{managersFormValues.fileName}</span>
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
