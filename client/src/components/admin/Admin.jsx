import { useState } from 'react';
import './Admin.modules.css'
import { getPlayers, getMatches, getTeams, getStaff } from '../../services/adminService';

export function Admin () {
    const [data, setData] = useState([]);
    const [headers, setHeaders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const fetchData = async (endpoint, headers) => {
        try {
            const response = await endpoint();
            setData(response);
            setHeaders(headers);
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
                return <img src={item.image || item.logo_image} alt="image" />;
            case 'Номер':
                return item.player_number || '';
            case 'Име':
                return item.name || item.team_name || item.manager_name || '';
            case 'Отборна снимка':
                return <img src={item.team_image} alt="team image" />;
            case 'Позиция':
                return item.position_name
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

    return (
        <div className='main'>
            <div className="side-header">
                <div className='overlay'>
                    <a onClick={(e) => { e.preventDefault(); fetchData(getPlayers, ['Снимка', 'Номер', 'Име', 'Позиция']) }}><img src="soccer-player.png" alt="players" /></a>
                    <h1>играчи</h1>
                </div>
                <div className='overlay'>
                    <a onClick={(e) => { e.preventDefault(); fetchData(getTeams, ['Снимка', 'Име', 'Отборна снимка']) }}><img src="football-club.png" alt="teams" /></a>
                    <h1>отбори</h1>
                </div>
                <div className='overlay'>
                    <a onClick={(e) => { e.preventDefault(); fetchData(getMatches, ['Date', 'Location']) }}><img src="penalty-kick.png" alt="matches" /></a>
                    <h1>мачове</h1>
                </div>
                <div className='overlay'>
                    <a onClick={(e) => { e.preventDefault(); fetchData(getStaff, ['Снимка', 'Име']) }}><img src="team.png" alt="staff" /></a>
                    <h1>персонал</h1>
                </div>
            </div>
            <div className='main-table'>
                <table>
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
    );
}
