import { useState } from 'react';
import './Admin.modules.css';
import { postAwards, postLeagues, postManagers, postPlayers, postSeasons, postStaff, postTeams } from '../../services/adminService';
import { FormSelector } from './AdminHomeFormSelector';
import AdminFormModal from '../modals/AdminFormModal';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function AdminForms() {
    const [isFormSelectorOpen, setIsFormSelectorOpen] = useState(true);
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [selectedForm, setSelectedForm] = useState(null);

    const [playersFormValues, setPlayersFormValues] = useState({ fileName: 'Няма избран файл' });
    const [teamsFormValues, setTeamsFormValues] = useState({ teamPhotoFileName: 'Няма избран файл', teamLogoFileName: 'Няма избран файл' });
    const [managersFormValues, setManagersFormValues] = useState({ fileName: 'Няма избран файл' });
    const [awardsFormValues, setAwardsFormValues] = useState({ fileName: 'Няма избран файл' });
    const [staffFormValues, setStaffFormValues] = useState({});
    const [leagueFormValues, setLeagueFormValues] = useState({});
    const [seasonFormValues, setSeasonFormValues] = useState({});

    const handleFormSelection = (form) => {
        setSelectedForm(form);
        setIsFormSelectorOpen(false); 
        setIsFormModalOpen(true);
    };

    const handleFormModalClose = () => {
        setIsFormModalOpen(false);
        setIsFormSelectorOpen(true);
    };

    const handleAwardChange = (e) => {
        const { name, value } = e.target;
        setAwardsFormValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleAwardsFileChange = (e) => {
        const { name, files } = e.target;

        setAwardsFormValues((prevState) => ({
            ...prevState,
            [name]: files[0],
            fileName: files[0]?.name || 'Няма избран файл',
            formName: selectedForm,
        }));
    }

    const handlePlayerChange = (e) => {
        const { name, value } = e.target;
        setPlayersFormValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handlePlayersFileChange = (e) => {
        const { name, files } = e.target;
        setPlayersFormValues((prevState) => ({
            ...prevState,
            [name]: files[0],
            fileName: files[0]?.name || 'Няма избран файл',
        }));
    };

    const handleTeamChange = (e) => {
        setTeamsFormValues((prevState) => ({
            ...prevState,
            teamName: e.target.value,
        }));
    };

    const handleTeamsFileChange = (e) => {
        const { name, files } = e.target;
        setTeamsFormValues((prevState) => ({
            ...prevState,
            [name]: files[0],
            [`${name}FileName`]: files[0]?.name || 'Няма избран файл',
        }));
    };

    const handleManagersChange = (e) => {
        const { name, value } = e.target;
        setManagersFormValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleManagerFileChange = (e) => {
        const { name, files } = e.target;
        setManagersFormValues((prevState) => ({
            ...prevState,
            [name]: files[0],
            fileName: files[0]?.name || 'Няма избран файл',
        }));
    };

    const handleStaffChange = (e) => {
        const { name, value } = e.target;
        setStaffFormValues({ [name]: value });
    };

    const handleLeagueChange = (e) => {
        const { name, value } = e.target;
        setLeagueFormValues({ [name]: value });
    };

    const handleSeasonChange = (e) => {
        const { name, value } = e.target;
        setSeasonFormValues({ [name]: value });
    };

    const onSubmit = async (e, endpoint) => {
        e.preventDefault();

        switch (endpoint) {
            case 'players':
                try {
                    if (!playersFormValues.name || !playersFormValues.number){
                       return toast.error('Полетата "име" и "номер" са задължителни!')
                    }

                    await postPlayers(playersFormValues);
                    toast.success('Добавено успешно!')

                } catch (error){
                    toast.error(error)
                }
                break;
            case 'teams':
                try {
                    if (!teamsFormValues.teamName){
                       return toast.error('Полето "име" е задължително!')
                    }

                    await postTeams(teamsFormValues);
                    toast.success('Добавено успешно!')
                
                } catch (error){
                    toast.error(error)
                }
                break;
            case 'managers':
                try {
                    if (!managersFormValues.name){
                       return toast.error('Полето "име" е задължително!')
                    }

                    await postManagers(managersFormValues);
                    toast.success('Добавено успешно!')
                
                } catch (error){
                    toast.error(error)
                }
                break;
            case 'staff':
                try {
                    if (!staffFormValues.name){
                       return toast.error('Полето "име" е задължително!')
                    }

                    await postStaff(staffFormValues);
                    toast.success('Добавено успешно!')
                
                } catch (error){
                    toast.error(error)
                }
                
                break;
            case 'leagues':
                try {
                    if (!leagueFormValues.name){
                       return toast.error('Полето "име" е задължително!')
                    }

                    await postLeagues(leagueFormValues);
                    toast.success('Добавено успешно!')
                
                } catch (error){
                    toast.error(error)
                }
                break;
            case 'seasons':
                try {
                    if (!seasonFormValues.name){
                       return toast.error('Полето "име" е задължително!')
                    }

                    await postSeasons(seasonFormValues);
                    toast.success('Добавено успешно!')
                
                } catch (error){
                    toast.error(error)
                }
                break;
            case 'award':
                try {
                    if (!awardsFormValues.name){
                       return toast.error('Полето "име" е задължително!')
                    }

                    await postAwards(awardsFormValues)
                    toast.success('Добавено успешно!')
                
                } catch (error){
                    toast.error(error)
                }
                break;
            default:
                return;
        }
    };

    return (
        <>
            {isFormSelectorOpen && <FormSelector handleFormSelection={handleFormSelection} />}
            <AdminFormModal isOpen={isFormModalOpen} onClose={handleFormModalClose}>
                {selectedForm === 'players' && (
                    <form className="input-form" onSubmit={(e) => onSubmit(e, 'players')}>
                        <h3>Добави играч</h3>
                        <label>Име<span>*</span><input type="text" name="name" onChange={handlePlayerChange} /></label>
                        <label>Номер<span>*</span><input type="number" name="number" onChange={handlePlayerChange} /></label>
                        <div className="file-input-container">
                            <label className="custom-file-label" htmlFor="file-input">Снимка</label>
                            <input
                                type="file"
                                id="file-input"
                                className="file-input"
                                name="photo"
                                onChange={handlePlayersFileChange}
                            />
                            <span className="file-name">{playersFormValues.fileName}</span>
                        </div>
                        <button type="submit">Добави</button>
                    </form>
                )}
                {selectedForm === 'teams' && (
                    <form className="input-form" onSubmit={(e) => onSubmit(e, 'teams')}>
                        <h3>Добави отбор</h3>
                        <label>Име<span>*</span><input type="text" name="teamName" onChange={handleTeamChange} /></label>
                        <div className="file-input-container">
                            <label className="custom-file-label" htmlFor="team-photo-input">Снимка отбор</label>
                            <input
                                type="file"
                                id="team-photo-input"
                                className="file-input"
                                name="teamPhoto"
                                onChange={handleTeamsFileChange}
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
                                onChange={handleTeamsFileChange}
                            />
                            <span className="file-name">{teamsFormValues.teamLogoFileName}</span>
                        </div>
                        <button type="submit">Добави</button>
                    </form>
                )}
                {selectedForm === 'managers' && (
                    <form className="input-form" onSubmit={(e) => onSubmit(e, 'managers')}>
                        <h3>Добави мениджър</h3>
                        <label>Име<span>*</span><input type="text" name="name" value={managersFormValues.name} onChange={handleManagersChange} /></label>
                        <div className="file-input-container">
                            <label className="custom-file-label" htmlFor="manager-photo-input">Снимка</label>
                            <input
                                type="file"
                                id="manager-photo-input"
                                className="file-input"
                                name="file"
                                onChange={handleManagerFileChange}
                            />
                            <span className="file-name">{managersFormValues.fileName}</span>
                        </div>
                        <button type="submit">Добави</button>
                    </form>
                )}
                {selectedForm === 'staff' && (
                    <form className="input-form" onSubmit={(e) => onSubmit(e, 'staff')}>
                        <h3>Добави персонал</h3>
                        <label>Име<span>*</span><input type="text" name="name" value={staffFormValues.name} onChange={handleStaffChange} /></label>
                        <button type="submit">Добави</button>
                    </form>
                )}
                {selectedForm === 'leagues' && (
                    <form className="input-form" onSubmit={(e) => onSubmit(e, 'leagues')}>
                        <h3>Добави лига</h3>
                        <label>Име<span>*</span><input type="text" name="name" value={leagueFormValues.name} onChange={handleLeagueChange} /></label>
                        <button type="submit">Добави</button>
                    </form>
                )}
                {selectedForm === 'seasons' && (
                    <form className="input-form" onSubmit={(e) => onSubmit(e, 'seasons')}>
                        <h3>Добави сезон</h3>
                        <label>Име<span>*</span><input type="text" name="name" value={seasonFormValues.name} onChange={handleSeasonChange} /></label>
                        <button type="submit">Добави</button>
                    </form>
                )}
                {(selectedForm === 'ARABESK' || selectedForm === 'CAIRO') && (
                    <form className="input-form" onSubmit={(e) => onSubmit(e, 'award', selectedForm)}>
                        <h3>Добави в {selectedForm}</h3>
                        <label>Име<span>*</span><input type="text" name="name" value={awardsFormValues.name} onChange={handleAwardChange} /></label>
                        <div className="file-input-container">
                            <label className="custom-file-label" htmlFor="award-photo-input">Снимка</label>
                            <input
                                type="file"
                                id="award-photo-input"
                                className="file-input"
                                name="awardFile"
                                onChange={handleAwardsFileChange}
                            />
                            <span className="file-name">{awardsFormValues.fileName}</span>
                        </div>
                        <button type="submit">Добави</button>
                    </form>
                )}
                {(selectedForm === 'SELECT' || selectedForm === 'KERELSKI' || selectedForm === 'GRIPSOCKS' || selectedForm === 'VR7 SERVICES' || selectedForm === 'Barber Shop Marty') && (
                    <form className="input-form" onSubmit={(e) => onSubmit(e, 'award', selectedForm)}>
                        <h3>Добави в {selectedForm}</h3>
                        <label>Име<span>*</span><input type="text" name="name" value={awardsFormValues.name} onChange={handleAwardChange} /></label>
                        <label>Отбор<span>*</span><input type="text" name="teamName" value={awardsFormValues.teamName} onChange={handleAwardChange} /></label>
                        <div className="file-input-container">
                            <label className="custom-file-label" htmlFor="award-photo-input">Снимка</label>
                            <input
                                type="file"
                                id="award-photo-input"
                                className="file-input"
                                name="awardFile"
                                onChange={handleAwardsFileChange}
                            />
                            <span className="file-name">{awardsFormValues.fileName}</span>
                        </div>
                        <button type="submit">Добави</button>
                    </form>
                )}
            </AdminFormModal>
        </>
    );
}
