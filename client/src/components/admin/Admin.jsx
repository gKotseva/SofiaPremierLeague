import { useState } from 'react';
import './Admin.modules.css'
import { getPlayers, getMatches, getTeams, getManagers, getStaff } from '../../services/adminService';
import ImageModal from '../modals/ImageModal';
import { Link } from 'react-router-dom'



export function Admin () {
    const [data, setData] = useState([]);
    const [headers, setHeaders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [dataType, setDataType] = useState('');
    const [isModalOpen, setModalOpen] = useState(false)
    const [modalPath, setModalPath] = useState('')

    const fetchData = async (endpoint, headers, type) => {
        try {
            const response = await endpoint();
            setData(response);
            setHeaders(headers);
            setDataType(type)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const getCellContent = (item, header) => {
        switch (header) {
            case 'Снимка':
                return <Link onClick={() => openModal(item.logo_image || item.image || 'image.png')}><img src={item.image || item.logo_image || 'image.png'} alt="image" /></Link>;
            case 'Номер':
                return item.player_number || '';
            case 'Име':
                return item.name || item.team_name || item.manager_name || '';
            case 'Отборна снимка':
                return <Link onClick={() => openModal(item.team_image || 'image.png')}><img src={item.team_image || 'image.png'} alt="team image" /></Link>;
            case 'Позиция':
                return item.position_name;
            case 'Отбори':
                return item.teams
            default:
                return item[header.toLowerCase()] || '';
        }
    };

    const renderPagination = () => {
        const pageNumbers = [];
        const totalPages = Math.ceil(data.length / itemsPerPage);

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pageNumbers.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage > totalPages - 3) {
                pageNumbers.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }

        return pageNumbers.map((number, index) => (
            <button
                key={index}
                onClick={() => paginate(number)}
                disabled={number === '...'}
                className={number === currentPage ? 'active' : ''}
            >
                {number}
            </button>
        ));
    };

    const openModal = (path) => {
        setModalPath(path)
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false);
      };


    return (
        <>
        <div className='main'>
            <div className="side-header">
                <div className='overlay'>
                    <a onClick={(e) => { e.preventDefault(); fetchData(getPlayers, ['Снимка', 'Номер', 'Име', 'Позиция', 'Отбори'], 'players') }}><img src="soccer-player.png" alt="players" /></a>
                    <h1>играчи</h1>
                </div>
                <div className='overlay'>
                    <a onClick={(e) => { e.preventDefault(); fetchData(getTeams, ['Снимка', 'Име', 'Отборна снимка'], 'teams') }}><img src="football-club.png" alt="teams" /></a>
                    <h1>отбори</h1>
                </div>
                <div className='overlay'>
                    <a onClick={(e) => { e.preventDefault(); fetchData(getMatches, ['Date', 'Location'], 'matches') }}><img src="penalty-kick.png" alt="matches" /></a>
                    <h1>мачове</h1>
                </div>
                <div className='overlay'>
                    <a onClick={(e) => { e.preventDefault(); fetchData(getManagers, ['Снимка', 'Име'], 'managers') }}><img src="team.png" alt="staff" /></a>
                    <h1>мениджъри</h1>
                </div>
                <div className='overlay'>
                    <a onClick={(e) => { e.preventDefault(); fetchData(getStaff, ['Име'], 'staff') }}><img src="referee.png" alt="staff" /></a>
                    <h1>персонал</h1>
                </div>
            </div>
            <div className='main-table'>
                <table className={`table-${dataType}`}>
                    <thead>
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item, index) => (
                            <tr key={index}>
                                {headers.map((header, headerIndex) => (
                                    <td key={headerIndex}>{getCellContent(item, header)}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='pagination'>
                    {renderPagination()}
                </div>
            </div>
        </div>
        <ImageModal isOpen={isModalOpen} onClose={closeModal} path={modalPath}/>
        </>
    );
    
}
